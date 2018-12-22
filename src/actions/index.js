import { NEW_LOAN, REPAY_LOAN } from "../constants/action-types";


const newLoan = loan => ({type: NEW_LOAN, payload: {...loan, time: new Date()}})
const repayLoan = (amount) => ({type: REPAY_LOAN, payload: amount})

export { newLoan,  repayLoan}
