import React from 'react';
import { Card } from 'semantic-ui-react'

const EventSingle = ({item}) => (
  
  <a href={item.url} target="_blank"> 
    <Card.Group>
    <Card
        //image={item.logo.url}
        header={item.name.text}
        meta={item.start.local} 
        //description={item.description.text}
    />
    </Card.Group>
  </a>

);

export default EventSingle;