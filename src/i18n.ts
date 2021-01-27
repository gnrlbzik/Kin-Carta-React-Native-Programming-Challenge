export const t = (translationPath: string) => {
  const locale = 'en'; // README: this could be grabbed from config

  try {
    return translationPath
      .split('.')
      .reduce((p: any, c: any) => (p && p[c]) || `${i18n.appErrors[locale].noTranslationFound}`, i18n[locale]); // FIXME: types
  } catch (error) {
    return `${i18n.appErrors[locale].noTranslationFound}`;
  }
};

export const i18n = {
  appErrors: {
    en: {
      noTranslationFound: 'ERROR: no translation was found',
    },
  },
  en: {
    loadingData: 'Fetching contacts...',
    contactsListHeaderText: 'Contacts',
    contactsListHeadings: {
      favorite: 'Favorite Contacts',
      other: 'Other Contacts',
    },
    contactDetail: {
      headings: {
        phone: 'Phone',
        address: 'Address',
        birthdate: 'Birthdate',
        emailAddress: 'Email',
      },
      phoneTypes: {
        home: 'Home',
        mobile: 'Mobile',
        work: 'Work',
      },
    },
  },
};
