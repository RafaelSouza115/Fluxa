import { useRef, useState } from 'react'
import { useThemeViewModel } from '../viewmodels/useThemeViewModel.js'
import Header from '../components/Header/Header.jsx'
import Hero from '../components/Hero/Hero.jsx'
import Benefits from '../components/Benefits/Benefits.jsx'
import ProductPreview from '../components/ProductPreview/ProductPreview.jsx'
import HowItWorks from '../components/HowItWorks/HowItWorks.jsx'
import Testimonials from '../components/Testimonials/Testimonials.jsx'
import Pricing from '../components/Pricing/Pricing.jsx'
import Faq from '../components/Faq/Faq.jsx'
import FinanceDemo from '../components/FinanceDemo/FinanceDemo.jsx'
import Footer from '../components/Footer/Footer.jsx'
import styles from './LandingPage.module.css'

/** View (MVVM): composição da landing page, sem regras de negócio financeiras. */
export default function LandingPage() {
  const { theme, alternar } = useThemeViewModel()
  const [mostrarDemo, setMostrarDemo] = useState(false)
  const demoRef = useRef(null)

  function abrirDemo() {
    setMostrarDemo(true)
    // Após abrir a seção condicional, garante que o CTA leva ao formulário.
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => demoRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }))
    })
  }

  return (
    <div className={styles.page}>
      <Header theme={theme} alternar={alternar} onTestar={abrirDemo} />
      <main>
        <Hero onMostrarDemo={abrirDemo} />
        <Benefits />
        <ProductPreview />
        <HowItWorks onMostrarDemo={abrirDemo} />
        <Testimonials />
        <Pricing onMostrarDemo={abrirDemo} />
        <Faq />
        {mostrarDemo && (
          <div ref={demoRef} id="demo" className={styles.demoContainer}>
            <FinanceDemo onFechar={() => setMostrarDemo(false)} />
          </div>
        )}
      </main>
      <Footer onTestar={abrirDemo} />
    </div>
  )
}
