import {createStore} from 'redux';
import reducer from './reducers/reducer';
import { combineReducers } from 'redux'


const store = createStore(reducer);

export default store;