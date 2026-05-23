import { useState } from 'react'
import { translations } from './data/content'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'

function App() {
  const [lang, setLang] = useState('pt')
  const t = translations[lang]

  return (
    <>
      <Navbar t={t} lang={lang} setLang={setLang} />
      <Hero t={t} />
      <About t={t} />
      <Skills t={t} />
      <Experience t={t} />
      <Education t={t} />
      <footer style={styles.footer}>
        <p>{t.footer}</p>
      </footer>
    </>
  )
}

const styles = {
  footer: {
    background: '#010409',
    color: '#6E7681',
    textAlign: 'center',
    padding: '20px',
    fontSize: '0.8rem',
    borderTop: '1px solid #21262D',
  },
}

export default App
