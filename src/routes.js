import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

//import Home from './pages/home'
import Notes from './pages/notes';
const Routes = () => (
    <BrowserRouter>
        <Switch>
            
            <Route path="/" component={Notes} />
        </Switch>
    </BrowserRouter>

);

export default Routes;