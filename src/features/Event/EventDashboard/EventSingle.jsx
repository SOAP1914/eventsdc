import React from 'react';
import { Card } from 'semantic-ui-react'

const EventSingle = ({item}) => (
  
  <a href={item.url} target="_blank"> 
    <Card.Group>
    <Card color= 'blue'
        image='https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F43885558%2F37309396322%2F1%2Foriginal.jpg?h=200&w=450&auto=compress&rect=36%2C0%2C1206%2C603&s=15dfa979cd8228808672d4472debf015'
        header={item.name.text}
        meta={item.start.local} 
        //description={item.description.text}
    />
    </Card.Group>
  </a>

);

export default EventSingle;