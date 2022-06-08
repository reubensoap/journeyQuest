import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Login from '../components/LoginComponent';
import Dashboard from '../components/DashboardComponent';
import Addition from '../components/AdditionComponent';
import Information from '../components/InformationComponent';
import Random from '../components/RandomComponent';
import Task from '../components/TaskComponent';
import Congrats from '../components/CongratsComponent';
import LevelUp from '../components/LevelUpComponent';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path="/" exact={true} component={Login}></Route>
                <Route path="/dashboard" component={Dashboard}></Route>
                <Route path="/addition" component={Addition}></Route>
                <Route path="/information" component={Information}></Route>
                <Route path="/random" component={Random}></Route>
                <Route path="/task/:id" component={Task}></Route>
                <Route path="/levelUp/:name/:level" component={LevelUp}></Route>
                <Route path="/congrats/:name/:level" component={Congrats}></Route>
            </Switch>
        </div>
    </Router>
);

export default AppRouter;