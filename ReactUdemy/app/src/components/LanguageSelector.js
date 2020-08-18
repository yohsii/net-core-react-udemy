import React, { useContext} from 'react';
import LanguageContext from '../contexts/LanguageContext';

const LanguageSelector = (props) => {
    const languageContext = useContext(LanguageContext);

    return (
        <div>
            Select a language:
            <i onClick={() => languageContext.setLanguage("english")} className="flag us" />
            <i onClick={() => languageContext.setLanguage("nl")} className="flag nl" />
        </div>
    );
}

export default LanguageSelector;