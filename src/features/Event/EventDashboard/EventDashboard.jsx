import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import axios from 'axios';
import EventSingle from '../EventDashboard/EventSingle'

class EventDashboard extends Component {
    state = {
        event: [],
      }
    
    componentDidMount(){
        const url = `https://www.eventbriteapi.com/v3/events/search?token=IZQ47CP6HI5KKV7V5ADC`;

        axios.get(url)
         .then((res) => {
             this.setState({
                 event: res.data.events
             })
         })
         .catch((error) => console.log(error));
    }

    renderItems(){
        return this.state.event.map((item) =>(
            <EventSingle key={item.url} item={item}/>
        ));
    }

    render() {
        return(
            <Grid>
                <Grid.Column width={16}>
                    <h2>Filter</h2>
                </Grid.Column>
                <Grid.Row width={16}>
                    <h2>Content</h2>
                    <ul>
                        {this.renderItems()}
                    </ul>
                </Grid.Row>
            </Grid>
        )
    }
}

export default EventDashboard;