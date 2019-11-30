import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import Input from './input';
import { addGradeRecord } from '../actions';

class AddGradeForm extends Component {
    async handleAddUpdate(values) {
        // Do add functionality first
        await this.props.addGradeRecord(values);
        this.props.reset()
    }

    handleReset() {
        console.log('Reset the form');
    }

    render() {
        const { handleSubmit, isEdit } = this.props;

        return (
            <form className="container" onSubmit={handleSubmit(this.handleAddUpdate.bind(this))}>
                <h3>{isEdit ? 'Edit' : 'Add'} Student</h3>

                <Field name="name" placeholder="Student Name" icon="user" component={Input} />
                <Field name="course" placeholder="Student Course" icon="school" component={Input} />
                <Field name="grade" placeholder="Student grade" type="number" icon="graduation-cap" component={Input} />

                <div className="text-right">
                    <button onClick={this.handleReset.bind(this)} type="button" className="btn btn-outline-danger mr-3">Cancel</button>
                    <button className={`btn btn-outline-${isEdit ? 'warning' : 'success'}`}>{isEdit ? 'Update' : 'Add'}</button>
                </div>
            </form>
        );
    }
}

function validate({ course, grade, name }) {
    const errors = {};

    // Add Validation

    return errors;
}

AddGradeForm = reduxForm({
    form: 'add-grade',
    enableReinitialize: true,
    validate: validate
})(AddGradeForm);

function mapStateToProps(state) {
    return {}
}

export default connect(mapStateToProps, {
    addGradeRecord: addGradeRecord
})(AddGradeForm);
