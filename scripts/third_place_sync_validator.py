#!/usr/bin/env python3

"""
THE THIRD PLACE — SSOT Sync Validator

Synchronization authority:
    PX-004 <-> PX-005

Operational registry:
    TP-004

Document roles:
    PX-004 = Coffee System Decision Authority
    PX-005 = Acquisition / Purchase Authority
    TP-004 = Purchased / Owned / Operational Equipment Registry

Required synchronization:
    PX-004 -> PX-005 : REQUIRED
    PX-005 -> PX-004 : REQUIRED

Not required:
    PX-004 -> TP-004
    TP-004 -> PX-004

Reason:
    PX-004 may contain equipment that has not yet been purchased.
    TP-004 contains only equipment that has actually been purchased,
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
    value = value.replace("\u3000", " ")
    value = value.replace("×", "x")
    value = re.sub(r"\s+", " ", value)
    return value.lower()


def normalize_status(value: str | None) -> str:
    return normalize(value or "")


def equipment_key(brand: str, model: str) -> tuple[str, str]:
    return normalize(brand), normalize(model)


# ============================================================
# PX-004 Parser
# ============================================================

def parse_px004(text: str) -> list[Record]:
    """
    Parse PX-004 confirmed equipment.

    Primary source:
        Category / Brand / Model / Status tables.

    In addition, PX-004 contains confirmed configuration items
    outside the standard table. Those explicitly confirmed items
    are parsed by parse_px004_confirmed_configuration().

    No equipment is inferred from TP-004 or PX-005.
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
                        document="PX-004",
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
                        document="PX-004",
                        section=category or current_section,
                        brand=brand,
                        model=model,
                        status=status,
                    )
                )

    records.extend(
        parse_px004_confirmed_configuration(text)
    )

    return records


def parse_px004_confirmed_configuration(
    text: str,
) -> list[Record]:
    """
    Explicitly recognize confirmed configuration items that are
    stated in PX-004 outside the standard equipment table.

    These are not inferred additions.

    Confirmed configuration currently handled:
        - DAMNGOOD × CATAPULT FACTORY FIKA12 ×2
        - Snow Peak オーロラボトル 1L
        - YETI Yonder 1L
        - Snow Peak 酒筒 Titanium
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
                document="PX-004",
                section="Latte Cup Configuration",
                brand="DAMNGOOD × CATAPULT FACTORY",
                model="FIKA12",
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
                        document="PX-004",
                        section="Water Bottle Configuration",
                        brand=brand,
                        model=model,
                        status="Confirmed",
                    )
                )

    return records


# ============================================================
# PX-005 Parser
# ============================================================

def parse_px005(text: str) -> list[Record]:
    """
    Parse PX-005 acquisition records.

    Expected fields:

        Manufacturer
        Model
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
                    document="PX-005",
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
            r"^\|\s*(Manufacturer|Model|Acquisition Status)"
            r"\s*\|\s*(.*?)\s*\|$",
            stripped,
        )

        if not match:
            continue

        field = match.group(1)
        value = match.group(2).strip()

        if field == "Manufacturer":
            brand = value

        elif field == "Model":
            model = value

        elif field == "Acquisition Status":
            status = value

    flush()

    return records


# ============================================================
# TP-004 Parser
# ============================================================

