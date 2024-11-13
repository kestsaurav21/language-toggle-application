import { useState } from 'react'
import './App.css'
import { LanguageProvider } from './context/LangaugeContext'
import LanguageSwitcher from './components/LanguageSwitcher'
import DisplayComponent from './components/DisplayComponent'

function App() {

  return (
    <LanguageProvider>
      <LanguageSwitcher />
      <DisplayComponent />
    </LanguageProvider>
  )
}

export default App
