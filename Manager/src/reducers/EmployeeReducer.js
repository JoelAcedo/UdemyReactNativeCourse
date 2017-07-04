/**
 * Created by joelacedo on 04/07/2017.
 */
import {
    EMPLOYEE_FETCH_SUCCESS
} from '../actions/types';

const INITAL_STATE = {};

export default (state = INITAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_FETCH_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}