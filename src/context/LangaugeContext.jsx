import { createContext, useContext, useState } from 'react';


const LanguageContext = createContext();


const LanguageProvider = ( {children} ) => {

    const [ language, setLanguage ] = useState('en');

    const changeLanguage = ( lang ) => {
        console.log("current language: ", language);
        console.log("switched to: ", lang);
        setLanguage(lang);
    }


    return (
        <LanguageContext.Provider value={{language, changeLanguage}} >
            {children}
        </LanguageContext.Provider>
    )

}

export { LanguageContext, LanguageProvider }



