import React, { Component } from 'react';
import SearchResult from './SearchResult';

class SearchResultList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: [
        {
          location: "Marrakesh, Morocco",
          imgSrc: "",
          tagline: "Discover this amazing destination",
          description: ""
        },
        {
          location: "Sydney, Austrailia",
          imgSrc: "",
          tagline: "Discover this amazing destination",
          description: ""
        },
        {
          location: "Sao Paulo, Brazil",
          imgSrc: "",
          tagline: "Discover this amazing destination",
          description: ""
        }
      ]
    }
  }

  render() {
    const listings = this.state.listings.map((t) => (
      <SearchResult
        {...t}
      />
    ))
    return (
      <div>
        {listings}
      </div>
    )
  }
}

export default SearchResultList;