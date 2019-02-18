import React from 'react';
import { Section } from '../Section';
import { Title } from '../Title';
import { SectionButton } from '../Button';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { styles } from '../../utils';

const QuickInfo = () => {
  return (
    <Section>
      <Title title="Our mission" message="Let Us Tell You" />
      <QuickInfoWrapper>
        <p className="text">
          On sait depuis longtemps que travailler avec du texte lisible et
          contenant du sens est source de distractions, et empêche de se
          concentrer sur la mise en page elle-même. On sait depuis longtemps que
          travailler avec du texte lisible et contenant du sens est source de
          distractions, et empêche de se concentrer sur la mise en page
          elle-même.
        </p>
        <Link to="/about" style={{ textDecoration: 'none' }}>
          <SectionButton style={{ margin: '2rem auto -1rem auto' }}>
            About
          </SectionButton>
        </Link>
      </QuickInfoWrapper>
    </Section>
  );
};

export default QuickInfo;

const QuickInfoWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  .text {
    line-height: 2rem;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
  }
  @media (min-width: 768px) {
    width: 75%;
  }
  @media (min-width: 992px) {
    width: 65%;
  }
`;
