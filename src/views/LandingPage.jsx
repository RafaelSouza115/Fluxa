/*
 * LandingPage.jsx - View: composição da landing page.
 * Esta é a "View" do MVVM: orquestra todos os componentes UI,
 * fornece navegação por âncoras e rendered estrutura da página.
 * Não contém regras financeiras - apenas UI e navegação.
 * Importa o ViewModel de tema e usa o FinanceDemo para a demonstração.
 */

import { useState } from 'react'
import { useThemeViewModel } from '../viewmodels/useThemeViewModel'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Benefits from '../components/Benefits/Benefits'
import ProductPreview from '../components/ProductPreview/ProductPreview'
import HowItWorks from '../components/HowItWorks/HowItWorks'
import Testimonials from '../components/Testimonials/Testimonials'
import Pricing from '../components/Pricing/Pricing'
import Faq from '../components/Faq/Faq'
import FinanceDemo from '../components/FinanceDemo/FinanceDemo'
import Footer from '../components/Footer/Footer'

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