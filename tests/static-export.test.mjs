import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const outputUrl = new URL("../out/", import.meta.url);

async function exportedHtml(pathname) {
  return readFile(new URL(pathname, outputUrl), "utf8");
}

test("exports the homepage and links to support", async () => {
  const html = await exportedHtml("index.html");

  assert.match(html, /The open connection layer for the Internet\./);
  assert.match(html, /href=["']\/sponsors\/["']/);
  assert.match(html, />Support</);
  assert.match(
    html,
    /<link rel="canonical" href="https:\/\/seamlessconnect\.org\/?"/,
  );
});

test("exports the support page from the canonical sponsor content", async () => {
  const [html, markdown] = await Promise.all([
    exportedHtml("sponsors/index.html"),
    readFile(new URL("../SPONSORS.md", import.meta.url), "utf8"),
  ]);

  const title = markdown.match(/^#\s+(.+)$/m)?.[1];
  assert.ok(title, "SPONSORS.md must contain an H1");
  assert.match(html, new RegExp(title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  assert.match(html, /Fund the neutral layer for automated Internet operations\./);
  assert.match(html, /why-participate/);
  assert.match(html, /toolkit/);
  assert.match(
    html,
    /<link rel="canonical" href="https:\/\/seamlessconnect\.org\/sponsors\/"/,
  );
});

test("exports the stakeholder value and champion toolkit pages", async () => {
  const [whyParticipate, toolkit] = await Promise.all([
    exportedHtml("sponsors/why-participate/index.html"),
    exportedHtml("sponsors/toolkit/index.html"),
  ]);

  assert.match(whyParticipate, /Invest where interoperability becomes economic value\./);
  assert.match(whyParticipate, /Commercial opportunity remains open/);
  assert.match(toolkit, /The 60-second explanation/);
  assert.match(toolkit, /Technical participation is not a membership benefit\./);
  assert.match(
    whyParticipate,
    /<link rel="canonical" href="https:\/\/seamlessconnect\.org\/sponsors\/why-participate\/"/,
  );
  assert.match(
    toolkit,
    /<link rel="canonical" href="https:\/\/seamlessconnect\.org\/sponsors\/toolkit\/"/,
  );
});

test("states the full scope and protocol-agnostic approach", async () => {
  const [homepage, sponsors, whyParticipate, toolkit] = await Promise.all([
    exportedHtml("index.html"),
    exportedHtml("sponsors/index.html"),
    exportedHtml("sponsors/why-participate/index.html"),
    exportedHtml("sponsors/toolkit/index.html"),
  ]);

  assert.match(homepage, /protocol best suited to each task/);
  assert.match(homepage, /may or may not use domains or DNS/);
  assert.match(sponsors, /protocol agnostic/);
  assert.match(sponsors, /domain and agent operations/);
  assert.match(whyParticipate, /Value by operation category/);
  assert.match(toolkit, /Is Seamless a DNS or domain project\?/);
  assert.match(toolkit, /Foundation for Agentic Networks/);
});

test("keeps competitive positioning vendor-neutral", async () => {
  const pages = await Promise.all([
    exportedHtml("index.html"),
    exportedHtml("sponsors/index.html"),
    exportedHtml("sponsors/why-participate/index.html"),
    exportedHtml("sponsors/toolkit/index.html"),
  ]);

  for (const page of pages) {
    assert.doesNotMatch(page, /Entri|GoDaddy/i);
  }
});

test("does not export legacy SeamlessDNS branding", async () => {
  const pages = await Promise.all([
    exportedHtml("index.html"),
    exportedHtml("sponsors/index.html"),
    exportedHtml("sponsors/why-participate/index.html"),
    exportedHtml("sponsors/toolkit/index.html"),
  ]);

  for (const page of pages) {
    assert.doesNotMatch(page, /SeamlessDNS|Seamless DNS/);
  }
});

test("exports the favicon", async () => {
  await access(new URL("favicon.svg", outputUrl));
});
