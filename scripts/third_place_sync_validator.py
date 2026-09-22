#!/usr/bin/env python3

"""
THE THIRD PLACE — SSOT Sync Validator

Synchronization authority:
    BR-002 <-> BR-003

Operational registry:
    MD-004

Document roles:
    BR-002 = Coffee System Decision Authority
    BR-003 = Acquisition / Purchase Authority
    MD-004 = Purchased / Owned / Operational Equipment Registry

Required synchronization:
    BR-002 -> BR-003 : REQUIRED
    BR-003 -> BR-002 : REQUIRED

Not required:
    BR-002 -> MD-004
    MD-004 -> BR-002

Reason:
    BR-002 may contain equipment that has not yet been purchased.
    MD-004 contains only equipment that has actually been purchased,
    owned, and entered into operational use.

The validator never modifies source documents.

Exit codes:
    0 = PASS
    1 = Validation failure
    2 = Configuration / input error
"""

from __future__ import annotations

import argparse
import re
from dataclasses import dataclass
from pathlib import Path


@dataclass(frozen=True)
class Record:
    document: str
    section: str
    brand: str
    model: str
    status: str | None = None


# ============================================================
# Utility
# ============================================================

def read_text(path: Path) -> str:
    if not path.exists():
        raise FileNotFoundError(f"File not found: {path}")
    return path.read_text(encoding="utf-8")


def normalize(value: str) -> str:
    value = value.strip()
    value = value.replace("　", " ")
    value = value.replace("×", "x")
    value = re.sub(r"\s+", " ", value)
    return value.lower()


def normalize_status(value: str | None) -> str:
    return normalize(value or "")


def strip_quantity_suffix(model: str) -> str:
    """
    Strip a trailing quantity marker such as "×2" or "x 2" from a
    model name. Quantity is tracked separately (BR-003's Quantity
    field), so a quantity suffix baked into a BR-002 table cell
    (e.g. "FIKA12 ×2") must not prevent matching the same
    equipment recorded without it (e.g. BR-003's "FIKA12").
    """

    return re.sub(r"\s*[×x]\s*\d+\s*$", "", model, flags=re.IGNORECASE)


def equipment_key(brand: str, model: str) -> tuple[str, str]:
    return normalize(brand), normalize(strip_quantity_suffix(model))


# ============================================================
# BR-002 Parser
# ============================================================

def parse_br002(text: str) -> list[Record]:
    """
    Parse BR-002 confirmed equipment.

    Primary source:
        Category / Brand / Model / Status tables.

    In addition, BR-002 contains confirmed configuration items
    outside the standard table. Those explicitly confirmed items
    are parsed by parse_br002_confirmed_configuration().

    No equipment is inferred from MD-004 or BR-003.
    """

    records: list[Record] = []
    current_section = ""

    for line in text.splitlines():
        stripped = line.strip()

        if not stripped:
            continue

        if stripped.startswith("#"):
            current_section = stripped.lstrip("#").strip()
            continue

        # ----------------------------------------------------
        # TAB-separated table
        # ----------------------------------------------------

        if "\t" in line:
            cells = [cell.strip() for cell in line.split("\t")]

            if len(cells) < 4:
                continue

            header = [normalize(cell) for cell in cells[:4]]

            if header == [
                "category",
                "brand",
                "model",
                "status",
            ]:
                continue

            category, brand, model, status = cells[:4]

            if normalize_status(status) == "confirmed":
                records.append(
                    Record(
                        document="BR-002",
                        section=category or current_section,
                        brand=brand,
                        model=model,
                        status=status,
                    )
                )

            continue

        # ----------------------------------------------------
        # Markdown pipe table
        # ----------------------------------------------------

        if "|" in line:
            cells = [
                cell.strip()
                for cell in stripped.strip("|").split("|")
            ]

            if len(cells) < 4:
                continue

            header = [normalize(cell) for cell in cells[:4]]

            if header == [
                "category",
                "brand",
                "model",
                "status",
            ]:
                continue

            category, brand, model, status = cells[:4]

            if normalize_status(status) == "confirmed":
                records.append(
                    Record(
                        document="BR-002",
                        section=category or current_section,
                        brand=brand,
                        model=model,
                        status=status,
                    )
                )

    records.extend(
        parse_br002_confirmed_configuration(text)
    )

    return records


