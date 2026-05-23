import Section from './Section'
import { MdSchool, MdLanguage } from 'react-icons/md'
import { FaGraduationCap, FaUniversity } from 'react-icons/fa'

const eduIcon = (degree) => {
  const d = degree.toLowerCase()
  if (d.includes('pós') || d.includes('postgrad') || d.includes('master')) return <FaGraduationCap size={18} color="#58A6FF" />
  if (d.includes('bacharel') || d.includes("bachelor")) return <FaUniversity size={18} color="#58A6FF" />
  if (d.includes('inglês') || d.includes('english')) return <MdLanguage size={20} color="#58A6FF" />
  return <MdSchool size={20} color="#58A6FF" />
}

export default function Education({ t }) {
  return (
    <Section id="education" heading={t.education.heading}>
      <div style={styles.list}>
        {t.education.list.map((e, i) => (
          <div key={i} style={styles.item} className="edu-item">
            <div style={styles.left}>
              <span style={styles.iconWrap}>{eduIcon(e.degree)}</span>
              <div>
                <h3 style={styles.degree}>{e.degree}</h3>
                <span style={styles.institution}>{e.institution}</span>
              </div>
            </div>
            {e.period && <span style={styles.period}>{e.period}</span>}
          </div>
        ))}
      </div>
    </Section>
  )
}

const styles = {
  list: { display: 'flex', flexDirection: 'column', gap: '10px' },
  item: {
    background: '#161B22',
    border: '1px solid #30363D',
    borderRadius: '8px',
    padding: '14px 18px',
    display: 'flex', justifyContent: 'space-between',
    alignItems: 'center', flexWrap: 'wrap', gap: '8px',
  },
  left: {
    display: 'flex', alignItems: 'center', gap: '14px',
  },
  iconWrap: {
    width: '36px', height: '36px',
    background: '#21262D',
    border: '1px solid #30363D',
    borderRadius: '8px',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    flexShrink: 0,
  },
  degree: { color: '#E6EDF3', fontWeight: 600, fontSize: '0.92rem', marginBottom: '2px' },
  institution: { color: '#79C0FF', fontSize: '0.83rem' },
  period: {
    background: '#21262D',
    border: '1px solid #30363D',
    borderRadius: '12px',
    padding: '2px 12px',
    fontSize: '0.78rem',
    color: '#8B949E',
    whiteSpace: 'nowrap',
  },
}
