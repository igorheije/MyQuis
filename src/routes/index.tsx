import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SideBar from '../components/SideBar';

import Home from '../pages/Home';
import Login from '../pages/Login';
import ProfilePage from '../pages/ProfilePage';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <SideBar />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/profile" component={ProfilePage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
