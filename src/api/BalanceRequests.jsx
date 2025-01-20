import {axiosInstance} from './AxiosConfig.jsx';

export const getBalance = async () => {
    try {
        const response = await axiosInstance.get('/balance');
        return response.data;
    } catch (error) {
        console.error('Error getting transactions:', error);
        throw error;
    }
};

export const updateBalance = async (id, data) => {
    try {
        const response = await axiosInstance.patch(`/balance/${id}`, data);
        return response.data;
    } catch (error) {
        console.error('Error updating balance:', error);
        throw error;
    }
}