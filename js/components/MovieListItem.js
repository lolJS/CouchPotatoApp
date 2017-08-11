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
        width: 162,
        height: 250,
        marginTop: 15,
        marginBottom: 15,
        marginLeft: 10,
        marginRight: 10,
      }}
    >
      <Image style={{ width: 162, height: 243 }} source={{ uri: img }} />
      <View style={{ flex: 1, flexDirection: 'row'}}>
        <View style={{ flex: 0.7 }}>
          <Text 
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{
              color: '#fff'
            }}>
              {title}
            </Text>
        </View>
        <View style={{ flex: 0.3 }}>
          <Text style={{ textAlign: 'right', color: '#fff', opacity: 0.5 }}>{year}</Text>
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
