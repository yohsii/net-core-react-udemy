import React, { useEffect,useState,useContext} from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
const Button = (props) => {
    const contextValue = useContext(LanguageContext);
    const colorContextValue = useContext(ColorContext);
    const text = contextValue.language === "english" ? "Submit" : "Voorleggen";
    const className = colorContextValue === "red"?"red":"primary";
    console.log("from languageContext:", contextValue);
    return (
        <button className={`ui button ${className}`}>{text}</button>
    );
}

export default Button;