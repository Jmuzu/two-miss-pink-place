import { defineStore } from "pinia";
import { ref } from "vue";
import { getProducts } from "@/api/getProducts";
import { useUserStore } from "@/stores/user";
import type { Product } from "@/api/types";

export const useProductsStore = defineStore("products", () => {
  const products = ref<Product[]>([]);
  const userStore = useUserStore();
  const minPrice = ref<Number>(0);
  const maxPrice = ref<Number>(0);

  const FETCH_PRODUCTS = async () => {
    products.value = await getProducts();
    UPDATE_PRICE_RANGE();
  };

  const UPDATE_PRICE_RANGE = () => {
    minPrice.value = Math.min(
      ...products.value.map((product) => Number(product.price))
    );
    maxPrice.value = Math.max(
      ...products.value.map((product) => Number(product.price))
    );
  };

  const UNIQUE_CATEGORY = () => {
    const uniqueCategories = new Set<string>();
    products.value.forEach((product) =>
      uniqueCategories.add(String(product.category))
    );
    return uniqueCategories;
  };

  const INCLUDE_PRODUCT_BY_CATEGORY = (product: Product) => {
    if (userStore.selectedCategories.length === 0) return true;
    return userStore.selectedCategories.includes(String(product.category));
  };

  const INCLUDE_PRODUCT_BY_PRICE_RANGE = (product: Product) => {
    if (userStore.minPrice === 0) return true;
    const minPrice = userStore.minPrice;

    return Number(product.price) >= minPrice;
  };

  const INCLUDE_PRODUCT_BY_NAME = (product: Product) => {
    const userStore = useUserStore();
    return product.title
      .toLowerCase()
      .includes(userStore.productSearchTerm.toLowerCase());
  };

  const SORT_PRODUCTS_BY_PRICE = (products: Product[]) => {
    if (userStore.selectedSort === "") return products;
    if (userStore.selectedSort === "asc") {
      products.sort((a, b) => Number(a.price) - Number(b.price));
    } else if (userStore.selectedSort === "desc") {
      products.sort((a, b) => Number(b.price) - Number(a.price));
    }

    return products;
  };

  const FILTERED_PRODUCTS = () => {
    const filteredProducts = SORT_PRODUCTS_BY_PRICE(products.value);

    return filteredProducts
      .filter((product) => INCLUDE_PRODUCT_BY_CATEGORY(product))
      .filter((product) => INCLUDE_PRODUCT_BY_PRICE_RANGE(product))
      .filter((product) => INCLUDE_PRODUCT_BY_NAME(product));
  };

  return {
    minPrice,
    maxPrice,
    products,
    FETCH_PRODUCTS,
    UNIQUE_CATEGORY,
    FILTERED_PRODUCTS,
  };
});
