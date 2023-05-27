import { followApi, usersApi } from "../api/api"

const ADD_FRIEND = 'ADD-FRIEND';
const DELETE_FRIEND = 'DELETE-FRIEND';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';

let initialState = {
  usersList: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

const findUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FRIEND:
      return {
        ...state,
        usersList: state.usersList.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };
    case DELETE_FRIEND:
      return {
        ...state,
        usersList: state.usersList.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };
    case SET_USERS:
      return { ...state, usersList: [...action.users], }
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage, }
    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.totalUsersCount, }
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching, }
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress:
          action.isFetching
            ? [...state.followingInProgress, action.userId]
            : state.followingInProgress.filter(id => id !== action.userId)
      }
    default:
      return state;
  }
};

export const addFriend = (userId) => ({ type: ADD_FRIEND, userId, });
export const delFriend = (userId) => ({ type: DELETE_FRIEND, userId, });
export const setUsers = (users) => ({ type: SET_USERS, users, });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage, });
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount, });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching, });
export const toggleIsFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId, });

export function getUsers(currentPage, pageSize) {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    usersApi.getUsers(currentPage, pageSize).then(data => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
      if (data.totalCount > 100) {
        dispatch(setTotalUsersCount(100));
      }
    });
  };
};

export function follow(userId) {
  return (dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userId));
    followApi.addFriend(userId).then(data => {
      if (data.resultCode === 0) {
        dispatch(addFriend(userId));
      }
      dispatch(toggleIsFollowingProgress(false, userId));
    });
  };
};

export function unfollow(userId) {
  return (dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userId));
    followApi.delFriend(userId).then(data => {
      if (data.resultCode === 0) {
        dispatch(delFriend(userId));
      }
      dispatch(toggleIsFollowingProgress(false, userId));
    });
  };
};

export default findUsersReducer;