#!/usr/bin/env python3

"""
THE THIRD PLACE — Codex Arboris generator

Builds "Arbor of the Third Place" (a single self-contained HTML file):
the illuminated codex of every official document, with the document
tree, the catalogue, the mention matrix, a full-text search across all
documents and a gallery of the MD-004 / MD-003 registries.

Every figure on the page is read from the repository at build time:

    OP-008 §8 Document Series      -> catalogue (ID, Title, Path, Role,
                                      Authority, Volatility, Summary)
    OP-008 §11.1                   -> former titles
    OP-008 Appendix F              -> document profiles (JA / EN)
    OP-001 Appendix C Ver.5.0      -> former IDs (official concordance)
    each document                  -> version, lines, chapters,
                                      mentions of other IDs, full text
    MD-004 / MD-003                -> registry entries (gallery)
    OP-003                         -> vocabulary counts
    archive/                       -> relocated Version History files
    git                            -> commit and last commit per file

The page carries no data of its own, so any conversation can regenerate
it after the documents change and republish it to the same Artifact URL
(recorded in README §Codex).

Usage:
    python3 scripts/codex_arbor.py --out codex-arbor.html
"""

import argparse
import datetime
import json
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
TEMPLATE = Path(__file__).parent / "templates" / "codex_arbor.html"

ID = r"(?:DS|OP|DB|MD|BR|CZ|KN)-\d{3}"
MENTION = re.compile(rf"(?<![A-Za-z0-9])({ID})(?![0-9])")
ENTRY = re.compile(r"^## ([A-Z]{3}-\d{3}[a-z]?)\s*$")

# Headings that every document carries and that say nothing about its contents.
BOILERPLATE = re.compile(
    r"^(Revision History|Version History|Version Control|End of Document|"
    r"Document Renumbering Note|Revision Note.*|Document Information|"
    r"Related Documents|References|Ver\.?\s*[\d.]+.*|Version [\d.]+.*|"
    r"Document ID|Document Title|Version|Status|Authority|Owner)$",
    re.I,
)


def read(path: Path) -> str:
    return path.read_text(encoding="utf-8")


def section(text: str, heading: str) -> str:
    """Return the text under a `# ` heading up to the next `# ` heading."""
    start = text.index(heading)
    rest = text[start + len(heading):]
    match = re.search(r"^# ", rest, re.M)
    return rest[: match.start()] if match else rest


def cells(line: str) -> list[str]:
    return [c.strip() for c in line.strip().strip("|").split("|")]


def parse_catalogue(op008: str) -> list[dict]:
    block = section(op008, "# 8. Document Series")
    docs = []
    for line in block.splitlines():
        if not re.match(rf"\| {ID} \|", line):
            continue
        c = cells(line)
        if len(c) != 7:
            sys.exit(f"OP-008 §8: unexpected row shape: {line[:80]}")
        doc_id, title, path, role, authority, volatility, summary = c
        holds = [
            s.strip("・").strip()
            for s in role.split("<br>")
            if s.startswith("・")
        ]
        docs.append({
            "id": doc_id,
            "title": title,
            "path": path.strip("`"),
            "holds": holds,
            "authority": authority,
            "volatility": volatility,
            "summary": summary,
        })
    if not docs:
        sys.exit("OP-008 §8: no catalogue rows found")
    return docs


def parse_profiles(op008: str) -> dict[str, dict]:
    appendix = op008[op008.index("# Appendix F"):]
    ja, en = appendix.split("## English (EN)")[0], appendix.split("## English (EN)")[1]
    profiles: dict[str, dict] = {}
    for part, key in ((ja, "ja"), (en, "en")):
        for line in part.splitlines():
            m = re.match(rf"\| ({ID}) \| .*? \| (.*) \|$", line)
            if m:
                profiles.setdefault(m.group(1), {})[key] = m.group(2).replace("**", "")
    return profiles


def parse_former_titles(op008: str) -> dict[str, str]:
    block = op008[op008.index("## 11.1"):op008.index("# 12.")]
    former = {}
    for line in block.splitlines():
        m = re.match(rf"\| .*? \| ({ID}) (.+?) \| ({ID}) (.+?) \|$", line.strip())
        if m:
            former[m.group(1)] = m.group(2)
    return former


