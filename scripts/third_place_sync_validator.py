#!/usr/bin/env python3

"""
THE THIRD PLACE — SSOT Sync Validator

Official synchronization validation for:

    TP-004 Equipment Registry Object Reference
    PX-004 Barista Codex
    PX-005 Acquisition Handbook

SSOT relationship:

    TP-004
        Master Equipment Registry

    PX-004
        Coffee System Decision Authority

    PX-005
        Acquisition / Purchase Authority


IMPORTANT

This validator NEVER modifies source documents.

It only reports inconsistencies.

Exit codes:

    0 = PASS
    1 = Validation failure
    2 = Configuration / input error
"""

from __future__ import annotations

import argparse
import re
import sys
from dataclasses import dataclass
from pathlib import Path


# ============================================================
# Data Model
# ============================================================

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
        raise FileNotFoundError(
            f"File not found: {path}"
        )

    return path.read_text(
        encoding="utf-8"
    )


def normalize(value: str) -> str:

    value = value.strip()

    value = value.replace(
        "\u3000",
        " "
    )

    value = value.replace(
        "×",
        "x"
    )

    value = re.sub(
        r"\s+",
        " ",
        value
    )

    return value.lower()


def normalize_status(value: str | None) -> str:

    if not value:
        return ""

    return normalize(value)


def equipment_key(
    brand: str,
    model: str
) -> tuple[str, str]:

    return (
        normalize(brand),
        normalize(model),
    )


# ============================================================
# TP-004 Parser
# ============================================================

def parse_tp004(
    text: str
) -> list[Record]:

    """
    TP-004 is the Master Equipment Registry.

    The validator intentionally performs only limited
    structural parsing here.

    TP-004 may contain multiple object records using the
    same manufacturer/model combination.

    Therefore:

        Manufacturer + Model

    is NOT considered a unique Equipment ID.

    Duplicate detection is intentionally NOT performed
    against Manufacturer + Model alone.
    """

    records: list[Record] = []

    current_section = ""

    # Generic extraction for common TP-004 table structures.
    #
    # We only use records that can be confidently identified
    # as Brand / Model pairs.

    for line in text.splitlines():

        stripped = line.strip()

        if stripped.startswith("#"):

            current_section = (
                stripped.lstrip("#").strip()
            )

            continue

        # Markdown table
        if "|" in stripped:

            cells = [
                cell.strip()
                for cell
                in stripped.strip("|").split("|")
            ]

            if len(cells) >= 3:

                lowered = [
                    normalize(cell)
                    for cell in cells
                ]

                # Ignore header rows
                if any(
                    value in lowered
                    for value in (
                        "brand",
                        "manufacturer",
                    )
                ) and any(
                    value in lowered
                    for value in (
                        "model",
                        "product",
                    )
                ):
                    continue

                # Conservative extraction only.
                if (
                    len(cells) >= 3
                    and cells[1]
                    and cells[2]
                ):

                    records.append(
                        Record(
                            document="TP-004",
                            section=current_section,
                            brand=cells[1],
                            model=cells[2],
                        )
                    )

    return records


# ============================================================
# PX-004 Parser
# ============================================================

def parse_px004(
    text: str
) -> list[Record]:

    """
    PX-004 currently uses tab-separated tables.

    Expected structure:

        Category    Brand    Model    Status

    Example:

        Espresso Machine    9Barista    Mk.2 Pro    Confirmed

    Only Status = Confirmed is included.

    This prevents rejected / pending / deferred items
    from becoming acquisition requirements.
    """

    records: list[Record] = []

    current_section = ""

    for line in text.splitlines():

        stripped = line.strip()

        if not stripped:
            continue

        if stripped.startswith("#"):

            current_section = (
                stripped.lstrip("#").strip()
            )

            continue

        # ----------------------------------------------------
        # Primary format: TAB separated
        # ----------------------------------------------------

        if "\t" in line:

            cells = [
                cell.strip()
                for cell
                in line.split("\t")
            ]

            if len(cells) < 4:
                continue

            category = cells[0]
            brand = cells[1]
            model = cells[2]
            status = cells[3]

            header = [
                normalize(cell)
                for cell in cells[:4]
            ]

            if header == [
                "category",
                "brand",
                "model",
                "status",
            ]:
                continue

            if (
                normalize_status(status)
                == "confirmed"
            ):

                records.append(
                    Record(
                        document="PX-004",
                        section=(
                            category
                            or current_section
                        ),
                        brand=brand,
                        model=model,
                        status=status,
                    )
                )

            continue

        # ----------------------------------------------------
        # Secondary format: Markdown pipe table
        # ----------------------------------------------------

        if "|" in line:

            cells = [
                cell.strip()
                for cell
                in stripped.strip("|").split("|")
            ]

            if len(cells) < 4:
                continue

            header = [
                normalize(cell)
                for cell in cells[:4]
            ]

            if header == [
                "category",
                "brand",
                "model",
                "status",
            ]:
                continue

            if cells[0] == "---":
                continue

            category = cells[0]
            brand = cells[1]
            model = cells[2]
            status = cells[3]

            if (
                normalize_status(status)
                == "confirmed"
            ):

                records.append(
                    Record(
                        document="PX-004",
                        section=(
                            category
                            or current_section
                        ),
                        brand=brand,
                        model=model,
                        status=status,
                    )
                )

    return records


