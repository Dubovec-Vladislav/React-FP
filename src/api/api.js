import axios from "axios"

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    withCredentials: true,
    headers: { "API-KEY": "5b281dfb-d275-44f3-9d8c-207a490b6d13" },
});

export const usersApi = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },
};

export const authApi = {
    authMe() {
        return instance.get(`/auth/me`).then(response => response.data);
    },
    loginMe(email, password, rememberMe) {
        return instance.post(`/auth/login`, { email, password, rememberMe }).then(response => response.data);
    },
    logoutMe() {
        return instance.delete(`/auth/login`).then(response => response.data);
    },
};

export const profileApi = {
    getUserProfile(userId) {
        return instance.get(`/profile/${userId}`).then(response => response.data);
    },
    getUserStatus(userId) {
        return instance.get(`/profile/status/${userId}`).then(response => response.data);
    },
    updateUserStatus(status) {
        return instance.put(`/profile/status`, { status }).then(response => response.data);
    },
};

export const followApi = {
    delFriend(userId) {
        return instance.delete(`/follow/${userId}`).then(response => response.data);
    },

    addFriend(userId) {
        return instance.post(`/follow/${userId}`).then(response => response.data);
    },
};




