import React from 'react';

import {StyleSheet, View, Text} from 'react-native';

// import {Colors} from '../theme';

import {t} from '../utils';

type Props = {};

function LoadingData(props: Props) {
  return (
    <View style={styles.container}>
      <Text>{t('loadingData')}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: 20,
  },
});

export default LoadingData;
