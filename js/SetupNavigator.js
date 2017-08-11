import React, { Component, PropTypes } from 'react';
import { NavigatorIOS } from 'react-native';
import { connect } from 'react-redux';

import ServerInfo from './scenes/ServerInfo';
import { saveUrl } from './redux/modules/user';

class SetupNavigator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navHidden: true,
    };
  }

  toggleNavBar = (navHidden) => this.setState({ navHidden });

  render() {
    const { navHidden } = this.state;

    return (
      <NavigatorIOS
        initialRoute={{
          component: ServerInfo,
          title: 'CouchPotato URL',
          passProps: {
            toggleNavBar: this.toggleNavBar,
            saveUrl: this.props.saveUrl,
          },
        }}
        interactivePopGestureEnabled
        navigationBarHidden={navHidden}
        style={{ flex: 1 }}
      />
    );
  }
}

SetupNavigator.propTypes = {
  saveUrl: PropTypes.func.isRequired,
};

export default connect(({ user }) => ({
  couchPotatoUrl: user.couchPotatoUrl,
}), { saveUrl })(SetupNavigator);
