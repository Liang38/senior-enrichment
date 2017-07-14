import React from 'react';
import axios from 'axios';
import { updateStudent, addStudent } from '../redux/students'


const blankFormState = {
    name: '',
    email: '',
    campusId: '',
};

class StudentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = blankFormState;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const value = event.target.value;
        this.setState({
            [event.target.name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addStudent(this.state)
        this.props.history.push('/students')
        this.setState(blankFormState);
    }

    render() {
        return (
            <div>
                <div className="col-sm-2"></div>
                <div className="col-sm-8">
                    <h2>Add New Student</h2>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Name:
                <input
                                className="form-control"
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={this.state.name}
                                onChange={this.handleChange}
                            />
                        </label>
                        <hr />
                        <label>
                            Email:
                <input
                                className="form-control"
                                type="text"
                                name="email"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                        </label>
                        <hr />
                        <label>
                            CampusId:
                <input
                                className="form-control"
                                name="campusId"
                                placeholder="input 1-4"
                                value={this.state.campusId}
                                onChange={this.handleChange}
                            />
                        </label>
                        <hr />
                        <input
                            className="btn btn-success"
                            type="submit"
                        />
                    </form>
                </div>
            </div>
        );
    }
}

import { connect } from 'react-redux'
// import { updateStudent, addStudent } from '../redux/students'

const mapDispatchToProps = (dispatch) => {
    return {
        // updateStudent: () => {
        //     dispatch(updateStudent)
        // },
        addStudent: (obj) => {
            dispatch(addStudent(obj))
        }
    }
}

export default connect(null, mapDispatchToProps)(StudentForm)
