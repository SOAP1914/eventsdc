import React, { Component } from 'react';
import { Menu, Container, Input } from 'semantic-ui-react';

class NavBar extends Component {

  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted fixed="top" stackable>
        <Container>
          <Menu.Item header>
            <img src="assets/logo.png" alt="logo" />
            EventsDC
          </Menu.Item>
          <Menu.Item 
            name="Music"
            active={activeItem === 'Music'}
            onClick={this.handleItemClick} 
          />
          <Menu.Item 
            name="Arts"
            active={activeItem === 'Arts'}
            onClick={this.handleItemClick}  
          />
          <Menu.Item 
            name="Food"
            active={activeItem === 'Food'}
            onClick={this.handleItemClick} 
          />
          <Menu.Item 
            name="Fitness"
            active={activeItem === 'Fitness'}
            onClick={this.handleItemClick} 
          />
          <Menu.Item 
            name="Government"
            active={activeItem === 'Government'}
            onClick={this.handleItemClick} 
          />

          <Menu.Item position="right">
          <Input icon='search' placeholder='Search...' />
          </Menu.Item>

        </Container>
      </Menu>
    );
  }
}

export default NavBar;
