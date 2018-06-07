import { 
    DEPOSIT,
    EXTRACT,
    PAY_SERVICE,
    PURCHASE,
    TRANSFER
} from '../actions/types';

const INITIAL_STATE = {
    balance: 5000,
    extractionLimit: 1000
};

export default (state = INITIAL_STATE, action) => {
    let amount = 0;
    switch (action.type) {
        case DEPOSIT:
            amount = state.balance + parseInt(action.payload, 10);
            return { ...state, balance: amount };
        case EXTRACT:
            amount = state.balance - parseInt(action.payload, 10);
            return { ...state, balance: amount };
        case PAY_SERVICE:
            amount = state.balance - parseInt(action.payload, 10);
            return { ...state, balance: amount };
        case PURCHASE:
            amount = state.balance - parseInt(action.payload, 10);
            return { ...state, balance: amount };
        case TRANSFER:
            amount = state.balance - parseInt(action.payload, 10);
            return { ...state, balance: amount };
        default:
            return state;
    }
}