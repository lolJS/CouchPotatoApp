import React, { Component, PropTypes } from 'react';
import { View, Text, Linking, Image } from 'react-native';
import Swipeout from 'react-native-swipe-out';

export default function ({ title, year, releases, url, img }) {
  const swipeoutBtns = [
    {
      text: 'Mark as Done',
    },
    {
      text: 'IMDB',
      onPress: () => {
        Linking.canOpenURL(url).then((supported) => {
          if (supported) {
            Linking.openURL(`http://nullrefer.com/?${url}`);
          }
        });
      }
    },
    {
      text: 'Refresh'
    },
    {
      text: 'Delete'
    }
  ];

  return (
    // <Swipeout
    //   autoClose
    //   right={swipeoutBtns}
    //   style={{
    //     backgroundColor: '#fff'
    //   }}
    // >
    //   <Movie {...props} />
    // </Swipeout>

    <View
      style={{
        flexDirection: 'column',
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0,
        marginTop: 0,
        marginRight: 0,
        marginLeft: 0,
        height: 300,
        width: 162,
      }}
    >
      <View style={{ flex: 1, paddingBottom: 1, height: 243 }}>
        <Image style={{ width: 162, height: 243 }} source={{ uri: img }} />
      </View>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ flex: 0.7, alignSelf: 'flex-end' }}>
          <Text>{title}</Text>
        </View>
        <View style={{ flex: 0.3, alignSelf: 'flex-end' }}>
          <Text style={{ textAlign: 'right' }}>{year}</Text>
        </View>
      </View>
      {Boolean(releases.length) &&
        <View style={{ flex: 1 }}>
          {releases.reduce((prev, curr) => {
            console.info(prev);
            return [...prev, { quality: curr.quality, status: curr.status }];
          }, [])
            .map(({ status, quality }) =>
              <Text
                key={`release-${title}-${quality}`}
                style={{
                  fontSize: 5,
                  color: status === 'available' ? '#198a1d' : '#363636'
                }}
              >
                {quality}
              </Text>
          )}
        </View>}
    </View>
  );
}
