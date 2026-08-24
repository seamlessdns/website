import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const outputUrl = new URL("../out/", import.meta.url);

async function exportedHtml(pathname) {
  return readFile(new URL(pathname, outputUrl), "utf8");
}

test("exports the homepage and links to sponsors", async () => {
  const html = await exportedHtml("index.html");

  assert.match(html, /The open connection layer for the Internet\./);
  assert.match(html, /href=["']\/sponsors\/["']/);
});

test("exports the sponsor page from the canonical sponsor content", async () => {
  const [html, markdown] = await Promise.all([
    exportedHtml("sponsors/index.html"),
    readFile(new URL("../SPONSORS.md", import.meta.url), "utf8"),
  ]);

  const title = markdown.match(/^#\s+(.+)$/m)?.[1];
  assert.ok(title, "SPONSORS.md must contain an H1");
  assert.match(html, new RegExp(title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  assert.match(html, /Read SPONSORS\.md on GitHub/);
});

test("exports the favicon", async () => {
  await access(new URL("favicon.svg", outputUrl));
});
