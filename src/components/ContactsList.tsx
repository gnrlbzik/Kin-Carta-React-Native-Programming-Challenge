import React from 'react';

import {useDispatch, useSelector} from 'react-redux';

import {StyleSheet, View, ScrollView} from 'react-native';

import type {ContactItem as ContactItemType} from '../types';

import {getGroupedAndSortedContactsList} from '../store/selectors';

import {isThisLastRow, t} from '../utils';

import {STORE_CONTACT_PREVIEW_SET} from '../constants';

import {ContactsListItem, ContactsListHeading} from './index';

function ContactsList() {
  const dispatch = useDispatch();
  const {favorites, others} = useSelector(getGroupedAndSortedContactsList);

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}>
      <View style={styles.view}>
        <ContactsListHeading text={t('contactsListHeadings.favorite')} />
        {favorites.map((contact: ContactItemType, index: number) => (
          <ContactsListItem
            key={contact.name + index}
            contact={contact}
            onTouchHandler={(returnedContactData: ContactItemType) => {
              dispatch({
                type: STORE_CONTACT_PREVIEW_SET,
                payload: returnedContactData.id,
              });
            }}
            isLastRow={isThisLastRow(index + 1, favorites.length)}
          />
        ))}

        <ContactsListHeading text={t('contactsListHeadings.other')} />
        {others.map((contact: ContactItemType, index: number) => (
          <ContactsListItem
            key={contact.name + index}
            contact={contact}
            onTouchHandler={(returnedContactData: ContactItemType) => {
              dispatch({
                type: STORE_CONTACT_PREVIEW_SET,
                payload: returnedContactData.id,
              });
            }}
            isLastRow={isThisLastRow(index + 1, others.length)}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    // backgroundColor: Colors.lighter,
    // position: 'relative',
    // zIndex: 0,
  },
  view: {
    paddingBottom: 40, // README: safety padding to render list items fully at lower part of screen
  },
});

export default ContactsList;
