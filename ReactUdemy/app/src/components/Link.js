import React from 'react';

const Link = (props) => {
    const onClick = (e) => {
        if (e.metaKey || e.ctrlKey) {
            return;
        }

        e.preventDefault();
        window.history.pushState({}, '', props.href);

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }

    return (
        <a onClick={(e) => { onClick(e); }} className={props.className} href={props.href}>
            {props.children}
        </a>    
    );
}

export default Link;