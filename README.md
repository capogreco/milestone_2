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