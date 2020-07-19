import React, { Component } from 'react';
import './SearchResult.css';
import Button from './Button';


  const SearchResult = ({id, location, imgSrc, tagline, description}) => (
    <div className='result-card'>
      <img src={imgSrc} className='result-card-img'></img>
      <div class='text-content'>
        <p className='location'>{location}</p>
        <h4 className='tagline'>{tagline}</h4>
        <p>{description}</p>
        <Button />
      </div>
    </div>
  )
     
export default SearchResult;