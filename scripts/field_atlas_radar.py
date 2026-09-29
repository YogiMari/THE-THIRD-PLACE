#!/usr/bin/env python3

"""
THE THIRD PLACE — Field Atlas Radar generator

Builds the Field Atlas Radar page (a single self-contained HTML file)
from MD-002 Field Atlas Landscape Framework:

    Field Atlas Database         -> rank (document order), name,
                                    prefecture, travel time,
                                    visited status, Atlas Resonance, Identity
    Sub-Scores
        Sub-Score Table          -> 10-axis scores
        Early Check-in Record    -> early check-in category, detail, source

MD-002 is the only data source. The page carries no data of its own, so
any conversation can regenerate it after MD-002 changes and republish it
to the same Artifact URL (recorded in MD-002 §Visualization).

Usage:
    python3 scripts/field_atlas_radar.py \
        --md002 MD/MD-002_Field_Atlas_Landscape_Framework.md \
        --out field-atlas-radar.html
"""

import argparse
import datetime
import json
import re
import sys
from pathlib import Path

TEMPLATE = Path(__file__).parent / "templates" / "field_atlas_radar.html"

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

        fields.append(
            {
                "name": place.group(1).strip(),
                "pref": place.group(2).strip(),
                "hours": float(place.group(3)) if place.group(3) else None,
                "visited": match.group(2) is None,
                "total": int(match.group(1)),
                "tag": tag.strip(),
                "note": note.strip(),
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


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__.split("\n\n")[1])
    parser.add_argument("--md002", required=True, type=Path)
    parser.add_argument("--out", required=True, type=Path)
    args = parser.parse_args()

    data, version = build(args.md002)
    html = (
        TEMPLATE.read_text(encoding="utf-8")
        .replace("/*__DATA__*/[]", json.dumps(data, ensure_ascii=False))
        .replace("__MD002_VERSION__", version)
        .replace("__GENERATED__", datetime.date.today().isoformat())
    )
    args.out.write_text(html, encoding="utf-8")
    print(f"Field Atlas Radar: {len(data)} fields from MD-002 Ver.{version} -> {args.out}")


if __name__ == "__main__":
    main()
