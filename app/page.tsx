const githubUrl = "https://github.com/seamlessdns";

const roadmap = [
  {
    phase: "01 / NOW",
    title: "Make DNS configuration interoperable",
    copy: "Operationalize Domain Connect as shared infrastructure with a hosted service, open APIs, SDKs, CLI tooling, registries, and conformance tests.",
    items: ["Hosted Domain Connect service", "Open SDK, CLI, and API", "Templates and conformance"],
    active: true,
  },
  {
    phase: "02 / NEXT",
    title: "Connect the domain lifecycle",
    copy: "Extend coordination beyond DNS records to DNSSEC, nameserver changes, domain transfers, and zone transfers through open, auditable workflows.",
    items: ["Automated DNSSEC", "Domain and zone transfer", "Registrar coordination"],
  },
  {
    phase: "03 / FORWARD",
    title: "Prepare for an agentic Internet",
    copy: "Enable authorized, policy-controlled automation so agents and services can publish, discover, verify, and coordinate without creating new control points.",
    items: ["Agent bootstrap records", "Delegated authorization", "Open discovery patterns"],
  },
];

const principles = [
  ["Open by default", "Specifications, implementations, tests, and registries should be available to every participant."],
  ["Neutral by design", "No single vendor should control how services connect to domains or how interoperability is measured."],
  ["Conformance first", "Objective, reusable tests make compatibility observable and keep integrations dependable at scale."],
  ["Multi-operator", "Infrastructure and artifacts should be portable, mirrorable, and safe to operate independently."],
];

function ArrowIcon() {
  return <span className="external-arrow" aria-hidden="true">↗︎</span>;
}

