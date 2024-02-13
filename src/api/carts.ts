import axios from "axios";

export const addNewCart = async (products) => {
  const baseUrl = import.meta.env.VITE_APP_API_URL;
  const url = `${baseUrl}/carts`;
  const { data } = await axios.post(url, products);

  console.log(data);
  return data;
};
