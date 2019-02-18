import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { HomeHeader } from '../components/Layout/Header';
import img from '../images/bcg/homeBcg.jpg';
import { Banner } from '../components/Banner';
import { Button } from '../components/Button';
import QuickInfo from '../components/HomePage/QuickInfo';
import { Gallery } from '../components/HomePage/Gallery';
import Menu from '../components/HomePage/Menu';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeHeader img={img}>
      <Banner title="Eatery" subtitle="Avenue Mayor-Vautier 88 - Clarens">
        <Button style={{ margin: '2rem auto' }}>Menu</Button>
      </Banner>
    </HomeHeader>
    <QuickInfo />
    <Gallery />
    <Menu />
  </Layout>
);

export default IndexPage;
