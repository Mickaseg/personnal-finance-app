import { axiosInstance } from './AxiosConfig.jsx';

export const getCategories = async () => {
    try {
        const response = await axiosInstance.get('/categories');
        return response.data;
    } catch (error) {
        console.error('Error getting transactions:', error);
        throw error;
    }
};