function SystemMap() {
  return (
    <div className="system-map" aria-label="Developers, platforms, and agents connect through Seamless to Internet service providers">
      <div className="source-row">
        <div className="map-source"><span className="source-icon">&lt;/&gt;</span><span>Developers</span></div>
        <div className="map-source"><span className="source-icon stack-icon">◇</span><span>Platforms</span></div>
        <div className="map-source"><span className="source-icon agent-icon">◎</span><span>Agents</span></div>
      </div>
      <div className="source-connectors" aria-hidden="true">
        <i /><i /><i />
        <span>Open protocol</span>
      </div>
      <div className="seamless-node">
        <span className="s-mark" aria-hidden="true">S</span><strong>Seamless</strong>
        <span className="node-role">Coordination layer</span>
      </div>
      <div className="transfer-lanes" aria-hidden="true">
        <div className="transfer-lane request-lane"><span>Config request</span><i /></div>
        <div className="transfer-lane response-lane"><span>Provider response</span><i /></div>
      </div>
      <div className="provider-node">
        <span className="server-icon" aria-hidden="true"><i /><i /><i /></span><strong>Providers</strong>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Seamless home">
          <span className="wordmark-mark" aria-hidden="true">S</span>
          <span>Seamless</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#why">Why Seamless</a>
          <a href="#building">What we&apos;re building</a>
          <a href="#governance">Governance</a>
          <a href="#community">Community</a>
        </nav>
        <a className="button button-small button-outline" href={githubUrl} target="_blank" rel="noreferrer">
          GitHub <ArrowIcon />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Open, neutral Internet infrastructure</p>
          <h1>The open connection layer for the Internet.</h1>
          <p className="hero-lede">
            Seamless gives developers, platforms, and agents a common way to configure domains and coordinate across providers—through open standards, shared tooling, and neutral infrastructure.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#building">Explore the roadmap <span aria-hidden="true">↓</span></a>
            <a className="button button-outline" href={githubUrl} target="_blank" rel="noreferrer">View on GitHub <ArrowIcon /></a>
          </div>
        </div>
        <SystemMap />
      </section>

      <div className="dns-strip" aria-label="Seamless starts with DNS configuration, verification, and connection">
        <div className="dns-intro"><span className="globe-icon" aria-hidden="true">◎</span><strong>Starting with DNS</strong></div>
        <span><i className="dot dot-green" /> Configure</span>
        <span><i className="dot" /> Verify</span>
        <span><i className="dot dot-blue" /> Connect</span>
      </div>

      <aside className="formation-band" aria-label="Project support and formation status">
        <div className="formation-kicker">Project status</div>
        <div className="formation-item">
          <span className="status status-live">Active</span>
          <p>Currently supported by the <a href="https://projectnanda.org/" target="_blank" rel="noreferrer">Foundation for Agentic Networks (FAN)</a>, home of the MIT-originated Project NANDA.</p>
        </div>
        <div className="formation-item">
          <span className="status status-progress">In formation</span>
          <p>Finalizing project formation with the <a href="https://www.linuxfoundation.org/" target="_blank" rel="noreferrer">Linux Foundation</a> as a neutral home for long-term governance and growth.</p>
        </div>
      </aside>

      <section className="section problem-section" id="why">
        <div className="section-heading">
          <p className="section-index">01 / Why Seamless</p>
          <h2>The Internet is connected.<br />Its configuration isn&apos;t.</h2>
        </div>
        <div className="problem-content">
          <p className="large-copy">Every platform that connects a domain to a service faces the same fragmented work: discover the provider, explain unfamiliar settings, verify the change, and maintain a growing matrix of integrations.</p>
          <div className="contrast-grid">
            <article>
              <span className="card-label card-label-muted">Today</span>
              <h3>Every provider is a custom integration.</h3>
              <ul>
                <li>Manual DNS instructions</li>
                <li>Provider-specific APIs</li>
                <li>Unclear compatibility</li>
                <li>Support-heavy onboarding</li>
              </ul>
            </article>
            <article className="future-card">
              <span className="card-label">With Seamless</span>
              <h3>One open layer connects the ecosystem.</h3>
              <ul>
                <li>Portable configuration flows</li>
                <li>Shared standards and tooling</li>
                <li>Objective conformance</li>
                <li>Provider choice without lock-in</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section building-section" id="building">
        <div className="section-heading split-heading">
          <div>
            <p className="section-index">02 / What we&apos;re building</p>
            <h2>Useful now.<br />Designed for what&apos;s next.</h2>
          </div>
          <p>Seamless begins with the proven Domain Connect ecosystem, then expands the same open coordination model across the domain lifecycle and into agent-native workflows.</p>
        </div>

        <div className="roadmap">
          {roadmap.map((item) => (
            <article className={item.active ? "roadmap-card active" : "roadmap-card"} key={item.phase}>
              <div className="roadmap-topline">
                <span>{item.phase}</span>
                {item.active && <span className="now-pill"><i /> In progress</span>}
              </div>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
              <ul>{item.items.map((feature) => <li key={feature}>{feature}</li>)}</ul>
            </article>
          ))}
        </div>

        <div className="standards-callout">
          <span className="callout-mark">D/C</span>
          <div>
            <p className="section-index">Standards in motion</p>
            <h3>Built on Domain Connect. Advancing through the IETF.</h3>
            <p>Domain Connect is a deployed open protocol for configuring DNS across software services and DNS providers. The IETF DCONN Working Group is standardizing the protocol while protecting interoperability with today&apos;s ecosystem.</p>
          </div>
          <div className="callout-links">
            <a href="https://www.domainconnect.org/" target="_blank" rel="noreferrer">Domain Connect <ArrowIcon /></a>
            <a href="https://datatracker.ietf.org/wg/dconn/about/" target="_blank" rel="noreferrer">IETF DCONN <ArrowIcon /></a>
          </div>
        </div>
      </section>

      <section className="section governance-section" id="governance">
        <div className="section-heading split-heading">
          <div>
            <p className="section-index">03 / Governance</p>
            <h2>Infrastructure no one<br />company can capture.</h2>
          </div>
          <p>Interoperability works when participation stays open, technical decisions remain transparent, and the shared layer can be trusted by competitors and collaborators alike.</p>
        </div>
        <div className="principles-grid">
          {principles.map(([title, copy], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
        <div className="governance-note">
          <strong>Technical participation is open.</strong>
          <p>Membership, sponsorship, or payment will never be required to contribute code, participate in standards work, use conformance tooling, or help shape the technical community.</p>
        </div>
      </section>

      <section className="community-section" id="community">
        <div>
          <p className="eyebrow"><span /> Build the connection layer with us</p>
          <h2>Help make Internet coordination seamless.</h2>
          <p>We&apos;re bringing together service platforms, DNS providers, registrars, standards contributors, and open-source developers to build shared infrastructure in the open.</p>
        </div>
        <div className="community-actions">
          <a className="button button-light" href={githubUrl} target="_blank" rel="noreferrer">Join on GitHub <ArrowIcon /></a>
          <a className="button button-dark-outline" href="https://www.ietf.org/mailman/listinfo/dconn" target="_blank" rel="noreferrer">Join IETF DCONN <ArrowIcon /></a>
        </div>
      </section>

      <footer>
        <a className="wordmark footer-wordmark" href="#top"><span className="wordmark-mark" aria-hidden="true">S</span><span>Seamless</span></a>
        <p>Open infrastructure for configuration, discovery, and verification.</p>
        <div>
          <a href={githubUrl} target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.domainconnect.org/" target="_blank" rel="noreferrer">Domain Connect</a>
          <a href="https://datatracker.ietf.org/wg/dconn/about/" target="_blank" rel="noreferrer">IETF</a>
        </div>
      </footer>
    </main>
  );
}
