import {createStore, combineReducers} from 'redux';
import {
  contactsListReducer as contacts,
  contactPreviewIdReducer as contactPreviewId,
} from './reducers';

const rootReducer = combineReducers({contacts, contactPreviewId});

const configureStore = () => createStore(rootReducer);

export default configureStore;
