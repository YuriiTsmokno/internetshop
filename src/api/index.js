import phones from './mockPhones';
import categories from './mockCategory';

import * as R from 'ramda';

export const fetchPhones = async () => {
    return new Promise((resolve, reject) => {
        resolve(phones);
        // reject('error');    
    });
}

export const loadMorePhones = async ({ offset }) => {
    return new Promise((resolve, reject) => {
        resolve(phones);
        // reject('error');
    });
}

export const fetchPhoneById = async (id) => {
    return new Promise((resolve, reject) => {
        const phone = R.find(R.propEq('id', id), phones);
        resolve(phone);
        // reject('error');
    });
}

export const fetchCategories = async () => {
    return new Promise((resolve, reject) => {
        resolve(categories)
    });
}