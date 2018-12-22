import React, { Component } from 'react'


class FormContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            amount: 1000,
            tenure: 1
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const target = event.target
        const value = target.value
        const name = target.name

        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onLoanFormSubmit(this.state)
    }

    render() {
        const {formContainerStyle} = Styles
        return (
            <div className="container" style={formContainerStyle}>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="amount">Amount (SGD) </label>
                        <input
                            type="text"
                            className="form-control"

                            value={this.state.amount}
                            onChange={this.handleChange}
                            name="amount"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="tenure">Tenure (years) </label>
                        <input
                            type="text"
                            className="form-control"

                            value={this.state.tenure}
                            onChange={this.handleChange}
                            name="tenure"
                        />
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }

}


const Styles = {
    formContainerStyle: {
        border: '1px solid grey',
        marginTop: 20,
        padding: 20
    }
}

export default FormContainer
