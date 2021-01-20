import React from 'react';

import {StyleSheet, View, Text} from 'react-native';

import {Colors} from '../theme';

type Props = {
  text: string;
};

function ContactsListHeading(props: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 12,
    paddingRight: 12,
  },
  text: {
    textTransform: 'uppercase',
    fontWeight: '600',
    fontSize: 10,
    color: Colors.dark,
  },
});

export default ContactsListHeading;
