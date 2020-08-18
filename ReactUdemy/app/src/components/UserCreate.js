import React, { useEffect,useState} from 'react';
import Field from './Field';
import Button from './Button';

const UserCreate = (props) => {
    
    return (
        <div className="ui container">
            <Field />
            <Button />
        </div>
    );
}

export default UserCreate;