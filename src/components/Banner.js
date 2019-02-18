import React from 'react';
import styled from 'styled-components';
import { styles } from '../utils';

export const Banner = ({ title, subtitle, children }) => {
  return (
    <BannerWrapper>
      <h1 className="title">{title}</h1>
      <h3 className="subtitle">{subtitle}</h3>
      {children}
    </BannerWrapper>
  );
};

const BannerWrapper = styled.div`
  color: ${styles.colors.mainWhite};
  margin-bottom: 3rem;

  .title {
    text-align: center;
    font-size: 3rem;
    text-transform: uppercase;
    ${styles.letterSpacing({ spacing: '0.75rem' })};
  }
  .subtitle {
    text-align: center;
    ${styles.textSlanted}
    font-size: 1.5rem;
    ${styles.letterSpacing({ spacing: '0.15rem' })};
    text-transform: capitalize;
  }
`;

Banner.defaultProps = {
  title: 'Default Title'
};
