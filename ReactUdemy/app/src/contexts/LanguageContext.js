import React, { useState,useEffect} from 'react';

const context = React.createContext('english');

export const LanguageStore = (props) => {
    const [language, setLanguage] = useState("english");

    return (
        <context.Provider value={{language,setLanguage}}>
            {props.children}
        </context.Provider>
    );
}

export default context;