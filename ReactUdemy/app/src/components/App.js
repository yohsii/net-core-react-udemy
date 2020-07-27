import React, { useState} from 'react';
import Accordion from './Accordion';
import Search from './Search';
import Dropdown from './Dropdown';
import Translate from './Translate';
import Route from './Route';
import Header from './Header';

const items = [
    {
        title: "What is React?"
        , content: "React is a front end javascript framework"
    },
    {
        title: "Why use React?"
        , content: "React is a favourite JS library among engineers"
    },
    {
        title: "How do you use React?"
        , content: "You use React by creating Components"
    }
];

const options = [
    {
        label: 'The Color Red'
        ,value:'red'
    }
    , {
        label: 'The Color Green'
        ,value:'green'
    }
    , {
        label: 'A Shade of Blue'
        ,value:'blue'
    }
];

const App = (props) => {
    const [selected, setSelected] = useState(options[0]);

    return (
        <div>
            <Header/>
            <Route path="/">
                <Accordion items={items}/>
            </Route>
            <Route path="/list">
                <Search/>
            </Route>
            <Route path="/dropdown">
                <Dropdown label={'select a colour'} options={options} selected={selected} onSelectedChange={setSelected} />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>

        </div>    
    );
}

export default App;