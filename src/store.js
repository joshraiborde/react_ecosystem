import { createStore, combineReducers } from 'redux';
import { toods } from './todos/reducers'

const reducers = {
    todos,
};

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer);