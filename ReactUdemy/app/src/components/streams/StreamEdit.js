import React, { useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions/index';
import StreamForm from './StreamForm';

const StreamEdit = (props) => {
    const onSubmit = (formValues) => {
        props.editStream(formValues.id,formValues);
    };

    console.log("props and initial values",props);
    const { id, fetchStream } = props;
    useEffect(() => {
        fetchStream(id);
    }, [id,fetchStream]);
    return (
        <div>
            <h3>Edit Stream: {props?.stream?.title || "Loading"}</h3>
            <StreamForm initialValues={props.initialValues} onSubmit={onSubmit} />
        </div>
    );
}

const mapStateToProps = (state,ownProps) => {
    console.log(state,ownProps);
    let stream = state.streams[ownProps.id];
    const initialValues = { ...stream };
    delete initialValues.userId;
    return {
        stream,initialValues
    };
}

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);