import React from 'react';
import Home from './Home';
import Spotlight from './Spotlight'
import SearchResultsList from './SearchResultsList';
import './styles.css';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";



ReactDOM.render (
  <Router>
  <div className='home'>
    <nav className='homeNav'>
      <ul>
        <li>
          <Link to="/" className='homeLink'>Home </Link>
        </li>
        <li>
          <Link to="/spotlight" className='homeLink'>Spotlight </Link>
        </li>
        <li>
          <Link to="/results" className='homeLink'>Search Results </Link>
        </li>
      </ul>
    </nav>
    <Switch>
      <Route path="/spotlight">
        <Spotlight />
      </Route>
      <Route path="/results">
        <SearchResultsList />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </div>
  </Router>, document.getElementById('root')
  );
