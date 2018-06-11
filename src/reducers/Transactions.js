import { 
    DEPOSIT,
    EXTRACT,
    PAY_SERVICE,
    PURCHASE,
    TRANSFER,
    ADD,
    MINUS
} from '../actions/types';

const INITIAL_STATE = {
    balance: 5000,
    extractionLimit: 1000,
    response: null
};

export default (state = INITIAL_STATE, action) => {
    let { balance } = state;
    switch (action.type) {
        case DEPOSIT:
            return { ...state, balance: operate(balance, ADD, action.payload) };
        case EXTRACT:
            return { ...state, balance: operate(balance, MINUS, action.payload) };
        case PAY_SERVICE:
            return { ...state, balance: operate(balance, MINUS, action.payload) };
        case PURCHASE:
            return { ...state, balance: operate(balance, MINUS, action.payload) };
        case TRANSFER:
            return { ...state, balance: operate(balance, MINUS, action.payload) };
        default:
            return state;
    }
}

function operate (balance, operand, amount) {
    return (operand === ADD) ? balance + parseInt(amount,10) : balance - parseInt(amount,10) 
}
