import React, { Component } from 'react';
import SearchResult from './SearchResult';
import Marrakesh from '../public/imgs/marrakesh.jpg';
import Santorini from '../public/imgs/santorini.jpg';
import Bangkok from '../public/imgs/bangkok.jpg';
import Vienna from '../public/imgs/vienna.jpg';
import Singapore from '../public/imgs/singapore.jpg';
import Tokyo from '../public/imgs/tokyo.jpg';

import './SearchResultsList.css';

class SearchResultList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: [
        {
          location: "Marrakesh, Morocco",
          imgSrc: Marrakesh,
          tagline: "Discover this amazing destination",
          description: "Man bun palo santo subway tile fingerstache cornhole selvage keffiyeh raw denim sriracha meh jean shorts gochujang irony. Bespoke etsy plaid chillwave keffiyeh 90's. Vegan chicharrones subway tile tbh fashion axe. Letterpress pabst pop-up, beard subway tile franzen locavore bespoke."
        },
        {
          location: "Santorini, Greece",
          imgSrc: Santorini,
          tagline: "Discover this amazing destination",
          description: "Bushwick selfies wolf la croix venmo mustache trust fund lumbersexual jean shorts man bun occupy vaporware. Viral twee poutine vegan sartorial chicharrones hot chicken umami scenester +1 air plant kinfolk. Franzen taxidermy narwhal gluten-free. Twee vexillologist activated charcoal vegan forage leggings. "
        },
        {
          location: "Bangkok, Thailand",
          imgSrc: Bangkok,
          tagline: "Discover this amazing destination",
          description: "Biodiesel fixie street art typewriter cray chambray. Ugh yr pop-up 8-bit tumblr seitan. Kitsch la croix pinterest YOLO, etsy normcore air plant post-ironic trust fund celiac schlitz edison bulb kinfolk. Enamel pin neutra mixtape tattooed tilde direct trade fingerstache."
        },
        {
          location: "Tokyo, Japan",
          imgSrc: Tokyo,
          tagline: "Discover this amazing destination",
          description: "Biodiesel fixie street art typewriter cray chambray. Ugh yr pop-up 8-bit tumblr seitan. Kitsch la croix pinterest YOLO, etsy normcore air plant post-ironic trust fund celiac schlitz edison bulb kinfolk. Enamel pin neutra mixtape tattooed tilde direct trade fingerstache."
        },
        {
          location: "Vienna, Austria",
          imgSrc: Vienna,
          tagline: "Discover this amazing destination",
          description: "Biodiesel fixie street art typewriter cray chambray. Ugh yr pop-up 8-bit tumblr seitan. Kitsch la croix pinterest YOLO, etsy normcore air plant post-ironic trust fund celiac schlitz edison bulb kinfolk. Enamel pin neutra mixtape tattooed tilde direct trade fingerstache."
        },
        {
          location: "Singapore",
          imgSrc: Singapore,
          tagline: "Discover this amazing destination",
          description: "Biodiesel fixie street art typewriter cray chambray. Ugh yr pop-up 8-bit tumblr seitan. Kitsch la croix pinterest YOLO, etsy normcore air plant post-ironic trust fund celiac schlitz edison bulb kinfolk. Enamel pin neutra mixtape tattooed tilde direct trade fingerstache."
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
      <div className='listings'>
        {listings}
      </div>
    )
  }
}

export default SearchResultList;