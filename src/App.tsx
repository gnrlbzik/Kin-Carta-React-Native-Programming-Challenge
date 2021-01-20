import React from 'react';

import {useEffect, useState} from 'react';

import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';

import {LOADING_INDICATOR_DURATION} from './constants';
import {t} from './utils';

import {ContactsList, ContactPreview, Header, LoadingData} from './components';

import {getContacts} from './fetchData';

import type {ContactItem} from './types';

function App() {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [contactDetailsToView, setContactDetailsToView] = useState(null);

  useEffect(() => {
    (async () => {
      // README: as I chose not to hook up store and actions atm, this will live here for now.
      // FIXME: should be moved into store/actions/side-effects
      const getContactsResponse = await getContacts();
      setContacts(getContactsResponse);
      setTimeout(() => {
        setIsLoading(false);
      }, LOADING_INDICATOR_DURATION);
    })();
  }, [contacts.length]);

  const toggleContactDetails = (contactInfo: ContactItem) => {
    if (contactInfo) {
      setContactDetailsToView(contactInfo);
    } else {
      setContactDetailsToView(null);
    }
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.container}>
          {isLoading ? (
            <LoadingData />
          ) : (
            <>
              <Header text={t('contactsListHeaderText')} />
              <ContactsList
                contacts={contacts}
                toggleContactDetails={toggleContactDetails}
              />
            </>
          )}
          {contactDetailsToView ? (
            <ContactPreview
              contactDetails={contactDetailsToView}
              toggleContactDetails={toggleContactDetails}
            />
          ) : null}
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
});

export default App;
