#!/usr/bin/env python3

"""
THE THIRD PLACE — MD-004 integrity check

Checks the MD-004 records themselves (third_place_sync_validator.py checks
MD-004 against the other documents).

Structure (always):
    ERROR  an Equipment ID declared twice
    ERROR  an ID of an unknown shape, or in the wrong Domain file
    ERROR  Status outside Owned / Essential / Candidate / Upgrade; a record
           without Status that is neither Retired nor Vacant (OP-010 Part A)
    ERROR  Parent / Child Components not matching in both directions
    ERROR  Candidate without Brand and Product = Unconfirmed, or the reverse
    WARN   Price not starting with ¥<amount>
    WARN   Retired not written as "Retired（Reason）. YYYY-MM-DD." (OP-010)
    WARN   an Example tree in the entry file that differs from the records
    WARN   Quantity of 2 or more whose Price does not say 合計 (total)
           (an ERROR when the record is changed in this change; see below)

Change (with --base-ref <git ref>; compares the working tree with that ref —
in a pull request, its base commit):
    ERROR  a record changed in Brand / Product / Status / Color / Material /
           Graphic Attribute / Industrial Attribute / Price / Parent /
           Child Components / Quantity (or added / removed), but the entry
           file's Version did not go up (OP-008 §18.2)
    ERROR  the Version went up but Version History has no section for it
    ERROR  a changed record with Quantity of 2 or more whose Price does not
           say 合計
    WARN   a changed ID that the new Version's history section never names
           (ranges such as FIR-004〜FIR-042 count)

The check never modifies source documents.

Exit codes:
    0 = PASS (no errors; warnings may still be printed)
    1 = Validation failure (one or more errors)
    2 = Configuration / input error

Usage:
    python3 scripts/md004_integrity_check.py --md004 MD/MD-004
    python3 scripts/md004_integrity_check.py --md004 MD/MD-004 --base-ref origin/main
"""

from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))
import md004_records as md  # noqa: E402

ID_SHAPE_RE = re.compile(r"^[A-Z]{3}-(?:\d{3}[a-z]?|\d{2}_\d+[a-z])$")
STATUSES = {"Owned", "Essential", "Candidate", "Upgrade"}
RETIRED_RE = re.compile(
    r"^Retired（(?:Merged|Transferred|Sold|Given|Discarded)）\.\s*\d{4}-\d{2}-\d{2}\."
)
PRICE_RE = re.compile(r"^¥[\d,]+")
CHILD_RE = re.compile(r"^-\s*([A-Z]{3}-[0-9A-Za-z_]+)")
ID_IN_TEXT_RE = re.compile(r"(?<![A-Za-z0-9])([A-Z]{3})-(\d+)(?![0-9A-Za-z_])")
ID_RANGE_RE = re.compile(
    r"(?<![A-Za-z0-9])([A-Z]{3})-(\d+)\s*[〜~～–-]\s*(?:([A-Z]{3})-)?(\d+)"
)

# Fields whose change counts as a change of the record (OP-008 §18.2).
CHANGE_FIELDS = (
    "Brand",
    "Product",
    "Status",
    "Color",
    "Material",
    "Graphic Attribute",
    "Industrial Attribute",
    "Price",
    "Parent",
    "Child Components",
    "Quantity",
)


def child_ids(record: md.Record) -> list[str]:
    return [m.group(1) for line in record.fields.get("Child Components", [])
            if (m := CHILD_RE.match(line))]


def parent_id(record: md.Record) -> str | None:
    value = record.first("Parent")
    if value is None:
        return None
    token = re.match(r"[A-Z]{3}-[0-9A-Za-z_]+", value)
    return token.group(0) if token else value


def quantity(record: md.Record) -> int | None:
    value = record.first("Quantity")
    match = re.match(r"\d+", value) if value else None
    return int(match.group(0)) if match else None


def quantity_needs_total(record: md.Record) -> bool:
    count = quantity(record)
    if count is None or count < 2:
        return False
    return "合計" not in " ".join(record.fields.get("Price", []))


# ============================================================
# Structure checks
# ============================================================

