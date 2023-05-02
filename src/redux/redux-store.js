import { combineReducers, createStore } from 'redux'
import headerReducer from './header-reducer';
import dialogsReducer from './dialogs-reducer';

let reducers = combineReducers({
    headerPage: headerReducer,
    dialogsPage: dialogsReducer,
});

let store = createStore(reducers);

export default store;