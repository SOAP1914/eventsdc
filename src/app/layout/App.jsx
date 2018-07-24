import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import axios from 'axios';
import EventDashboard from '../../features/Event/EventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar/NavBar'


class App extends Component {
  state = {
    repos: null,
  }
  getUser = (e) => {
    e.preventDefault();
    //const user = e.target.elements.username.value;
    const url = `https://www.eventbriteapi.com/v3/categories/?token=IZQ47CP6HI5KKV7V5ADC`;
    if (url) {
      axios.get(url)    
      .then((res) => {
        const repos = res.data.categories.length;
        this.setState({ repos });
        console.log(res);
      })
    } else return;
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
