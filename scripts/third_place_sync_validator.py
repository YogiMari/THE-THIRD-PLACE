#!/usr/bin/env python3

"""
THE THIRD PLACE — SSOT Sync Validator

Validates the structural relationship between:

    TP-004 Equipment Registry Object Reference
    PX-004 Barista Codex
    PX-005 Acquisition Handbook

Design principle:

    TP-004 = Master Equipment Registry
    PX-004 = Coffee System Decision Authority
    PX-005 = Acquisition Authority

The validator does not modify any source document.

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


@dataclass(frozen=True)
class Record:
    document: str
    section: str
    brand: str
    model: str
    status: str | None = None


FIELD_RE = re.compile(
    r"^\*\*(Brand|Product|Model|Status)\*\*\s*$"
)


def read_text(path: Path) -> str:
    if not path.exists():
        raise FileNotFoundError(path)

    return path.read_text(encoding="utf-8")


def normalize(value: str) -> str:
    value = value.strip().lower()
    value = value.replace("×", "x")
    value = re.sub(r"\s+", " ", value)

    return value


def parse_tp004(text: str) -> list[Record]:

    records = []

    current_id = None
    brand = None
    model = None
    status = None
    field = None

    def flush():

        nonlocal brand
        nonlocal model
        nonlocal status

        if current_id and brand and model:

            records.append(
                Record(
                    document="TP-004",
                    section=current_id,
                    brand=brand,
                    model=model,
                    status=status,
                )
            )

        brand = None
        model = None
        status = None

    for line in text.splitlines():

        match = re.match(
            r"^##\s+([A-Z]{3}-\d{3})\s*$",
            line.strip()
        )

        if match:

            flush()

            current_id = match.group(1)
            field = None

            continue

        match = FIELD_RE.match(line.strip())

        if match:

            field = match.group(1)

            continue

        if field and line.strip():

            value = line.strip()

            if field == "Brand":
                brand = value

            elif field in ("Product", "Model"):
                model = value

            elif field == "Status":
                status = value

            field = None

    flush()

    return records


def parse_px004(text: str) -> list[Record]:

    records = []

    current_category = ""
    in_table = False

    for line in text.splitlines():

        stripped = line.strip()

        if stripped.startswith("#"):

            current_category = (
                stripped.lstrip("#").strip()
            )

            continue

        if "|" not in stripped:
            continue

        if stripped.startswith("|---"):
            continue

        cells = [
            cell.strip()
            for cell in stripped.strip("|").split("|")
        ]

        if len(cells) < 4:
            continue

        normalized = [
            normalize(cell)
            for cell in cells
        ]

        if normalized[:4] == [
            "category",
            "brand",
            "model",
            "status",
        ]:

            in_table = True

            continue

        if in_table:

            records.append(
                Record(
                    document="PX-004",
                    section=current_category,
                    brand=cells[1],
                    model=cells[2],
                    status=cells[3],
                )
            )

    return records


def parse_px005(text: str) -> list[Record]:

    records = []

    section = ""

    brand = None
    model = None
    status = None

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

            section = stripped[4:].strip()

            continue

        match = re.match(
            r"^\|\s*(Manufacturer|Model|Acquisition Status)\s*\|\s*(.*?)\s*\|$",
            stripped,
        )

        if not match:
            continue

        key = match.group(1)
        value = match.group(2).strip()

        if key == "Manufacturer":

            brand = value

        elif key == "Model":

            model = value

        elif key == "Acquisition Status":

            status = value

    flush()

    return records


def check_duplicate_tp004(
    records: list[Record],
) -> list[str]:

    errors = []

    seen = {}

    for record in records:

        key = (
            normalize(record.brand),
            normalize(record.model),
        )

        if key in seen:

            previous = seen[key]

            errors.append(
                "TP-004 duplicate equipment: "
                f"{record.brand} / {record.model} "
                f"({previous.section}, {record.section})"
            )

        else:

            seen[key] = record

    return errors


def check_px004_against_tp004(
    tp004: list[Record],
    px004: list[Record],
) -> list[str]:

    errors = []

    master = {
        (
            normalize(record.brand),
            normalize(record.model),
        )
        for record in tp004
    }

    for record in px004:

        key = (
            normalize(record.brand),
            normalize(record.model),
        )

        if key not in master:

            errors.append(
                "PX-004 equipment not found in TP-004: "
                f"{record.brand} / {record.model}"
            )

    return errors


def check_px005_against_px004(
    px004: list[Record],
    px005: list[Record],
) -> list[str]:

    errors = []

    decisions = {
        (
            normalize(record.brand),
            normalize(record.model),
        )
        for record in px004
    }

    active_statuses = {
        "purchase required",
        "included",
        "already owned",
    }

    for record in px005:

        key = (
            normalize(record.brand),
            normalize(record.model),
        )

        status = normalize(record.status or "")

        if (
            key not in decisions
            and status in active_statuses
        ):

            errors.append(
                "PX-005 acquisition record has no "
                "corresponding PX-004 decision: "
                f"{record.brand} / {record.model}"
            )

    return errors


def check_px005_status_values(
    px005: list[Record],
) -> list[str]:

    errors = []

    allowed = {
        "purchase required",
        "included",
        "already owned",
        "to be confirmed",
    }

    for record in px005:

        status = normalize(record.status or "")

        if status not in allowed:

            errors.append(
                "PX-005 invalid Acquisition Status: "
                f"{record.brand} / {record.model} "
                f"= {record.status}"
            )

    return errors


def check_model_drift(
    px004: list[Record],
    px005: list[Record],
) -> list[str]:

    errors = []

    by_brand = {}

    for record in px004:

        by_brand.setdefault(
            normalize(record.brand),
            [],
        ).append(record)

    for record in px005:

        candidates = by_brand.get(
            normalize(record.brand),
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
                    "Possible model-name drift "
                    "between PX-004 and PX-005: "
                    f"{record.brand}: "
                    f"PX-004='{candidate.model}', "
                    f"PX-005='{record.model}'"
                )

                break

    return errors


def main() -> int:

    parser = argparse.ArgumentParser()

    parser.add_argument(
        "--tp004",
        required=True,
    )

    parser.add_argument(
        "--px004",
        required=True,
    )

    parser.add_argument(
        "--px005",
        required=True,
    )

    args = parser.parse_args()

    try:

        tp004 = parse_tp004(
            read_text(Path(args.tp004))
        )

        px004 = parse_px004(
            read_text(Path(args.px004))
        )

        px005 = parse_px005(
            read_text(Path(args.px005))
        )

    except Exception as error:

        print(
            f"CONFIG ERROR: {error}",
            file=sys.stderr,
        )

        return 2

    errors = []

    errors.extend(
        check_duplicate_tp004(tp004)
    )

    errors.extend(
        check_px004_against_tp004(
            tp004,
            px004,
        )
    )

    errors.extend(
        check_px005_against_px004(
            px004,
            px005,
        )
    )

    errors.extend(
        check_px005_status_values(
            px005
        )
    )

    errors.extend(
        check_model_drift(
            px004,
            px005,
        )
    )

    print(
        "THE THIRD PLACE — SSOT Sync Validator"
    )

    print(
        f"TP-004 records: {len(tp004)}"
    )

    print(
        f"PX-004 records: {len(px004)}"
    )

    print(
        f"PX-005 records: {len(px005)}"
    )

    if errors:

        print(
            f"\nFAIL — {len(errors)} "
            "validation error(s)"
        )

        for error in errors:

            print(
                f"- {error}"
            )

        return 1

    print(
        "\nPASS — TP-004 / PX-004 / PX-005 "
        "are structurally consistent."
    )

    return 0


if __name__ == "__main__":

    raise SystemExit(
        main()
    )
