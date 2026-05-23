import Section from './Section'

export default function Experience({ t }) {
  return (
    <Section id="experience" heading={t.experience.heading}>
      <div style={styles.timeline}>
        {t.experience.jobs.map((job, i) => (
          <div key={i} style={styles.job}>
            <div style={styles.dot} />
            <div style={styles.content}>
              <div style={styles.header}>
                <div>
                  <h3 style={styles.role}>{job.role}</h3>
                  <span style={styles.company}>{job.company}</span>
                </div>
                <span style={styles.period}>{job.period}</span>
              </div>
              <ul style={styles.bullets}>
                {job.bullets.map((b, j) => (
                  <li key={j} style={styles.bullet}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

const styles = {
  timeline: {
    display: 'flex', flexDirection: 'column', gap: '24px',
    borderLeft: '2px solid #21262D',
    paddingLeft: '24px',
  },
  job: { position: 'relative' },
  dot: {
    position: 'absolute', left: '-33px', top: '6px',
    width: '14px', height: '14px',
    borderRadius: '50%',
    background: '#58A6FF',
    border: '2px solid #0D1117',
    boxShadow: '0 0 8px rgba(88,166,255,0.4)',
  },
  content: {
    background: '#161B22',
    border: '1px solid #30363D',
    borderRadius: '8px',
    padding: '18px 20px',
  },
  header: {
    display: 'flex', justifyContent: 'space-between',
    alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px',
    marginBottom: '12px',
  },
  role: { color: '#E6EDF3', fontWeight: 600, fontSize: '1rem', marginBottom: '2px' },
  company: { color: '#58A6FF', fontSize: '0.88rem', fontWeight: 500 },
  period: {
    background: '#21262D',
    border: '1px solid #30363D',
    borderRadius: '12px',
    padding: '2px 10px',
    fontSize: '0.78rem',
    color: '#8B949E',
    whiteSpace: 'nowrap',
  },
  bullets: { paddingLeft: '18px', color: '#8B949E' },
  bullet: { marginBottom: '5px', fontSize: '0.88rem', lineHeight: 1.6 },
}
