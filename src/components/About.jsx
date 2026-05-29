import Section from './Section'

export default function About({ t }) {
  return (
    <Section id="about" heading={t.about.heading}>
      {t.about.paragraphs.map((item, i) =>
        item.bullets ? (
          <ul key={i} style={styles.list}>
            {item.bullets.map((b, j) => (
              <li key={j} style={styles.item} className="about-item">
                <span style={styles.dot} className="about-dot">▸</span>
                {b}
              </li>
            ))}
          </ul>
        ) : (
          <p key={i} style={styles.p} className="about-p">{item}</p>
        )
      )}
    </Section>
  )
}

const styles = {
  p: {
    textAlign: 'justify',
    textIndent: '1.2em',
    marginBottom: '16px',
    color: '#ccc',
    lineHeight: 1.8,
  },
  list: {
    listStyle: 'none',
    margin: '0 0 16px 0',
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  item: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
    color: '#ccc',
    fontSize: '0.93rem',
    lineHeight: 1.6,
  },
  dot: {
    color: '#58A6FF',
    fontSize: '0.8rem',
    marginTop: '3px',
    flexShrink: 0,
  },
}
