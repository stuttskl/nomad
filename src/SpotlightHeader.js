import React, { Component } from 'react';
import './SpotlightHeader.css';

class SpotlightHeader extends Component {
  render() {
    const regionDescription = "Find your next flannel in the";
    const regionName = "Pacific Northwest";
    return (
      <div>
        <h4>{regionDescription}</h4>
        <h1>{regionName}</h1>
      </div>
    )
  }
}

export default SpotlightHeader;