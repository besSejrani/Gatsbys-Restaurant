import React, { Component } from 'react';
import NavBarHeader from './NavBarHeader';
import NavBarLinks from './NavBarLinks';
import NavBarIcons from './NavBarIcons';
import styled from 'styled-components';

class NavBar extends Component {
  state = {
    navBarOpen: false
  };

  onNavBarChange = () => {
    this.setState({
      navBarOpen: !this.state.navBarOpen
    });
  };

  render() {
    return (
      <NavWrapper>
        <NavBarHeader onNavBarChange={this.onNavBarChange} />
        <NavBarLinks navBarOpen={this.state.navBarOpen} />
        <NavBarIcons />
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    margin: 10px;
  }
`;

export default NavBar;
