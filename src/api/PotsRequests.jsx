import {axiosInstance} from './AxiosConfig.jsx';

export const getPots = async () => {
    try {
        const response = await axiosInstance.get('/pots');
        return response.data;
    } catch (error) {
        console.error('Error getting transactions:', error);
        throw error;
    }
};

export const createPot = async (pot) => {
    try {
        const response = await axiosInstance.post('/pots', pot);
        return response.data;
    } catch (error) {
        console.error('Error creating pot:', error);
        throw error;
    }
}

export const deletePot = async (id) => {
    try {
        const response = await axiosInstance.delete(`/pots/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting pot:', error);
        throw error;
    }
}

export const withdrawFromPot = async (id, amount) => {
    try {
        const response = await axiosInstance.patch(`/pots/${id}`, {current: amount});
        return response.data;
    } catch (error) {
        console.error('Error withdrawing from pot:', error);
        throw error;
    }
}

export const addToPot = async (id, amount) => {
    try {
        const response = await axiosInstance.patch(`/pots/${id}`, {current: amount});
        return response.data;
    } catch (error) {
        console.error('Error adding to pot:', error);
        throw error;
    }
}

export const getTotalSavings = async () => {
    try {
        const response = await axiosInstance.get('/total-balance')
        return response.data;
    } catch (error) {
        console.error('Error getting total savings', error)
        throw error;
    }
}