import { IconFlask } from './Icons'

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer__cta">
        <h2>Bring us your reaction.</h2>
        <p>Send a target structure or assay brief and we'll reply with a scope and timeline within one business day.</p>
        <a className="btn btn--primary" href="mailto:bench@vertexlab.example">bench@vertexlab.example</a>
      </div>
      <div className="footer__bottom">
        <div className="header__mark">
          <IconFlask className="header__icon" />
          <span>Vertex Lab</span>
        </div>
        <p>&copy; {new Date().getFullYear()} Vertex Lab. All reactions logged and reproducible.</p>
      </div>
    </footer>
  )
}
