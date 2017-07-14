import React from 'react'
import { Link } from 'react-router-dom'

//component
class AllStudents extends React.Component {

    componentDidMount() {
        this.props.fetchStudents()
    }
    render() {
        return (
            <div>
                {console.log(this.props)}
                <ul className="list-unstyled">
                    {this.props.AllStudents && this.props.AllStudents.map(student => {
                        return (
                            <li key={student.id}>
                                <Link to={`/students/${student.id}`} onClick={() => this.props.fetchStudent(student.id)}>
                                    {student.name}
                                </Link>
                                <button type="button" onClick={() => this.props.removeStudent(student.id)} id={student.id}>Delete me!!</button>
                            </li>
                        )
                    })}
                </ul>
                <button onClick={() => window.location.href = '/studentform'} className="button">
                    Add New Student
                </button>
            </div>
        )
    }
}

//container
import { connect } from 'react-redux'
import { fetchStudents, fetchStudent, removeStudent } from '../redux/students'

const mapStateToProps = (state) => {
    return { AllStudents: state.students }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchStudents: () => {
            dispatch(fetchStudents())
        },
        fetchStudent: (studentId) => {
            dispatch(fetchStudent(studentId))
        },
        removeStudent: (studentId) => {
            dispatch(removeStudent(studentId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllStudents)
