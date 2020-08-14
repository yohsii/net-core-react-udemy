import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions/index';

const renderError = (meta) => {
    if (meta.touched && meta.error) {
        return (
            <div className="ui error message">
                <div className="header">{meta.error}</div>
            </div>
        );
    }
}

const renderInput = (formProps) => {
    console.log(formProps.meta);
    const className = `field ${formProps.meta.touched && formProps.meta.error ? 'error' : ''}`;
    return (
        <div className={className}>
            <label>{formProps.label}</label>
            <input autoComplete="off" {...formProps.input} />
            {renderError(formProps.meta)}
        </div>
    );
    //<input onChange={formProps.input.onChange} value={formProps.input.value} />;
}

const StreamForm = (props) => {
    console.log(props);

    const onSubmit = (formValues) => {
        console.log(formValues);
        props.onSubmit(formValues);
    }

    return (
        <form className="ui form error" onSubmit={props.handleSubmit(onSubmit)}>
            <Field name="title" component={renderInput} label="Enter a Title" />
            <Field name="description" component={renderInput} label="Enter a Description" />
            <button className="ui button primary">Submit</button>
        </form>
    );
}

const validate = (formValues) => {
    let errors = {};
    if (!formValues.title)
        errors.title = 'Title is required';
    if (!formValues.description)
        errors.description = "Description is required";

    return errors;
}

export default reduxForm({ form: 'streamForm', validate, enableReinitialize: true })(StreamForm);
