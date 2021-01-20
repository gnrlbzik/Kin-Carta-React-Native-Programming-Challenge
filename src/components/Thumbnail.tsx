import React from 'react';

import {StyleSheet, View, Image} from 'react-native';

import {THUMB_SIZE_LIST, THUMB_SIZE_PREVIEW} from '../constants';

import {Colors} from '../theme';

type Props = {
  imgUri: string;
  style?: object;
  thumbSize?: typeof THUMB_SIZE_LIST | typeof THUMB_SIZE_PREVIEW;
};

function Thumbnail(props: Props) {
  const {imgUri, thumbSize = THUMB_SIZE_LIST, style} = props;

  return (
    <View style={[styles.container, style, styles[thumbSize]]}>
      <Image
        style={[styles.image, styles[thumbSize]]}
        source={require('../assets/person-outline.png')}
      />
      <Image
        style={[styles.image, styles[thumbSize]]}
        source={{
          uri: imgUri,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lightGrey,
    position: 'relative',
  },
  [THUMB_SIZE_LIST]: {
    width: 50,
    height: 50,
  },
  [THUMB_SIZE_PREVIEW]: {
    width: 125,
    height: 125,
  },
  image: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default Thumbnail;
