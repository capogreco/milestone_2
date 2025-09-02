#!/usr/bin/env deno run --allow-read --allow-run

const WATCH_FILE = "./milestone_2.md";
const ABSOLUTE_WATCH_FILE = "/Users/capo_greco/Documents/milestone_2/milestone_2.md";
const BUILD_COMMAND = ["make", "pdf"];

console.log("🔄 Starting file watcher for milestone_2.md");
console.log("📝 Will regenerate PDF on file changes...\n");

async function buildPdf() {
  console.log("🔨 Building PDF...");
  
  try {
    const process = new Deno.Command(BUILD_COMMAND[0], {
      args: BUILD_COMMAND.slice(1),
      stdout: "piped",
      stderr: "piped",
    });
    
    const { code, stdout, stderr } = await process.output();
    
    if (code === 0) {
      console.log("✅ PDF generated successfully!");
      
      // Touch file for Skim auto-refresh
      try {
        const touchProcess = new Deno.Command("touch", {
          args: ["milestone_2.pdf"],
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
await buildPdf();

// Watch for file changes
const watcher = Deno.watchFs(WATCH_FILE);

for await (const event of watcher) {
  console.log(`📊 Event: ${event.kind}, Paths: ${event.paths}`);
  
  if (event.kind === "modify" && 
      (event.paths.includes(WATCH_FILE) || event.paths.includes(ABSOLUTE_WATCH_FILE))) {
    console.log(`📄 ${WATCH_FILE} changed, rebuilding...`);
    await buildPdf();
  }
}