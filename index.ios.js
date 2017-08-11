import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import configureStore from './js/redux/setup';
import App from './js/app';

let store;

class CouchPotatoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };

    store = configureStore(() => this.setState({ isLoading: false }));
  }

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('CouchPotatoReactNative', () => CouchPotatoApp);
