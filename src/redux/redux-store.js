import { combineReducers, createStore } from 'redux'
import headerReducer from './header-reducer';
import dialogsReducer from './dialogs-reducer';
import findUsersReducer from './find-user-reducer';

let reducers = combineReducers({
    headerPage: headerReducer,
    dialogsPage: dialogsReducer,
    usersPage: findUsersReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;