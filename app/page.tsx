import { ExternalArrow, SiteFooter, SiteHeader } from "./components/site-chrome";

const githubUrl = "https://github.com/seamlessdns";

const roadmap = [
  {
    phase: "01 / NOW",
    title: "Operationalize Domain Connect",
    copy: "Start with a proven, deployed protocol that is ready for standards-track adoption, and make it broadly useful through shared infrastructure, tooling, registries, and conformance.",
    items: ["Neutral hosted service", "Open SDK, CLI, and API", "Templates and conformance"],
    active: true,
  },
  {
    phase: "02 / NEXT",
    title: "Automate domain operations",
    copy: "Extend coordination beyond DNS records to DNSSEC, nameserver changes, registration, and transfers through open, auditable workflows.",
    items: ["Automated DNSSEC", "Registration and transfer", "Registrar coordination"],
  },
  {
    phase: "03 / FORWARD",
    title: "Enable agentic operations",
    copy: "Support authorized, policy-controlled discovery, verification, and coordination for agents and services—including operations that may not use domains or DNS.",
    items: ["Open discovery patterns", "Delegated authorization", "Protocol-appropriate coordination"],
  },
];

const principles = [
  ["Open by default", "Specifications, implementations, tests, and registries should be available to every participant."],
  ["Neutral by design", "No single vendor should control how services, providers, and agents coordinate or how interoperability is measured."],
  ["Conformance first", "Objective, reusable tests make compatibility observable and keep integrations dependable at scale."],
  ["Multi-operator", "Infrastructure and artifacts should be portable, mirrorable, and safe to operate independently."],
];

const founders = [
  {
    name: "Brian Toresdahl",
    role: "Project Formation, Product, and Ecosystem Development",
    copy: "Leading project formation, fundraising, partnerships, product, and the development of a sustainable model for neutral, public-benefit infrastructure.",
    linkedin: "https://www.linkedin.com/in/brian-toresdahl/",
  },
  {
    name: "Pawel Kowalik",
    role: "Standards and Technical Strategy",
    copy: "Helping shape the project’s technical direction, open architecture, and practical implementation across providers and protocols.",
    linkedin: "https://www.linkedin.com/in/pawelk/",
  },
  {
    name: "Sami Kerola",
    role: "Technical Lead and Architect",
    copy: "Leading the design and implementation of Seamless’s technical architecture and shared infrastructure.",
    linkedin: "https://www.linkedin.com/in/kerolasa/",
  },
];

