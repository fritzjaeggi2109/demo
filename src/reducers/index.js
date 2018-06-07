import { combineReducers } from 'redux';
import Transactions from './Transactions';

export default combineReducers({
    transactions: Transactions
});