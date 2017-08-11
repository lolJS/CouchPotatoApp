import React, { Component, PropTypes } from 'react';
import { StyleSheet, TabBarIOS, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import MovieList from './MovieList';

const styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
});

// TODO: RENAME TO CouchHomeNavigator
export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 'home',
      notifCount: 0,
      presses: 0,
    };
  }

  renderTab(color, pageText, num) {
    return (
      <View style={[styles.tabContent, { backgroundColor: color }]}>
        <Text style={styles.tabText}>{pageText}</Text>
        <Text style={styles.tabText}>{num} re-renders of the {pageText}</Text>
      </View>
    );
  }

  render() {
    const { selectedTab } = this.state;

    return (
      <TabBarIOS
        unselectedTintColor="white"
        tintColor="#f85c22"
        barTintColor="black"
        translucent
      >
        <Icon.TabBarItem
          title="Home"
          iconName={selectedTab === 'home' ? 'ios-home' : 'ios-home-outline'}
          selected={selectedTab === 'home'}
          onPress={() => {
            this.setState({
              selectedTab: 'home',
            });
          }}
        >
          <MovieList
            couchPotatoUrl={this.props.couchPotatoUrl}
            apiKey={this.props.apiKey}
          />
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="Movies"
          iconName={selectedTab === 'movies' ? 'ios-film' : 'ios-film-outline'}
          selected={selectedTab === 'movies'}
          badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
          onPress={() => {
            this.setState({
              selectedTab: 'movies',
              notifCount: this.state.notifCount + 1,
            });
          }}
        >
          {this.renderTab('#783E33', 'Red Tab', this.state.notifCount)}
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="Settings"
          iconName={selectedTab === '' ? 'ios-settings' : 'ios-settings-outline'}
          selected={selectedTab === 'settings'}
          onPress={() => {
            this.setState({
              selectedTab: 'settings',
              presses: this.state.presses + 1,
            });
          }}
        >
          {this.renderTab('#21551C', 'Green Tab', this.state.presses)}
        </Icon.TabBarItem>
      </TabBarIOS>
    );
  }
}
