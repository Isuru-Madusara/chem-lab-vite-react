import { IconAtom } from './Icons'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__copy">
        <p className="hero__eyebrow">Analytical &amp; Synthetic Chemistry</p>
        <h1>
          Where reactions <span className="hero__accent">become</span> results.
        </h1>
        <p className="hero__lede">
          Vertex Lab runs synthesis, spectroscopy, and formulation work for research
          teams who need clean data fast. Every bench is logged, every reagent is
          traced, every result is reproducible.
        </p>
        <div className="hero__actions">
          <a href="#contact" className="btn btn--primary">Start a project</a>
          <a href="#protocol" className="btn btn--ghost">View protocols</a>
        </div>
        <dl className="hero__stats">
          <div>
            <dt>1,240+</dt>
            <dd>Compounds synthesized</dd>
          </div>
          <div>
            <dt>99.4%</dt>
            <dd>Assay accuracy</dd>
          </div>
          <div>
            <dt>24/7</dt>
            <dd>Instrument uptime</dd>
          </div>
        </dl>
      </div>
      <div className="hero__visual" aria-hidden="true">
        <div className="orbit orbit--slow">
          <IconAtom className="orbit__atom orbit__atom--blue" />
        </div>
        <div className="orbit orbit--fast">
          <IconAtom className="orbit__atom orbit__atom--red" />
        </div>
        <div className="hero__core" />
      </div>
    </section>
  )
}
