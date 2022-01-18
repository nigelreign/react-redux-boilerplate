import { call, put, takeEvery } from "redux-saga/effects";
// eslint-disable-next-line import/no-unresolved
import getConfig from "config";
import getServicesRoutine, {
  getRatesRoutine,
  setPaymentPayloadRoutine,
  postTransactionRoutine,
} from "./routines";

const axios = require("axios");

/**
 * ============================================================
 * @param {Get Services}
 */
function* getServices(action) {
  const config = getConfig();

  const serviceUrl = `${config.api.base_url}services/`;

  const headers = {
    headers: {
      accept: "application/json",
    },
    mode: "cors",
  };

  try {
    // trigger request action
    yield put(getServicesRoutine.request());

    const response = yield call(axios.get, serviceUrl, headers);
    yield put(getServicesRoutine.success(response.data));
  } catch (error) {
    // if request failed
    yield put(getServicesRoutine.failure(error.message));
  } finally {
    // trigger fulfill action
    yield put(getServicesRoutine.fulfill());
  }
}

function* mainSaga() {
  // run fetchDataFromServer on every trigger action
  yield takeEvery(getServicesRoutine.TRIGGER, getServices);
}

export default mainSaga;

/**
 * ===============================================================
 * END OF GET SERVICES
 * ===============================================================
 * GET RATES
 * ===============================================================
 */

function* getRates(action) {
  const config = getConfig();
  // const { amount } = action.payload;

  const ratesUrl = `${config.api.base_url}rates/`;

  const headers = {
    headers: {
      accept: "application/json",
    },
    mode: "cors",
  };

  // const payload = JSON.stringify({
  //   amount: Number(amount),
  //   currency: "ZAR",
  // });

  try {
    // trigger request action
    yield put(getRatesRoutine.request());

    const response = yield call(axios.get, ratesUrl, headers);
    // if request successfully finished

    yield put(getRatesRoutine.success(response.data));
  } catch (error) {
    // if request failed
    yield put(getRatesRoutine.failure(error));
  } finally {
    // trigger fulfill action
    yield put(getRatesRoutine.fulfill());
  }
}

export function* getRatesSaga() {
  yield takeEvery([getRatesRoutine.TRIGGER], getRates);
}

/**
 * ===============================================================
 * END OF GET RATES
 * ===============================================================
 * POST TRANSACTION
 * ===============================================================
 */

function* postTransaction(action) {
  const config = getConfig();
  const { values } = action.payload;

  const billpaymentUrl = `${config.api.tumai_url}33/`;

  const headers = {
    headers: {
      accept: "application/json",
      apiUsername: config.api.apiUsername,
      apiKey: config.api.apiKey,
    },
    mode: "cors",
  };

  try {
    // trigger request action
    yield put(postTransactionRoutine.request());

    const response = yield call(axios.post, billpaymentUrl, values, headers);
    // if request successfully finished

    yield put(postTransactionRoutine.success(response.data));
  } catch (error) {
    // if request failed
    yield put(postTransactionRoutine.failure(error));
  } finally {
    // trigger fulfill action
    yield put(postTransactionRoutine.fulfill());
  }
}

export function* postTransactionSaga() {
  yield takeEvery([postTransactionRoutine.TRIGGER], postTransaction);
}
/**
 * ===============================================================
 * END OF POST TRANSACTION
 * ===============================================================
 * STORE PAYMENT PAYLOAD
 * ===============================================================
 */

function* paymentPayload(action) {
  const { values } = action.payload;

  try {
    // trigger request action
    yield put(setPaymentPayloadRoutine.request());

    if (values) {
      localStorage.setItem(
        "paymentPayload",
        JSON.stringify({
          payload: values,
        })
      );
    }
    
    const getPaymentPayload = () => {
      const cartInfo = localStorage.getItem("paymentPayload");

      if (cartInfo !== null) {
        const infocart = JSON.parse(cartInfo).payload;
        return infocart;
      }
      return [];
    };

    yield put(setPaymentPayloadRoutine.success(getPaymentPayload()));
  } catch (error) {
    // if request failed
    yield put(setPaymentPayloadRoutine.failure(error));
  } finally {
    // trigger fulfill action
    yield put(setPaymentPayloadRoutine.fulfill());
  }
}

export function* paymentPayloadSaga() {
  yield takeEvery([setPaymentPayloadRoutine.TRIGGER], paymentPayload);
}