def parse_tp004(text: str) -> list[Record]:
    """
    Parse TP-004 only for reporting.

    TP-004 is NOT used as a gate for PX-004/PX-005.

    A product being absent from TP-004 is normal when it has
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
                    document="TP-004",
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

def check_px004_not_empty(
    px004: list[Record],
) -> list[str]:

    if px004:
        return []

    return [
        "PX-004 parser returned 0 Confirmed Equipment records."
    ]


def check_px004_missing_from_px005(
    px004: list[Record],
    px005: list[Record],
) -> list[str]:
    """
    Every PX-004 Confirmed Equipment must have a PX-005 record.

    This protects against:
        Confirmed decision
            ↓
        missing acquisition record
    """

    acquisition = {
        equipment_key(
            record.brand,
            record.model,
        )
        for record in px005
    }

    errors: list[str] = []

    for record in px004:
        key = equipment_key(
            record.brand,
            record.model,
        )

        if key not in acquisition:
            errors.append(
                "PX-004 Confirmed Equipment missing from PX-005: "
                f"{record.brand} / {record.model}"
            )

    return errors


def check_px005_against_px004(
    px004: list[Record],
    px005: list[Record],
) -> list[str]:
    """
    Every active PX-005 acquisition record must correspond
    to a Confirmed PX-004 equipment.

    Valid statuses:
        Purchase Required
        Included
        Already Owned
        To Be Confirmed
    """

    confirmed = {
        equipment_key(
            record.brand,
            record.model,
        )
        for record in px004
    }

    valid_statuses = {
        "purchase required",
        "included",
        "already owned",
        "to be confirmed",
    }

    errors: list[str] = []

    for record in px005:
        status = normalize_status(record.status)

        if status not in valid_statuses:
            continue

        key = equipment_key(
            record.brand,
            record.model,
        )

        if key not in confirmed:
            errors.append(
                "PX-005 acquisition record has no corresponding "
                "PX-004 Confirmed Equipment: "
                f"{record.brand} / {record.model}"
            )

    return errors


def check_px005_status_values(
    px005: list[Record],
) -> list[str]:
    allowed = {
        "purchase required",
        "included",
        "already owned",
        "to be confirmed",
    }

    errors: list[str] = []

    for record in px005:
        status = normalize_status(record.status)

        if status not in allowed:
            errors.append(
                "PX-005 invalid Acquisition Status: "
                f"{record.brand} / {record.model} "
                f"= {record.status}"
            )

    return errors


def check_px004_duplicates(
    px004: list[Record],
) -> list[str]:
    """
    Only exact duplicate PX-004 records are errors.

    Manufacturer + Model alone is NOT sufficient to call a
    duplicate because separate configuration records may
    legitimately reference the same manufacturer/model.
    """

    errors: list[str] = []

    seen: set[
        tuple[str, str, str]
    ] = set()

    for record in px004:
        key = (
            normalize(record.section),
            normalize(record.brand),
            normalize(record.model),
        )

        if key in seen:
            errors.append(
                "Exact duplicate PX-004 Confirmed record: "
                f"{record.section} / "
                f"{record.brand} / "
                f"{record.model}"
            )
        else:
            seen.add(key)

    return errors


def check_model_drift(
    px004: list[Record],
    px005: list[Record],
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

    for record in px004:
        brand = normalize(record.brand)

        by_brand.setdefault(
            brand,
            [],
        ).append(record)

    for record in px005:
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
                    "PX-004 and PX-005: "
                    f"{record.brand}: "
                    f"PX-004='{candidate.model}', "
                    f"PX-005='{record.model}'"
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
            "PX-004 / PX-005 Sync Validator"
        )
    )

    parser.add_argument(
        "--tp004",
        required=True,
        help="Path to TP-004",
    )

    parser.add_argument(
        "--px004",
        required=True,
        help="Path to PX-004",
    )

    parser.add_argument(
        "--px005",
        required=True,
        help="Path to PX-005",
    )

    args = parser.parse_args()

    try:
        tp004 = parse_tp004(
            read_text(
                Path(args.tp004)
            )
        )

        px004 = parse_px004(
            read_text(
                Path(args.px004)
            )
        )

        px005 = parse_px005(
            read_text(
                Path(args.px005)
            )
        )

    except Exception as error:
        print("CONFIG ERROR")
        print(str(error))
        return 2

    errors: list[str] = []

    # --------------------------------------------------------
    # PX-004 <-> PX-005 is the mandatory synchronization pair.
    # --------------------------------------------------------

    errors.extend(
        check_px004_not_empty(px004)
    )

    errors.extend(
        check_px004_missing_from_px005(
            px004,
            px005,
        )
    )

    errors.extend(
        check_px005_against_px004(
            px004,
            px005,
        )
    )

    errors.extend(
        check_px005_status_values(px005)
    )

    errors.extend(
        check_px004_duplicates(px004)
    )

    errors.extend(
        check_model_drift(
            px004,
            px005,
        )
    )

    # --------------------------------------------------------
    # TP-004 is intentionally NOT used for synchronization.
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
        "  PX-004 <-> PX-005"
    )

    print(
        "Operational Registry:"
    )

    print(
        "  TP-004"
    )

    print()

    print(
        f"TP-004 operational records: "
        f"{len(tp004)}"
    )

    print(
        f"PX-004 Confirmed records: "
        f"{len(px004)}"
    )

    print(
        f"PX-005 acquisition records: "
        f"{len(px005)}"
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
        "PASS — PX-004 and PX-005 "
        "are synchronized."
    )

    print(
        "TP-004 is treated as the "
        "purchased / operational registry."
    )

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
