import React, { useContext } from 'react'
import availableLang from '../mockData/availableLang.json'
import { LanguageContext } from '../context/LangaugeContext'

const LanguageSwitcher = () => {

  const { language, changeLanguage } = useContext(LanguageContext);

  return (
    <div>
      <select value={language} 
      onChange={(e) => changeLanguage(e.target.value) }>
        {
          availableLang.map( (lang) => (
            <option key={lang.code} value={lang.code}>{lang.name}</option>
          ) )
        }
      </select>
    </div>
  )
}

export default LanguageSwitcher
