import React, { Component } from 'react';
import SpotlightHeader from './SpotlightHeader';
import SpotlightDescription from './SpotlightDescription';
import Button from './Button';
import '../SpotlightContent.css';
import SpotlightSubImg from './SpotlightSubImg';

class SpotlightContent extends Component {
  render() {
    return (
      <div className='spotlightContent'>
        <SpotlightHeader />
        <SpotlightSubImg />
        <SpotlightDescription />
        <Button />
      </div>
    )
  }
}

export default SpotlightContent;