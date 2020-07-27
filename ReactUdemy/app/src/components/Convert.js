import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = (props) => {
    const [translated, setTranslated] = useState('');
    const [debouncedText, setDebouncedText] = useState('');
    const [debouncedLanguage, setDebouncedLanguage] = useState('');

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebouncedText(props.text);
            setDebouncedLanguage(props.language);
        }, 500);
        return () => { clearTimeout(timeoutId); };
    }, [props.text, props.language]);

    useEffect(() => {
        (async () => {
            var { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: props.text,
                    target: props.language.value,
                    key:'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            });
            setTranslated(data.data.translations[0].translatedText);
        })();

    }, [debouncedLanguage, debouncedText]);

    return (
        <div className="ui header">{translated}</div>    
    );
}

export default Convert;