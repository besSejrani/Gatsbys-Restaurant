import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { PageHeader } from '../components/Layout/Header';
import contactImg from '../images/bcg/contactBcg.jpg';
import { Banner } from '../components/Banner';

const Contact = () => (
  <Layout>
    <SEO title="Contact" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={contactImg}>
      <Banner title="Contact us" subtitle="Lets Get In Touch" />
    </PageHeader>
  </Layout>
);

export default Contact;
