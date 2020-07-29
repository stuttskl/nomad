import React, { Component } from 'react';
import './Home.css';
import history from './history';
import Header from './Components/Header';
import SubHeader from './Components/SubHeader';


class Home extends Component {
  render() {
    return (
      <div>
        <Header name='nomad.' />
        <SubHeader name='live remotely' />
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