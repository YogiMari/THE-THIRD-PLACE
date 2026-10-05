#!/usr/bin/env python3

"""
THE THIRD PLACE — SSOT Sync Validator

Synchronization authority (Coffee chain):
    BR-002 <-> BR-003

Synchronization authority (Cross-Zone chain, non-Coffee/non-Kitchen):
    MD-004 (Status = Essential)      <-> CZ-001 Confirmed — Purchase Pending
    MD-004 (Status != Owned)         <-> CZ-002 Current Watch List
    MD-001 (Equipment ID references) -> MD-004 (must exist)

Operational registry:
    MD-004

Document roles:
    BR-002 = Coffee System Decision Authority
    BR-003 = Acquisition / Purchase Authority
    MD-004 = Purchased / Owned / Operational Equipment Registry
    CZ-001 = Deliberation Dossier (Confirmed — Purchase Pending list)
    CZ-002 = Vigil Protocol (Watch List)
    MD-001 = Storage Blueprint (references Equipment IDs by name)

Required synchronization:
    BR-002 -> BR-003 : REQUIRED
    BR-003 -> BR-002 : REQUIRED

    MD-004 Essential (non-Coffee/non-Kitchen)
        -> CZ-001 Confirmed — Purchase Pending : REQUIRED
    CZ-001 Confirmed — Purchase Pending
        -> MD-004 Essential : REQUIRED

    MD-004 Status != Owned (non-Coffee/non-Kitchen, excluding
    Brand/Product = "Unconfirmed", per CZ-002's own exclusion rule)
        -> CZ-002 Current Watch List : REQUIRED
    CZ-002 Current Watch List (MD-004 Reference)
        -> MD-004 Status != Owned : REQUIRED

    MD-001 Equipment ID references -> must exist in MD-004 : REQUIRED

Not required:
    BR-002 -> MD-004
    MD-004 -> BR-002

Reason:
    BR-002 may contain equipment that has not yet been purchased.
    For the Coffee domain (COF-series), MD-004 contains only equipment
    that has actually been purchased, owned, and entered into
    operational use. (Other MD-004 domains may still carry
    Essential/Candidate/Upgrade items that are not yet purchased;
    this validator's scope is limited to the Coffee sync chain.)

    Coffee (COF-series) and Kitchen (KIT-series) equipment are excluded
    from the MD-004/CZ-001/CZ-002 cross-zone checks: Coffee is managed
    by BR-002/BR-003 until purchased, and Kitchen is managed entirely
    by MD-003 (see CLAUDE.md §作業原則 9).

MD-001 name-only references (no Equipment ID, e.g. Coffee items listed
by product name in Coffee Module Layout) are not mechanically checked:
matching free-text product names against MD-004 is not reliable, so
this validator only checks references that carry an explicit Equipment
ID. A mismatch between an MD-001 Equipment ID reference and its
MD-004 ownership status is reported as a WARNING (not an error), since
the "is this annotated as unowned nearby" heuristic can misfire.

The validator never modifies source documents.

Exit codes:
    0 = PASS (no errors; warnings may still be printed)
    1 = Validation failure (one or more errors)
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


def read_md004_text(path: Path) -> str:
    """
    MD-004 is split by domain (OP-008 §11.2): a directory holds the entry
    file and one file per domain. A single file is read as is. An ID
    declared in more than one file is a configuration error.
    """
    if not path.is_dir():
        return read_text(path)

    files = sorted(path.glob("MD-004_*.md"))
    if not files:
        raise FileNotFoundError(f"No MD-004 files in: {path}")

    seen: dict[str, str] = {}
    parts: list[str] = []
    for file in files:
        text = file.read_text(encoding="utf-8")
        for line in text.splitlines():
            match = MD004_ID_HEADER_RE.match(line.strip())
            if match:
                if match.group(1) in seen:
                    raise ValueError(
                        f"MD-004 ID declared twice: {match.group(1)} "
                        f"({seen[match.group(1)]}, {file.name})"
                    )
                seen[match.group(1)] = file.name
        parts.append(text)
    return "\n".join(parts)


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
# Cross-Zone Ops constants (MD-004 / CZ-001 / CZ-002 / MD-001)
# ============================================================

# Equipment domain prefixes actually registered in MD-004.
# COF (Coffee) and KIT (Kitchen) are listed defensively even though
# CLAUDE.md §作業原則 9-10 keeps them out of MD-004 entirely; if either
# ever appeared, the exclusion below must still hold.
EXCLUDED_DOMAINS = ("COF", "KIT")

EQUIPMENT_DOMAINS = (
    "FUR",
    "LGT",
    "ARM",
    "STR",
    "FIR",
    "SHL",
    "COF",
    "KIT",
)

MD004_ID_HEADER_RE = re.compile(
    r"^##\s+([A-Z]{2,4}-[0-9A-Za-z_]+)\s*$"
)

# ASCII-only lookaround instead of \b: Python's \w is Unicode-aware,
# so a boundary between an ID's trailing digit/letter and adjacent
# Japanese text (e.g. "FUR-032の") would otherwise not be recognized
# as a word boundary and the match would be missed.
EQUIPMENT_ID_TOKEN_RE = re.compile(
    r"(?<![A-Za-z0-9_])"
    r"(?:" + "|".join(EQUIPMENT_DOMAINS) + r")"
    r"-[0-9A-Za-z_]+"
    r"(?![A-Za-z0-9_])"
)

UNOWNED_STATUSES = {"essential", "candidate", "upgrade"}

MD001_UNOWNED_ANNOTATION_MARKERS = (
    "未所有",
    "未購入",
    "vacant",
    "retired",
    "検討中",
)


@dataclass(frozen=True)
class RegistryEntry:
    id: str
    domain: str
    brand: str | None
    product: str | None
    status: str | None


def is_unconfirmed_entry(entry: RegistryEntry) -> bool:
    return (
        normalize(entry.brand or "") == "unconfirmed"
        or normalize(entry.product or "") == "unconfirmed"
    )


def parse_md004_registry(text: str) -> dict[str, RegistryEntry]:
    """
    Parse MD-004 into a dict keyed by Equipment ID.

    Unlike parse_md004() (used for the BR-002/BR-003 report count),
    this captures every declared "## ID" heading, including Vacant
    and Retired entries that carry no Brand/Product/Status fields
    (their RegistryEntry.status is None). This is required so that
    MD-001 references to such IDs are recognized as existing, and so
    that Vacant/Retired IDs are not mistaken for missing acquisition
    targets in the CZ-001/CZ-002 checks.
    """

    entries: dict[str, RegistryEntry] = {}

    current_id: str | None = None
    current_field: str | None = None

    brand: str | None = None
    model: str | None = None
    status: str | None = None

    def flush() -> None:
        nonlocal brand, model, status

        if current_id:
            entries[current_id] = RegistryEntry(
                id=current_id,
                domain=current_id.split("-", 1)[0],
                brand=brand,
                product=model,
                status=status,
            )

        brand = None
        model = None
        status = None

    for line in text.splitlines():
        stripped = line.strip()

        match = MD004_ID_HEADER_RE.match(stripped)

        if match:
            flush()
            current_id = match.group(1)
            current_field = None
            continue

        if stripped.startswith("#"):
            current_field = None
            continue

        if stripped in ("**Brand**", "**Manufacturer**"):
            current_field = "brand"
            continue

        if stripped in ("**Product**", "**Model**"):
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

    return entries


def extract_top_level_section(
    text: str,
    heading_prefix: str,
) -> str:
    """
    Return the body of the first "# <heading_prefix>..." section
    (a single-#, top-level heading), up to (not including) the next
    single-# heading. "##" subsection headings inside are kept.
    """

    lines = text.splitlines()

    start: int | None = None
    end = len(lines)

    for index, line in enumerate(lines):
        stripped = line.strip()

        if start is None:
            if re.match(
                rf"^#\s+{re.escape(heading_prefix)}",
                stripped,
            ):
                start = index + 1

            continue

        if re.match(r"^#\s+\S", stripped) and not stripped.startswith("##"):
            end = index
            break

    if start is None:
        return ""

    return "\n".join(lines[start:end])


def parse_cz001_confirmed_pending(text: str) -> set[str]:
    """
    Extract the Equipment IDs listed in CZ-001's
    "Confirmed — Purchase Pending" tables (ID column, first cell).
    """

    section = extract_top_level_section(
        text,
        "Confirmed — Purchase Pending",
    )

    ids: set[str] = set()

    for line in section.splitlines():
        stripped = line.strip()

        if not stripped.startswith("|"):
            continue

        cells = [
            cell.strip()
            for cell in stripped.strip("|").split("|")
        ]

        if not cells:
            continue

        candidate = cells[0]

        if re.fullmatch(r"-+", candidate):
            continue

        if re.fullmatch(
            r"(?:" + "|".join(EQUIPMENT_DOMAINS) + r")-[0-9A-Za-z_]+",
            candidate,
        ):
            ids.add(candidate)

    return ids


def parse_cz002_watch_list(text: str) -> set[str]:
    """
    Extract the Equipment IDs listed in CZ-002's "**MD-004 Reference**"
    fields under "Current Watch List".

    Only the ID(s) preceding a parenthesis are taken, so an inline
    note such as "FIR-037（Parent: FIR-036）" contributes FIR-037 only
    — the parenthetical "Parent: FIR-036" is metadata about a
    different, already independently tracked entry, not a second
    reference to be required here.
    """

    section = extract_top_level_section(
        text,
        "Current Watch List",
    )

    ids: set[str] = set()

    current_field: str | None = None

    for line in section.splitlines():
        stripped = line.strip()

        if stripped == "**MD-004 Reference**":
            current_field = "reference"
            continue

        if stripped.startswith("**"):
            current_field = None
            continue

        if current_field == "reference" and stripped:
            primary = re.split(r"[（(]", stripped)[0]
            ids.update(EQUIPMENT_ID_TOKEN_RE.findall(primary))
            current_field = None

    return ids


def extract_equipment_id_references(text: str) -> dict[str, int]:
    """
    Extract every Equipment ID token referenced in free text (e.g.
    MD-001), mapped to the 1-based line number of its first
    occurrence (used to look up surrounding context for the
    ownership-annotation warning check).
    """

    first_line: dict[str, int] = {}

    for line_number, line in enumerate(text.splitlines(), start=1):
        for match in EQUIPMENT_ID_TOKEN_RE.finditer(line):
            token = match.group(0)

            if token not in first_line:
                first_line[token] = line_number

    return first_line


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
# Cross-Zone Ops checks (MD-004 / CZ-001 / CZ-002 / MD-001)
# ============================================================

def check_md004_essential_vs_cz001(
    md004: dict[str, RegistryEntry],
    cz001_ids: set[str],
) -> list[str]:
    """
    MD-004 Status = Essential (non-Coffee/non-Kitchen) must equal
    CZ-001's "Confirmed — Purchase Pending" ID set, in both
    directions.
    """

    essential_ids = {
        entry.id
        for entry in md004.values()
        if entry.domain not in EXCLUDED_DOMAINS
        and normalize(entry.status or "") == "essential"
    }

    errors: list[str] = []

    for equipment_id in sorted(essential_ids - cz001_ids):
        errors.append(
            "MD-004 Status = Essential missing from CZ-001 "
            f"Confirmed — Purchase Pending: {equipment_id}"
        )

    for equipment_id in sorted(cz001_ids - essential_ids):
        entry = md004.get(equipment_id)

        if entry is None:
            errors.append(
                "CZ-001 Confirmed — Purchase Pending references an "
                f"ID that does not exist in MD-004: {equipment_id}"
            )

        elif entry.status is None:
            # Vacant / Retired placeholder — not a sync error.
            continue

        else:
            errors.append(
                "CZ-001 Confirmed — Purchase Pending references "
                f"{equipment_id}, but MD-004 Status = "
                f"{entry.status} (expected Essential)"
            )

    return errors


def check_md004_unowned_vs_cz002(
    md004: dict[str, RegistryEntry],
    cz002_ids: set[str],
) -> list[str]:
    """
    MD-004 Status != Owned (non-Coffee/non-Kitchen, excluding
    Brand/Product = "Unconfirmed") must equal CZ-002's Current Watch
    List MD-004 Reference ID set, in both directions.

    Unconfirmed-brand entries are excluded per CZ-002's own stated
    rule ("MD-004上の製品が未確定…の枠は…本リストの対象外とし、
    CZ-001…で管理する"): the search target isn't determined yet, so
    it cannot be patrolled.
    """

    unowned_ids = {
        entry.id
        for entry in md004.values()
        if entry.domain not in EXCLUDED_DOMAINS
        and normalize(entry.status or "") in UNOWNED_STATUSES
        and not is_unconfirmed_entry(entry)
    }

    errors: list[str] = []

    for equipment_id in sorted(unowned_ids - cz002_ids):
        errors.append(
            "MD-004 Status != Owned missing from CZ-002 "
            f"Current Watch List: {equipment_id}"
        )

    for equipment_id in sorted(cz002_ids - unowned_ids):
        entry = md004.get(equipment_id)

        if entry is None:
            errors.append(
                "CZ-002 Current Watch List references an ID that "
                f"does not exist in MD-004: {equipment_id}"
            )

        elif entry.status is None:
            # Vacant / Retired placeholder — not a sync error.
            continue

        elif entry.domain in EXCLUDED_DOMAINS:
            errors.append(
                "CZ-002 Current Watch List references "
                f"{equipment_id}, which is a Coffee/Kitchen "
                "domain ID and must not be tracked here"
            )

        elif is_unconfirmed_entry(entry):
            errors.append(
                "CZ-002 Current Watch List references "
                f"{equipment_id}, but its Brand/Product is still "
                "Unconfirmed in MD-004 (should be managed via "
                "CZ-001 instead)"
            )

        else:
            errors.append(
                "CZ-002 Current Watch List references "
                f"{equipment_id}, but MD-004 Status = "
                f"{entry.status} (expected Essential/Candidate/"
                "Upgrade)"
            )

    return errors


def check_md001_equipment_id_existence(
    md004: dict[str, RegistryEntry],
    md001_references: dict[str, int],
) -> list[str]:
    """
    Every Equipment ID referenced by MD-001 must exist in MD-004.
    """

    errors: list[str] = []

    for equipment_id, line_number in sorted(
        md001_references.items(),
        key=lambda item: item[1],
    ):
        if equipment_id not in md004:
            errors.append(
                f"MD-001 line {line_number} references "
                f"{equipment_id}, which does not exist in MD-004"
            )

    return errors


def check_md001_ownership_annotation(
    md004: dict[str, RegistryEntry],
    md001_text: str,
    md001_references: dict[str, int],
) -> list[str]:
    """
    WARNING-tier check: when MD-001 references an Equipment ID whose
    MD-004 Status is Essential/Candidate/Upgrade (i.e. not yet
    Owned), the same line should carry an explicit non-ownership
    annotation (e.g. "未所有", "Status = Essential"), matching the
    pattern already used elsewhere in MD-001 (e.g. "RT-01AC01 / ECHO
    LAMP（未所有・MD-004 LGT-043 Status = Essential）").

    This is a line-proximity heuristic and can misfire (e.g. if the
    annotation is on an adjacent line rather than the same one), so
    it is reported as a warning, never as an error.
    """

    lines = md001_text.splitlines()

    warnings: list[str] = []

    for equipment_id, line_number in sorted(
        md001_references.items(),
        key=lambda item: item[1],
    ):
        entry = md004.get(equipment_id)

        if entry is None or entry.status is None:
            continue

        status_norm = normalize(entry.status)

        if status_norm not in UNOWNED_STATUSES:
            continue

        line_text = lines[line_number - 1]
        haystack = normalize(line_text)

        annotated = entry.status.lower() in haystack or any(
            marker in haystack
            for marker in MD001_UNOWNED_ANNOTATION_MARKERS
        )

        if not annotated:
            warnings.append(
                f"MD-001 line {line_number} references "
                f"{equipment_id} (MD-004 Status = {entry.status}) "
                "without an explicit unowned annotation on that "
                "line"
            )

    return warnings


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
        help="Path to MD-004 (the MD/MD-004 folder, or a single file)",
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

    parser.add_argument(
        "--cz001",
        required=True,
        help="Path to CZ-001",
    )

    parser.add_argument(
        "--cz002",
        required=True,
        help="Path to CZ-002",
    )

    parser.add_argument(
        "--md001",
        required=True,
        help="Path to MD-001",
    )

    args = parser.parse_args()

    try:
        md004_text = read_md004_text(Path(args.md004))

        md004 = parse_md004(md004_text)

        md004_registry = parse_md004_registry(md004_text)

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

        cz001_text = read_text(Path(args.cz001))
        cz001_confirmed_pending_ids = parse_cz001_confirmed_pending(
            cz001_text
        )

        cz002_text = read_text(Path(args.cz002))
        cz002_watch_list_ids = parse_cz002_watch_list(cz002_text)

        md001_text = read_text(Path(args.md001))
        md001_references = extract_equipment_id_references(
            md001_text
        )

    except Exception as error:
        print("CONFIG ERROR")
        print(str(error))
        return 2

    errors: list[str] = []
    warnings: list[str] = []

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
    # Cross-Zone Ops: MD-004 <-> CZ-001 / CZ-002, MD-001 -> MD-004
    # --------------------------------------------------------

    errors.extend(
        check_md004_essential_vs_cz001(
            md004_registry,
            cz001_confirmed_pending_ids,
        )
    )

    errors.extend(
        check_md004_unowned_vs_cz002(
            md004_registry,
            cz002_watch_list_ids,
        )
    )

    errors.extend(
        check_md001_equipment_id_existence(
            md004_registry,
            md001_references,
        )
    )

    warnings.extend(
        check_md001_ownership_annotation(
            md004_registry,
            md001_text,
            md001_references,
        )
    )

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
        "  MD-004 (Essential) <-> CZ-001 Confirmed — Purchase Pending"
    )

    print(
        "  MD-004 (!= Owned) <-> CZ-002 Current Watch List"
    )

    print(
        "  MD-001 (Equipment ID references) -> MD-004"
    )

    print()

    print(
        f"MD-004 registry records: "
        f"{len(md004_registry)}"
    )

    print(
        f"BR-002 Confirmed records: "
        f"{len(br002)}"
    )

    print(
        f"BR-003 acquisition records: "
        f"{len(br003)}"
    )

    print(
        f"CZ-001 Confirmed — Purchase Pending IDs: "
        f"{len(cz001_confirmed_pending_ids)}"
    )

    print(
        f"CZ-002 Current Watch List IDs: "
        f"{len(cz002_watch_list_ids)}"
    )

    print(
        f"MD-001 Equipment ID references: "
        f"{len(md001_references)}"
    )

    print()

    if warnings:
        print(
            f"WARNINGS — {len(warnings)} "
            "advisory finding(s) (does not fail validation)"
        )

        print()

        for index, warning in enumerate(
            warnings,
            start=1,
        ):
            print(
                f"{index}. {warning}"
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
        "PASS — all required SSOT "
        "synchronization checks passed."
    )

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
