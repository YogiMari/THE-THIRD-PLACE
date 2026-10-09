#!/usr/bin/env python3

"""
THE THIRD PLACE — Field Atlas generator (Nocturne and Aubade in one page)

Builds Field Atlas, one self-contained HTML file that carries both map editions,
the dark Field Atlas Nocturne and the light Field Atlas Aubade. The page data
(fields, map, routes, photos, Field Log ...) is held once; the edition in view
runs in a frame built from its own template. Clicking the title of either
edition switches to the other with the same field selected; only the design
changes.

    field_atlas_nocturne.assemble()            -> the page data, as for the single editions
    scripts/templates/field_atlas_nocturne.html -> the Nocturne edition
    scripts/templates/field_atlas_aubade.html   -> the Aubade edition
    scripts/templates/field_atlas_duo.html      -> the host page (frame, switch, transition)

Design and rebuild notes: scripts/data/field_atlas/README.md
(section "Field Atlas (Nocturne and Aubade in one page)").

Usage:
    python3 scripts/field_atlas_duo.py \
        --md002 MD/MD-002_Field_Atlas_Landscape_Framework.md \
        --out field-atlas.html
"""

import argparse
import json
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))
import field_atlas_nocturne as nav  # noqa: E402  (shared data loading)

HERE = Path(__file__).parent
TEMPLATE = HERE / "templates" / "field_atlas_duo.html"
PAGE_URL = "https://claude.ai/artifact/HtkBNByrze3ttmUzEEEvDm"
# the editions in switching order (the first is the default): template, name, accent of the switch ring
SKINS = {
    "nocturne": (nav.TEMPLATE, "Nocturne", "#3FF0FF"),
    "aubade": (HERE / "templates" / "field_atlas_aubade.html", "Aubade", "#D97757"),
}


def script_safe(text: str) -> str:
    """JSON text that can sit inside a <script> element (no '<' at all)."""
    return text.replace("<", "\\u003c")


def build(md002: Path, db001: Path = nav.DB001, md004: Path = nav.MD004) -> tuple[str, list[str]]:
    pieces, version, warnings = nav.assemble(md002, db001, md004)
    skins = {}
    for key, (template, name, accent) in SKINS.items():
        html = nav.page_script(template, version)
        for ph, piece in nav.PLACEHOLDERS.items():
            if html.count(ph) != 1:
                warnings.append(f"{template.name}: expected one {ph}, found {html.count(ph)}")
            html = html.replace(ph, "FA_D." + piece)
        skins[key] = {"name": name, "accent": accent, "html": html}
    page = (
        TEMPLATE.read_text(encoding="utf-8")
        .replace("/*__PIECES__*/{}", script_safe(nav.js(pieces)))
        .replace("/*__SKINS__*/{}", script_safe(nav.js(skins)))
        .replace("__PAGE_URL__", PAGE_URL)
    )
    return page, warnings


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__.split("\n\n")[1])
    parser.add_argument("--md002", required=True, type=Path)
    parser.add_argument("--out", required=True, type=Path)
    args = parser.parse_args()

    html, warnings = build(args.md002)
    args.out.write_text(html, encoding="utf-8")
    for w in warnings:
        print("warning:", w, file=sys.stderr)
    print(f"Field Atlas (Nocturne + Aubade) -> {args.out} ({len(html) // 1024} KB)")


if __name__ == "__main__":
    main()
