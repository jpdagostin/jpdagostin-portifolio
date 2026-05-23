export default function Navbar({ t, lang, setLang }) {
  const flags = [
    { code: 'en', label: '🇺🇸', title: 'English' },
    { code: 'pt', label: '🇧🇷', title: 'Português' },
  ]

  return (
    <nav className="navbar" style={styles.nav}>
      <ul style={styles.links}>
        {Object.entries(t.nav).map(([key, label]) => (
          <li key={key} style={styles.li}>
            <a href={`#${key}`} style={styles.link}>{label}</a>
          </li>
        ))}
      </ul>
      <div className="lang-selector" style={styles.flags}>
        {flags.map(f => (
          <button
            key={f.code}
            onClick={() => setLang(f.code)}
            title={f.title}
            style={{ ...styles.flag, opacity: lang === f.code ? 1 : 0.45 }}
          >
            {f.label}
          </button>
        ))}
      </div>
    </nav>
  )
}

const styles = {
  nav: {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
    background: '#010409',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '0 28px', height: '56px',
    borderBottom: '1px solid #30363D',
  },
  flags: {
    display: 'flex', gap: '6px',
  },
  flag: {
    background: 'none', border: 'none', cursor: 'pointer',
    fontSize: '20px', lineHeight: 1, transition: 'opacity .2s',
    padding: 0,
  },
  links: {
    listStyle: 'none', display: 'flex', gap: '8px',
  },
  li: { margin: 0 },
  link: {
    color: '#E6EDF3', fontSize: '0.95rem',
    padding: '8px 14px', display: 'block',
    transition: 'color .2s',
  },
}
