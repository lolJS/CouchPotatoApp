import React, { Component, PropTypes } from 'react';
import {
  Image,
  StyleSheet,
  TextInput,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import CouchHome from './CouchHome';
import cpLogo from '../../img/couchpotato-logo.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4E5969',
  },
});

export default class Location extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      couchPotatoUrl: 'http://nzb.local:5050',
      apiKey: '3927a0f678aa46eb84f11d28e2363bde',
    };
  }

  handleUrlChange = (couchPotatoUrl) => this.setState({ couchPotatoUrl });
  handleApiKeyChange = (apiKey) => this.setState({ apiKey });

  handleSubmit = () => {
    // api key is valid length
    if (this.state.apiKey.length !== 32) {
      throw new TypeError('API Key is an invalid length');
    }

    // api key has valid characters
    if (this.state.apiKey.search(/[^a-z0-9]+/g) !== -1) {
      throw new TypeError('API Key has invalid characters');
    }

    this.props.navigator.push({
      title: 'Home',
      component: CouchHome,
      passProps: {
        couchPotatoUrl: this.state.couchPotatoUrl,
        apiKey: this.state.apiKey,
      },
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={cpLogo} style={{ width: 200, height: 100 }} />
        <Text style={{ color: '#fefefe', marginBottom: 25 }}>
          Enter CouchPotato URL
        </Text>
        <View
          style={{
            alignSelf: 'stretch',
            borderBottomColor: '#fefefe',
            borderBottomWidth: 1,
            margin: 35,
          }}
        >
          <TextInput
            style={{
              flex: 0,
              height: 44,
              color: '#fefefe',
            }}
            autoFocus
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={this.handleUrlChange}
            value={this.state.couchPotatoUrl}
          />
        </View>
        <View
          style={{
            alignSelf: 'stretch',
            borderBottomColor: '#fefefe',
            borderBottomWidth: 1,
            margin: 35,
          }}
        >
        <Text style={{ color: '#fefefe' }}>Enter API Key</Text>
        <TextInput
          style={{
            flex: 0,
            height: 44,
            color: '#fefefe',
          }}
          autoFocus
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={this.handleApiKeyChange}
          value={this.state.apiKey}
        />
        </View>
        <TouchableHighlight
          style={{
            alignSelf: 'stretch',
            alignItems: 'center',
            justifyContent: 'center',
            height: 44,
            marginTop: 15,
            marginLeft: 35,
            marginRight: 35,
            borderRadius: 5,
            backgroundColor: '#00C70E',
          }}
          activeOpacity={0.8}
          underlayColor="#00970B"
          onPress={this.handleSubmit}
        >
          <Text style={{ color: '#fff' }}>
            Go
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}
