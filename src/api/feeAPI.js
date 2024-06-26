import axios from "axios";

export const addData = async (feeData) => {
  try {
    console.log(feeData);
    const response = await axios.post('http://localhost:8080/fee/register', feeData );
    console.log(feeData);
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