#!/usr/bin/env python3

"""
THE THIRD PLACE — Document catalogue check

OP-008 §8 Document Series is the only catalogue of documents (Rule DOC-06).
This check reads that table and compares it with the files and their headers.
Nothing is generated or committed: a list copied out of OP-008 would be a
second source of truth.

ERROR  a catalogued Path that does not exist
ERROR  a document file (DS / OP / DB / MD / BR / CZ / KN) that is not in the
       catalogue (the Domain files of a multi-file document, OP-008 §11.2, are
       part of their entry file and are not listed)
ERROR  a Document ID listed twice; a Path whose file name does not start with
       its Document ID; an Authority or Volatility outside the OP-008 §9 values
ERROR  a file header whose Document ID differs from the catalogue, or whose
       Authority (when it declares one) differs from the catalogue
WARN   a header without a readable Document ID; a Title that is not found in
       the header; a Series whose letters differ from the ID; a Status outside
       the OP-008 §9.2 values; no Authority declared in the header

Header formats differ between documents ("**Document ID**: X", "**Document
ID:** X", "# Document ID" followed by X, ...), so each field is read in all of
these forms, from the first 40 lines only.

With --status-list the script instead prints the MD-004 records by Status
(Owned / Essential / Candidate / Upgrade) as Markdown, for the CI job summary.
It is a view of MD-004 made on demand and is not committed.

Exit codes:
    0 = PASS (no errors; warnings may still be printed)
    1 = Validation failure (one or more errors)
    2 = Configuration / input error

Usage:
    python3 scripts/doc_catalogue_check.py
    python3 scripts/doc_catalogue_check.py --status-list >> "$GITHUB_STEP_SUMMARY"
"""

from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

HERE = Path(__file__).parent
sys.path.insert(0, str(HERE))
import third_place_sync_validator as validator  # noqa: E402

ROOT = HERE.parent
OP008 = ROOT / "OP" / "OP-008_Documentation_System.md"
DOC_DIRS = ("DS", "OP", "DB", "MD", "BR", "CZ", "KN")
AUTHORITIES = {"SSOT", "Standard", "Reference", "Archive"}
VOLATILITIES = {"Static", "Periodic", "Living"}
STATUSES = {"Draft", "Review", "Active", "Archive", "Deprecated"}
HEADER_LINES = 40
STATUS_ORDER = ("Owned", "Essential", "Candidate", "Upgrade")


# ============================================================
# Catalogue (OP-008 §8)
# ============================================================

def read_catalogue(text: str) -> list[dict[str, str]]:
    start = text.index("# 8. Document Series")
    end = text.index("# 9. Document Classification")
    rows = []
    header: list[str] | None = None
    for line in text[start:end].splitlines():
        if not line.startswith("|"):
            continue
        cells = [c.strip() for c in line.strip().strip("|").split("|")]
        if all(re.fullmatch(r":?-{3,}:?", c) for c in cells):
            continue
        if header is None:
            header = cells
            continue
        rows.append(dict(zip(header, cells)))
    required = {"Document ID", "Title", "Path", "Authority", "Volatility"}
    if header is None or not required <= set(header):
        raise ValueError("OP-008 §8 catalogue table not found or columns changed")
    return rows


# ============================================================
# Header fields
# ============================================================

def header_field(lines: list[str], labels: tuple[str, ...]) -> str | None:
    """Value of a header field, in 'Label: value' or 'Label' + next line form."""
    for index, raw in enumerate(lines):
        plain = re.sub(r"[*#_`]", "", raw).strip()
        for label in labels:
            if not re.match(re.escape(label) + r"\s*(?:[:：]|$)", plain, re.I):
                continue
            inline = re.sub(r"^" + re.escape(label) + r"\s*[:：]?\s*", "", plain,
                            flags=re.I).strip()
            if inline:
                return inline
            for following in lines[index + 1:]:
                value = re.sub(r"[*#_`]", "", following).strip()
                if value:
                    return value
            return None
    return None


