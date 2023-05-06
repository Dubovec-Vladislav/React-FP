const ADD_FRIEND = 'ADD-FRIEND';
const DELETE_FRIEND = 'DELETE-FRIEND';
const SET_USERS = 'SET-USERS';

let initialState = {
    usersList: [],
};

const findUsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FRIEND:
            return {
                ...state,
                usersList: state.usersList.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, friendStatus: true };
                    }
                    return user;
                }),
            };
        case DELETE_FRIEND:
            return {
                ...state,
                usersList: state.usersList.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, friendStatus: false };
                    }
                    return user;
                }),
            };
        case SET_USERS:
            return {
                ...state,
                usersList: [...state.usersList, ...action.users],
            }
        default:
            return state;
    }
};

export const addFriendActionCreator = (userId) => {
    return {
        type: ADD_FRIEND,
        userId: userId,
    }
};

export const delFriendActionCreator = (userId) => {
    return {
        type: DELETE_FRIEND,
        userId: userId,
    }
};

export const setUsersActionCreator = (users) => {
    return {
        type: SET_USERS,
        users: users,
    }
};

export default findUsersReducer;