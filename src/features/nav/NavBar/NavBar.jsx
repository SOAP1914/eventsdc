import React, { Component } from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';

class NavBar extends Component {
  render() {
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item header>
            <img src="assets/logo.png" alt="logo" />
            Re-vents
          </Menu.Item>
          <Menu.Item name="Music" />
          <Menu.Item name="Arts" />
          <Menu.Item name="Food" />
          <Menu.Item name="Government" />
          <Menu.Item position="right">
            <Button basic inverted content="Search" />
        
          </Menu.Item>
        </Container>
      </Menu>
    );
  }
}

export default NavBar;
