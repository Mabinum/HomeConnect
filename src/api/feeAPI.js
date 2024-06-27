import axios from "axios";

export const addData = async () => {
  try {
    const response = await axios.post('http://localhost:8080/fee/register', { "no":0, "month":12, "water":20000, "electric":30000, "maintenance":10000 });
    if (response.status === 201) {
      return response.data;
    } else {
      throw new Error(`api error: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080/fee';

// export const addData = async (feeData) => {
//   try {
//     const response = await axios.post(`${BASE_URL}/register`, feeData);
//     const { status, statusText, data } = response;

//     if (status === 201) {
//       return data;
//     } else {
//       throw new Error(`API error: ${status} ${statusText}`);
//     }
//   } catch (error) {
//     console.error('Error adding data:', error);
//     throw error;
//   }
// };