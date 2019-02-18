import React, { Component } from 'react';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import styled from 'styled-components';
import { styles } from '../../utils';

class NavBarIcons extends Component {
  state = {
    icons: [
      {
        id: 0,
        icon: <FaFacebook className="icon facebook-icon" />,
        path: 'https://facebook.com'
      },
      {
        id: 1,
        icon: <FaTwitter className="icon twitter-icon" />,
        path: 'https://twitter.com'
      },
      {
        id: 3,
        icon: <FaInstagram className="icon instagram-icon" />,
        path: 'https://instagram.com'
      }
    ]
  };

  render() {
    return (
      <IconWrapper>
        {this.state.icons.map(social => {
          return (
            <a
              href={social.path}
              key={social.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.icon}
            </a>
          );
        })}
      </IconWrapper>
    );
  }
}

const IconWrapper = styled.div`
  .icon {
    /* margin: 0 5px; */
    font-size: 1.6rem;
    cursor: pointer;
  }
  .icon:hover {
    color: ${styles.colors.mainYellow};
    ${styles.transFunction()}
  }
  .facebook-icon {
    color: #3b579d;
  }
  .twitter-icon {
    color: #3ab7f0;
  }
  .instagram-icon {
    color: #da5f53;
  }
  display: none;
  @media (min-width: 768px) {
    .icon {
    }
    display: flex;
    width: 7rem;
    justify-content: space-around;
  }
`;

export default NavBarIcons;
