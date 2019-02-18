import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { PageHeader } from '../components/Layout/Header';
import aboutImg from '../images/bcg/aboutBcg.jpg';
import { Banner } from '../components/Banner';

const About = () => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={aboutImg}>
      <Banner title="About us" subtitle="A litle about us, let's be friends" />
    </PageHeader>
  </Layout>
);

export default About;
