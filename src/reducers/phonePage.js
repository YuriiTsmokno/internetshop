import * as R from 'ramda';

import { FETCH_PHONE_BY_ID_SUCCESS } from '../constants';

const initialState = {
    id: null
};

export default (state = initialState, { type, payload }) => {
    switch(type) {
        case FETCH_PHONE_BY_ID_SUCCESS:
            return R.mergeDeepRight(state, {
                id: R.prop('id', payload)
            });                
        default:
            return state;
    }
}