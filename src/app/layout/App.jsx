import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import axios from 'axios';
import EventDashboard from '../../features/Event/EventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar/NavBar'


class App extends Component {
  state = {
    repos: null,
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
