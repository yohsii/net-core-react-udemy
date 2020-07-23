import React, { useState, useEffect, useRef} from 'react';

const Dropdown = (props) => {
    const [open, setOpen] = useState(false);
    const ref1 = useRef();

    useEffect(() => {
        const onBodyClick = (event) => {
            if (ref1.current.contains(event.target))
                return;

            setOpen(false); console.log("body click!");
        }
        document.body.addEventListener('click', onBodyClick);

        return () => {
            document.body.removeEventListener('click', onBodyClick);
        };
    },[]);

    const renderedOptions = props.options.map((option) => {
        if (option.value === props.selected.value) return null;
        return (
            <div key={option.value} className="item" onClick={(event) => { props.onSelectedChange(option); console.log("item clicked"); }}>
                {option.label}
            </div>
        );
    });

    return (
        <div ref={ref1} className="ui form">
            <div className="field">
                <label className="label">Select a Colour</label>
                <div onClick={() => { setOpen(!open); console.log("dropdown clicked"); }} className={`ui selection dropdown ${open?'visible active':''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{props.selected.label}</div>
                    <div className={`menu ${open?'visible transition':''}`}>
                            {renderedOptions}
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default Dropdown;