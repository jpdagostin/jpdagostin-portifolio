import profilePic from '../assets/jpdagostin.jpeg'
import { MdEmail, MdFileDownload } from 'react-icons/md'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'

export default function Hero({ t }) {
  const handlePrint = () => window.print()

  return (
    <header className="hero" style={styles.hero}>
      <img src={profilePic} alt="João Pedro D'Agostin" className="profile-pic" style={styles.pic} />
      <h1 style={styles.h1}>{t.hero.title}</h1>
      <p className="hero-subtitle" style={styles.subtitle}>{t.hero.subtitle}</p>
      <p style={styles.location}>
        <IoLocationSharp size={14} style={{ verticalAlign: 'middle', marginRight: '3px' }} />
        {t.hero.location}
      </p>
      <div style={styles.contacts}>
        <a href="mailto:dagostinjoaopedro@gmail.com" style={styles.badge}>
          <MdEmail size={15} /> dagostinjoaopedro@gmail.com
        </a>
        <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-d-agostin-10086a197/" target="_blank" rel="noreferrer" style={styles.badge}>
          <FaLinkedin size={15} /> LinkedIn
        </a>
        <a href="https://github.com/jpdagostin" target="_blank" rel="noreferrer" style={styles.badge}>
          <FaGithub size={15} /> GitHub
        </a>
      </div>
      <button className="btn-download no-print" onClick={handlePrint} style={styles.btn}>
        <MdFileDownload size={18} style={{ verticalAlign: 'middle', marginRight: '4px' }} />
        {t.hero.downloadCV}
      </button>
    </header>
  )
}

const styles = {
  hero: {
    paddingTop: '100px',
    paddingBottom: '48px',
    textAlign: 'center',
    background: 'linear-gradient(160deg, #010409 0%, #0D1117 60%, #111820 100%)',
    borderBottom: '1px solid #30363D',
  },
  pic: {
    width: '150px', height: '150px',
    borderRadius: '50%',
    border: '3px solid #58A6FF',
    objectFit: 'cover',
    objectPosition: 'top',
    marginBottom: '20px',
    boxShadow: '0 0 32px rgba(88,166,255,0.18)',
  },
  h1: {
    fontSize: 'clamp(1.8rem, 5vw, 2.6rem)',
    color: '#E6EDF3',
    fontWeight: 700,
    marginBottom: '6px',
  },
  subtitle: {
    fontSize: '1rem',
    color: '#8B949E',
    marginBottom: '4px',
  },
  location: {
    fontSize: '0.88rem',
    color: '#6E7681',
    marginBottom: '20px',
  },
  contacts: {
    display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px',
    marginBottom: '24px',
  },
  badge: {
    background: '#161B22',
    color: '#58A6FF',
    border: '1px solid #30363D',
    borderRadius: '20px',
    padding: '6px 16px',
    fontSize: '0.82rem',
    transition: 'border-color .2s',
    display: 'flex', alignItems: 'center', gap: '6px',
  },
  btn: {
    background: '#1158c7',
    color: '#fff',
    border: '1px solid #79C0FF',
    borderRadius: '6px',
    padding: '10px 22px',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 600,
    fontSize: '0.9rem',
    cursor: 'pointer',
    transition: 'background .2s',
    display: 'inline-flex', alignItems: 'center',
  },
}
