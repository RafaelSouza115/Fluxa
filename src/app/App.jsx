/*
 * App.jsx - Container raíz da aplicação MVVM.
 * Composto exclusivamente pela LandingPage (View).
 * Não contém lógica financeira — apenas monta a estrutura da página.
*/

import LandingPage from '../views/LandingPage'

export default function App() {
  return <LandingPage />
}