import React from 'react'
import { Link } from 'react-router-dom'

//Component
class AllCampuses extends React.Component {

    componentDidMount() {
        this.props.fetchCampuses()
    }
    render() {
        return (
            <div>
                <ul className="list-unstyled">

                    {
                        this.props.AllCampuses && this.props.AllCampuses.map(campus => {
                            return (
                                <li key={campus.id}>
                                    <Link to={`/campuses/${campus.id}`}
                                        onClick={() => this.props.fetchCampus(campus.id)}>
                                        {campus.name}
                                    </Link>
                                    <button type="button" onClick={() => this.props.removeCampus(campus.id)} id={campus.id}>Delete me!!</button>

                                </li>
                            )
                        })}
                </ul>
            </div>
        )
    }
}

//container
import { connect } from 'react-redux'
import { fetchCampuses, fetchCampus, removeCampus } from '../redux/Campuses'

const mapStateToProps = (state) => {
    return { AllCampuses: state.campuses }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCampuses: () => {
            dispatch(fetchCampuses())
        },
        fetchCampus: (campusId) => {
            dispatch(fetchCampus(campusId))
        },
        removeCampus: (campusId) => {
            dispatch(removeCampus(campusId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllCampuses)
