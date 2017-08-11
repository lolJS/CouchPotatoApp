import React, { PropTypes } from 'react';
import {
  TextInput,
  View,
} from 'react-native';

const TextInput = (props) =>
  <View
    style={{
      alignSelf: 'stretch',
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      margin: 35,
    }}
  >
    <TextInput
      style={{
        flex: 0,
        height: 44,
      }}
      autoFocus
      autoCapitalize="none"
      autoCorrect={false}
      onChangeText={props.onChangeText}
      value={props.value}
    />
  </View>;

export default TextInput;
