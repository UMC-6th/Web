import axios from "axios";

const TOKEN_TYPE = localStorage.getItem("tokenType");
const ACCESS_TOKEN = localStorage.getItem("accessToken");

/** CREATE CUSTOM AXIOS INSTANCE */
export const AuthApi = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `${TOKEN_TYPE} ${ACCESS_TOKEN}`,
    },
});

/** LOGIN API */
export const login = async ({ username, password }) => {
    const data = { username, password };
    const response = await AuthApi.post(`/auth/login`, data);
    return response.data;
}

/** SIGNUP API */
export const signUp = async ({ name, email, age, username, password, passwordCheck }) => {
    const data = { name, email, age, username, password, passwordCheck };
    const response = await AuthApi.post(`/auth/signup`, data);
    return response.data;
}

export const getUserInfo = async () => {
    try {
        const response = await AuthApi.get('/auth/me');
        return response.data; // 사용자 정보 반환
    } catch (error) {
        throw error;
    }
};