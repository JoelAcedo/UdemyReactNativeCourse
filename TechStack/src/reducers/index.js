/**
 * Created by joelacedo on 25/06/2017.
 */
import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';

export default combineReducers({
    libraries: LibraryReducer
});