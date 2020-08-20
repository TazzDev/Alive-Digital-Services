import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from '../components/Home';
import Header from '../components/Header';
import Contact from '../components/Contact';


const AppRouter = () => {
    return(
        <BrowserRouter>
        <Header/>
            <Switch>
                <Route path='/' exact={true} component={Home}/>
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter;