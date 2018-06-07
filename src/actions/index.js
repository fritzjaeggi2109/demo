import { 
    DEPOSIT,
    EXTRACT,
    PAY_SERVICE,
    PURCHASE,
    TRANSFER
} from './types';

export const deposit = amount => {
    return {
        type: DEPOSIT,
        payload: amount
    };
};

export const extract = amount => {
    return {
        type: EXTRACT,
        payload: amount
    };
};

export const payService = amount => {
    return {
        type: PAY_SERVICE,
        payload: amount
    };
};

export const purchase = amount => {
    return {
        type: PURCHASE,
        payload: amount
    };
};

export const transfer = amount => {
    return {
        type: TRANSFER,
        payload: amount
    };
};