/** ViewModel (MVVM): um único estado de tema compartilhado pela landing page. */
import { useCallback, useEffect, useState } from 'react'

const KEY = 'fluxa-theme'
function temaInicial() {
  try {
    const salvo = window.localStorage.getItem(KEY)
    if (salvo === 'light' || salvo === 'dark') return salvo
  } catch { /* armazenamento pode estar indisponível */ }
  return typeof window !== 'undefined' && window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function useThemeViewModel() {
  const [theme, setTheme] = useState(temaInicial)
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try { window.localStorage.setItem(KEY, theme) } catch { /* sem persistência */ }
  }, [theme])
  const alternar = useCallback(() => setTheme(atual => atual === 'dark' ? 'light' : 'dark'), [])
  return { theme, alternar }
}
