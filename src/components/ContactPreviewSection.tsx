import React from 'react';

import {StyleSheet, View, Text} from 'react-native';

import {Colors} from '../theme';

type Props = {
  uniqueKey: number;
  sectionDetails: {
    heading: string;
    data: {
      text: string;
      type?: string;
    };
  };
};

function ContactPreviewSection(props: Props) {
  const {
    heading,
    data: {text, type},
  } = props.sectionDetails;

  const textRowsDigest = Array.isArray(text) ? [...text] : [text];

  return (
    <View style={styles.view} key={props.uniqueKey}>
      <Text style={styles.sectionHeading}>{heading}:</Text>
      <View style={styles.inlineText}>
        <View>
          {textRowsDigest.map((textRow) => (
            <Text>{textRow}</Text>
          ))}
        </View>
        {type ? <Text style={styles.type}>{type}</Text> : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    paddingTop: 22,
    paddingBottom: 22,
    borderBottomColor: Colors.light,
    borderBottomWidth: 1,
    marginLeft: 20,
    marginRight: 20,
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
  type: {
    color: Colors.darkGrey,
    fontSize: 12,
  },
});

export default ContactPreviewSection;
