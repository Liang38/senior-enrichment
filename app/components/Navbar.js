import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

//component

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        {/* <Link className="navbar-brand" to="/"><img src="/images/logo.png" /></Link> */}
                    </div>
                    <div className="collapse navbar-collapse">
                        <h5>Navbar</h5>
                        <ul className="nav navbar-nav">
                            <li>
                                <a className="navbar-brand" href="/">Home</a>
                                {/* <NavLink to="/AllCampus" activeClassName="active">Campuses</NavLink> */}
                            </li>
                            <li>
                                <a className="navbar-brand" href="/campuses">Campuses</a>
                                {/* <NavLink to="/AllStudent" activeClassName="active">Students</NavLink> */}
                            </li>
                            <li>
                                <a className="navbar-brand" href="/students">Students</a>
                                {/* <NavLink to="/AllStudent" activeClassName="active">Students</NavLink> */}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;