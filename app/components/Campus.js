import React, { Component } from 'react'
//component

class Campus extends Component {

    componentDidMount() {
        if (this.props.Campus !== []) {
            const campusId = this.props.match.params.campusId
            this.props.fetchCampus(campusId)
        }
    }


    render() {
        return (
            <div>
                <h2>{this.props.Campus.length && this.props.Campus[0].name}</h2>
            </div>
        )
    }
}
//container

import { connect } from 'react-redux'
import { fetchCampus } from '../redux/campuses'

const mapStateToProps = (state) => {
    return { Campus: state.campuses }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCampus: (campusId) => {
            dispatch(fetchCampus(campusId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Campus)
