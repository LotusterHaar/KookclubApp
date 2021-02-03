import reducer from './reducers/reducers'

import {createStore, combineReducers} from 'redux';

const rootReducer = combineReducers({reducer: reducer});

const configureStore = () => {return createStore(rootReducer)}

export default configureStore;