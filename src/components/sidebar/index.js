import React from 'react';

import BasketCart from '../basketCart';
import Search from '../search';
import Categories from '../categories';

const Sidebar = () => {
    return (
        <>
            <BasketCart />
            <Search />
            <Categories />
        </>
    );
}

export default Sidebar;