def check_structure(reg: md.Registry) -> tuple[list[str], list[str]]:
    errors: list[str] = []
    warnings: list[str] = []
    records = reg.records

    for record_id, first_file, second_file in reg.duplicates:
        errors.append(
            f"{record_id}: declared twice ({first_file}, {second_file})"
        )

    for record in records.values():
        rid = record.id
        prefix = md.file_prefix(record.file)

        if not ID_SHAPE_RE.match(rid):
            errors.append(f"{rid}: unknown Equipment ID shape")
        if prefix is None or not rid.startswith(prefix + "-"):
            errors.append(
                f"{rid}: belongs to another Domain than its file {record.file}"
            )

        status = record.first("Status")
        if status is None:
            lead = record.lead
            if not (lead.startswith("Retired") or lead.startswith("Vacant")):
                errors.append(
                    f"{rid}: no Status, and not written as Retired or Vacant"
                )
            elif lead.startswith("Retired") and not RETIRED_RE.match(lead):
                warnings.append(
                    f"{rid}: Retired is not in the OP-010 form "
                    "'Retired（Reason）. YYYY-MM-DD.'"
                )
        elif status not in STATUSES:
            errors.append(
                f"{rid}: Status '{status}' is not one of "
                f"{' / '.join(sorted(STATUSES))}"
            )

        brand = (record.first("Brand") or "").strip()
        product = (record.first("Product") or "").strip()
        unconfirmed = [brand == "Unconfirmed", product == "Unconfirmed"]
        if status == "Candidate" and not all(unconfirmed):
            errors.append(
                f"{rid}: Candidate must have Brand and Product = Unconfirmed "
                f"(Brand '{brand}', Product '{product}')"
            )
        if status is not None and status != "Candidate" and any(unconfirmed):
            errors.append(
                f"{rid}: Brand / Product = Unconfirmed is only for Candidate "
                f"(Status {status})"
            )

        price = record.first("Price")
        if price is not None and not PRICE_RE.match(price):
            warnings.append(f"{rid}: Price does not start with ¥<amount>: {price}")

        # Parent -> parent exists and lists this ID
        parent = parent_id(record)
        if parent is not None:
            if parent in records:
                if rid not in child_ids(records[parent]):
                    errors.append(
                        f"{rid}: Parent is {parent}, which does not list it "
                        "in Child Components"
                    )
            elif not parent.lower().startswith("pending"):
                errors.append(f"{rid}: Parent {parent} does not exist")

        # Child Components -> child exists and names this ID as Parent
        for child in child_ids(record):
            if child not in records:
                errors.append(f"{rid}: Child {child} does not exist")
            elif parent_id(records[child]) != rid:
                errors.append(
                    f"{rid}: lists {child} as a Child, but {child}'s Parent is "
                    f"{parent_id(records[child]) or 'empty'}"
                )

        if quantity_needs_total(record):
            warnings.append(
                f"{rid}: Quantity {quantity(record)} but Price does not say "
                f"合計 (Price must be the total for Quantity of 2 or more): "
                f"{record.first('Price')}"
            )

    warnings.extend(check_example_tree(reg))
    return errors, warnings


def check_example_tree(reg: md.Registry) -> list[str]:
    """Parent / Child 'Example' tree in the entry file must match the records."""
    text = reg.entry_text
    start = text.find("# Parent / Child Rules")
    if start < 0:
        return []
    end = text.find("\n# ", start + 1)
    section = text[start:end if end > 0 else len(text)]

    tree: dict[str, list[str]] = {}
    current: str | None = None
    for line in section.splitlines():
        stripped = line.strip()
        if re.fullmatch(r"[A-Z]{3}-[0-9A-Za-z_]+", stripped):
            current = stripped
            tree[current] = []
        elif stripped.startswith("└") and current:
            tree[current].append(stripped.lstrip("└ ").strip())

    warnings = []
    for parent, children in tree.items():
        record = reg.records.get(parent)
        actual = child_ids(record) if record else None
        if actual != children:
            warnings.append(
                f"Example tree in the entry file: {parent} -> {children} "
                f"differs from the records ({actual})"
            )
    return warnings


# ============================================================
# Change checks
# ============================================================

def changed_ids(base: md.Registry, head: md.Registry) -> list[str]:
    changed = []
    for rid in sorted(set(base.records) | set(head.records)):
        before, after = base.records.get(rid), head.records.get(rid)
        if before is None or after is None:
            changed.append(rid)
        elif any(
            before.fields.get(f, []) != after.fields.get(f, [])
            for f in CHANGE_FIELDS
        ) or before.lead != after.lead:
            changed.append(rid)
    return changed


