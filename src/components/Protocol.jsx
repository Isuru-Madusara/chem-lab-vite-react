const instruments = [
  'HPLC-MS', 'FTIR', '400 MHz NMR', 'UV-Vis', 'GC-FID', 'Rotary Evaporator', 'Freeze Dryer', 'Glovebox',
]

const steps = [
  { title: 'Intake', body: 'We review your target molecule or assay and scope reagents, timeline, and safety class.' },
  { title: 'Bench work', body: 'Synthesis or assay runs under logged conditions, with in-process checks at every step.' },
  { title: 'Analysis', body: 'Samples move straight to spectroscopy and chromatography for structure and purity confirmation.' },
  { title: 'Report', body: 'You receive raw data, annotated spectra, and a written summary within the agreed window.' },
]

export default function Protocol() {
  return (
    <>
      <section id="instruments" className="instruments">
        <p className="instruments__label">Instrumentation on hand</p>
        <div className="instruments__row">
          {instruments.map((name) => (
            <span key={name} className="instruments__chip">{name}</span>
          ))}
        </div>
      </section>

      <section id="protocol" className="protocol">
        <div className="section-head">
          <p className="section-head__eyebrow">Protocol</p>
          <h2>How a project moves through the lab.</h2>
        </div>
        <ol className="protocol__list">
          {steps.map((step, i) => (
            <li key={step.title} className="protocol__step">
              <span className="protocol__index">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </>
  )
}