# ============================================================
# PX-005 Parser
# ============================================================

def parse_px005(
    text: str
) -> list[Record]:

    """
    PX-005 acquisition records are structured as:

        ### Product Name

        | Manufacturer | ... |
        | Model | ... |
        | Acquisition Status | ... |

    All records are retained.

    Acquisition Status is validated separately.
    """

    records: list[Record] = []

    section = ""

    brand: str | None = None
    model: str | None = None
    status: str | None = None

    def flush():

        nonlocal brand
        nonlocal model
        nonlocal status

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

            section = (
                stripped[4:].strip()
            )

            continue

        match = re.match(
            r"^\|\s*"
            r"(Manufacturer|Model|Acquisition Status)"
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
# Validation 1
# PX-004 must contain records
# ============================================================

def check_px004_not_empty(
    px004: list[Record]
) -> list[str]:

    if not px004:

        return [
            "PX-004 parser returned 0 Confirmed Equipment records."
        ]

    return []


# ============================================================
# Validation 2
# PX-004 against TP-004
# ============================================================

def check_px004_against_tp004(
    tp004: list[Record],
    px004: list[Record],
) -> list[str]:

    """
    Verify that every PX-004 Confirmed Equipment can be found
    in TP-004.

    Matching:

        Manufacturer + Model

    is used only for cross-document confirmation.

    TP-004 duplicates are NOT automatically treated as errors,
    because TP-004 may contain multiple objects or registry
    records with the same manufacturer/model.
    """

    errors: list[str] = []

    master = {
        equipment_key(
            record.brand,
            record.model,
        )
        for record in tp004
    }

    for record in px004:

        key = equipment_key(
            record.brand,
            record.model,
        )

        if key not in master:

            errors.append(
                "PX-004 Confirmed Equipment "
                "not found in TP-004: "
                f"{record.brand} / {record.model}"
            )

    return errors


# ============================================================
# Validation 3
# PX-005 against PX-004
# ============================================================

def check_px005_against_px004(
    px004: list[Record],
    px005: list[Record],
) -> list[str]:

    """
    Every active PX-005 acquisition record must correspond
    to a Confirmed Equipment in PX-004.

    Active statuses:

        Purchase Required
        Included
        Already Owned
        To Be Confirmed

    Historical / informational records should not be silently
    treated as acquisition requirements.
    """

    errors: list[str] = []

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

    for record in px005:

        key = equipment_key(
            record.brand,
            record.model,
        )

        status = normalize_status(
            record.status
        )

        if status not in valid_statuses:
            continue

        if key not in confirmed:

            errors.append(
                "PX-005 acquisition record has "
                "no corresponding PX-004 Confirmed Equipment: "
                f"{record.brand} / {record.model}"
            )

    return errors


# ============================================================
# Validation 4
# PX-004 Confirmed Equipment missing from PX-005
# ============================================================

def check_px004_missing_from_px005(
    px004: list[Record],
    px005: list[Record],
) -> list[str]:

    """
    Every PX-004 Confirmed Equipment should have an
    acquisition record in PX-005.

    This is the critical protection against:

        'Confirmed but forgotten in PX-005'
    """

    errors: list[str] = []

    acquisition = {
        equipment_key(
            record.brand,
            record.model,
        )
        for record in px005
    }

    for record in px004:

        key = equipment_key(
            record.brand,
            record.model,
        )

        if key not in acquisition:

            errors.append(
                "PX-004 Confirmed Equipment "
                "missing from PX-005: "
                f"{record.brand} / {record.model}"
            )

    return errors


# ============================================================
# Validation 5
# PX-005 Acquisition Status
# ============================================================

def check_px005_status_values(
    px005: list[Record]
) -> list[str]:

    errors: list[str] = []

    allowed = {
        "purchase required",
        "included",
        "already owned",
        "to be confirmed",
    }

    for record in px005:

        status = normalize_status(
            record.status
        )

        if status not in allowed:

            errors.append(
                "PX-005 invalid Acquisition Status: "
                f"{record.brand} / {record.model} "
                f"= {record.status}"
            )

    return errors


# ============================================================
# Validation 6
# Model-name drift
# ============================================================

def check_model_drift(
    px004: list[Record],
    px005: list[Record],
) -> list[str]:

    """
    Detect obvious model-name differences.

    IMPORTANT:

    This function does NOT automatically reconcile names.

    Example:

        PX-004:
            Bean Cellar

        PX-005:
            Bean Cellar Bulk

    Result:

        FAIL

    The human must decide which official name is correct,
    then synchronize the documents.
    """

    errors: list[str] = []

    by_brand: dict[
        str,
        list[Record]
    ] = {}

    for record in px004:

        brand = normalize(
            record.brand
        )

        by_brand.setdefault(
            brand,
            []
        ).append(record)

    for record in px005:

        brand = normalize(
            record.brand
        )

        candidates = by_brand.get(
            brand,
            []
        )

        if not candidates:
            continue

        model = normalize(
            record.model
        )

        # Exact match = PASS
        if any(
            normalize(candidate.model)
            == model
            for candidate in candidates
        ):

            continue

        # Obvious containment = FAIL
        for candidate in candidates:

            candidate_model = normalize(
                candidate.model
            )

            if (
                model in candidate_model
                or candidate_model in model
            ):

                errors.append(
                    "Possible model-name drift "
                    "between PX-004 and PX-005: "
                    f"{record.brand}: "
                    f"PX-004='{candidate.model}', "
                    f"PX-005='{record.model}'"
                )

                break

    return errors


# ============================================================
# Validation 7
# Duplicate PX-004 records
# ============================================================

def check_px004_duplicate_rows(
    px004: list[Record]
) -> list[str]:

    """
    Detect exact duplicate PX-004 rows only.

    Manufacturer + Model + Category must all match.

    This avoids the previous false positives caused by
    identical product names belonging to separate TP-004
    objects.
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
                "Exact duplicate PX-004 Confirmed row: "
                f"{record.section} / "
                f"{record.brand} / "
                f"{record.model}"
            )

        else:

            seen.add(key)

    return errors


# ============================================================
# Main
# ============================================================

def main() -> int:

    parser = argparse.ArgumentParser(
        description=(
            "THE THIRD PLACE SSOT Sync Validator"
        )
    )

    parser.add_argument(
        "--tp004",
        required=True,
        help="Path to TP-004"
    )

    parser.add_argument(
        "--px004",
        required=True,
        help="Path to PX-004"
    )

    parser.add_argument(
        "--px005",
        required=True,
        help="Path to PX-005"
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

        print(
            "CONFIG ERROR:"
        )

        print(
            str(error)
        )

        return 2

    errors: list[str] = []

    # --------------------------------------------------------
    # Basic parser validation
    # --------------------------------------------------------

    errors.extend(
        check_px004_not_empty(
            px004
        )
    )

    # --------------------------------------------------------
    # TP-004 → PX-004
    # --------------------------------------------------------

    errors.extend(
        check_px004_against_tp004(
            tp004,
            px004,
        )
    )

    # --------------------------------------------------------
    # PX-004 → PX-005
    # --------------------------------------------------------

    errors.extend(
        check_px004_missing_from_px005(
            px004,
            px005,
        )
    )

    # --------------------------------------------------------
    # PX-005 → PX-004
    # --------------------------------------------------------

    errors.extend(
        check_px005_against_px004(
            px004,
            px005,
        )
    )

    # --------------------------------------------------------
    # PX-005 status
    # --------------------------------------------------------

    errors.extend(
        check_px005_status_values(
            px005
        )
    )

    # --------------------------------------------------------
    # PX-004 duplicate rows
    # --------------------------------------------------------

    errors.extend(
        check_px004_duplicate_rows(
            px004
        )
    )

    # --------------------------------------------------------
    # Model drift
    # --------------------------------------------------------

    errors.extend(
        check_model_drift(
            px004,
            px005,
        )
    )

    # ========================================================
    # Result
    # ========================================================

    print(
        "THE THIRD PLACE — SSOT Sync Validator"
    )

    print(
        "======================================"
    )

    print(
        f"TP-004 records: {len(tp004)}"
    )

    print(
        f"PX-004 Confirmed records: {len(px004)}"
    )

    print(
        f"PX-005 acquisition records: {len(px005)}"
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
            start=1
        ):

            print(
                f"{index}. {error}"
            )

        return 1

    print(
        "PASS — TP-004 / PX-004 / PX-005 "
        "are structurally consistent."
    )

    return 0


if __name__ == "__main__":

    raise SystemExit(
        main()
    )