def parse_former_ids(op001: str) -> dict[str, str]:
    """OP-001 §26 names Appendix C Ver.5.0 as the official concordance."""
    block = op001[op001.index("### Ver.5.0"):op001.index("### Ver.5.1")]
    pairs = re.findall(r"([A-Z]{2}-\d{3})→(" + ID + ")", block)
    if not pairs:
        sys.exit("OP-001 Appendix C Ver.5.0: concordance not found")
    return {new: old for old, new in pairs}


def parse_version(text: str) -> str:
    head = text[:4000]
    patterns = [
        r"\*\*Version\*\*\s*[:：]\s*([\d.]+)",
        r"\*\*Version[:：]\*\*\s*([\d.]+)",
        r"^#{1,3} Version\s*\n+\s*([\d.]+)",
        r"^\*\*Version\*\*\s*\n+\s*([\d.]+)",
        r"^#{1,3} (?:Version|Ver\.)\s*([\d.]+)",
    ]
    for pattern in patterns:
        m = re.search(pattern, head, re.M)
        if m:
            return m.group(1).rstrip(".")
    return ""


def parse_chapters(doc_id: str, text: str) -> list[str]:
    lines = text.splitlines()
    h1 = [l[2:].strip() for l in lines if l.startswith("# ")]
    h2 = [l[3:].strip() for l in lines if l.startswith("## ")]
    heads = h1 if len(h1) >= 6 else h1 + h2
    out = []
    for i, h in enumerate(heads):
        h = re.sub(r"\s+", " ", h).strip()
        if i == 0 and (doc_id in h or "THE THIRD PLACE" in h):
            continue
        if BOILERPLATE.match(h) or re.match(r"^[A-Z]{3}-\d{3}[a-z]?$", h) or h.startswith(doc_id):
            continue
        out.append(h)
    if doc_id == "DS-001":
        merged, i = [], 0
        while i < len(out):
            if re.match(r"^Chapter [IVX]+$", out[i]) and i + 1 < len(out):
                merged.append(f"{out[i]} · {out[i + 1]}")
                i += 2
            else:
                merged.append(out[i])
                i += 1
        out = [x for x in merged if x.startswith("Chapter") or x in ("Foreword", "Epilogue")]
    return out


def parse_registry(text: str) -> list[dict]:
    """Every `## XXX-000` entry with its fields and the domain (`# ` heading) it sits under."""
    entries, domain, current = [], None, None

    def close():
        if current is None:
            return
        body = [l.rstrip() for l in current.pop("_body")]
        fields, label, values = {}, None, []

        def flush():
            if label is not None:
                fields[label] = [v for v in values if v]

        for raw in body:
            line = raw.strip()
            if line == "---":
                break
            m = re.match(r"^\*\*(.+?)\*\*$", line) or re.match(r"^### (.+)$", line)
            if m:
                flush()
                label, values = m.group(1).strip(), []
            elif label is not None:
                values.append(re.sub(r"^- ", "", line).replace("**", ""))
            elif line:
                current.setdefault("_note", []).append(line.replace("**", ""))
        flush()
        one = lambda k: " / ".join(fields.get(k, [])) or None
        record = {
            "id": current["id"],
            "domain": current["domain"],
            "brand": one("Brand"),
            "product": one("Product"),
            "status": one("Status"),
            "parent": one("Parent"),
            "children": fields.get("Child Components", []),
            "color": one("Color"),
            "material": one("Material"),
            "graphic": one("Graphic Attribute"),
            "industrial": one("Industrial Attribute"),
            "price": one("Price"),
            "quantity": one("Quantity"),
            "alias": one("Alias"),
        }
        if not record["status"]:
            note = " ".join(current.get("_note", []))
            record["status"] = note.split(".")[0] if note else "Note"
            record["note"] = note
        entries.append(record)

    for line in text.splitlines():
        if line.startswith("# "):
            close()
            current = None
            domain = re.sub(r"（.*?）", "", line[2:]).strip()
            continue
        m = ENTRY.match(line)
        if m:
            close()
            current = {"id": m.group(1), "domain": domain, "_body": []}
            continue
        if line.startswith("## "):
            close()
            current = None
            continue
        if current is not None:
            current["_body"].append(line)
    close()
    return entries


