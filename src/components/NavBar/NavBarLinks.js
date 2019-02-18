import React, { Component } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { styles } from '../../utils';

class NavBarLinks extends Component {
  state = {
    links: [
      {
        id: 0,
        name: 'Home',
        path: './'
      },
      {
        id: 1,
        name: 'about',
        path: '/about'
      },
      {
        id: 2,
        name: 'Menu',
        path: '/menu'
      },
      {
        id: 3,
        name: 'Contact',
        path: '/contact'
      }
    ]
  };

  render() {
    const { navBarOpen } = this.props;

    return (
      <LinkWrapper open={navBarOpen}>
        {this.state.links.map(link => {
          return (
            <li key={link.id}>
              <Link to={link.path} className="nav-link">
                {link.name}
              </Link>
            </li>
          );
        })}
      </LinkWrapper>
    );
  }
}

const LinkWrapper = styled.ul`
  li {
    list-style-type: none;
  }
  .nav-link {
    display: block;
    text-decoration: none;
    padding: 0.5rem 1rem 0.5rem 1rem;
    color: ${styles.colors.mainGrey};
    font-weight: 700;
    text-transform: capitalize;
    cursor: pointer;
    ${styles.transDefault};
    &:hover {
      background: ${styles.colors.mainGrey};
      color: ${styles.colors.mainYellow};
      padding: 0.5rem 1rem 0.5 rem 1.3;
    }
  }
  height: ${props => (props.open ? '152px' : '0px')};
  overflow: hidden;
  ${styles.transObject({})};
  @media (min-width: 768px) {
    height: auto;
    display: flex;
    margin: 0 auto;
    .nav-link:hover {
      background: ${styles.colors.mainWhite};
      padding: 0.5rem 1rem 0.5rem;
    }
  }
`;

export default NavBarLinks;
