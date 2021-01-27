import type {Action, State} from '../types';
import {
  STORE_CONTACTS_INITIATED_FETCHING,
  STORE_CONTACTS_COMPLETED_FETCHING,
  STORE_CONTACTS_TOGGLE_IS_FAVORITE,
  STORE_CONTACT_PREVIEW_SET,
  STORE_CONTACT_PREVIEW_UNSET,
} from '../constants';

const contactsListReducerInitialState: State['contacts'] = {
  isLoading: false,
  list: [],
};

export const contactsListReducer = (
  state = contactsListReducerInitialState,
  action: Action,
) => {
  switch (action.type) {
    case STORE_CONTACTS_INITIATED_FETCHING:
      return {
        ...state,
        isLoading: true,
      };

    case STORE_CONTACTS_COMPLETED_FETCHING:
      return {
        ...state,
        list: action.payload,
        isLoading: false,
      };
    case STORE_CONTACTS_TOGGLE_IS_FAVORITE:
      const modifiedListContacts = [...state.list];
      const contactIndex = modifiedListContacts.findIndex(
        (item) => item.id === action.payload,
      );
      modifiedListContacts[contactIndex].isFavorite = !modifiedListContacts[
        contactIndex
      ].isFavorite;
      return {
        ...state,
        list: modifiedListContacts,
      };
    default:
      return state;
  }
};

const contactPreviewReducerInitialState: State['contactPreviewId'] = null;

export const contactPreviewIdReducer = (
  state = contactPreviewReducerInitialState,
  action: Action,
) => {
  switch (action.type) {
    case STORE_CONTACT_PREVIEW_SET:
      return action.payload;
    case STORE_CONTACT_PREVIEW_UNSET:
      return null;
    default:
      return state;
  }
};
