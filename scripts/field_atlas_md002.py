#!/usr/bin/env python3

"""
THE THIRD PLACE — Field Atlas MD-002 parser

The shared reader of MD-002 Field Atlas Landscape Framework for the Field
Atlas pages (Nocturne and Aubade) and their tools
(field_atlas_nocturne.py, field_atlas_aubade.py, field_atlas_fetch.py,
field_atlas_check.py). It builds no page itself.

    Field Atlas Database         -> rank (document order), name,
                                    prefecture, travel time, ground icons,
                                    visited status, Atlas Resonance, Identity
    Sub-Score Table              -> 10-axis scores
    Early Check-in Record        -> early check-in category, detail, source

Scores come only from MD-002. It also names the two script files every page
inserts (CORE_JS, RADAR3D_JS) and joins them in core_script().
"""

import re
import sys
from pathlib import Path

CORE_JS = Path(__file__).parent / "templates" / "field_atlas_core.js"  # helpers and map-free tools shared by both pages
RADAR3D_JS = Path(__file__).parent / "templates" / "field_atlas_radar3d.js"  # the 3D radar renderer, one source for both pages


def core_script() -> str:
    """The script every page shares: core helpers and tools, then the 3D radar renderer."""
    return CORE_JS.read_text(encoding="utf-8") + "\n" + RADAR3D_JS.read_text(encoding="utf-8")

AXES = [
    "Ground", "Layout", "Facility", "Operation", "Comfort",
    "View", "Place", "Experience", "近さ", "Partner",
]

EARLY_TIERS = {
    "早い": "A",
    "可": "B",
    "条件付き": "C",
    "不可": "D",
    "不明": "U",
}

UNVISITED_SUFFIX = "（未訪問・調査ベース暫定値）"

# Ground surface icons (OP-010 Part C §Display Rules, Ground Surface)
GROUND_ICONS = {"🪨": "Gravel", "⛰": "Rock", "🌱": "Grass", "🌲": "Forest", "🟫": "Soil", "🧱": "Brick Chips"}


def section(text: str, heading: str, next_heading_prefix: str) -> str:
    """Return the text under `heading` up to the next heading of the same level."""
    start = text.index(heading)
    rest = text[start + len(heading):]
    match = re.search(rf"^{re.escape(next_heading_prefix)} ", rest, re.M)
    return rest[: match.start()] if match else rest


def table_rows(block: str) -> list[list[str]]:
    """Return the cells of every Markdown table row in `block`, header included."""
    rows = []
    for line in block.splitlines():
        line = line.strip()
        if not line.startswith("|") or re.match(r"^\|[\s:|-]+\|$", line):
            continue
        rows.append([cell.strip() for cell in line.strip("|").split("|")])
    return rows


def parse_version(text: str) -> str:
    match = re.search(r"^\*\*Version\*\*:\s*([\d.]+)", text, re.M)
    if not match:
        sys.exit("MD-002: Version not found")
    return match.group(1)


def parse_database(text: str) -> list[dict]:
    """Field Atlas Database rows, in document order."""
    block = section(text, "# Field Atlas Database", "#")
    fields = []

    for cells in table_rows(block)[1:]:
        left = cells[0].replace("**", "").strip()
        identity = " | ".join(cells[1:]).replace("**", "").strip()

        match = re.match(
            r"^(\d+)(\(暫定\))?／100｜(.+)$", left
        )
        if not match:
            sys.exit(f"MD-002 Field Atlas Database: unreadable row: {left}")

        body = match.group(3).strip()
        place = re.match(r"^(.*)（([^（）]+)）\s*(?:([\d.]+)h)?\s*(.*)$", body)
        if not place:
            sys.exit(f"MD-002 Field Atlas Database: unreadable field: {body}")

        tag, _, note = identity.partition("<br>")
        icons = place.group(4).strip()
        ground = [c for c in icons if c in GROUND_ICONS]
        if any(c not in GROUND_ICONS and not c.isspace() and c != "️" for c in icons):
            sys.exit(f"MD-002 Field Atlas Database: unknown ground icon: {body}")

        fields.append(
            {
                "name": place.group(1).strip(),
                "pref": place.group(2).strip(),
                "hours": float(place.group(3)) if place.group(3) else None,
                "visited": match.group(2) is None,
                "total": int(match.group(1)),
                "tag": tag.strip(),
                "note": note.strip(),
                "ground": ground,
            }
        )

    return fields


def parse_sub_scores(text: str) -> dict[str, list[int]]:
    block = section(text, "## Sub-Score Table", "##")
    rows = table_rows(block)
    header = rows[0]
    index = [header.index(axis) for axis in AXES]

    scores = {}
    for cells in rows[1:]:
        name = cells[0].replace(UNVISITED_SUFFIX, "").strip()
        try:
            scores[name] = [int(cells[i]) for i in index]
        except ValueError:
            sys.exit(f"MD-002 Sub-Score Table: unrecorded axis for {name}")
    return scores


def parse_early(text: str) -> dict[str, dict]:
    block = section(text, "## Early Check-in Record", "##")
    early = {}
    for cells in table_rows(block)[1:]:
        name, label, detail, source = cells[:4]
        if label not in EARLY_TIERS:
            sys.exit(f"MD-002 Early Check-in Record: unknown category {label}")
        early[name] = {
            "tier": EARLY_TIERS[label],
            "label": label,
            "detail": detail,
            "source": source,
        }
    return early


def build(md002: Path) -> tuple[list[dict], str]:
    text = md002.read_text(encoding="utf-8")
    version = parse_version(text)
    fields = parse_database(text)
    scores = parse_sub_scores(text)
    early = parse_early(text)

    missing = [
        f["name"]
        for f in fields
        if f["name"] not in scores or f["name"] not in early
    ]
    if missing:
        sys.exit(
            "MD-002: fields missing from Sub-Score Table or "
            f"Early Check-in Record: {missing}"
        )

    # rank = Field Atlas Database order (OP-010 Part C §Ranking Philosophy).
    data = []
    for rank, field in enumerate(fields, 1):
        if sum(scores[field["name"]]) != field["total"]:
            sys.exit(
                f"MD-002: Atlas Resonance {field['total']} does not match "
                f"the Sub-Score Table for {field['name']}"
            )
        data.append(
            {
                **field,
                "rank": rank,
                "axes": scores[field["name"]],
                "early": early[field["name"]],
            }
        )
    return data, version
