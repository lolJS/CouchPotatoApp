import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Setup from './SetupNavigator';

const App = (props) => {
  const { isLoggedIn } = props;

  // if (isLoggedIn) {
  //   return <Main />;
  // }

  return <Setup />;
};

App.propTypes = {
  // couchPotatoUrl: PropTypes.string.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};

App.defaulProps = {
  couchPotatoUrl: null,
  isLoggedIn: false,
};

export default connect(({ user }) => ({
  couchPotatoUrl: user.couchPotatoUrl,
  isLoggedIn: user.isLoggedIn }))(App);
