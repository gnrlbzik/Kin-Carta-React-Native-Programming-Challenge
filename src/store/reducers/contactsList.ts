const initialState = {
  list: [],
};

const contactsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CONTACTS_LIST_FETCH_COMPLETED':
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};

export default contactsListReducer;
