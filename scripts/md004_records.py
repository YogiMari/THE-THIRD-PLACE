#!/usr/bin/env python3

"""
THE THIRD PLACE — MD-004 record reader

Reads every field of every MD-004 record (OP-008 §11.2 multi-file layout:
one entry file plus one file per Domain). Read-only; shared by the MD-004
checks. A record starts at a "## ID" heading; a field is a standalone
"**Name**" line or a "### Name" heading, and its value is the lines that
follow, up to the next field, heading or rule.

third_place_sync_validator.py keeps its own reader (Brand / Product / Status
only) and is deliberately left as it is.
"""

from __future__ import annotations

import re
import subprocess
from dataclasses import dataclass, field
from pathlib import Path

ENTRY_MARKER = "Registry_Object_Reference"

ID_HEADER_RE = re.compile(r"^##\s+([A-Z]{2,4}-[0-9A-Za-z_]+)\s*$")
VERSION_RE = re.compile(r"\*\*Version\*\*:\s*([0-9]+(?:\.[0-9]+)*)")
BOLD_FIELD_RE = re.compile(r"^\*\*(.+?)\*\*$")
HEADING_FIELD_RE = re.compile(r"^###\s+(.+?)\s*$")
FILE_PREFIX_RE = re.compile(r"^MD-004_([A-Z]{2,4})_")


@dataclass
class Record:
    id: str
    file: str
    fields: dict[str, list[str]] = field(default_factory=dict)
    body: list[str] = field(default_factory=list)  # non-empty lines, headings excluded

    def first(self, name: str) -> str | None:
        lines = self.fields.get(name)
        return lines[0] if lines else None

    @property
    def lead(self) -> str:
        """First free line of the record (where Retired / Vacant is written)."""
        return self.body[0] if self.body else ""


@dataclass
class Registry:
    records: dict[str, Record]
    duplicates: list[tuple[str, str, str]]  # (id, first file, second file)
    entry_text: str
    entry_version: str | None


def parse_files(files: list[tuple[str, str]]) -> Registry:
    """files: (file name, text) pairs. The entry file is told by its name."""
    records: dict[str, Record] = {}
    duplicates: list[tuple[str, str, str]] = []
    entry_text = ""

    for name, text in files:
        if ENTRY_MARKER in name:
            entry_text = text  # the older single-file layout keeps records here too

        current: Record | None = None
        current_field: str | None = None

        for line in text.splitlines():
            stripped = line.strip()

            match = ID_HEADER_RE.match(stripped)
            if match:
                record_id = match.group(1)
                if record_id in records:
                    duplicates.append((record_id, records[record_id].file, name))
                    current = Record(record_id, name)  # keep scanning; not stored
                else:
                    current = Record(record_id, name)
                    records[record_id] = current
                current_field = None
                continue

            if current is None:
                continue

            field_match = BOLD_FIELD_RE.match(stripped) or HEADING_FIELD_RE.match(stripped)
            if field_match:
                current_field = field_match.group(1).strip()
                current.fields.setdefault(current_field, [])
                continue

            if re.match(r"^#{1,2}\s", stripped):
                current = None  # a section outside the records (e.g. Version History)
                current_field = None
                continue

            if stripped.startswith("#") or stripped == "---":
                current_field = None
                continue

            if stripped:
                if current_field is None:
                    current.body.append(stripped)
                else:
                    current.fields[current_field].append(stripped)

    version_match = VERSION_RE.search(entry_text)
    return Registry(
        records=records,
        duplicates=duplicates,
        entry_text=entry_text,
        entry_version=version_match.group(1) if version_match else None,
    )


def load_path(path: Path) -> Registry:
    """A folder (MD-004 entry + Domain files) or a single legacy file."""
    if path.is_dir():
        paths = sorted(path.glob("MD-004_*.md"))
        if not paths:
            raise FileNotFoundError(f"No MD-004 files in: {path}")
    elif path.exists():
        paths = [path]
    else:
        raise FileNotFoundError(f"File not found: {path}")
    return parse_files([(p.name, p.read_text(encoding="utf-8")) for p in paths])


def _git(*args: str) -> str:
    result = subprocess.run(
        ["git", *args], capture_output=True, text=True, encoding="utf-8"
    )
    if result.returncode != 0:
        raise RuntimeError(f"git {' '.join(args)}: {result.stderr.strip()}")
    return result.stdout


def load_git(ref: str) -> Registry:
    """MD-004 as of a git ref (folder layout, or the older single file)."""
    names = _git("ls-tree", "-r", "--name-only", ref, "--", "MD/").splitlines()
    paths = [n for n in names if re.match(r"^MD/(MD-004/)?MD-004_[^/]+\.md$", n)]
    if not paths:
        raise FileNotFoundError(f"No MD-004 files at {ref}")
    return parse_files(
        [(Path(p).name, _git("show", f"{ref}:{p}")) for p in sorted(paths)]
    )


def file_prefix(file_name: str) -> str | None:
    match = FILE_PREFIX_RE.match(file_name)
    return match.group(1) if match else None


def version_tuple(version: str) -> tuple[int, ...]:
    return tuple(int(part) for part in version.split("."))
