/*
 * useThemeViewModel.js - ViewModel: gerencia o tema (claro/escuro).
 * Responsável por: persistência no localStorage, detecção de prefers-color-scheme,
 * e fornecimento de funções de alternância para a interface.
 * Esta camada separa a lógica de tema da componente visual.
*/

import { useState, useEffect, useCallback } from 'react'

export type Theme = 'light' | 'dark'

const THEME_KEY = 'fluxa-theme'

// Verifica o tema salvo ou o preference do sistema
const storedTheme = localStorage.getItem(THEME_KEY)
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

const initialTheme: Theme = storedTheme ? (storedTheme === 'dark' ? 'dark' : 'light') : prefersDark ? 'dark' : 'light'

export function useThemeViewModel(initialTheme: Theme = 'light'): [Theme, () => void, () => void] {
  const [theme, setTheme] = useState<Theme>(initialTheme)

  // Aplica o tema no elemento <html>
  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark-theme')
    } else {
      root.classList.remove('dark-theme')
    }
    localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  // Alterar para modo escuro
  const paraDark = useCallback(() => {
    setTheme('dark')
  }, [])

  // Alterar para modo claro
  const paraLight = useCallback(() => {
    setTheme('light')
  }, [])

  // Alternar entre claro e escuro
  const alternar = useCallback(() => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  }, [])

  return [theme, paraDark, paraLight, alternar]
}