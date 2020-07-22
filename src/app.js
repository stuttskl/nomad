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
  Link
} from "react-router-dom";

ReactDOM.render (
    <Router>
      <div>
        <nav className='homeNav'>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/spotlight">Spotlight</Link>
            </li>
            <li>
              <Link to="/results">Search Results</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
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
