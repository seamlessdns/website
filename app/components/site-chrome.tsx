import Link from "next/link";

const githubUrl = "https://github.com/seamlessdns";

const navigation = [
  ["Why Seamless", "why"],
  ["What we're building", "building"],
  ["Governance", "governance"],
  ["Community", "community"],
] as const;

export function ExternalArrow() {
  return <span className="external-arrow" aria-hidden="true">↗︎</span>;
}

export function SiteHeader({ page }: { page: "home" | "sponsors" }) {
  const homeHref = page === "home" ? "#top" : "/";

  return (
    <header className="site-header">
      <Link className="wordmark" href={homeHref} aria-label="Seamless home">
        <span className="wordmark-mark" aria-hidden="true">S</span>
        <span>Seamless</span>
      </Link>
      <nav aria-label="Primary navigation">
        {navigation.map(([label, fragment]) => (
          <Link key={fragment} href={page === "home" ? `#${fragment}` : `/#${fragment}`}>
            {label}
          </Link>
        ))}
        <Link href="/sponsors/">Support</Link>
      </nav>
      <a
        className="button button-small button-outline"
        href={githubUrl}
        target="_blank"
        rel="noreferrer"
      >
        GitHub <ExternalArrow />
      </a>
    </header>
  );
}

export function SiteFooter({ page }: { page: "home" | "sponsors" }) {
  return (
    <footer>
      <Link
        className="wordmark footer-wordmark"
        href={page === "home" ? "#top" : "/"}
      >
        <span className="wordmark-mark" aria-hidden="true">S</span>
        <span>Seamless</span>
      </Link>
      <p>Open infrastructure for configuration, discovery, authorization, and verification.</p>
      <div className="footer-links">
        <Link href="/sponsors/">Support</Link>
        <a href={githubUrl} target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.domainconnect.org/" target="_blank" rel="noreferrer">Domain Connect</a>
        <a href="https://datatracker.ietf.org/wg/dconn/about/" target="_blank" rel="noreferrer">IETF</a>
      </div>
      <p className="footer-legal">
        Copyright © Seamless a Series of LF Projects, LLC
        <br />
        For web site terms of use, trademark policy and other project policies please see{" "}
        <a href="https://lfprojects.org/" target="_blank" rel="noreferrer">lfprojects.org</a>.
      </p>
    </footer>
  );
}
