import React from 'react';
import PropTypes from 'prop-types';
import NavBar from './NavBar/NavBar';
import FooterContent from './Layout/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <FooterContent />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
