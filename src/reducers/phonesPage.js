import { 
        FETCH_PHONES_SUCCESS,
        LOAD_MORE_PHONES_SUCCESS,
        SEARCH_PHONE 
    } from '../constants';

import * as R from 'ramda';

const initialState = {
    ids: [],
    search: ""
};

export default (state = initialState, { type, payload }) => {
    switch(type) {
        case FETCH_PHONES_SUCCESS:
            return R.mergeDeepRight(state, {
                ids: R.pluck('id', payload)
            });
        case LOAD_MORE_PHONES_SUCCESS:
            const ids = R.pluck('id', payload);
            return R.mergeDeepRight(state, {
                ids: R.concat(state.ids, ids)
            });
        case SEARCH_PHONE:
            return R.mergeDeepRight(state, {
                search: payload
            });
        default:
            return state;
    }
}