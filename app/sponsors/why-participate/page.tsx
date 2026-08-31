import type { Metadata } from "next";
import Link from "next/link";
import { ExternalArrow, SiteFooter, SiteHeader } from "../../components/site-chrome";
import styles from "../sponsors.module.css";

export const metadata: Metadata = {
  alternates: {
    canonical: "/sponsors/why-participate/",
  },
  title: "Why Participate | Seamless",
  description:
    "How neutral domain-connection infrastructure creates value for service providers, registrars, DNS providers, and agent infrastructure.",
};

const stakeholders = [
  {
    title: "Service Providers",
    value: "Acquire and activate customers",
    copy: "Domain configuration often happens while a customer is adopting a paid product. A reliable connection flow can improve activation, shorten time to value, reduce abandonment, and remove a major source of support work.",
    buyer: "Product, engineering, growth, platform, or ecosystem leadership",
    work: "DNS updates, domain verification, DNSSEC, provider discovery, and embedded activation",
  },
  {
    title: "Registrars",
    value: "Expand distribution and retain the domain relationship",
    copy: "Registration, transfer, nameserver, and DNSSEC workflows connect registrars to new demand. A shared layer can make registrar capabilities easier for services to adopt without requiring a separate integration for every partner.",
    buyer: "Product, domains, partnerships, platform, or engineering leadership",
    work: "Registration, registrar transfer, nameserver changes, DNSSEC, and registrar coordination",
  },
  {
    title: "DNS Providers",
    value: "Reduce integration cost and improve migration",
    copy: "A consistent implementation and objective conformance tooling can reduce bespoke support, make capabilities discoverable, and create a more dependable path for customers moving into or using the provider.",
    buyer: "DNS product, engineering, ecosystem, or strategic partnerships leadership",
    work: "DNS updates, zone transfer, DNSSEC, conformance, and provider discovery",
  },
  {
    title: "Commercial Platforms and Agent Infrastructure",
    value: "Build differentiated products on a dependable base",
    copy: "A neutral foundation lets commercial providers, developer platforms, and agents focus on user experience, orchestration, analytics, security, and support instead of recreating the underlying provider-access layer.",
    buyer: "Platform, product, developer experience, agents, or corporate development leadership",
    work: "Open APIs, authorization, discovery, policy controls, registries, and commercial services above the shared layer",
  },
];

const transactions = [
  ["DNS zone update", "Highest direct value for service activation; operational and distribution value for infrastructure providers."],
  ["DNSSEC", "Security, trust, and lifecycle automation value shared across service providers, registrars, and DNS providers."],
  ["DNS zone transfer", "Strong migration and customer-acquisition value for the destination DNS provider; portability value for the ecosystem."],
  ["Domain registration", "Core acquisition value for registrars and embedded-distribution value for service providers and commercial platforms."],
  ["Registrar transfer", "Core acquisition value for the destination registrar and retention or workflow value for service providers."],
];

export default function WhyParticipatePage() {
  return (
    <main>
      <SiteHeader page="sponsors" />

      <section className={styles.hero}>
        <p className="eyebrow"><span /> Why participate</p>
        <p>Shared infrastructure creates different value for every participant.</p>
      </section>

      <article className={styles.document}>
        <h1>Invest where interoperability becomes economic value.</h1>
        <p>
          The organization implementing a connection and the organization capturing its economic value are not always the same. Seamless gives the ecosystem a way to share implementation costs while each participant benefits through activation, distribution, retention, efficiency, or new commercial opportunity.
        </p>

        <div className={styles.stakeholderGrid}>
          {stakeholders.map((stakeholder, index) => (
            <section className={styles.stakeholderCard} key={stakeholder.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{stakeholder.title}</h2>
              <strong>{stakeholder.value}</strong>
              <p>{stakeholder.copy}</p>
              <dl>
                <div><dt>Likely internal champion</dt><dd>{stakeholder.buyer}</dd></div>
                <div><dt>Relevant work</dt><dd>{stakeholder.work}</dd></div>
              </dl>
            </section>
          ))}
        </div>

        <h2>Value by transaction</h2>
        <p>
          Seamless begins with DNS configuration, but the neutral coordination model is designed to extend across the domain lifecycle.
        </p>
        <div className={styles.transactionList}>
          {transactions.map(([name, value]) => (
            <div key={name}>
              <strong>{name}</strong>
              <p>{value}</p>
            </div>
          ))}
        </div>

        <aside className={styles.callout}>
          <span>Why fund instead of wait?</span>
          <h2>The buildout determines whether the shared layer exists.</h2>
          <p>
            Sponsors provide the concentrated capital needed to establish production infrastructure, provider-supported integrations, and ecosystem adoption. Once the service reaches scale, transparent operating fees can sustain it at a lower marginal cost than repeatedly rebuilding or licensing the same connection layer.
          </p>
        </aside>

        <h2>Commercial opportunity remains open</h2>
        <p>
          Seamless is infrastructure, not a mandated end-user product. Organizations may use it directly or build commercial services on top of it. Embedded experiences, enterprise support, monitoring, analytics, security, orchestration, and service-level commitments remain areas for vigorous competition.
        </p>
        <p>
          The principle is simple: <strong>the common connection path should be neutral; differentiation should happen above it.</strong>
        </p>

        <div className={styles.inlineActions}>
          <Link className="button button-primary" href="/sponsors/">View membership</Link>
          <Link className="button button-outline" href="/sponsors/toolkit/">Open the champion toolkit</Link>
        </div>
      </article>

      <section className="community-section">
        <div>
          <p className="eyebrow"><span /> Participate your way</p>
          <h2>Funding, engineering, adoption, and advocacy all matter.</h2>
          <p>Paid membership supports capitalization. Technical participation remains open and independent.</p>
        </div>
        <div className="community-actions">
          <a className="button button-light" href="https://github.com/seamlessdns" target="_blank" rel="noreferrer">
            Join on GitHub <ExternalArrow />
          </a>
        </div>
      </section>

      <SiteFooter page="sponsors" />
    </main>
  );
}
