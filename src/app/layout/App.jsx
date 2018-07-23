import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import axios from 'axios';
import EventDashboard from '../../features/Event/EventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar/NavBar'


class App extends Component {
  state = {
    repos: null,
  }
  componentDidMount(){
      const url=`https://www.eventbriteapi.com/v3/events/search?token=IZQ47CP6HI5KKV7V5ADC`;
      axios.get(url).then((res) => {
        console.log("Data");
        console.log(res);
      })  
  }

  render() {
    return (
      <div>
        <NavBar />
        <Container className="main">
          <EventDashboard />
        </Container>
      </div>
    );
  }
}

export default App;
