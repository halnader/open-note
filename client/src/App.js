import React, { Component } from 'react';
import logo from './logo.svg';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Nav from './nav';
import Dashboard from './dashboard';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container-fluid">
          <div className="row">
            <Nav />
            <Switch>
              <Route path="/" component={Dashboard} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
