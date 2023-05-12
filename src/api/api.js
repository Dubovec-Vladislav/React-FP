import axios from "axios"

export function getUsers(currentPage = 1, pageSize = 5) {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
        { withCredentials: true, }
    ).then(response => response.data);
};

export function authMe() {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
        { withCredentials: true }
    ).then(response => response.data);
};

export function getUserProfile(userId) {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => response.data);
};

export function delFriend(userId) {
    return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
        {
            withCredentials: true,
            headers: { "API-KEY": "5b281dfb-d275-44f3-9d8c-207a490b6d13" },
        }
    ).then(response => response.data);
};

export function addFriend(userId) {
    return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {},
        {
            withCredentials: true,
            headers: { "API-KEY": "5b281dfb-d275-44f3-9d8c-207a490b6d13" },
        }
    ).then(response => response.data);
};
