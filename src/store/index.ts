import {createStore, combineReducers} from 'redux';
import contactsList from './reducers/contactsList';

const rootReducer = combineReducers({contactsList});

const configureStore = () => createStore(rootReducer);

export default configureStore;
