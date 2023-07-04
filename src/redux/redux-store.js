import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

// let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.__store__ = store;

export default store;