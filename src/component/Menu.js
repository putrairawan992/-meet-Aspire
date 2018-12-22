import React, { Component } from 'react'
import RouteContainer from './RouteContainer'
class Menu extends Component {
    render() {
        return (
            <RouteContainer routing={this.props.routing} />
        )
    }
}

export default Menu
