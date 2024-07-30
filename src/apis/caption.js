import { apiCaller } from '../configs/apiCaller';

const getCaptions = async () => {
    const path = '/captions';
    const response = await apiCaller('GET', path);
    return response;
}
const generateCaptionFromIdea = async (data) => {
    const path = '/captions/generate-from-idea';
    const response = await apiCaller('POST', path, data);
    return response;
}

const generateCaptionFromScratch = async (data) => {
    const path = '/captions/generate-from-scratch';
    const response = await apiCaller('POST', path, data);
    return response;
}

const shareCaption = async (data) => {
    const path = '/captions/email';
    const response = await apiCaller('POST', path, data);
    return response;
}

const saveCaption = async (data) => {
    const path = '/captions/save';
    const response = await apiCaller('POST', path, data);
    return response;
}

const unSaveCaption = async (id) => {
    const path = `/captions/${id}`;
    const response = await apiCaller('DELETE', path);
    return response;
}

export { getCaptions, generateCaptionFromIdea, generateCaptionFromScratch, shareCaption, saveCaption, unSaveCaption };
