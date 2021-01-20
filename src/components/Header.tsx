import React from 'react';

import {StyleSheet, View, Text} from 'react-native';

import {Colors} from '../theme';

type Props = {
  text?: string;
  children?: React.ReactNode;
  style?: object;
};

function Header(props: Props) {
  const {text, children, style} = props;
  return (
    <View style={[style, styles.container]}>
      {!children ? <Text style={styles.text}>{text}</Text> : <>{children}</>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lighter,
    paddingTop: 30,
    paddingBottom: 10,
    borderBottomColor: Colors.lightGrey,
    borderBottomWidth: 1,
  },
  text: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
    color: Colors.dark,
  },
});

export default Header;
