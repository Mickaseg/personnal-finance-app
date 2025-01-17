import {axiosInstance} from './AxiosConfig.jsx';

export const getBudgets = async () => {
    try {
        const response = await axiosInstance.get('/budgets');
        return response.data;
    } catch (error) {
        console.error('Error getting transactions:', error);
        throw error;
    }
};

export const createBudget = async (budget) => {
    try {
        const response = await axiosInstance.post('/budgets', budget);
        return response.data;
    } catch (error) {
        console.error('Error creating pot:', error);
        throw error;
    }
}

export const deleteBudget = async (id) => {
    try {
        const response = await axiosInstance.delete(`/budgets/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting pot:', error);
        throw error;
    }
}

export const getSummary = async () => {
    try {
        const response = await axiosInstance.get('/budget-sum')
        return response.data;
    } catch (error) {
        console.error('Error getting total savings', error)
        throw error;
    }
}

// TODO : handle adding money spent to budget
// export const addToBudget = async (id, amount) => {
//     try {
//         const response = await axiosInstance.patch(`/budgets/${id}`, {current: amount});
//         return response.data;
//     } catch (error) {
//         console.error('Error adding to pot:', error);
//         throw error;
//     }
// }