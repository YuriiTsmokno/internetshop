import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Phones from '../containers/phones';
import Phone from '../containers/phone';
import Basket from '../containers/basket';

export default (
    <Router>
        <Switch>
            <Route path='/' component={Phones} exact />
            <Route path='/categories/:id' component={Phones} exact />
            <Route path='/phones/:id' component={Phone} />
            <Route path='/basket' component={Basket} />
        </Switch>
    </Router>
);