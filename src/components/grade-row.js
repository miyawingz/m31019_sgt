import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteGradeRecord } from '../actions';

class GradeRow extends Component {
    async handleDelete(id,index) {
        this.props.deleteGradeRecord(id,index);
    }

    render() {
        const { name, course, grade, id, index } = this.props;

        return (
            <tr className={''}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{course}</td>
                <td>{grade}</td>
                <td className="text-center">
                    <i
                        className="fas fa-trash fa-lg text-danger mx-2"
                        onClick={() => this.handleDelete(id, index)}
                    ></i>
                    {/* When Ready to add update functionality uncomment this code
                    <i
                        className="fas fa-edit fa-lg text-info mx-2"
                        onClick={() => setActiveForEdit(id)}
                    ></i> */}
                </td>
            </tr>
        );
    }
}

function mapStateToProps(state) {
    return {

    }
}

export default connect(mapStateToProps, {
    deleteGradeRecord: deleteGradeRecord
})(GradeRow);
