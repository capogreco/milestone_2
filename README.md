# PhD Milestone 2 Document

This project contains a markdown-based workflow for generating academic PDF documents with bibliography support.

## Setup

1. Ensure pandoc is installed: `brew install pandoc` (macOS) or equivalent
2. Install LaTeX distribution: `brew install --cask mactex` (macOS) or equivalent

## Zotero Bibliography Export

To use your Zotero library:

1. In Zotero, select the items you want to cite
2. Right-click and choose "Export Items..."
3. Select "BibTeX" format
4. Save as `bibliography.bib` in this directory (overwriting the sample file)

## Building the PDF

Run the build command:
```bash
make pdf
```

Or manually:
```bash
pandoc milestone_2.md -o milestone_2.pdf --bibliography=bibliography.bib --csl=apa.csl --pdf-engine=xelatex
```

## File Structure

- `milestone_2.md` - Main document content
- `bibliography.bib` - Bibliography file (export from Zotero)
- `apa.csl` - APA citation style
- `Makefile` - Build automation
- `milestone_2.pdf` - Generated PDF output

## Citations from Zed (fzf picker)

You can add Pandoc citations quickly via a small Deno script that reads the bibliography path from `metadata.yaml`.

Requirements:

- Deno
- fzf (`brew install fzf`)

Usage:

- Run `deno task cite` (or Zed → Command Palette → Tasks: Run Task → `cite`).
- Fuzzy-search by author, year, title, or key; press Enter to select.
- Use Tab for multi-select. Ctrl-A selects all.
- For a single selection you can enter a locator (e.g., `p. 42`).
- For multiple selections you can enter a shared locator that applies to each citation.
- The script copies a Pandoc snippet to your clipboard; paste it at the cursor.

Examples:

- Single: `[@key]` or `[@key, p. 42]`
- Multiple (no locator): `[@key1; @key2]`
- Multiple (shared locator): `[@key1, p. 10; @key2, p. 10]`

Notes:

- The script reads `bibliography` from `metadata.yaml`. If it’s a list, it merges entries from all existing `.bib` files.
- Ensure `metadata.yaml` points to the bibliography you want to search (this repo defaults to `distributed_synthesis.bib`).

## Zed keybinding

This repo includes a project keybinding to run the cite task:

- `.zed/keymap.json` binds `Cmd-Alt-C` to run the `cite` task.
- Change the key or remove the file if you prefer a global binding.

If Zed does not pick up the binding in your setup:

- Open Zed Settings → Key Bindings, and add an entry mapping your preferred chord to the command that runs the `cite` task.
- Or use the Command Palette and run “Tasks: Run Task” → `cite`, then “Tasks: Run Again” can be bound to a shortcut for quick repeats.

## Paragraph indentation style

Paragraphs are indented except the first after a section heading (classic thesis style). This is set in `metadata.yaml` via:

- `\parindent` set to `1.5em`
- `\parskip` set to `0em`

This leverages LaTeX’s default behavior of not indenting the first paragraph after a `\section`.
