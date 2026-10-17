const fs = require("node:fs/promises");
const path = require("node:path");
const Critters = require("critters");

const appDirectory = path.join(process.cwd(), ".next", "server", "app");
const optimizer = new Critters({
    ssrMode: true,
    reduceInlineStyles: false,
    path: path.join(process.cwd(), ".next"),
    publicPath: "/_next/",
    preload: "media",
    fonts: false,
});

async function optimizeHtml(directory) {
    for (const entry of await fs.readdir(directory, { withFileTypes: true })) {
        const entryPath = path.join(directory, entry.name);

        if (entry.isDirectory()) {
            await optimizeHtml(entryPath);
        } else if (entry.isFile() && entry.name.endsWith(".html")) {
            const html = await fs.readFile(entryPath, "utf8");
            const optimizedHtml = await optimizer.process(html);
            const seenStylesheetTags = new Set();
            const deduplicatedHtml = optimizedHtml.replace(
                /<link\b[^>]*rel="stylesheet"[^>]*>/g,
                (tag) => {
                    if (seenStylesheetTags.has(tag)) return "";
                    seenStylesheetTags.add(tag);
                    return tag;
                }
            );
            await fs.writeFile(entryPath, deduplicatedHtml);
        }
    }
}

optimizeHtml(appDirectory).catch((error) => {
    console.error("Failed to inline critical CSS:", error);
    process.exitCode = 1;
});