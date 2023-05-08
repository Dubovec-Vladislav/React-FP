const ADD_FRIEND = 'ADD-FRIEND';
const DELETE_FRIEND = 'DELETE-FRIEND';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';

let initialState = {
    usersList: [],
    pageSize: 5,
    totalUsersCount: 11,
    currentPage: 1,
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
            return {
                ...state,
                usersList: [...action.users],
                // usersList: [...state.usersList, ...action.users],
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            }
        default:
            return state;
    }
};

export const addFriendActionCreator = (userId) => ({ type: ADD_FRIEND, userId, });
export const delFriendActionCreator = (userId) => ({ type: DELETE_FRIEND, userId, });
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users, });
export const updateCurrentPageActionCreator = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage, });

export default findUsersReducer;