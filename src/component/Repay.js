import React, { Component } from 'react'
import { repayLoan } from '../actions';
import store from '../store';
import { connect } from 'react-redux';
import Message from './Message';


const mapDispatchToProps = dispatch => {
    return {
        repay: amount => dispatch(repayLoan(amount))
    }
}

class Repay extends Component {

    constructor() {
        super()
        this.unsubsribe = null
        this.manageState = this.manageState.bind(this)
        this.manageState()
        this.handleRepay = this.handleRepay.bind(this)
    }

    componentWillMount() {
        this.unsubsribe = store.subscribe(() => {
            this.manageState()
        })
    }

    componentWillUnmount() {
        this.unsubsribe()
    }

    handleRepay() {
        this.props.repay(this.state.weeklyPayment)
        this.manageState()
    }


    manageState() {
        const { loan, payments } = store.getState()

        let { amount, tenure } = loan || { amount: 0, tenure: 0 }
        let { paid } = (payments || { paid: 0 })
        let remaining = (amount && paid ? amount - paid : 0)
        let weeklyPayment = (amount / ((365 / 7) * tenure))

        paid = parseFloat(paid).toFixed(2)
        remaining = parseFloat(remaining).toFixed(2)
        weeklyPayment = parseFloat(weeklyPayment).toFixed(2) || 0

        let loanAmountPaid = false

        if ((amount - paid) < 0) {
            loanAmountPaid = true
        }

        if (this.state) {
            this.setState({
                amount: amount,
                tenure: tenure,
                paid: paid,
                remaining: remaining,
                weeklyPayment: weeklyPayment,
                loanAmountPaid: loanAmountPaid
            })
        } else {
            this.state = {
                amount: amount,
                tenure: tenure,
                paid: paid,
                remaining: remaining,
                weeklyPayment: weeklyPayment,
                loanAmountPaid: loanAmountPaid
            }
        }
    }


    // componentWillMount() {
    //     const {loan, payments} = store.getState()
    //     this.setState({
    //         amount: loan.amount,
    //         tenure: loan.tenure,
    //         paid: payments.paid || 0,
    //         remaining: loan.amount - (payments.paid || 0 )
    //     })
    // }
    render() {
        return (

            <div className="container container-fluid">
                <h1 className="display-4">Loan amount: SGD${this.state.amount}</h1>
                <h4 >Loan tenure: {this.state.tenure} year(s)</h4>

                {
                    !this.state.loanAmountPaid ?
                        (
                            <div>
                                <h4 >Total paid: {this.state.paid}</h4>
                                <h4 >Toral remaining: {this.state.remaining}</h4>

                                <hr />

                                <p>Weekly repay amount is  SGD ${this.state.amount} / ( 365/7 )  = SGD${this.state.weeklyPayment}</p>
                                <button type="button" className="btn btn-primary" onClick={this.handleRepay}>Pay ${this.state.weeklyPayment} Now</button>
                            </div>
                        ) :

                        (

                            <Message>

                                
                                {
                                    (
                                        <div className="jumbotron jumbotron-fluid">
                                            <div className="container">
                                                <h4>Hurray, You have paid all the dues</h4>
                                                <p className="lead">Wanna get a new loan? <a href="/newloan">New Loan</a></p>
                                            </div>
                                        </div>
                                    )
                                }
                            </Message>
                            
                        )
                }



            </div>


        )
    }

}

const ConnectedRepay = connect(null, mapDispatchToProps)(Repay)
export default ConnectedRepay
