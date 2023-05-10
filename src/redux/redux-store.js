import { combineReducers, createStore } from 'redux'
import headerReducer from './header-reducer'
import dialogsReducer from './dialogs-reducer'
import findUsersReducer from './find-user-reducer'
import profileReducer from './profile-reducer';

let reducers = combineReducers({
    headerPage: headerReducer,
    dialogsPage: dialogsReducer,
    usersPage: findUsersReducer,
    profilePage: profileReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;