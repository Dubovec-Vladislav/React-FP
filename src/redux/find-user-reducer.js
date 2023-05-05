const ADD_FRIEND = 'ADD-FRIEND';
const DELETE_FRIEND = 'DELETE-FRIEND';
const SET_USERS = 'SET-USERS';

let initialState = {
    usersList: [
        { id: 1, name: "Dmitry", status: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", country: "USA", city: "New-York", friendStatus: false },
        { id: 2, name: "Alex", status: "Phasellus et tristique massa", country: "Italia", city: "Rome", friendStatus: true },
        { id: 3, name: "Jo", status: "Duis posuere urna ut ligula egestas vehicula", country: "Spanish", city: "Madrid", friendStatus: false },
        { id: 4, name: "Rex", status: "Vestibulum vel auctor elit", country: "Mexico", city: "Mexico", friendStatus: false },
    ],
};

const findUserReducer = (state = initialState, action) => {
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
                usersList: [...state.usersList, ...action.usersList]
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
        user: users,
    }
};

export default findUserReducer;