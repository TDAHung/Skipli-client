import { apiCaller } from '../configs/apiCaller';
const generateIdeasFromAI = async (data) => {
    const path = '/ideas/generate';
    const response = await apiCaller('POST', path, data);
    return response;
};

export { generateIdeasFromAI };
