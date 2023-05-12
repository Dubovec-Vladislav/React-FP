import axios from "axios"

const baseUrl = "https://social-network.samuraijs.com/api/1.0";

const instance = axios.create({
    withCredentials: true,
    headers: { "API-KEY": "5b281dfb-d275-44f3-9d8c-207a490b6d13" },
});

export function getUsers(currentPage = 1, pageSize = 5) {
    return instance.get(baseUrl + `/users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
};

export function authMe() {
    return instance.get(baseUrl + `/auth/me`).then(response => response.data);
};

export function getUserProfile(userId) {
    return instance.get(baseUrl + `/profile/${userId}`).then(response => response.data);
};

export function delFriend(userId) {
    return instance.delete(baseUrl + `/follow/${userId}`).then(response => response.data);
};

export function addFriend(userId) {
    return instance.post(baseUrl + `/follow/${userId}`).then(response => response.data);
};
