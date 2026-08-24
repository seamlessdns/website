import type { Metadata } from "next";
import Link from "next/link";
import { readFileSync } from "node:fs";
import path from "node:path";
import type { ReactNode } from "react";
import styles from "./sponsors.module.css";

export const metadata: Metadata = {
  title: "Sponsor Seamless",
  description:
    "Invest in open, neutral domain infrastructure built for long-term, cost-based operation.",
};

const githubUrl = "https://github.com/seamlessdns";
const sourceUrl = "https://github.com/seamlessdns/website/blob/main/SPONSORS.md";

function ArrowIcon() {
  return <span className="external-arrow" aria-hidden="true">↗︎</span>;
}

function inlineMarkdown(value: string): ReactNode[] {
  return value
    .split(/(\*\*[^*]+\*\*)/g)
    .filter(Boolean)
    .map((part, index) =>
      part.startsWith("**") && part.endsWith("**") ? (
        <strong key={index}>{part.slice(2, -2)}</strong>
      ) : (
        part
      ),
    );
}

function MarkdownDocument({ source }: { source: string }) {
  const lines = source.trim().split("\n");
  const blocks: ReactNode[] = [];

  for (let index = 0; index < lines.length; ) {
    const line = lines[index].trim();

    if (!line) {
      index += 1;
      continue;
    }

    if (line.startsWith("# ")) {
      blocks.push(<h1 key={index}>{inlineMarkdown(line.slice(2))}</h1>);
      index += 1;
      continue;
    }

    if (line.startsWith("## ")) {
      blocks.push(<h2 key={index}>{inlineMarkdown(line.slice(3))}</h2>);
      index += 1;
      continue;
    }

    if (line.startsWith("### ")) {
      blocks.push(<h3 key={index}>{inlineMarkdown(line.slice(4))}</h3>);
      index += 1;
      continue;
    }

    if (line.startsWith("- ")) {
      const items: ReactNode[] = [];
      while (index < lines.length && lines[index].trim().startsWith("- ")) {
        items.push(
          <li key={index}>{inlineMarkdown(lines[index].trim().slice(2))}</li>,
        );
        index += 1;
      }
      blocks.push(<ul key={`list-${index}`}>{items}</ul>);
      continue;
    }

    if (
      line.startsWith("|") &&
      index + 1 < lines.length &&
      /^\|(?:\s*:?-+:?\s*\|)+$/.test(lines[index + 1].trim())
    ) {
      const rows: string[][] = [];
      while (index < lines.length && lines[index].trim().startsWith("|")) {
        rows.push(
          lines[index]
            .trim()
            .slice(1, -1)
            .split("|")
            .map((cell) => cell.trim()),
        );
        index += 1;
      }
      const [head, , ...body] = rows;
      blocks.push(
        <div className={styles.tableScroll} key={`table-${index}`}>
          <table>
            <thead>
              <tr>
                {head.map((cell) => <th key={cell}>{inlineMarkdown(cell)}</th>)}
              </tr>
            </thead>
            <tbody>
              {body.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{inlineMarkdown(cell)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>,
      );
      continue;
    }

    const paragraph = [line];
    index += 1;
    while (
      index < lines.length &&
      lines[index].trim() &&
      !/^(#{1,3} |- |\|)/.test(lines[index].trim())
    ) {
      paragraph.push(lines[index].trim());
      index += 1;
    }
    blocks.push(<p key={`p-${index}`}>{inlineMarkdown(paragraph.join(" "))}</p>);
  }

  return <>{blocks}</>;
}

export default function SponsorsPage() {
  const markdown = readFileSync(path.join(process.cwd(), "SPONSORS.md"), "utf8");

  return (
    <main>
      <header className="site-header">
        <Link className="wordmark" href="/" aria-label="Seamless home">
          <span className="wordmark-mark" aria-hidden="true">S</span>
          <span>Seamless</span>
        </Link>
        <nav aria-label="Primary navigation">
          <Link href="/#why">Why Seamless</Link>
          <Link href="/#building">What we&apos;re building</Link>
          <Link href="/#governance">Governance</Link>
          <Link href="/#community">Community</Link>
        </nav>
        <a className="button button-small button-outline" href={githubUrl} target="_blank" rel="noreferrer">
          GitHub <ArrowIcon />
        </a>
      </header>

      <section className={styles.hero}>
        <p className="eyebrow"><span /> Sponsorship</p>
        <p>Shared investment for shared infrastructure.</p>
      </section>

      <article className={styles.document}>
        <div className={styles.sourceNote}>
          <span>Canonical source</span>
          <a href={sourceUrl} target="_blank" rel="noreferrer">
            Read SPONSORS.md on GitHub <ArrowIcon />
          </a>
        </div>
        <MarkdownDocument source={markdown} />
      </article>

      <section className="community-section">
        <div>
          <p className="eyebrow"><span /> Build the connection layer with us</p>
          <h2>Invest in infrastructure the ecosystem can share.</h2>
          <p>Start a sponsorship conversation or participate in the project through the Seamless GitHub organization.</p>
        </div>
        <div className="community-actions">
          <a className="button button-light" href={githubUrl} target="_blank" rel="noreferrer">
            Join on GitHub <ArrowIcon />
          </a>
        </div>
      </section>

      <footer>
        <Link className="wordmark footer-wordmark" href="/"><span className="wordmark-mark" aria-hidden="true">S</span><span>Seamless</span></Link>
        <p>Open infrastructure for configuration, discovery, and verification.</p>
        <div className="footer-links">
          <a href={githubUrl} target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.domainconnect.org/" target="_blank" rel="noreferrer">Domain Connect</a>
          <a href="https://datatracker.ietf.org/wg/dconn/about/" target="_blank" rel="noreferrer">IETF</a>
        </div>
        <p className="footer-legal">
          Copyright © SeamlessDNS a Series of LF Projects, LLC
          <br />
          For web site terms of use, trademark policy and other project policies please see{" "}
          <a href="https://lfprojects.org/" target="_blank" rel="noreferrer">lfprojects.org</a>.
        </p>
      </footer>
    </main>
  );
}
