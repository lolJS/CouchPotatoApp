import React, { Component, PropTypes } from 'react';
import { Text, View } from 'react-native';

const Error = ({ couchPotatoUrl, apiKey, error }) =>
  <View>
    <Text style={{ paddingTop: 24 }}>CouchPotato URL:</Text>
    <Text style={{ paddingTop: 6 }}>{couchPotatoUrl}</Text>
    <Text style={{ paddingTop: 12 }}>API Key:</Text>
    <Text style={{ paddingTop: 6 }}>{apiKey}</Text>
    <Text style={{ paddingTop: 12 }}>Error:</Text>
    <Text style={{ paddingTop: 6 }}>{error.message}</Text>
  </View>;

Error.propTypes = {
  couchPotatoUrl: PropTypes.string.isRequired,
  apiKey: PropTypes.string.isRequired,
  error: PropTypes.object.isRequired,
};

export default Error;
