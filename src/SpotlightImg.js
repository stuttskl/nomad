import React, { Component } from 'react';
import './SpotlightImg.css';

class SpotlightImg extends Component {
  render() {
    const location = 'Seattle';
    return (
      <div className='container'>
        <div className='textOverlay'>
          <h1>hello, </h1> <h2>{location}</h2>
        </div>
      </div>
    )
  }
}

export default SpotlightImg;