import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { PageHeader } from '../components/Layout/Header';
import menuImg from '../images/bcg/menuBcg.jpg';
import { Banner } from '../components/Banner';

const Menu = () => (
  <Layout>
    <SEO title="Menu" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={menuImg}>
      <Banner title="Menu" subtitle={`let's dig in`} />
    </PageHeader>
  </Layout>
);

export default Menu;
