import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'

import AllStudent from './AllStudent'
import AllCampus from './AllCampus'
import Student from './Student'
import Campus from './Campus'
import StudentForm from './StudentForm'

export default class Root extends Component {

  render() {
    return (
      <div>
        <Route exact path='/' render={() => <h1>this is home page</h1>} />
        <Switch>
          <Route path='/students/:studentId' component={Student} />
          <Route path='/campuses/:campusId' component={Campus} />
          <Route path='/students' component={AllStudent} />
          <Route path='/campuses' component={AllCampus} />
          <Route path='/studentform' component={StudentForm} />
        </Switch>
      </div>
    )
  }
}
