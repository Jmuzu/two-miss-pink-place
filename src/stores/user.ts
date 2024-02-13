import { defineStore } from "pinia";
import { ref } from "vue";

export const ADD_SELECTED_CATEGORY = "ADD_SELECTED_CATEGORY";
export const CLEAR_USER_PRODUCT_FILTER_SELECTIONS =
  "CLEAR_USER_PRODUCT_FILTER_SELECTIONS";

export const useUserStore = defineStore("user", () => {
  const isLoggedIn = ref(false);
  const selectedCategories = ref<string[]>([]);
  const minPrice = ref<number>(0);
  const selectedSort = ref<string>("");

  const productSearchTerm = ref("");

  const LOGIN_USER = () => (isLoggedIn.value = true);

  const ADD_SELECTED_CATEGORY = (categories: string[]) => {
    selectedCategories.value = categories;
  };

  const UPDATE_NAME_SEARCH_TERM = (term: string) => {
    productSearchTerm.value = term;
  };

  const CLEAR_USER_PRODUCT_FILTER_SELECTIONS = () => {
    selectedCategories.value = [];
    productSearchTerm.value = "";
  };

  return {
    minPrice,
    isLoggedIn,
    selectedCategories,
    productSearchTerm,
    selectedSort,
    LOGIN_USER,
    ADD_SELECTED_CATEGORY,
    UPDATE_NAME_SEARCH_TERM,
    CLEAR_USER_PRODUCT_FILTER_SELECTIONS,
  };
});
