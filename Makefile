# PhD Milestone 2 Document Build System

# Variables
SOURCE = milestone_2.md
OUTPUT = milestone_2.pdf
BIBLIOGRAPHY = distributed_synthesis.bib
CSL = apa.csl

# Default target
all: pdf

# Generate PDF with bibliography
pdf: $(OUTPUT)

$(OUTPUT): $(SOURCE) $(BIBLIOGRAPHY) $(CSL)
	pandoc $(SOURCE) \
		-o $(OUTPUT) \
		--bibliography=$(BIBLIOGRAPHY) \
		--csl=$(CSL) \
		--pdf-engine=xelatex \
		--number-sections \
		--toc \
		--citeproc \
		--metadata-file=metadata.yaml \
		2>/dev/null || \
	pandoc $(SOURCE) \
		-o $(OUTPUT) \
		--bibliography=$(BIBLIOGRAPHY) \
		--csl=$(CSL) \
		--pdf-engine=xelatex \
		--number-sections \
		--toc \
		--citeproc

# Clean generated files
clean:
	rm -f $(OUTPUT)

# Open the generated PDF (macOS)
open: pdf
	open $(OUTPUT)

# Watch for changes and rebuild (requires entr: brew install entr)
watch:
	echo $(SOURCE) $(BIBLIOGRAPHY) | tr ' ' '\n' | entr make pdf

.PHONY: all pdf clean open watch