import axios from "axios"

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    withCredentials: true,
    headers: { "API-KEY": "5b281dfb-d275-44f3-9d8c-207a490b6d13" },
});

export const usersApi = {
    async getUsers(currentPage = 1, pageSize = 5) {
        const response = await instance.get(`/users?page=${currentPage}&count=${pageSize}`);
        return response.data;
    },
};

export const authApi = {
    async authMe() {
        const response = await instance.get(`/auth/me`);
        return response.data;
    },
    async loginMe(email, password, rememberMe) {
        const response = await instance.post(`/auth/login`, { email, password, rememberMe });
        return response.data;
    },
    async logoutMe() {
        const response = await instance.delete(`/auth/login`);
        return response.data;
    },
};

export const profileApi = {
    async getUserProfile(userId) {
        const response = await instance.get(`/profile/${userId}`);
        return response.data;
    },
    async getUserStatus(userId) {
        const response = await instance.get(`/profile/status/${userId}`);
        return response.data;
    },
    async updateUserStatus(status) {
        const response = await instance.put(`/profile/status`, { status });
        return response.data;
    },
};

export const followApi = {
    async delFriend(userId) {
        const response = await instance.delete(`/follow/${userId}`);
        return response.data;
    },

    async addFriend(userId) {
        const response = await instance.post(`/follow/${userId}`);
        return response.data;
    },
};




