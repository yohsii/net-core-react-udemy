import React, { useState,useEffect} from 'react';
import axios from 'axios';

var timeout = null;

const Search = (props) => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [debouncedTerm, setDebouncedTerm] = useState(term);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term);
        }, 500);
        return () => { clearTimeout(timerId); };
    }, [term]);

    useEffect(() => {
        if (debouncedTerm) {
            (async () => {
                const response = await axios.get('https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=programming',
                    {
                        params: {
                            action: 'query',
                            list: 'search',
                            origin: '*',
                            format: 'json',
                            srsearch: term
                        }
                    });
                //console.log(response)
                setResults(response.data.query.search);
            })();
        }
    }, [debouncedTerm]);

    useEffect(() => {
        if (term) {
            timeout = setTimeout(() => {
                
            }, 500);
        }
        return () => {
            if (timeout)
                clearTimeout(timeout);
        };
    },[term]);

    const onTermChange = (event) => {
        setTerm(event.target.value);
        //console.log("term",event.target.value);
    }

    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`}>
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: result.snippet }}></div>
                </div>
            </div>
        );
    });

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input value={term} onChange={(event) => { onTermChange(event); }} type="text" className="input"/>
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    );
}

export default Search;