def check_documents(rows: list[dict[str, str]]) -> tuple[list[str], list[str]]:
    errors: list[str] = []
    warnings: list[str] = []
    listed: dict[str, dict[str, str]] = {}

    for row in rows:
        doc_id = row["Document ID"]
        path = row["Path"].strip("`")

        if doc_id in listed:
            errors.append(f"{doc_id}: listed twice in OP-008 §8")
        listed[doc_id] = row

        if row["Authority"] not in AUTHORITIES:
            errors.append(f"{doc_id}: catalogue Authority '{row['Authority']}' is not "
                          f"one of {' / '.join(sorted(AUTHORITIES))}")
        if row["Volatility"] not in VOLATILITIES:
            errors.append(f"{doc_id}: catalogue Volatility '{row['Volatility']}' is not "
                          f"one of {' / '.join(sorted(VOLATILITIES))}")

        file = ROOT / path
        if not file.is_file():
            errors.append(f"{doc_id}: catalogued Path does not exist: {path}")
            continue
        if not file.name.startswith(doc_id + "_"):
            errors.append(f"{doc_id}: file name '{file.name}' does not start with "
                          f"'{doc_id}_'")

        lines = file.read_text(encoding="utf-8").splitlines()[:HEADER_LINES]

        in_file = header_field(lines, ("Document ID",))
        if in_file is None:
            h1 = next((l for l in lines if l.startswith("# ")), "")
            in_file = doc_id if doc_id in h1 else None
        if in_file is None:
            warnings.append(f"{doc_id}: no readable Document ID in the header of {path}")
        elif in_file.split()[0] != doc_id and not (
            in_file.startswith("# ") and doc_id in in_file
        ):
            errors.append(f"{doc_id}: header of {path} says Document ID '{in_file}'")

        head = "\n".join(lines)
        declared_title = header_field(lines, ("Title", "Document Title"))
        if declared_title is not None:
            if declared_title != row["Title"]:
                warnings.append(f"{doc_id}: header Title '{declared_title}' differs from "
                                f"the catalogue '{row['Title']}'")
        elif row["Title"] not in head:
            warnings.append(f"{doc_id}: Title '{row['Title']}' not found in the header "
                            f"of {path}")

        authority = header_field(lines, ("Authority",))
        if authority is None:
            warnings.append(f"{doc_id}: {path} declares no Authority in its header "
                            f"(catalogue: {row['Authority']})")
        elif authority.split()[0] != row["Authority"]:
            errors.append(f"{doc_id}: header Authority '{authority}' differs from the "
                          f"catalogue '{row['Authority']}'")

        series = header_field(lines, ("Series", "Category"))
        if series is not None and not series.upper().startswith(doc_id.split("-")[0]):
            warnings.append(f"{doc_id}: header Series '{series}' does not match the ID")

        status = header_field(lines, ("Status",))
        if status is not None and status.split()[0] not in STATUSES:
            warnings.append(f"{doc_id}: header Status '{status}' is not one of "
                            f"{' / '.join(sorted(STATUSES))}")

    # Files that exist but are not catalogued
    catalogued = {r["Path"].strip("`") for r in rows}
    folders = {Path(p).parent.name: (ROOT / p).parent for p in catalogued
               if Path(p).parent.name in listed}  # OP-008 §11.2: {SERIES}/{ID}/
    for directory in DOC_DIRS:
        for file in sorted((ROOT / directory).rglob("*.md")):
            rel = file.relative_to(ROOT).as_posix()
            if rel in catalogued:
                continue
            owner = next((i for i, f in folders.items()
                          if f == file.parent and file.name.startswith(i + "_")), None)
            if owner is None:
                errors.append(f"{rel}: document file is not in the OP-008 §8 catalogue")

    return errors, warnings


# ============================================================
# Status list (MD-004), printed on demand
# ============================================================

def status_list(md004: Path) -> str:
    registry = validator.parse_md004_registry(validator.read_md004_text(md004))
    out = ["## MD-004 by Status", "",
           "_Made from MD-004 when this check ran. It is not a document and is not "
           "committed._", ""]
    for status in STATUS_ORDER:
        entries = [e for e in registry.values() if e.status == status]
        out += [f"### {status} ({len(entries)})", "",
                "| ID | Brand | Product |", "|---|---|---|"]
        for e in entries:
            out.append(f"| {e.id} | {e.brand or ''} | {e.product or ''} |")
        out.append("")
    others = [e for e in registry.values() if e.status not in STATUS_ORDER]
    out.append(f"Records without a Status (Retired / Vacant): {len(others)}")
    return "\n".join(out)


def main() -> int:
    parser = argparse.ArgumentParser(description="THE THIRD PLACE document catalogue check")
    parser.add_argument("--status-list", action="store_true",
                        help="print the MD-004 Status lists (Markdown) and exit")
    parser.add_argument("--md004", default=str(ROOT / "MD" / "MD-004"),
                        help="MD-004 folder or file (for --status-list)")
    args = parser.parse_args()

    try:
        if args.status_list:
            print(status_list(Path(args.md004)))
            return 0
        rows = read_catalogue(OP008.read_text(encoding="utf-8"))
    except Exception as error:  # noqa: BLE001
        print("CONFIG ERROR")
        print(str(error))
        return 2

    errors, warnings = check_documents(rows)

    print("THE THIRD PLACE — Document catalogue check")
    print("==========================================")
    print(f"OP-008 §8 catalogue rows: {len(rows)}")
    print()

    if warnings:
        print(f"WARNINGS — {len(warnings)} advisory finding(s) (does not fail)")
        print()
        for index, warning in enumerate(warnings, start=1):
            print(f"{index}. {warning}")
        print()

    if errors:
        print(f"FAIL — {len(errors)} catalogue error(s)")
        print()
        for index, error in enumerate(errors, start=1):
            print(f"{index}. {error}")
        return 1

    print("PASS — OP-008 §8 catalogue and document headers are in step.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
