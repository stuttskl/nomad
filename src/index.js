import React from 'react';
import Home from './Home';
import './styles.css';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import App from './app'

ReactDOM.render (
  <Router>
    <App />
  </Router>, document.getElementById('root')
  );