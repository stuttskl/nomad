import React, { Component } from 'react';
import '../SpotlightImg.css';


class SpotlightImg extends Component {
  render() {
    const location = 'Seattle';
    return (
      <div className='container'>
        <div className='textOverlay'>
          <h1 className='top'>hello, </h1> <h2 className='bottom'>{location}</h2>
        </div>
      </div>
    )
  }
}

export default SpotlightImg;