# PhD Milestone 2 Document Build System

# Variables
SOURCES = milestone_2.md research_summary.md
PDFS = $(SOURCES:.md=.pdf)
SOURCE = milestone_2.md
OUTPUT = milestone_2.pdf
SUMMARY_SOURCE = research_summary.md
SUMMARY_OUTPUT = research_summary.pdf
BIBLIOGRAPHY = distributed_synthesis.bib
CSL = apa.csl
METADATA = metadata.yaml

PANDOC_FLAGS = \
	--bibliography=$(BIBLIOGRAPHY) \
	--csl=$(CSL) \
	--pdf-engine=xelatex \
	--number-sections \
	--toc \
	--citeproc \
	--metadata-file=$(METADATA)

# Default target
all: pdf summary

# Generate PDF with bibliography
pdf: $(OUTPUT)

summary: $(SUMMARY_OUTPUT)

$(OUTPUT): $(SOURCE) $(BIBLIOGRAPHY) $(CSL) $(METADATA)
	pandoc $(SOURCE) -o $(OUTPUT) $(PANDOC_FLAGS) 2>/dev/null || \
	pandoc $(SOURCE) -o $(OUTPUT) $(PANDOC_FLAGS)

$(SUMMARY_OUTPUT): $(SUMMARY_SOURCE) $(BIBLIOGRAPHY) $(CSL) $(METADATA)
	pandoc $(SUMMARY_SOURCE) -o $(SUMMARY_OUTPUT) $(PANDOC_FLAGS) 2>/dev/null || \
	pandoc $(SUMMARY_SOURCE) -o $(SUMMARY_OUTPUT) $(PANDOC_FLAGS)

# Clean generated files
clean:
	rm -f $(PDFS)

# Open the generated PDF (macOS)
open: pdf
	open $(OUTPUT)

# Watch for changes and rebuild (requires entr: brew install entr)
watch:
	echo $(SOURCES) $(BIBLIOGRAPHY) | tr ' ' '\n' | entr make all

.PHONY: all pdf summary clean open watch
