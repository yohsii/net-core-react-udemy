import React, { useState} from 'react';

//class Accordion extends React.Component {

  //  render() {
const Accordion = (props) => {
    const [activeIndex,setActiveIndex] = useState(null);

    const onTitleClicked = (index) => {
        setActiveIndex(index);
    }

    const accItems = props.items.map((item, index) => {
        var active = index === activeIndex ? 'active' : '';
        return (
            <React.Fragment key={item.title}>
                <div onClick={() => onTitleClicked(index)} className={`title ${active}`}>
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        );
    });

    return (
        <div className="ui styled accordion">
            {accItems}
        </div>
    );
    
}

export default Accordion;