def history_section(entry_text: str, version: str) -> str | None:
    match = re.search(
        r"^## Version " + re.escape(version) + r"\b(.*?)(?=^## |\Z)",
        entry_text,
        re.S | re.M,
    )
    return match.group(1) if match else None


def mentioned_ids(section: str) -> set[str]:
    mentioned = {f"{p}-{n}" for p, n in ID_IN_TEXT_RE.findall(section)}
    for prefix, low, prefix2, high in ID_RANGE_RE.findall(section):
        if prefix2 and prefix2 != prefix:
            continue
        width = len(low)
        for number in range(int(low), int(high) + 1):
            mentioned.add(f"{prefix}-{number:0{width}d}")
    return mentioned


def check_change(
    base: md.Registry, head: md.Registry
) -> tuple[list[str], list[str], list[str]]:
    errors: list[str] = []
    warnings: list[str] = []

    changed = changed_ids(base, head)
    if not changed:
        return errors, warnings, changed

    shown = ", ".join(changed[:8]) + (" ..." if len(changed) > 8 else "")
    base_v, head_v = base.entry_version, head.entry_version

    if base_v is None or head_v is None:
        errors.append("MD-004 entry file has no readable Version")
    elif md.version_tuple(head_v) <= md.version_tuple(base_v):
        errors.append(
            f"{len(changed)} MD-004 record(s) changed ({shown}) but the entry "
            f"file's Version did not go up ({base_v} -> {head_v}); "
            "update the Version and Version History (OP-008 §18.2)"
        )
    else:
        section = history_section(head.entry_text, head_v)
        if section is None:
            errors.append(
                f"Version {head_v} has no '## Version {head_v}' section in "
                "the Version History"
            )
        else:
            named = mentioned_ids(section)
            missing = [rid for rid in changed if rid not in named]
            if missing:
                warnings.append(
                    f"Version {head_v} history does not name {len(missing)} "
                    f"changed ID(s): {', '.join(missing[:12])}"
                    + (" ..." if len(missing) > 12 else "")
                )

    for rid in changed:
        record = head.records.get(rid)
        if record is not None and quantity_needs_total(record):
            errors.append(
                f"{rid}: changed, with Quantity {quantity(record)}, but Price "
                f"does not say 合計: {record.first('Price')}"
            )

    return errors, warnings, changed


# ============================================================

def main() -> int:
    parser = argparse.ArgumentParser(description="THE THIRD PLACE MD-004 integrity check")
    parser.add_argument("--md004", required=True,
                        help="Path to MD-004 (the MD/MD-004 folder, or a single file)")
    parser.add_argument("--base-ref",
                        help="Git ref to compare with (a PR's base commit). "
                             "Without it only the structure checks run.")
    args = parser.parse_args()

    try:
        head = md.load_path(Path(args.md004))
        base = md.load_git(args.base_ref) if args.base_ref else None
    except Exception as error:  # noqa: BLE001
        print("CONFIG ERROR")
        print(str(error))
        return 2

    errors, warnings = check_structure(head)
    changed: list[str] = []
    if base is not None:
        change_errors, change_warnings, changed = check_change(base, head)
        errors.extend(change_errors)
        warnings.extend(change_warnings)

    print("THE THIRD PLACE — MD-004 integrity check")
    print("========================================")
    print(f"MD-004 records: {len(head.records)} (Version {head.entry_version})")
    if base is not None:
        print(f"Compared with: {args.base_ref} (Version {base.entry_version}); "
              f"changed records: {len(changed)}")
    else:
        print("Change checks: skipped (no --base-ref)")
    print()

    if warnings:
        print(f"WARNINGS — {len(warnings)} advisory finding(s) (does not fail)")
        print()
        for index, warning in enumerate(warnings, start=1):
            print(f"{index}. {warning}")
        print()

    if errors:
        print(f"FAIL — {len(errors)} integrity error(s)")
        print()
        for index, error in enumerate(errors, start=1):
            print(f"{index}. {error}")
        return 1

    print("PASS — MD-004 integrity checks passed.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
