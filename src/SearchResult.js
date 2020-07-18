import React, { Component } from 'react';
import './SearchResult.css';


  const SearchResult = ({id, location, imgSrc, tagline, description}) => (
    <div className='result-card'>
      <img src={imgSrc} className='result-card-img'></img>
      <h3>{location}</h3>
      <h5>{tagline}</h5>
      <p>{description}</p>
    </div>
  )
     
export default SearchResult;