/**
 * Created by joelacedo on 25/06/2017.
 */
import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer'

export default combineReducers({
    auth: AuthReducer
});