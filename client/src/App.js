import React, { Component } from 'react';
import logo from './logo.svg';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Nav from './nav';
import Dashboard from './dashboard';

class App extends Component {
  render() {
    return (
      <div style={{padding: 0}} className="container-fluid">
        <div className="row no-gutters">
          <div className="col-3">
            <Nav />
          </div>
          <div className="col-9">
            <BrowserRouter>
              <Switch>
                <Route path="/" component={Dashboard} />
              </Switch>
            </BrowserRouter>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
