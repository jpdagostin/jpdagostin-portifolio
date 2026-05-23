import Section from './Section'
import {
  SiPython, SiJavascript, SiCplusplus, SiDotnet,
  SiGooglecloud, SiPostgresql, SiApachecassandra,
  SiApacheairflow, SiGit, SiArduino, SiOdoo,
} from 'react-icons/si'
import { FaDatabase, FaJava, FaCode, FaAws, FaReact } from 'react-icons/fa'
import { MdApi } from 'react-icons/md'

const iconMap = {
  Python:          <SiPython color="#3776AB" />,
  SQL:             <FaDatabase color="#79C0FF" />,
  JavaScript:      <SiJavascript color="#F7DF1E" />,
  Java:            <FaJava color="#ED8B00" />,
  'C/C++':         <SiCplusplus color="#00599C" />,
  'C#':            <SiDotnet color="#512BD4" />,
  GCP:             <SiGooglecloud color="#4285F4" />,
  AWS:             <FaAws color="#FF9900" />,
  'ETL Pipelines': <FaCode color="#79C0FF" />,
  'Pipelines ETL': <FaCode color="#79C0FF" />,
  PostgreSQL:      <SiPostgresql color="#336791" />,
  Cassandra:       <SiApachecassandra color="#1287B1" />,
  Airflow:         <SiApacheairflow color="#017CEE" />,
  'REST APIs':     <MdApi color="#79C0FF" />,
  'Odoo.sh':       <SiOdoo color="#A24689" />,
  Git:             <SiGit color="#F05032" />,
  'React Native':  <FaReact color="#61DAFB" />,
  Arduino:         <SiArduino color="#00979D" />,
}

export default function Skills({ t }) {
  return (
    <Section id="skills" heading={t.skills.heading}>
      <div style={styles.grid}>
        {t.skills.categories.map(cat => (
          <div key={cat.title} style={styles.card} className="skills-card">
            <h3 style={styles.catTitle}>{cat.title}</h3>
            <div className="skill-tags" style={styles.tags}>
              {cat.items.map(item => (
                <span key={item} className="skill-tag" style={styles.tag}>
                  <span style={styles.icon}>{iconMap[item] ?? <FaCode color="#79C0FF" />}</span>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '16px',
  },
  card: {
    background: '#161B22',
    border: '1px solid #30363D',
    borderRadius: '8px',
    padding: '20px',
  },
  catTitle: {
    color: '#58A6FF',
    fontSize: '0.82rem',
    fontWeight: 600,
    marginBottom: '14px',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
  },
  tags: {
    display: 'flex', flexWrap: 'wrap', gap: '8px',
  },
  tag: {
    background: '#21262D',
    border: '1px solid #30363D',
    borderRadius: '16px',
    padding: '4px 12px',
    fontSize: '0.82rem',
    color: '#E6EDF3',
    display: 'flex', alignItems: 'center', gap: '6px',
  },
  icon: {
    display: 'flex', alignItems: 'center',
    fontSize: '1rem',
  },
}
