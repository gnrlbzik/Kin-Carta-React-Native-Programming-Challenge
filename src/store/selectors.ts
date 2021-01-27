import {createSelector} from 'reselect';
import type {State} from '../types';
import {sortByNameAscending, groupBy} from '../utils';

export const areContactsLoading = createSelector(
  (state: State) => state.contacts.isLoading,
  (isLoading) => isLoading,
);

export const getContactsList = createSelector(
  (state: State) => state.contacts.list,
  (contacts) => contacts,
);

export const getGroupedAndSortedContactsList = createSelector(
  getContactsList,
  (contacts) => {
    const contactsGroupedByIsFavoriteProp = groupBy(contacts, 'isFavorite')
    const {
      true: favorites = [],
      false: others = [],
    } = contactsGroupedByIsFavoriteProp;
    return {
      favorites: favorites.sort(sortByNameAscending),
      others: others.sort(sortByNameAscending),
    };
  },
);

export const getContactPreviewId = createSelector(
  (state: State) => state.contactPreviewId,
  (contactPreviewId) => contactPreviewId,
);

export const getContactPreviewDetails = createSelector(
  getContactPreviewId,
  getContactsList,
  (contactPreviewId, contactsList) =>
    contactsList.find((contact) => contact.id === contactPreviewId),
);
