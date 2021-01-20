import React from 'react';

import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import {Colors} from '../theme';

import type {ContactItem as ContactItemType} from '../types';

import {Thumbnail} from './index';

type Props = {
  contact: ContactItemType;
  onTouchHandler: (contact: ContactItemType) => void;
  isLastRow: boolean;
};

function ContactsListItem(props: Props) {
  const {contact, onTouchHandler, isLastRow} = props;
  return (
    <TouchableOpacity
      style={[styles.container, isLastRow ? styles.lastRow : null]}
      onPress={() => {
        onTouchHandler(contact);
      }}>
      <Thumbnail imgUri={contact.smallImageURL} style={styles.thumbnail} />
      <View style={styles.isFavorite}>
        {contact.isFavorite ? (
          <Text style={styles.isFavoriteText}>⭐️</Text>
        ) : null}
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.name}>{contact.name}</Text>
        <Text style={styles.companyName}>{contact.companyName}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomColor: Colors.light,
    borderBottomWidth: 1,
    marginLeft: 20,
    marginRight: 20,
    display: 'flex',
    flexDirection: 'row',
  },
  lastRow: {
    borderBottomWidth: 0,
  },
  thumbnail: {},
  isFavorite: {
    width: 35,
    paddingRight: 3,
    paddingTop: 3,
  },
  isFavoriteText: {
    textAlign: 'right',
    fontSize: 12,
  },
  textWrapper: {},
  name: {
    fontSize: 17,
    color: Colors.dark,
  },
  companyName: {
    fontSize: 13,
    color: Colors.darkGrey,
  },
});

export default ContactsListItem;
