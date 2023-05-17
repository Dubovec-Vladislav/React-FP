import { profileApi } from "../api/api"

const SET_USER_PROFILE = 'SET-USER-PROFILE';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const SET_USER_STATUS = 'SET-STATUS';

let initialState = {
    profile: null,
    isFetching: false,
    status: 'status',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE:
            return { ...state, profile: action.profile, }
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching, }
        case SET_USER_STATUS:
            return { ...state, status: action.status, }
        default:
            return state;
    }
};

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile, });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching, });
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status, });

export function getUserProfile(userId) {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        profileApi.getUserProfile(userId).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUserProfile(data));
        });
    }
};

export default profileReducer;