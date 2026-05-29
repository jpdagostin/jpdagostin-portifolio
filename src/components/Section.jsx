export default function Section({ id, heading, children }) {
  return (
    <section id={id} style={styles.section}>
      <div style={styles.inner}>
        <h2 style={styles.heading} className="section-heading">{heading}</h2>
        {children}
      </div>
    </section>
  )
}

const styles = {
  section: {
    padding: '56px 20px',
    borderBottom: '1px solid #21262D',
  },
  inner: {
    maxWidth: '860px',
    margin: '0 auto',
  },
  heading: {
    fontSize: '1.4rem',
    color: '#E6EDF3',
    borderBottom: '1px solid #30363D',
    paddingBottom: '10px',
    marginBottom: '28px',
    fontWeight: 600,
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
}
