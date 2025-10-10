#!/usr/bin/env deno run --allow-read --allow-run

type WatchTarget = {
  relativePath: string;
  absolutePath: string;
  buildCommand: string[];
  outputPdf: string;
};

const WATCH_TARGETS: WatchTarget[] = [
  {
    relativePath: "./milestone_2.md",
    absolutePath: "/Users/capo_greco/Documents/milestone_2/milestone_2.md",
    buildCommand: ["make", "pdf"],
    outputPdf: "milestone_2.pdf",
  },
  {
    relativePath: "./research_summary.md",
    absolutePath: "/Users/capo_greco/Documents/milestone_2/research_summary.md",
    buildCommand: ["make", "summary"],
    outputPdf: "research_summary.pdf",
  },
];

console.log("🔄 Starting file watcher for Markdown sources:");
for (const target of WATCH_TARGETS) {
  console.log(`- ${target.relativePath} -> ${target.outputPdf}`);
}
console.log("📝 Will regenerate PDFs on file changes...\n");

async function buildPdf(target: WatchTarget) {
  console.log(`🔨 Building PDF for ${target.relativePath}...`);

  try {
    const process = new Deno.Command(target.buildCommand[0], {
      args: target.buildCommand.slice(1),
      stdout: "piped",
      stderr: "piped",
    });

    const { code, stdout, stderr } = await process.output();

    if (code === 0) {
      console.log(`✅ ${target.outputPdf} generated successfully!`);

      // Touch file for Skim auto-refresh
      try {
        const touchProcess = new Deno.Command("touch", {
          args: [target.outputPdf],
        });
        await touchProcess.output();
        console.log("🔄 PDF updated for Skim");
      } catch (refreshError) {
        console.log("⚠️  Could not update PDF timestamp");
      }
    } else {
      console.error("❌ PDF generation failed:");
      console.error(new TextDecoder().decode(stderr));
    }
  } catch (error) {
    console.error("❌ Error running build command:", error.message);
  }
  console.log("");
}

// Build initial PDF
for (const target of WATCH_TARGETS) {
  await buildPdf(target);
}

// Watch for file changes
const watcher = Deno.watchFs(WATCH_TARGETS.map((target) => target.relativePath));

for await (const event of watcher) {
  console.log(`📊 Event: ${event.kind}, Paths: ${event.paths}`);

  if (event.kind === "modify") {
    for (const target of WATCH_TARGETS) {
      if (
        event.paths.includes(target.relativePath) ||
        event.paths.includes(target.absolutePath)
      ) {
        console.log(`📄 ${target.relativePath} changed, rebuilding...`);
        await buildPdf(target);
      }
    }
  }
}
