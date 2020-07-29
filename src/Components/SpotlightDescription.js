import React, { Component } from 'react';
import '../SpotlightDescription.css';


class SpotlightDescription extends Component {
  render() {
    const description = "Activated charcoal deserunt excepteur tacos cardigan. Neutra blue bottle tumblr chillwave, thundercats kale chips church-key mustache celiac. Man bun gentrify anim, lomo narwhal ennui aliquip mustache. Sustainable tacos vegan artisan eiusmod. Squid glossier yuccie pariatur meh quis small batch 3 wolf moon. Poke iPhone man braid narwhal enim. Pickled copper mug narwhal vegan chambray. Hammock before they sold out cardigan wolf etsy, ex organic quinoa. Tumeric wayfarers hexagon, occaecat sed vice keytar eu umami raw denim echo park pabst lorem ut. Pinterest ennui tofu keytar schlitz. Ennui fixie marfa shoreditch beard shaman hell of iceland.YOLO ugh pok pok etsy blue bottle 90's chia sustainable man braid food truck echo park lorem ea chambray try-hard. Neutra vaporware laborum bushwick scenester voluptate. Etsy lyft pickled iceland ea, austin thundercats sriracha waistcoat gluten-free. Eiusmod pabst nulla veniam tousled pinterest. Deserunt air plant qui organic viral vinyl vape cronut copper mug.";
    return (
      <div>
        <p className='content'>{description}</p>
      </div>
    )
  }
}

export default SpotlightDescription;