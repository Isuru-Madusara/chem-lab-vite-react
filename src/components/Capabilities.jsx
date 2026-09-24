import { IconBeaker, IconDNA, IconMicroscope, IconDroplet, IconHazard, IconFlask } from './Icons'

const items = [
  {
    icon: IconFlask,
    tone: 'blue',
    title: 'Custom synthesis',
    body: 'Multi-step organic synthesis with full route scouting, from milligram screens to multi-gram batches.',
  },
  {
    icon: IconMicroscope,
    tone: 'red',
    title: 'Structural analysis',
    body: 'NMR, FTIR, and mass spec run in parallel so structure confirmation lands within the same cycle.',
  },
  {
    icon: IconDroplet,
    tone: 'blue',
    title: 'Formulation',
    body: 'Stability testing and excipient screening for liquid, gel, and solid-dose formulations.',
  },
  {
    icon: IconDNA,
    tone: 'red',
    title: 'Biochemical assays',
    body: 'Enzyme kinetics, binding assays, and cell-based screens with statistically powered replicates.',
  },
  {
    icon: IconBeaker,
    tone: 'blue',
    title: 'Quality control',
    body: 'HPLC purity checks and batch release testing against pharmacopeial or custom specifications.',
  },
  {
    icon: IconHazard,
    tone: 'red',
    title: 'Hazard compliance',
    body: 'GHS classification, SDS authoring, and controlled-substance handling built into every protocol.',
  },
]

export default function Capabilities() {
  return (
    <section id="capabilities" className="capabilities">
      <div className="section-head">
        <p className="section-head__eyebrow">Capabilities</p>
        <h2>One bench, every discipline.</h2>
      </div>
      <div className="capabilities__grid">
        {items.map(({ icon: Icon, tone, title, body }) => (
          <article key={title} className={`card card--${tone}`}>
            <Icon className="card__icon" />
            <h3>{title}</h3>
            <p>{body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
