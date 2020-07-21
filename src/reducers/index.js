import { combineReducers } from 'redux';

import phones from './phones';
import phonesPage from './phonesPage';
import phonePage from './phonePage';
import basket from './basket';
import categories from './categories';

const createRootReducer = () => combineReducers({
    phones,
    phonesPage,
    phonePage,
    basket,
    categories
});


export default createRootReducer;