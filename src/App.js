import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import withAuth from './withAuth';
import Home from './pages/Home';
import Secret from './pages/Secret';
import Login from './pages/Login';


class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/secret" component={withAuth(Secret)} />
        <Route path="/login" component={Login} />
      </Switch>
    );
  }
}

export default App;
