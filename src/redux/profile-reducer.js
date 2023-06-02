import { profileApi } from "../api/api"

const SET_USER_PROFILE = 'SET-USER-PROFILE';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const SET_USER_STATUS = 'SET-USER-STATUS';

let initialState = {
	profile: null,
	isFetching: false,
	status: '',
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
	return async (dispatch) => {
		dispatch(toggleIsFetching(true));
		let response = await profileApi.getUserProfile(userId)
		dispatch(toggleIsFetching(false));
		dispatch(setUserProfile(response));
	}
};

export function getUserStatus(userId) {
	return async (dispatch) => {
		let response = await profileApi.getUserStatus(userId)
		dispatch(setUserStatus(response));
	}
};

export function updateUserStatus(newStatus) {
	return async (dispatch) => {
		let response = await profileApi.updateUserStatus(newStatus)
		if (response.resultCode === 0) {
			dispatch(setUserStatus(newStatus));
		};
	}
};

export default profileReducer;