import React from 'react';
import { Card } from 'semantic-ui-react'

const EventSingle = ({item}) => (
  
  <a href={item.url} target="_blank"> 
    <Card
        //image={image}
        //header={item.name}
        meta='Friend'
        //description={item.description}
    />
  </a>

);

export default EventSingle;