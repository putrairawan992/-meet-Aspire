import React, { Component } from 'react'
import Message from './Message'
import FormContainer from './FormContainer'
import store from '../store';
import { connect } from 'react-redux'
import { newLoan } from '../actions'
import { Link } from 'react-router-dom'
const mapDispatchToProps = dispatch => {
    return {
        newLoan: loan => dispatch(newLoan(loan))
    }
}


class NewLoan extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loanApproved: false
        }
        this.unsubscribe = null
        this.handleLoanFormSubmit = this.handleLoanFormSubmit.bind(this)
    }

    componentWillMount() {
        this.unsubscribe = store.subscribe(() => {
            if (store.getState().loan) {
                this.setState({
                    loanApproved: true
                })
            }
        })
    }

    componentWillUnmount() {
        this.unsubscribe()
    }

    handleLoanFormSubmit(data) {
        this.props.newLoan(data)
    }

    render() {
        let loan, loanApproved = store.getState().loan !== null
        if (loanApproved) {
            loan = store.getState().loan
        }
        return (
            <div>
                {loanApproved ?
                    (
                        <Message>
                            {(
                                <div className="jumbotron jumbotron-fluid">
                                    <div className="container">
                                        <h1 className="display-4">A loan amount of SGD ${loan.amount} was approved at {loan.time.toLocaleDateString() + ' ' + loan.time.toLocaleTimeString()}</h1>
                                        <p className="lead">Tenure: {loan.tenure} years</p>
                                        <Link className="btn btn-primary" to="/repay" >Repay</Link>
                                    </div>

                                </div>

                            )}
                        </Message>
                    ) :
                    <FormContainer onLoanFormSubmit={this.handleLoanFormSubmit} />
                }
            </div>
        )
    }
}

const ConnectedNewLoan = connect(null, mapDispatchToProps)(NewLoan)

export default ConnectedNewLoan
