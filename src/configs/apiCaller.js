import axios from 'axios';
import Cookies from 'js-cookie'
import toast from 'react-hot-toast';

export const axiosPublic = axios.create({
  baseURL: 'http://localhost:8080',
  withCredentials: true,
});

axiosPublic.interceptors.request.use(
  async (config) => {
    const accessToken = Cookies.get('accessToken')
    if (accessToken) {
      config.headers = {
        ...config.headers,
        authorization: `Bearer ${accessToken}`
      }
    }

    return config
  },
  (error) => Promise.reject(error)
);

axiosPublic.interceptors.response.use(
  function (res) {
    return res;
  },
  async function (e) {
    const { response } = e;

    if (response) {
      if (response.data.error) {
        if (response.data.error === 'Access Token is expired') {
          if (response.status === 401) {
            toast.error("Your session has expired. Please login again.");
            Cookies.remove('accessToken')
            window.location.href = '/login'
            return;
          }
        }
      }

      return response
    }
    return {
      data: {
        message: 'Internal Server Error',
        statusCode: 500,
      },
    };
  },
);


export const apiCaller = (
  method,
  path,
  data,
) => {
  return axiosPublic({
    method,
    headers: {
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Origin': '*',
    },
    url: `${path}`,
    data,
  });
};

export default apiCaller;
