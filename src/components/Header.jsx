import { IconFlask } from './Icons'

export default function Header() {
  return (
    <header className="header">
      <div className="header__mark">
        <IconFlask className="header__icon" />
        <span>Vertex Lab</span>
      </div>
      <nav className="header__nav">
        <a href="#capabilities">Capabilities</a>
        <a href="#instruments">Instruments</a>
        <a href="#protocol">Protocol</a>
        <a href="#contact">Contact</a>
      </nav>
      <a href="#contact" className="header__cta">Book bench time</a>
    </header>
  )
}
