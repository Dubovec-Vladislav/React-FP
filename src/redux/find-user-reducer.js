const ADD_FRIEND = 'ADD-FRIEND';
const DELETE_FRIEND = 'DELETE-FRIEND';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';

let initialState = {
    usersList: [],
    pageSize: 5,
    totalUsersCount: 0,
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
            return { ...state, usersList: [...action.users], }
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage, }
        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.totalUsersCount, }
        default:
            return state;
    }
};

export const addFriendActionCreator = (userId) => ({ type: ADD_FRIEND, userId, });
export const delFriendActionCreator = (userId) => ({ type: DELETE_FRIEND, userId, });
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users, });
export const updateCurrentPageActionCreator = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage, });
export const setTotalUsersCountActionCreator = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount, });

export default findUsersReducer;