import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import withAuth from './withAuth';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Partner from './pages/Partner';
import NotFound from './pages/NotFound';
import Directory from './pages/Directory'


class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/partner/:id" component={withAuth(Partner)} />
        <Route path="/directory" component={withAuth(Directory)} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default App;
