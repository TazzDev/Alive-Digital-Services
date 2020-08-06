import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from '../components/Home';

const AppRouter = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact={true} component={Home}/>
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter;