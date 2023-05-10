const ADD_FRIEND = 'ADD-FRIEND';
const DELETE_FRIEND = 'DELETE-FRIEND';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

let initialState = {
    usersList: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
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

export default findUsersReducer;