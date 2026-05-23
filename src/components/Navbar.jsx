import { useState } from 'react'
import './Navbar.css'

export default function Navbar({ t, lang, setLang }) {
  const [open, setOpen] = useState(false)

  const flags = [
    { code: 'en', label: '🇺🇸', title: 'English' },
    { code: 'pt', label: '🇧🇷', title: 'Português' },
  ]

  const handleLinkClick = () => setOpen(false)

  return (
    <nav className="navbar">
      <button
        className="navbar-hamburger"
        onClick={() => setOpen(o => !o)}
        aria-label="Menu"
      >
        <span className={`hamburger-line ${open ? 'open' : ''}`} />
        <span className={`hamburger-line ${open ? 'open' : ''}`} />
        <span className={`hamburger-line ${open ? 'open' : ''}`} />
      </button>

      <ul className={`navbar-links ${open ? 'navbar-links--open' : ''}`}>
        {Object.entries(t.nav).map(([key, label]) => (
          <li key={key}>
            <a href={`#${key}`} onClick={handleLinkClick}>{label}</a>
          </li>
        ))}
      </ul>

      <div className="lang-selector">
        {flags.map(f => (
          <button
            key={f.code}
            onClick={() => setLang(f.code)}
            title={f.title}
            className={`lang-btn ${lang === f.code ? 'lang-btn--active' : ''}`}
          >
            {f.label}
          </button>
        ))}
      </div>
    </nav>
  )
}
