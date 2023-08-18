import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000/';

export const addUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}adduser`, userData);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (userId) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}admin/${userId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (productId, updatedData) => {
  try {
    const response = await axios.patch(
      `${API_BASE_URL}admin/${productId}`,
      updatedData
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
