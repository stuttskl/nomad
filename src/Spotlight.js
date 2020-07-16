import React, { Component } from 'react';
import SpotlightContent from './SpotlightContent';
import SpotlightImg from './SpotlightImg';
import './Spotlight.css';


class Spotlight extends Component {
  render() {
    return (
      <div className='main'>
        <SpotlightImg />
        <SpotlightContent />
      </div>
    )
  }
}

export default Spotlight;