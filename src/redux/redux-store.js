import { applyMiddleware, combineReducers, createStore } from 'redux'
import headerReducer from './header-reducer'
import dialogsReducer from './dialogs-reducer'
import findUsersReducer from './find-user-reducer'
import profileReducer from './profile-reducer'
import authReducer from './auth-reducer'
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
  headerPage: headerReducer,
  dialogsPage: dialogsReducer,
  usersPage: findUsersReducer,
  profilePage: profileReducer,
  auth: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;