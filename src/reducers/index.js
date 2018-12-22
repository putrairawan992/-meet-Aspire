
import { NEW_LOAN, REPAY_LOAN } from "../constants/action-types";

const initialState = {
    loan: null, 
    payments: null
}
const rootReducer = (state = initialState, action) => {

    switch (action.type) {
        case NEW_LOAN:
            return { ...state, loan: action.payload }
        case REPAY_LOAN: {
            const totalPaid = parseFloat((state.payments && state.payments.paid) || 0)  + parseFloat(action.payload)
            const payments = {
                paid: totalPaid
            }
            return { ...state, payments: payments }
        }
        default:
            return initialState
    }
}

export default rootReducer
