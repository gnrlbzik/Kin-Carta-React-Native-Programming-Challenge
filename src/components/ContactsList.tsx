import React from 'react';

import type {
  ContactsList as ContactsListType,
  ContactItem as ContactItemType,
} from '../types';

import {StyleSheet, View, ScrollView} from 'react-native';

import {sortByNameAscending, groupBy, isThisLastRow, t} from '../utils';

import {ContactsListItem, ContactsListHeading} from './index';

import type {ContactItem} from '../types';

type Props = {
  contacts: ContactsListType;
  toggleContactDetails: (contactDetails: ContactItem) => void;
};

function ContactsList(props: Props) {
  const {contacts, toggleContactDetails} = props;
  // README: as I chose not to hook up store and actions atm, this will live here for now.
  // FIXME: should be moved into store/actions/side-effects
  const contactsGroupedByIsFavoriteProp = groupBy(contacts, 'isFavorite');
  const {
    true: favoriteContacts,
    false: otherContacts,
  } = contactsGroupedByIsFavoriteProp;

  const sortedFavoriteContacts =
    (favoriteContacts.length && favoriteContacts.sort(sortByNameAscending)) ||
    favoriteContacts;
  const sortedOtherContacts =
    (otherContacts.length && otherContacts.sort(sortByNameAscending)) ||
    otherContacts;

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}>
      <View style={styles.view}>
        <ContactsListHeading text={t('contactsListHeadings.favorite')} />
        {sortedFavoriteContacts.map(
          (contact: ContactItemType, index: number) => (
            <ContactsListItem
              key={contact.name + index}
              contact={contact}
              onTouchHandler={(returnedContactData: ContactItemType) => {
                toggleContactDetails(returnedContactData);
              }}
              isLastRow={isThisLastRow(index, sortedFavoriteContacts.length)}
            />
          ),
        )}

        <ContactsListHeading text={t('contactsListHeadings.other')} />
        {sortedOtherContacts.map((contact: ContactItemType, index: number) => (
          <ContactsListItem
            key={contact.name + index}
            contact={contact}
            onTouchHandler={(returnedContactData: ContactItemType) => {
              toggleContactDetails(returnedContactData);
            }}
            isLastRow={isThisLastRow(index, sortedOtherContacts.length)}
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