def parse_br002_confirmed_configuration(
    text: str,
) -> list[Record]:
    """
    Explicitly recognize confirmed configuration items that are
    stated in BR-002 outside the standard equipment table.

    These are not inferred additions.

    Confirmed configuration currently handled:
        - DAMNGOOD × CATAPULT FACTORY FIKA12 ×2
        - Snow Peak オーロラボトル 1L
        - YETI Yonder 1L
        - Snow Peak 酒筒 Titanium
        - 9Barista Handle for 9Barista Espresso Machine（Walnutオプション）
          (Handle Material Decision: a Confirmed accessory-level
          decision on an already-Confirmed equipment, documented
          as prose rather than a Category/Brand/Model/Status row)
    """

    records: list[Record] = []

    # --------------------------------------------------------
    # FIKA12
    # --------------------------------------------------------

    if re.search(
        r"DAMNGOOD\s*×\s*CATAPULT FACTORY\s+FIKA12\s*×\s*2",
        text,
        flags=re.IGNORECASE,
    ):
        records.append(
            Record(
                document="BR-002",
                section="Latte Cup Configuration",
                brand="DAMNGOOD × CATAPULT FACTORY",
                model="FIKA12",
                status="Confirmed",
            )
        )

    # --------------------------------------------------------
    # Handle Material Decision (9Barista Walnut Handle)
    # --------------------------------------------------------

    if re.search(
        r"Handle Material Decision",
        text,
        flags=re.IGNORECASE,
    ) and re.search(
        r"Walnut仕様.{0,40}正式決定",
        text,
        flags=re.DOTALL,
    ):
        records.append(
            Record(
                document="BR-002",
                section="Handle Material Decision",
                brand="9Barista",
                model="Handle for 9Barista Espresso Machine（Walnutオプション）",
                status="Confirmed",
            )
        )

    # --------------------------------------------------------
    # Water bottles
    # --------------------------------------------------------

    water_items = (
        ("Snow Peak", "オーロラボトル 1L"),
        ("YETI", "Yonder 1L"),
        ("Snow Peak", "酒筒 Titanium"),
    )

    water_section = re.search(
        r"Official Water Bottle Configuration"
        r"(?P<body>.*?)"
        r"(?:Status\s*[：:]\s*CONFIRMED|Status\s*\n\s*CONFIRMED)",
        text,
        flags=re.IGNORECASE | re.DOTALL,
    )

    if water_section:
        body = water_section.group("body")

        for brand, model in water_items:
            if model in body:
                records.append(
                    Record(
                        document="BR-002",
                        section="Water Bottle Configuration",
                        brand=brand,
                        model=model,
                        status="Confirmed",
                    )
                )

    return records


# ============================================================
# BR-003 Parser
# ============================================================

def parse_br003(text: str) -> list[Record]:
    """
    Parse BR-003 acquisition records.

    Expected fields:

        Manufacturer
        Model (or, when the current purchase model has diverged
            from the originally Confirmed one, "BR-002 Model" is
            used instead to preserve the literal BR-002 wording
            for synchronization purposes; "Current Purchase Model"
            is metadata only and never used for comparison)
        Acquisition Status
    """

    records: list[Record] = []

    section = ""

    brand: str | None = None
    model: str | None = None
    status: str | None = None

    def flush() -> None:
        nonlocal brand, model, status

        if brand and model:
            records.append(
                Record(
                    document="BR-003",
                    section=section,
                    brand=brand,
                    model=model,
                    status=status,
                )
            )

        brand = None
        model = None
        status = None

    for line in text.splitlines():
        stripped = line.strip()

        if stripped.startswith("### "):
            flush()
            section = stripped[4:].strip()
            continue

        match = re.match(
            r"^\|\s*(Manufacturer|Model|BR-002 Model|Acquisition Status)"
            r"\s*\|\s*(.*?)\s*\|$",
            stripped,
        )

        if not match:
            continue

        field = match.group(1)
        value = match.group(2).strip()

        if field == "Manufacturer":
            brand = value

        elif field in ("Model", "BR-002 Model"):
            model = value

        elif field == "Acquisition Status":
            status = value

    flush()

    return records


# ============================================================
# MD-004 Parser
# ============================================================

