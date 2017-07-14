import React, { Component } from 'react'
import { Link } from 'react-router-dom'

//component

class Student extends Component {

    componentDidMount() {
        if (this.props.Student !== []) {
            const studentId = this.props.match.params.studentId
            this.props.fetchStudent(studentId)
        }
    }
    render() {
        return (
            <div>
                {this.props.Student.length ?
                    <Link to={`/campuses/${this.props.Student[0].campusId}`}>
                        {this.props.Student[0].name}
                    </Link>
                    : null}
            </div>
        )
    }
}
//container
import { connect } from 'react-redux'
import { fetchStudent } from '../redux/students'

const mapStateToProps = (state) => {
    return { Student: state.students }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchStudent: (studentId) => {
            dispatch(fetchStudent(studentId))
        },
        // fetchCampus: (campusId) => {
        //     dispatch(fetchCampus(campusId))
        // }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Student)
