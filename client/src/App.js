import React, { Component } from 'react';
import logo from './logo.svg';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Nav from './nav';
import Dashboard from './dashboard';
import LandingPage from './landing_page';
import Form from './form';
import Notes from './notes_list';
import Login from './login';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/formtest" component={Form} />
          <Route path="/notes" component={Notes} />
          <Route path="/login" component={Login}/>
          <Route path="/" component={LandingPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
