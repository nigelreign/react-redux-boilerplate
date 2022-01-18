import { createRoutine } from 'redux-saga-routines';

const getServicesRoutine = createRoutine('GET_SERVICES');
export default getServicesRoutine;

export const getRatesRoutine = createRoutine('GET_RATES');
export const postTransactionRoutine = createRoutine('POST_TRANSACTION');
export const setPaymentPayloadRoutine = createRoutine('PAYMENT_PAYLOAD');

