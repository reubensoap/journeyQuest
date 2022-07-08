import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Login from '../components/LoginComponent';
import Dashboard from '../components/DashboardComponent';
import Task from '../components/TaskComponent';
import Congrats from '../components/CongratsComponent';
import LevelUp from '../components/LevelUpComponent';
import NavigationComponent from '../components/NavigationComponent';
import AddQuest from '../components/AddQuestComponent';
import RandomQuest from '../components/RandomQuestComponent';
import Customize from '../components/CustomizeComponent';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path="/" exact={true} component={Login}></Route>
                <Route path="/dashboard" component={Dashboard}></Route>
                <Route path="/addition" render={(props) => <NavigationComponent {...props} options="addition" />}></Route>
                <Route path="/settings" render={(props) => <NavigationComponent {...props} options="settings" />}></Route>
                <Route path="/facts" render={(props) => <NavigationComponent {...props} options="facts" />}></Route>
                <Route path="/random" component={RandomQuest}></Route>
                <Route path="/task/:id" component={Task}></Route>
                <Route path="/levelUp/:name/:level" component={LevelUp}></Route>
                <Route path="/congrats/:name/:level" component={Congrats}></Route>
                <Route path="/customize" component={Customize}></Route>
                <Route path="/newQuest" component={AddQuest}></Route>
            </Switch>
        </div>
    </Router>
);

export default AppRouter;