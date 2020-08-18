import React, { useEffect,useState} from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

const App = (props) => {
    const [language,setLanguage] = useState("english");

    const onLanguageChange = (language) => {

    }

    return (
        <div className="ui container">
            Select a language:
            <i onClick={()=>setLanguage("english")} className="flag us" />
            <i onClick={() => setLanguage("nl")} className="flag nl"/>
            <LanguageContext.Provider value={language}>
                <ColorContext.Provider value={'blue'}>
                    <UserCreate />
                </ColorContext.Provider>
            </LanguageContext.Provider>
        </div>
    );
}

export default App;