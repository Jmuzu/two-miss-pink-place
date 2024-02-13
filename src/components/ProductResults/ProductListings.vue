<template>
  <main class="flex-auto p-4">
    <div class="flex justify-center items-center w-60 space-x-2">
      <label for="sortBy" class="block mb-2 text-sm font-medium text-black"
        >Sort by</label
      >
      <select
        id="sortBy"
        class="border border-gray-500 text-black text-sm rounded-sm focus:ring-gray-500 focus:border-gray-500 block py-2 px-4 appearance-none"
        v-model="userStore.selectedSort"
      >
        <option v-for="list in sortList" :key="list.value" :value="list.value">
          {{ list.name }}
        </option>
      </select>
    </div>
    <div v-if="displayedProducts.length != 0">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mt-5"
      >
        <product-listing
          v-for="product in displayedProducts"
          :key="String(product.id)"
          :product="product"
          class="flex-grow flex-shrink-0"
        />
      </div>

      <div class="mx-auto mt-8">
        <div class="flex flex-row flex-nowrap">
          <p class="flex-grow text-sm">Page {{ currentPage }}</p>

          <div class="flex items-center justify-center">
            <router-link
              v-if="previousPage"
              role="link"
              :to="{ name: 'Home', query: { page: previousPage } }"
              class="mx-3 text-sm font-semibold hover:text-gray-600"
            >
              Previous
            </router-link>

            <router-link
              v-if="nextPage"
              role="link"
              :to="{ name: 'Home', query: { page: nextPage } }"
              class="mx-3 text-sm font-semibold hover:text-gray-600"
            >
              Next
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p class="mt-10 items-start flex justify-center">No Products Found</p>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";

import usePreviousAndNextPages from "@/composables/usePreviousAndNextPages";

import ProductListing from "@/components/ProductResults/ProductListing.vue";
import { useProductsStore } from "@/stores/products";
import { useUserStore } from "@/stores/user";

const productStore = useProductsStore();
const userStore = useUserStore();

onMounted(() => {
  productStore.FETCH_PRODUCTS();
  userStore.selectedSort = sortList[0].value;
});

const FILTERED_PRODUCTS = computed(() => productStore.FILTERED_PRODUCTS());

const route = useRoute();
const currentPage = computed(() =>
  Number.parseInt((route.query.page as string) || "1")
);
const maxPage = computed(() => Math.ceil(FILTERED_PRODUCTS.value.length / 15));

const { previousPage, nextPage } = usePreviousAndNextPages(
  currentPage,
  maxPage
);

const displayedProducts = computed(() => {
  const pageNumber = currentPage.value;
  const firstProductIndex = (pageNumber - 1) * 15;
  const lastProductIndex = pageNumber * 15;
  return FILTERED_PRODUCTS.value.slice(firstProductIndex, lastProductIndex);
});

const sortList = [
  {
    value: "asc",
    name: "Low to High",
  },
  {
    value: "desc",
    name: "High to Low",
  },
];
</script>
