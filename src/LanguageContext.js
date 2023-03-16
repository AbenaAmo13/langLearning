import React, {createContext, useState} from "react";
export const LanguageContext = createContext();

export const LanguageContextProvider= ({children}) => {
    const [language, setLanguage] = useState(localStorage.getItem("language"));
    const updateLanguage = (language) => {
        localStorage.setItem("language", language);
        setLanguage(language);
    };
    return (
        <LanguageContext.Provider value={{ language, updateLanguage}}>
            {children}
        </LanguageContext.Provider>
    );
}

export default LanguageContextProvider;
