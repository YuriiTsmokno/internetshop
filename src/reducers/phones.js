import * as R from 'ramda';
import { 
        FETCH_PHONES_SUCCESS,
        LOAD_MORE_PHONES_SUCCESS,
        FETCH_PHONE_BY_ID_SUCCESS
     } from '../constants';

const initialState = {};

export default (state = initialState, { type, payload }) => {
    switch(type) {
        case FETCH_PHONES_SUCCESS:
            const newValues = R.indexBy(R.prop('id'), payload);
            return R.mergeDeepRight(state, newValues);
        case LOAD_MORE_PHONES_SUCCESS:
            const addValues = R.indexBy(R.prop('id'), payload);
            return R.mergeDeepRight(state, addValues);
        case FETCH_PHONE_BY_ID_SUCCESS:
            return R.assoc(payload.id, payload, state);
        default:
            return state;
    }
};