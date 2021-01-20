import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {THUMB_SIZE_PREVIEW} from '../constants';

import {Colors} from '../theme';

import type {ContactItem} from '../types';

import {t} from '../utils';

import {Thumbnail, Header, ContactPreviewSection} from './index';

type Props = {
  contactDetails: ContactItem;
  toggleContactDetails: () => void;
};

function ContactPreview(props: Props) {
  const {contactDetails, toggleContactDetails} = props;
  const {
    name,
    largeImageURL,
    companyName,
    phone: {home: homePhone, mobile: mobilePhone, work: workPhone},
    address,
    birthdate,
    emailAddress,
    isFavorite,
  } = contactDetails;
  const sectionsToDisplay = [
    homePhone && {
      heading: t('contactDetail.headings.phone'),
      data: {
        text: homePhone,
        type: t('contactDetail.phoneTypes.home'),
      },
    },
    mobilePhone && {
      heading: t('contactDetail.headings.phone'),
      data: {
        text: mobilePhone,
        type: t('contactDetail.phoneTypes.mobile'),
      },
    },
    workPhone && {
      heading: t('contactDetail.headings.phone'),
      data: {
        text: workPhone,
        type: t('contactDetail.phoneTypes.work'),
      },
    },
    address && {
      heading: t('contactDetail.headings.address'),
      data: {
        text: [
          `${address.street}`,
          `${address.city}, ${address.state} ${address.zipCode}, ${address.country}`,
        ],
      },
    },
    birthdate && {
      heading: t('contactDetail.headings.birthdate'),
      data: {
        text: new Date(birthdate).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
      },
    },
    emailAddress && {
      heading: t('contactDetail.headings.emailAddress'),
      data: {
        text: emailAddress,
      },
    },
  ].filter((section) => section);

  return (
    <View style={styles.view}>
      <Header style={styles.inlineText}>
        <TouchableOpacity onPress={() => toggleContactDetails()}>
          <Text style={styles.link}>＜ Contacts</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            console.log('contact to be starred');
          }}>
          <Text style={styles.star}>{isFavorite ? `★` : `☆`}</Text>
        </TouchableOpacity>
      </Header>
      <ScrollView style={styles.scrollView}>
        {/* TODO: fix scroll */}
        <View style={styles.mainSection}>
          <Thumbnail imgUri={largeImageURL} thumbSize={THUMB_SIZE_PREVIEW} />
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.companyName}>{companyName}</Text>
        </View>
        {sectionsToDisplay.map((section, index) => (
          <ContactPreviewSection key={index} sectionDetails={section} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    position: 'absolute',
    zIndex: 100,
    width: '100%',
    height: '100%',
    backgroundColor: Colors.white,
  },
  scrollView: {
    height: 500,
  },
  link: {
    color: Colors.primary,
    marginLeft: 10,
  },
  star: {
    color: Colors.yellow,
    fontWeight: '600',
    fontSize: 22,
    marginRight: 10,
  },
  mainSection: {
    paddingTop: 22,
    paddingBottom: 22,
    borderBottomColor: Colors.light,
    borderBottomWidth: 1,
    marginLeft: 20,
    marginRight: 20,
    display: 'flex',
    alignItems: 'center',
  },
  name: {
    fontSize: 22,
    color: Colors.dark,
    marginTop: 14,
  },
  companyName: {
    fontSize: 12,
    color: Colors.darkGrey,
    marginTop: 4,
  },
  sectionHeading: {
    color: Colors.darkGrey,
    textTransform: 'uppercase',
    fontSize: 12,
    marginBottom: 8,
  },
  inlineText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default ContactPreview;