def parse_md004(text: str) -> list[Record]:
    """
    Parse MD-004 only for reporting.

    MD-004 is NOT used as a gate for BR-002/BR-003.

    A product being absent from MD-004 is normal when it has
    not yet been purchased / owned / entered into operation.
    """

    records: list[Record] = []

    current_id = ""
    current_section = ""

    brand: str | None = None
    model: str | None = None
    status: str | None = None

    current_field: str | None = None

    def flush() -> None:
        nonlocal brand, model, status

        if brand and model:
            records.append(
                Record(
                    document="MD-004",
                    section=current_id or current_section,
                    brand=brand,
                    model=model,
                    status=status,
                )
            )

        brand = None
        model = None
        status = None

    for line in text.splitlines():
        stripped = line.strip()

        match = re.match(
            r"^##\s+([A-Z]{3}-\d{3})\s*$",
            stripped,
        )

        if match:
            flush()
            current_id = match.group(1)
            current_field = None
            continue

        if stripped.startswith("#"):
            current_section = stripped.lstrip("#").strip()
            current_field = None
            continue

        if stripped in (
            "**Brand**",
            "**Manufacturer**",
        ):
            current_field = "brand"
            continue

        if stripped in (
            "**Product**",
            "**Model**",
        ):
            current_field = "model"
            continue

        if stripped == "**Status**":
            current_field = "status"
            continue

        if (
            current_field
            and stripped
            and not stripped.startswith("**")
        ):
            if current_field == "brand":
                brand = stripped

            elif current_field == "model":
                model = stripped

            elif current_field == "status":
                status = stripped

            current_field = None

    flush()

    return records


# ============================================================
# Validation
# ============================================================

def check_br002_not_empty(
    br002: list[Record],
) -> list[str]:

    if br002:
        return []

    return [
        "BR-002 parser returned 0 Confirmed Equipment records."
    ]


def check_br002_missing_from_br003(
    br002: list[Record],
    br003: list[Record],
) -> list[str]:
    """
    Every BR-002 Confirmed Equipment must have a BR-003 record.

    This protects against:
        Confirmed decision
            ↓
        missing acquisition record

    Matching is quantity-suffix-insensitive (see
    strip_quantity_suffix) and BR-003 may record the model under
    either "Model" or "BR-002 Model" (see parse_br003).
    """

    acquisition = {
        equipment_key(
            record.brand,
            record.model,
        )
        for record in br003
    }

    errors: list[str] = []

    for record in br002:
        key = equipment_key(
            record.brand,
            record.model,
        )

        if key not in acquisition:
            errors.append(
                "BR-002 Confirmed Equipment missing from BR-003: "
                f"{record.brand} / {record.model}"
            )

    return errors


def check_br003_against_br002(
    br002: list[Record],
    br003: list[Record],
) -> list[str]:
    """
    Every active BR-003 acquisition record must correspond
    to a Confirmed BR-002 equipment.

    Valid statuses:
        Purchase Required
        Included
        Already Owned
        To Be Confirmed

    Exception: "Included" records are, by BR-003's own Acquisition
    Status Policy, accessories bundled with another Confirmed
    equipment ("他のConfirmed Equipmentに付属し、追加購入不要") —
    they are intentionally never given their own BR-002 Confirmed
    row, so they are exempt from this check.
    """

    confirmed = {
        equipment_key(
            record.brand,
            record.model,
        )
        for record in br002
    }

    valid_statuses = {
        "purchase required",
        "included",
        "already owned",
        "to be confirmed",
    }

    errors: list[str] = []

    for record in br003:
        status = normalize_status(record.status)

        if status not in valid_statuses:
            continue

        if status == "included":
            continue

        key = equipment_key(
            record.brand,
            record.model,
        )

        if key not in confirmed:
            errors.append(
                "BR-003 acquisition record has no corresponding "
                "BR-002 Confirmed Equipment: "
                f"{record.brand} / {record.model}"
            )

    return errors


def check_br003_status_values(
    br003: list[Record],
) -> list[str]:
    allowed = {
        "purchase required",
        "included",
        "already owned",
        "to be confirmed",
    }

    errors: list[str] = []

    for record in br003:
        status = normalize_status(record.status)

        if status not in allowed:
            errors.append(
                "BR-003 invalid Acquisition Status: "
                f"{record.brand} / {record.model} "
                f"= {record.status}"
            )

    return errors


