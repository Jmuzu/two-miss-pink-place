<template>
  <product-filters-sidebar-checkbox-group
    :unique-values="UNIQUE_CATEGORY"
    :action="userStore.ADD_SELECTED_CATEGORY"
  />
</template>

<script lang="ts" setup>
import { computed } from "vue";

import ProductFiltersSidebarCheckboxGroup from "@/components/ProductResults/ProductFiltersSidebar/ProductFiltersSidebarCheckboxGroup.vue";

import { useProductsStore } from "@/stores/products";
import { useUserStore } from "@/stores/user";

const productsStore = useProductsStore();
const UNIQUE_CATEGORY = computed(() => productsStore.UNIQUE_CATEGORY());

const userStore = useUserStore();
</script>
