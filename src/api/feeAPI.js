import axios from "axios";

export const addData = async () => {
  try {
    const response = await axios.post('http://localhost:8080/fee/register', { "userId":"aaa", "month":11, "water":20000, "electric":30000, "maintenance":10000 });
    console.log(response);
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