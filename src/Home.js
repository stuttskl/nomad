import React, { Component } from 'react';
import './Home.css';
import history from './history';

class Home extends Component {
  render() {
    return (
      // <div>
      //   <button onClick={() => history.push('/SearchResultsList')}>click me</button>
      // </div>
      <div>
        <div className='mainContent'>
          <div className='taglineText'>
            dare to
          </div>
          <div className='homeText'>
            redefine home
          </div>
          <div className='btnPosition'>
            <button className='homeBtn' onClick={() => history.push('/SearchResultsList')}>
              where should i go next?
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;