import { apiCaller } from '../configs/apiCaller';
const login = async (data) => {
    const path = '/auth/login';
    const response = await apiCaller('POST', path, data);
    return response;
};

const getOTP = async (data) => {
    const path = '/auth/get-otp';
    const response = await apiCaller('POST', path, data);
    return response;
};

export { login, getOTP };
