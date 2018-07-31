import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import axios from 'axios';
import EventSingle from '../EventDashboard/EventSingle'

class EventDashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            event: [],    
        };
        //this.setstate = this.setstate.bind(this);
    }
        
    componentDidMount(){
        const url = `https://www.eventbriteapi.com/v3/events/search/?location.address=washingtondc&expand=logo&token=IZQ47CP6HI5KKV7V5ADC`;
        
        axios.get(url)
         .then((res) => {
             this.setState (() => ({
                 event: res.data.events
             }))
             console.log(res);
             console.log("Image");
             console.log(res.data.events.description.text);
         })
         .catch((error) => console.log(error));
    }

    renderItems(){
        return this.state.event.map((item) =>(
            <EventSingle key={item.id} item={item} />
        ));
    }

    render() {
        return(
            <Grid columns='equal' stackable container style={{ padding: '0 0 60px 0' }}>
                <Grid.Row centered width={16}>
                    <h2>Filter</h2>
                </Grid.Row>
                <Grid.Row centered width={16}>
                    {this.renderItems()}
                </Grid.Row>
            </Grid>
        )
    }
}

export default EventDashboard;