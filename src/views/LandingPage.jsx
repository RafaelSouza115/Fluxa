/*
 * LandingPage.jsx - View: composição da landing page.
 * Esta é a "View" do MVVM: orquestra todos os componentes UI,
 * fornece navegação por âncoras e rendered estrutura da página.
 * Não contém regras financeiras - apenas UI e navegação.
 * Importa o ViewModel de tema e usa o FinanceDemo para a demonstração.
*/

import { useState } from 'react'
import { useThemeViewModel } from '../viewmodels/useThemeViewModel'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Benefits from '../components/Benefits'
import ProductPreview from '../components/ProductPreview'
import HowItWorks from '../components/HowItWorks'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import Faq from '../components/Faq'
import FinanceDemo from '../components/FinanceDemo'
import Footer from '../components/Footer'

export default function LandingPage() {
  const [theme, setDark, setLight, alternar] = useThemeViewModel('light')
  const [mostrarDemo, setMostrarDemo] = useState(false)

  return (
    <div className="app">
      <Header theme={theme} alternar={alternar} />
      <Hero onMostrarDemo={setMostrarDemo} />
      <Benefits />
      <ProductPreview />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <Faq />
      <Footer />
      {mostrarDemo && <FinanceDemo fecharDemo={() => setMostrarDemo(false)} theme={theme} alternar={alternar} />}
    </div>
  )
}