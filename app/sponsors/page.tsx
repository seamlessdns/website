import type { Metadata } from "next";
import { readFileSync } from "node:fs";
import path from "node:path";
import type { ReactNode } from "react";
import { ExternalArrow, SiteFooter, SiteHeader } from "../components/site-chrome";
import styles from "./sponsors.module.css";

export const metadata: Metadata = {
  title: "Sponsor Seamless",
  description:
    "Invest in open, neutral domain infrastructure built for long-term, cost-based operation.",
};

const githubUrl = "https://github.com/seamlessdns";
const sourceUrl = "https://github.com/seamlessdns/website/blob/main/SPONSORS.md";

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
      <SiteHeader page="sponsors" />

      <section className={styles.hero}>
        <p className="eyebrow"><span /> Sponsorship</p>
        <p>Shared investment for shared infrastructure.</p>
      </section>

      <article className={styles.document}>
        <div className={styles.sourceNote}>
          <span>Canonical source</span>
          <a href={sourceUrl} target="_blank" rel="noreferrer">
            Read SPONSORS.md on GitHub <ExternalArrow />
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
            Join on GitHub <ExternalArrow />
          </a>
        </div>
      </section>

      <SiteFooter page="sponsors" />
    </main>
  );
}
