import { axiosInstance } from './AxiosConfig.jsx';

export const getBalance = async () => {
    try {
        const response = await axiosInstance.get('/balance');
        return response.data;
    } catch (error) {
        console.error('Error getting transactions:', error);
        throw error;
    }
};

export const updateBalance = async () => {
    const data = {
        "current": 2500,
        "income": 2000.25,
        "expenses": 1000.5,
    }
    try {
        const response = await axiosInstance.patch(`/balance/6723bab619e9292d5d470fae`, data);
        return response.data;
    } catch (error) {
        console.error('Error updating balance:', error);
        throw error;
    }
}