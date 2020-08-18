import React, { useEffect,useState} from 'react';
import UserCreate from './UserCreate';
import { LanguageStore } from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import LanguageSelector from './LanguageSelector';

const App = (props) => {
    
    return (
        <div className="ui container">
            <LanguageStore>
                <LanguageSelector />
                <ColorContext.Provider value={'blue'}>
                    <UserCreate />
                </ColorContext.Provider>
            </LanguageStore>
        </div>
    );
}

export default App;