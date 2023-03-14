import React, {createContext, useState} from "react";
export const LanguageContext = createContext();

export const LanguageContextProvider= ({children}) => {
    const [language, setLanguage] = useState();
    const chooseLanguage = (language) => {
        localStorage.setItem("language", language);
        setLanguage(language);
    };
    return (
        <LanguageContext.Provider value={{ language, chooseLanguage}}>
            {children}
        </LanguageContext.Provider>
    );
}

export default LanguageContextProvider;
