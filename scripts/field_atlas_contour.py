#!/usr/bin/env python3

"""
THE THIRD PLACE — Field Atlas Contour generator

Builds Field Atlas Contour, the monochrome topographic edition of Field Atlas Nocturne
(a single self-contained HTML file): the same 3D map of Kanto, road
routes, photos, 10-axis analysis and early check-in record, drawn as
a monochrome survey sheet: graphite ground, white contour lines, square flat instruments.

It shares everything except the page template with the Nocturne:

    MD-002 Field Atlas Landscape Framework   -> fields, scores, early check-in,
                                                ground, benchmark site
    DB-001 Project Ledger §Field Log         -> next camp and camp records
    scripts/data/field_atlas/      -> prefectures, locations,
                                                routes, photos
    scripts/templates/field_atlas_contour.html -> this page's design

Design and rebuild notes: scripts/data/field_atlas/README.md
(section "Field Atlas Contour").

Usage:
    python3 scripts/field_atlas_contour.py \
        --md002 MD/MD-002_Field_Atlas_Landscape_Framework.md \
        --out field-atlas-contour.html
"""

import argparse
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))
import field_atlas_nocturne  # noqa: E402  (shared data loading and injection)

TEMPLATE = Path(__file__).parent / "templates" / "field_atlas_contour.html"


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__.split("\n\n")[1])
    parser.add_argument("--md002", required=True, type=Path)
    parser.add_argument("--out", required=True, type=Path)
    args = parser.parse_args()

    html, warnings = field_atlas_nocturne.build(args.md002, TEMPLATE)
    args.out.write_text(html, encoding="utf-8")
    for w in warnings:
        print("warning:", w, file=sys.stderr)
    print(f"Field Atlas Contour -> {args.out} ({len(html) // 1024} KB)")


if __name__ == "__main__":
    main()
