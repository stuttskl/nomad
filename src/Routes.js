import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from './history';
import SearchResultsList from './Components/SearchResultsList';
import Home from './Home';

class Routes extends Component {
  render() {
    return (
      <Router history={history}>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/SearchResultsList' component={SearchResultsList} />
          </Switch>
      </Router>
    )
  }
}

export default Routes;