def check_br002_duplicates(
    br002: list[Record],
) -> list[str]:
    """
    Only exact duplicate BR-002 records are errors.

    Manufacturer + Model alone is NOT sufficient to call a
    duplicate because separate configuration records may
    legitimately reference the same manufacturer/model.
    """

    errors: list[str] = []

    seen: set[
        tuple[str, str, str]
    ] = set()

    for record in br002:
        key = (
            normalize(record.section),
            normalize(record.brand),
            normalize(record.model),
        )

        if key in seen:
            errors.append(
                "Exact duplicate BR-002 Confirmed record: "
                f"{record.section} / "
                f"{record.brand} / "
                f"{record.model}"
            )
        else:
            seen.add(key)

    return errors


def check_model_drift(
    br002: list[Record],
    br003: list[Record],
) -> list[str]:
    """
    Detect obvious model-name drift when manufacturer names
    are identical.

    The validator does not decide which name is correct.
    """

    errors: list[str] = []

    by_brand: dict[
        str,
        list[Record],
    ] = {}

    for record in br002:
        brand = normalize(record.brand)

        by_brand.setdefault(
            brand,
            [],
        ).append(record)

    for record in br003:
        brand = normalize(record.brand)

        candidates = by_brand.get(
            brand,
            [],
        )

        if not candidates:
            continue

        model = normalize(record.model)

        if any(
            normalize(candidate.model) == model
            for candidate in candidates
        ):
            continue

        for candidate in candidates:
            candidate_model = normalize(
                candidate.model
            )

            if (
                model in candidate_model
                or candidate_model in model
            ):
                errors.append(
                    "Possible model-name drift between "
                    "BR-002 and BR-003: "
                    f"{record.brand}: "
                    f"BR-002='{candidate.model}', "
                    f"BR-003='{record.model}'"
                )
                break

    return errors


# ============================================================
# Main
# ============================================================

def main() -> int:

    parser = argparse.ArgumentParser(
        description=(
            "THE THIRD PLACE "
            "BR-002 / BR-003 Sync Validator"
        )
    )

    parser.add_argument(
        "--md004",
        required=True,
        help="Path to MD-004",
    )

    parser.add_argument(
        "--br002",
        required=True,
        help="Path to BR-002",
    )

    parser.add_argument(
        "--br003",
        required=True,
        help="Path to BR-003",
    )

    args = parser.parse_args()

    try:
        md004 = parse_md004(
            read_text(
                Path(args.md004)
            )
        )

        br002 = parse_br002(
            read_text(
                Path(args.br002)
            )
        )

        br003 = parse_br003(
            read_text(
                Path(args.br003)
            )
        )

    except Exception as error:
        print("CONFIG ERROR")
        print(str(error))
        return 2

    errors: list[str] = []

    # --------------------------------------------------------
    # BR-002 <-> BR-003 is the mandatory synchronization pair.
    # --------------------------------------------------------

    errors.extend(
        check_br002_not_empty(br002)
    )

    errors.extend(
        check_br002_missing_from_br003(
            br002,
            br003,
        )
    )

    errors.extend(
        check_br003_against_br002(
            br002,
            br003,
        )
    )

    errors.extend(
        check_br003_status_values(br003)
    )

    errors.extend(
        check_br002_duplicates(br002)
    )

    errors.extend(
        check_model_drift(
            br002,
            br003,
        )
    )

    # --------------------------------------------------------
    # MD-004 is intentionally NOT used for synchronization.
    # --------------------------------------------------------

    print(
        "THE THIRD PLACE — SSOT Sync Validator"
    )

    print(
        "======================================"
    )

    print(
        "Synchronization Authority:"
    )

    print(
        "  BR-002 <-> BR-003"
    )

    print(
        "Operational Registry:"
    )

    print(
        "  MD-004"
    )

    print()

    print(
        f"MD-004 operational records: "
        f"{len(md004)}"
    )

    print(
        f"BR-002 Confirmed records: "
        f"{len(br002)}"
    )

    print(
        f"BR-003 acquisition records: "
        f"{len(br003)}"
    )

    print()

    if errors:
        print(
            f"FAIL — {len(errors)} "
            "validation error(s)"
        )

        print()

        for index, error in enumerate(
            errors,
            start=1,
        ):
            print(
                f"{index}. {error}"
            )

        return 1

    print(
        "PASS — BR-002 and BR-003 "
        "are synchronized."
    )

    print(
        "MD-004 is treated as the "
        "purchased / operational registry."
    )

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
