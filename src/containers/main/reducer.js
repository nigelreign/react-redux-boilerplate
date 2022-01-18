import { fromJS } from "immutable";
import {
  STATE_NEW,
  STATE_LOADING,
  STATE_ERROR,
  STATE_OK,
} from "../../constants";
import getServicesRoutine, {
  getRatesRoutine,
  setPaymentPayloadRoutine,
  postTransactionRoutine,
} from "./routines";

const initialState = fromJS({
  containerState: STATE_NEW,
  loggedIn: false,
  errorMessage: null,
  reloadRequested: false,
});

export default function mainReducer(state = initialState, action) {
  switch (action.type) {
    /**
     * =============================================================
     * GET SERVICES
     * =============================================================
     */
    case getServicesRoutine.TRIGGER:
      return state.merge({
        loading: true,
        containerState: STATE_LOADING,
      });
    case getServicesRoutine.REQUEST:
      return state.merge({
        loading: false,
        containerState: STATE_LOADING,
      });
    case getServicesRoutine.SUCCESS:
      return state.merge({
        services: action.payload.data,
        containerState: STATE_OK,
        reloadRequested: false,
      });
    case getServicesRoutine.FAILURE:
      return state.merge({
        containerState: STATE_ERROR,
      });
    /**
     * =============================================================
     * STORE PAYMENT PAYLOAD
     * =============================================================
     */
    case setPaymentPayloadRoutine.TRIGGER:
      return state.merge({
        loading: true,
        containerState: STATE_LOADING,
      });
    case setPaymentPayloadRoutine.REQUEST:
      return state.merge({
        loading: false,
        containerState: STATE_LOADING,
      });
    case setPaymentPayloadRoutine.SUCCESS:
      return state.merge({
        paymentPayload: action.payload,
        containerState: STATE_OK,
        reloadRequested: false,
      });
    case setPaymentPayloadRoutine.FAILURE:
      return state.merge({
        containerState: STATE_ERROR,
      });

    /**
     * =============================================================
     * END OF SERVICES
     * =============================================================
     * GET RATES
     * =============================================================
     */
    case getRatesRoutine.TRIGGER:
      return state.merge({
        loading: true,
        containerState: STATE_LOADING,
      });
    case getRatesRoutine.REQUEST:
      return state.merge({
        loading: false,
        containerState: STATE_LOADING,
      });
    case getRatesRoutine.SUCCESS:
      return state.merge({
        rates: action.payload.data,
        containerState: STATE_OK,
        reloadRequested: false,
      });
    case getRatesRoutine.FAILURE:
      return state.merge({
        containerState: STATE_ERROR,
      });
    /**
     * =============================================================
     * END OF RATES
     * =============================================================
     * POST TRANSACTIONS
     * =============================================================
     */

    case postTransactionRoutine.TRIGGER:
      return state.merge({
        loading: true,
        containerState: STATE_LOADING,
      });
    case postTransactionRoutine.REQUEST:
      return state.merge({
        loading: false,
        containerState: STATE_LOADING,
      });
    case postTransactionRoutine.SUCCESS:
      return state.merge({
        rates: action.payload.message,
        containerState: STATE_OK,
        reloadRequested: false,
      });
    case postTransactionRoutine.FAILURE:
      return state.merge({
        containerState: STATE_ERROR,
      });
    /**
     * =============================================================
     * END OF POST TRANSACTION
     * =============================================================
     * GET RATES
     * =============================================================
     */

    default:
      return state;
  }
}
