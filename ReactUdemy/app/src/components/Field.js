import React, { useEffect, useState,useContext } from 'react';
import LanguageContext from '../contexts/LanguageContext';

const Field = (props) => {
    const languageContext = useContext(LanguageContext);
    const text = languageContext === "english" ? "name" : "naam";
    return (
        <div className="ui field">
            <label>{text}</label>
            <input/>
        </div>
    );
}

export default Field;