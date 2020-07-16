import React, { Component } from 'react';
import './Home.css';
// import './styles.css';

class Home extends Component {
  render() {
    return (
      <div className='mainContent'>
        <div className='homeText'>
          redefine home
          <nav>nav bar</nav>
          main image
        </div>
        <div className='footer'>
          blank space below hero image
        </div>
      </div>
    )
  }
}

export default Home;