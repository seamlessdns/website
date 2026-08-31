import type { Metadata } from "next";
import Link from "next/link";
import { ExternalArrow, SiteFooter, SiteHeader } from "../../components/site-chrome";
import styles from "../sponsors.module.css";

export const metadata: Metadata = {
  alternates: {
    canonical: "/sponsors/toolkit/",
  },
  title: "Champion Toolkit | Seamless",
  description:
    "Public talking points and outreach material for people helping build support for Seamless.",
};

const talkingPoints = [
  ["The problem", "Open protocols do not operate themselves. Without neutral implementation, organizations still face manual setup, fragmented integrations, and dependency on proprietary connection paths."],
  ["The project", "Seamless is building production infrastructure, provider-supported integrations, open APIs and SDKs, registries, and shared conformance tooling."],
  ["The funding model", "Sponsors capitalize a focused two-year buildout. At scale, transparent usage fees are intended to recover the cost of operating the shared service."],
  ["The market outcome", "Organizations may use Seamless directly or build commercial services on top. The common layer remains neutral while competition happens through experience, support, security, analytics, and orchestration."],
  ["The governance guarantee", "Funding does not buy protocol influence, technical approval, preferential interoperability, listing, or exclusive access. Technical participation remains open without payment."],
];

const questions = [
  ["Is Seamless competing with commercial domain products?", "No. Seamless establishes a neutral infrastructure layer that commercial products can use and extend. It should make entry and differentiation easier, not prohibit commercial services."],
  ["Why not let every company build its own integrations?", "They can, but the ecosystem repeatedly pays for the same work. Shared implementation, registries, and conformance tooling reduce duplicated engineering and make provider support more dependable."],
  ["Why sponsor something that will later charge for usage?", "Sponsorship supplies the concentrated capital needed to create the service and reach useful coverage. Later operating fees are intended to sustain the service transparently rather than recover venture-style margins or create lock-in."],
  ["Does a larger sponsor control the technical roadmap?", "No. Sponsorship supports funding governance and strategic planning, but technical decisions remain part of the open technical community and standards process."],
  ["Can an organization participate without paying?", "Yes. Engineering, standards work, testing, integrations, adoption, and community participation are separate from paid membership."],
];

export default function ToolkitPage() {
  return (
    <main>
      <SiteHeader page="sponsors" />

      <section className={styles.hero}>
        <p className="eyebrow"><span /> Champion toolkit</p>
        <p>Help another organization understand why the neutral layer matters.</p>
      </section>

      <article className={styles.document}>
        <h1>A shared message for a shared project.</h1>
        <p>
          Seamless is a community project for public benefit. This toolkit gives project champions a consistent way to introduce it, identify the right internal audience, and move a conversation toward funding or technical participation.
        </p>

        <h2>The 60-second explanation</h2>
        <div className={styles.templateBlock}>
          <p>
            Every platform that connects customer domains faces the same fragmented work: identify the provider, configure records, verify the result, and maintain provider-specific integrations. Open standards help, but the ecosystem still needs a neutral operational layer that makes those standards reliable in practice.
          </p>
          <p>
            Seamless is raising two years of capitalization to build that layer: production infrastructure, provider-supported integrations, open APIs and SDKs, and shared conformance tooling. After the buildout, the service is intended to operate through transparent, cost-based usage fees.
          </p>
          <p>
            Companies can use Seamless directly or build commercial products on top of it. Sponsorship funds the common foundation; it does not buy protocol influence or exclusive access.
          </p>
        </div>

        <h2>Core talking points</h2>
        <div className={styles.talkingPointList}>
          {talkingPoints.map(([title, copy], index) => (
            <div key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div><strong>{title}</strong><p>{copy}</p></div>
            </div>
          ))}
        </div>

        <h2>Introduction message</h2>
        <div className={styles.templateBlock}>
          <p><strong>Subject: A neutral foundation for automated domain connections</strong></p>
          <p>
            I’m helping the Seamless community bring together the organizations that benefit from reliable domain automation.
          </p>
          <p>
            Seamless is building a neutral operational layer for connecting domains across service providers, DNS providers, and registrars. The project’s two-year buildout will fund production infrastructure, provider-supported integrations, open developer tools, and shared conformance testing.
          </p>
          <p>
            The goal is not to replace commercial services. It is to create a common foundation that organizations can use directly or build differentiated services on top of—without making the ecosystem dependent on a single proprietary path.
          </p>
          <p>
            I think this intersects with your work on [activation, domains, infrastructure, or ecosystem partnerships]. Would you be open to a short conversation with the project team about the roadmap and ways to participate?
          </p>
        </div>

        <h2>Conversation flow</h2>
        <ol className={styles.playbook}>
          <li><strong>Start with their value.</strong><span>Connect Seamless to activation, distribution, migration, support cost, security, or platform opportunity.</span></li>
          <li><strong>Explain the structural problem.</strong><span>Open specifications need neutral implementation and dependable provider access to deliver their full value.</span></li>
          <li><strong>Describe the two-year outcome.</strong><span>Production service, provider-supported integrations, open tools, conformance, and a sustainable operating model.</span></li>
          <li><strong>Offer the right path.</strong><span>Paid membership, engineering, integration, testing, adoption, or advocacy.</span></li>
          <li><strong>Agree on one next step.</strong><span>Identify the internal owner, schedule a technical or sponsorship discussion, or request an introduction.</span></li>
        </ol>

        <h2>Frequently asked questions</h2>
        <div className={styles.faqList}>
          {questions.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>

        <aside className={styles.callout}>
          <span>Keep the distinction clear</span>
          <h2>Technical participation is not a membership benefit.</h2>
          <p>
            Nobody is buying protocol influence. Sponsorship capitalizes the shared implementation and adoption work. Technical authority comes from open contribution, evidence, interoperability, and the project’s technical governance.
          </p>
        </aside>

        <h2>After the first conversation</h2>
        <p>
          Record the organization’s likely value, internal owner, relevant workstream, participation path, and next action in the private outreach tracker. Do not publish prospect status, recommended asks, relationship notes, or internal volume estimates.
        </p>

        <div className={styles.inlineActions}>
          <Link className="button button-primary" href="/sponsors/">View membership</Link>
          <Link className="button button-outline" href="/sponsors/why-participate/">Review stakeholder value</Link>
        </div>
      </article>

      <section className="community-section">
        <div>
          <p className="eyebrow"><span /> Build the common layer</p>
          <h2>Bring the right organizations into the conversation.</h2>
          <p>Use these materials, make a warm introduction, or participate directly in the open project.</p>
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
