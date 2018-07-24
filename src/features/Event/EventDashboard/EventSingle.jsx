import React from 'react';
import { Card, Image } from 'semantic-ui-react'

const EventSingle = ({item}) => (
    <Card>
    <Image src={item.logo.url} />
    <Card.Content>
        <Card.Header>{item.name}</Card.Header>
        <Card.Meta>
            <span className='date'>Joined in 2015</span>
        </Card.Meta>
        <Card.Description>{item.description}</Card.Description>
    </Card.Content>
  </Card>
);

export default EventSingle;