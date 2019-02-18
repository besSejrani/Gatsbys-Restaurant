import React, { Component } from 'react';
import { Link } from 'gatsby';
import '../layout.css';
import logo from '../../images/logo.svg';
import { FaAlignRight } from 'react-icons/fa';
import styled from 'styled-components';
import { styles } from '../../utils';

class NavBarHeader extends Component {
  render() {
    const { onNavBarChange } = this.props;
    return (
      <HeadWrapper>
        <Link to="/">
          {' '}
          <img src={logo} alt="Eatery logo" />
        </Link>
        <FaAlignRight
          className="toggle-icon"
          onClick={() => onNavBarChange()}
        />
      </HeadWrapper>
    );
  }
}

const HeadWrapper = styled.div`
  padding: 0.4 rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px 5px;
  margin-top: 8px;
  .toggle-icon {
    font-size: 1.75rem;
    color: ${styles.colors.mainYellow};
    cursor: pointer;
  }

  @media (min-width: 768px) {
    .toggle-icon {
      display: none;
    }
  }
`;

export default NavBarHeader;
