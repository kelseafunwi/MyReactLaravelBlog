import axios from 'axios';

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
});

// this refers to the request interceptors
axiosClient.interceptors.request.use((config) => {
    // Never forget the semiconolon at the end of the authentification and thing
    config.headers['Authorization'] = `Bearer ${ localStorage.getItem('TOKEN')}`;
    return config;
});

// this refers to the response interceptors
axiosClient.interceptors.response.use((response) => {
    // what to do if everything is okay.
    return response;
}, (error) => {
    // status code of 401 means that we an not authenticated.
    if (error.response && error.response.status === 401) {
        localStorage.removeItem('TOKEN');
        window.location.reload();
        return error;
    }
    throw error;
})

export default axiosClient;