def parse_lexicon(op003: str) -> list[list]:
    out = []
    for part in re.split(r"^# ", op003, flags=re.M):
        m = re.match(r"\d+\. (.+?) Vocabulary", part)
        if m:
            out.append([m.group(1), len(re.findall(r"^## ", part, re.M))])
    return out


def git(*args: str) -> str:
    try:
        return subprocess.run(
            ["git", "-C", str(ROOT), *args],
            capture_output=True, text=True, check=True,
        ).stdout.strip()
    except (OSError, subprocess.CalledProcessError):
        return ""


def last_commits(paths: list[str]) -> dict[str, str]:
    """Last commit date per file. In a shallow clone, a file whose last
    commit is the shallow boundary is left out: its true date is unknown."""
    boundary = set(git("rev-list", "--max-parents=0", "HEAD").split()) \
        if git("rev-parse", "--is-shallow-repository") == "true" else set()
    out = {}
    for path in paths:
        line = git("log", "-1", "--format=%H %cs", "--", path)
        if line:
            sha, date = line.split()
            if sha not in boundary:
                out[path] = date
    return out


def build(root: Path) -> dict:
    op008 = read(root / "OP/OP-008_Documentation_System.md")
    op001 = read(root / "OP/OP-001_Constitution.md")
    docs = parse_catalogue(op008)
    ids = {d["id"] for d in docs}
    profiles = parse_profiles(op008)
    former_titles = parse_former_titles(op008)
    former_ids = parse_former_ids(op001)
    touched = last_commits([d["path"] for d in docs])

    corpus = []
    for d in docs:
        text = read(root / d["path"])
        d.update(profiles.get(d["id"], {}))
        d["version"] = parse_version(text)
        d["lines"] = text.count("\n")
        d["chapters"] = parse_chapters(d["id"], text)
        d["old"] = former_ids.get(d["id"])
        d["formerTitle"] = former_titles.get(d["id"])
        d["touched"] = touched.get(d["path"])
        refs: dict[str, int] = {}
        for r in MENTION.findall(text):
            if r != d["id"] and r in ids:
                refs[r] = refs.get(r, 0) + 1
        d["refs"] = refs
        entries: dict[str, int] = {}
        for k in re.findall(r"^#{2,3} +([A-Z]{3})-\d{3}[a-z]?\s*$", text, re.M):
            entries[k] = entries.get(k, 0) + 1
        d["entries"] = entries
        corpus.append({"id": d["id"], "path": d["path"], "text": text})
        if not d["version"]:
            print(f"warning: {d['id']}: version not found", file=sys.stderr)

    archive = sorted(p.name for p in (root / "archive").glob("*.md"))
    for name in archive:
        corpus.append({"id": "ARCHIVE", "path": f"archive/{name}", "text": read(root / "archive" / name)})

    gallery = {
        "MD-004": parse_registry(read(root / "MD/MD-004_Equipment_Registry_Object_Reference.md")),
        "MD-003": parse_registry(read(root / "MD/MD-003_Galley_Fare.md")),
    }

    return {
        "docs": docs,
        "archive": archive,
        "lexicon": parse_lexicon(read(root / "OP/OP-003_Affinity_Lexicon.md")),
        "gallery": gallery,
        "corpus": corpus,
        "meta": {
            "commit": git("rev-parse", "--short", "HEAD") or "unknown",
            "commitDate": git("log", "-1", "--format=%cs") or None,
            "generated": datetime.date.today().isoformat(),
            "repo": "YogiMari/THE-THIRD-PLACE",
        },
    }


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__.split("\n\n")[1])
    parser.add_argument("--root", type=Path, default=ROOT)
    parser.add_argument("--out", required=True, type=Path)
    args = parser.parse_args()

    data = build(args.root)
    payload = json.dumps(data, ensure_ascii=False).replace("</", "<\\/")
    html = read(TEMPLATE).replace("/*__DATA__*/{}", payload)
    args.out.write_text(html, encoding="utf-8")
    g = data["gallery"]
    print(
        f"wrote {args.out} — {len(data['docs'])} documents, "
        f"{len(g['MD-004'])} + {len(g['MD-003'])} registry entries, "
        f"commit {data['meta']['commit']}"
    )


if __name__ == "__main__":
    main()
