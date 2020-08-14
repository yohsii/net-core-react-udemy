import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions/index';
import StreamForm from './StreamForm';

const StreamCreate = (props) => {
    console.log(props);
    
    const onSubmit = (formValues) => {
        console.log(formValues);
        props.createStream(formValues);
    }

    return (
        <div>
            <h3 className="ui header">
                Create a Stream
            </h3>
            <StreamForm onSubmit={onSubmit} />
        </div>
    );
}

export default connect(null, { createStream })(StreamCreate);