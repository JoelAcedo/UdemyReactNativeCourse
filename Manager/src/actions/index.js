/**
 * Created by joelacedo on 26/06/2017.
 */
import { EMAIL_CHANGED } from './types';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: 'text'
    };
};