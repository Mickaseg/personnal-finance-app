import { axiosInstance } from './AxiosConfig.jsx';

export const getPots = async () => {
    try {
        const response = await axiosInstance.get('/pots');
        return response.data;
    } catch (error) {
        console.error('Error getting transactions:', error);
        throw error;
    }
};