import React, {useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';

import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';

import {
  STORE_CONTACTS_INITIATED_FETCHING,
  STORE_CONTACTS_COMPLETED_FETCHING,
  LOADING_INDICATOR_DURATION,
} from './constants';

import {t} from './utils';

import {
  getContactsList,
  areContactsLoading,
  getContactPreviewId,
} from './store/selectors';

import {ContactsList, ContactPreview, Header, LoadingData} from './components';

import {getContacts} from './fetchData';

function App() {
  const dispatch = useDispatch();
  const contactsList = useSelector(getContactsList);
  const isLoading = useSelector(areContactsLoading);
  const contactPreviewId = useSelector(getContactPreviewId);

  useEffect(() => {
    if (contactsList.length === 0) {
      dispatch({type: STORE_CONTACTS_INITIATED_FETCHING});
      (async () => {
        const getContactsResponse = await getContacts();
        setTimeout(() => {
          dispatch({
            type: STORE_CONTACTS_COMPLETED_FETCHING,
            payload: getContactsResponse,
          });
        }, LOADING_INDICATOR_DURATION);
      })();
    }
  }, [contactsList, dispatch]);

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
              <ContactsList />
            </>
          )}
          {contactPreviewId ? <ContactPreview /> : null}
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
