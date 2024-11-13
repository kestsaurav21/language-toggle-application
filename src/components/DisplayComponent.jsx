import React, { useContext } from 'react'
import translation from "../mockData/translations.json"
import availableLang from '../mockData/availableLang.json'
import { LanguageContext } from '../context/LangaugeContext'


const DisplayComponent = () => {

  const { language } = useContext(LanguageContext)

  const langName = availableLang.filter((lang) => lang.code == language);

  return (
    <div>
      
        <h4>{translation[language].currentLang}: {langName[0].label} </h4>
        <h2>{translation[language].greeting}</h2>
        <h4>{translation[language].message}</h4>
    </div>
  )
}

export default DisplayComponent