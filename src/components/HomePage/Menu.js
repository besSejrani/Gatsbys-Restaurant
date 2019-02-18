import React from 'react';
import Product from './Product';
import { StaticQuery, graphql, Link } from 'gatsby';
import { Section } from '../Section';
import { Title } from '../Title';
import { SectionButton } from '../Button';
import styled from 'styled-components';

const getData = graphql`
  {
    items: allContentfulMenu {
      edges {
        node {
          name
          price
          id
          ingredients
          image {
            fixed(width: 150, height: 150) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`;

const Menu = () => {
  return (
    <Section>
      <Title title="Featured Items" message="Little Taste" />

      <ProductList>
        <StaticQuery
          query={getData}
          render={data => {
            const products = data.items.edges;
            return products.map(({ node }) => {
              return <Product key={node.id} product={node} />;
            });
          }}
        />
      </ProductList>
    </Section>
  );
};

export default Menu;

const ProductList = styled.div`
  margin: 3rem 0;
  display: grid;
  grid-template-columns: 100%;
  grid-row-gap: 3rem;
  @media (min-width: 576px) {
    grid-template-columns: 95%;
    justify-content: center;
  }
  @media (min-width: 776px) {
    grid-template-columns: 80%;
    justify-content: center;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    justify-content: center;
  }
`;
