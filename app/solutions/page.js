import Link from 'next/link';
import { SolutionsOverview, solutionsList } from '../../Components/SolutionsOverview.jsx';

export const metadata = {
  title: 'Solutions'
};

export default function SolutionsPage() {
  return (
    <div className="section solutions-page">
      <span className="tag">Solutions</span>
      <h1>Blueprints for intelligent operations</h1>
      <p className="lead">
        EasOps combines discovery workshops, proof-of-concept sprints, and scale-up roadmaps to deliver AI solutions that are
        measurable and production-ready. Every engagement blends automation, analytics, and enablement to transform how your teams
        operate.
      </p>

      <div className="solutions-methodology">
        <div>
          <h2>How we work</h2>
          <p>
            We begin with immersive discovery workshops to map your processes, data landscape, and success metrics. From there we
            run targeted proofs of concept to validate assumptions and deliver early wins, before moving into phased rollouts and
            change management.
          </p>
          <p>
            Throughout the engagement we co-create a roadmap that aligns technology investments with stakeholder adoption—ensurin
            g the AI solutions stay trusted long after launch.
          </p>
        </div>
        <div className="solutions-methodology__list">
          <div>
            <h3>Discovery</h3>
            <p>Process mapping, data readiness audits, and co-design of value hypotheses.</p>
          </div>
          <div>
            <h3>Proof of Concept</h3>
            <p>Rapid experiments with measurable KPIs, de-risking automation and AI models.</p>
          </div>
          <div>
            <h3>Scale & Enablement</h3>
            <p>Roadmaps, enablement plans, and operating models to sustain continuous improvement.</p>
          </div>
        </div>
      </div>

      <SolutionsOverview
        intro="Explore the core solution areas we deliver for marketing, analytics, operations, and technology leaders. Each blueprint combines proven accelerators with bespoke delivery."
      />

      <div className="solutions-anchors">
        <h2>Jump to a solution</h2>
        <nav>
          {solutionsList.map((solution) => (
            <Link key={solution.id} href={`#${solution.id}`}>
              {solution.title}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
