import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link, Redirect
} from 'react-router-dom'

import Home from './Home'


class RouteContainer extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link className="nav-link" to="/home">Mini Aspire</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                {
                                    this.props.routing.map(route => <li key={route.path} className="nav-item"> <Link className="nav-link" to={route.path}>{route.description}</Link> </li>)
                                }
                            </ul>
                        </div>
                    </nav>
                    <Route exact path="/" render={() => (
                        <Redirect to="/home" />
                    )} />
                    <Route key="/home" path="/home" component={Home}></Route>
                    {
                        this.props.routing.map(route => <Route key={route.path} path={route.path} component={route.routeToComponent} />)
                    }
                </div>

            </Router>
        )
    }
}

export default RouteContainer
