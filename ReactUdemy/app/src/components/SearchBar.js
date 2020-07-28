import React, { useState} from 'react';

const SearchBar = (props) => {
    const [term, setTerm] = useState('');

    const onInputChange = (event) => {
        setTerm(event.target.value);
    }
    const onFormSubmit = (event) => {
        event.preventDefault();
        props.onTermSubmit(term);
    }

    return (
        <div className="ui segment search-bar">
            <form onSubmit={onFormSubmit} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input value={term} onChange={onInputChange} className="" />
                </div>
            </form>
        </div>    
    );
    
}

export default SearchBar;