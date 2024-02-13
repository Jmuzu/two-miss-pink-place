import axios from "axios";

import type { Product } from "@/api/types";

export const getProducts = async () => {
  const baseUrl = import.meta.env.VITE_APP_API_URL;
  const url = `${baseUrl}/products`;

  const { data } = await axios.get<Product[]>(url);

  return data;
};

export const getProductsById = async (id: number) => {
  const baseUrl = import.meta.env.VITE_APP_API_URL;
  const url = `${baseUrl}/products/${id}`;

  const { data } = await axios.get<Product>(url);

  return data;
};