function SystemMap() {
  return (
    <div className="system-map" aria-label="Developers, platforms, and agents coordinate through Seamless with providers and networks">
      <div className="source-row">
        <div className="map-source"><span className="source-icon">&lt;/&gt;</span><span>Developers</span></div>
        <div className="map-source"><span className="source-icon stack-icon">◇</span><span>Platforms</span></div>
        <div className="map-source"><span className="source-icon agent-icon">◎</span><span>Agents</span></div>
      </div>
      <div className="source-connectors" aria-hidden="true">
        <i /><i /><i />
        <span>Open interfaces</span>
      </div>
      <div className="seamless-node">
        <span className="s-mark" aria-hidden="true">S</span><strong>Seamless</strong>
        <span className="node-role">Coordination layer</span>
      </div>
      <div className="transfer-lanes" aria-hidden="true">
        <div className="transfer-lane request-lane"><span>Authorized request</span><i /></div>
        <div className="transfer-lane response-lane"><span>Verified response</span><i /></div>
      </div>
      <div className="provider-node">
        <span className="server-icon" aria-hidden="true"><i /><i /><i /></span><strong>Providers &amp; networks</strong>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <SiteHeader page="home" />

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Open, neutral Internet infrastructure</p>
          <h1>The open connection layer for the Internet.</h1>
          <p className="hero-lede">
            Seamless gives developers, platforms, and agents a neutral way to automate operations across providers and networks—using open standards, shared tooling, and the protocol best suited to each task.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#building">Explore the roadmap <span aria-hidden="true">↓</span></a>
            <a className="button button-outline" href={githubUrl} target="_blank" rel="noreferrer">View on GitHub <ExternalArrow /></a>
          </div>
        </div>
        <SystemMap />
      </section>

      <div className="dns-strip" aria-label="Seamless starts with Domain Connect, then expands to domain and agent operations">
        <div className="dns-intro"><span className="globe-icon" aria-hidden="true">◎</span><strong>Starting with Domain Connect</strong></div>
        <span><i className="dot dot-green" /> Configure</span>
        <span><i className="dot" /> Verify</span>
        <span><i className="dot dot-blue" /> Connect</span>
      </div>

      <aside className="formation-band" aria-label="Project support and formation status">
        <div className="formation-kicker">Project status</div>
        <div className="formation-item">
          <span className="status status-live">Active</span>
          <p>Working with the <a href="https://projectnanda.org/" target="_blank" rel="noreferrer">Foundation for Agentic Networks (FAN)</a>, home of the MIT-originated Project NANDA, to explore neutral infrastructure for agentic operations that may or may not use domains or DNS.</p>
        </div>
        <div className="formation-item">
          <span className="status status-progress">In formation</span>
          <p>Finalizing project formation with the <a href="https://www.linuxfoundation.org/" target="_blank" rel="noreferrer">Linux Foundation</a> as a neutral home for long-term governance and growth.</p>
        </div>
      </aside>

      <section className="section problem-section" id="why">
        <div className="section-heading">
          <p className="section-index">01 / Why Seamless</p>
          <h2>The Internet is connected.<br />Its operations aren&apos;t.</h2>
        </div>
        <div className="problem-content">
          <p className="large-copy">Platforms and agents increasingly need to configure, discover, authorize, verify, and coordinate across organizational boundaries. Today, each operation can require a different provider integration, protocol, or manual workflow.</p>
          <div className="contrast-grid">
            <article>
              <span className="card-label card-label-muted">Today</span>
              <h3>Every operation becomes a custom integration.</h3>
              <ul>
                <li>Manual configuration steps</li>
                <li>Provider-specific APIs</li>
                <li>Protocol and provider silos</li>
                <li>Support-heavy operations</li>
              </ul>
            </article>
            <article className="future-card">
              <span className="card-label">With Seamless</span>
              <h3>One neutral layer coordinates the ecosystem.</h3>
              <ul>
                <li>Portable operational workflows</li>
                <li>Protocol-appropriate standards and tooling</li>
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
          <p>Seamless begins with Domain Connect because it has proven utility and standards-track readiness. The project is protocol agnostic: each category of domain or agent operation should use the open mechanism best suited to it.</p>
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
            <h3>Starting with a proven protocol. Not limited to one.</h3>
            <p>Domain Connect is a deployed open protocol for configuring DNS across software services and DNS providers, and the IETF DCONN Working Group is advancing it on the standards track. Seamless will build from that practical starting point while selecting the most suitable open protocols and interfaces for other domain and agent operations.</p>
          </div>
          <div className="callout-links">
            <a href="https://www.domainconnect.org/" target="_blank" rel="noreferrer">Domain Connect <ExternalArrow /></a>
            <a href="https://datatracker.ietf.org/wg/dconn/about/" target="_blank" rel="noreferrer">IETF DCONN <ExternalArrow /></a>
          </div>
        </div>
      </section>

      <section className="section governance-section" id="governance">
        <div className="section-heading split-heading">
          <div>
            <p className="section-index">03 / Governance</p>
            <h2>Infrastructure no one<br />company can capture.</h2>
          </div>
          <p>Coordination works when participation stays open, technical decisions remain transparent, and the shared layer can support multiple protocols without becoming a new control point.</p>
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

      <section className="section team-section" id="team">
        <div className="section-heading split-heading">
          <div>
            <p className="section-index">04 / Founding team</p>
            <h2>Building the neutral layer together.</h2>
          </div>
          <p>Seamless was initiated by a founding team working across project strategy, standards, technical architecture, product development, partnerships, and community formation.</p>
        </div>

        <div className="team-grid">
          {founders.map((founder, index) => (
            <article key={founder.name}>
              <span>0{index + 1}</span>
              <h3>
                <a href={founder.linkedin} target="_blank" rel="noreferrer">
                  {founder.name} <ExternalArrow />
                </a>
              </h3>
              <strong>{founder.role}</strong>
              <p>{founder.copy}</p>
            </article>
          ))}
        </div>

        <div className="team-note">
          <strong>Founders establish the project. The community governs its technical direction.</strong>
          <p>Technical authority remains rooted in open contribution, transparent governance, and the applicable standards communities.</p>
        </div>
      </section>

      <section className="community-section" id="community">
        <div>
          <p className="eyebrow"><span /> Build the coordination layer with us</p>
          <h2>Help make Internet coordination seamless.</h2>
          <p>We&apos;re bringing together service platforms, DNS providers, registrars, agent networks, standards contributors, and open-source developers to automate cross-provider operations in the open.</p>
        </div>
        <div className="community-actions">
          <a className="button button-light" href={githubUrl} target="_blank" rel="noreferrer">Join on GitHub <ExternalArrow /></a>
          <a className="button button-dark-outline" href="https://www.ietf.org/mailman/listinfo/dconn" target="_blank" rel="noreferrer">Join IETF DCONN <ExternalArrow /></a>
        </div>
      </section>

      <SiteFooter page="home" />
    </main>
  );
}
