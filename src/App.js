import React, { Component } from 'react'
import ConnectedRepay from './component/Repay'
import Menu from './component/Menu';
import ConnectedNewLoan from './component/NewLoan';

class App extends Component {
    render() {
        const ROUTING_DETAILS = [
            { path: '/newLoan', routeToComponent: ConnectedNewLoan, description: 'New Loan' },
            { path: '/repay', routeToComponent: ConnectedRepay, description: 'Repay' }
        ]
        return (
            <div>
                <Menu routing={ROUTING_DETAILS} />
            </div>
        )
    }
}

export default App
