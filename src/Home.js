import React, { Component } from 'react';
import './Home.css';


class Home extends Component {
  render() {
    return (
      <div>
        <div className='mainContent'>
          <div className='taglineText'>
            dare to
          </div>
          <div className='homeText'>
            redefine home
          </div>
          <div className='btnPosition'>
            <button className='homeBtn'>
              where should i go next?
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;