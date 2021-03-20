import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import NotMatch from './components/NotMatch/NotMatch';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import RiderDestination from './components/RiderDestination/RiderDestination';
import NavManu from './components/NavManu/NavManu';
import Destination from './components/Destination/Destination';

export const UserContext = createContext();

const App = () => {
    const [loggedInUser, setLoggedInUser] = useState([]);

    return (
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
            <Router>
                <NavManu />
                <Switch>
                    <Route exact path="/">
                        <Header />
                    </Route>
                    <PrivateRoute path="/rider/:id">
                        <RiderDestination />
                    </PrivateRoute>
                    <PrivateRoute path="/destination">
                        <Destination />
                    </PrivateRoute>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="*">
                        <NotMatch />
                    </Route>
                </Switch>
            </Router>
        </UserContext.Provider>
    );
};

export default App;
