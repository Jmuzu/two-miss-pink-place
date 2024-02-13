<template>
  <div class="flex w-full flex-row flex-nowrap">
    <product-filters-sidebar />
    <product-listings />
  </div>
</template>

<script lang="ts" setup>
import ProductFiltersSidebar from "@/components/ProductResults/ProductFiltersSidebar/ProductFiltersSidebar.vue";
import ProductListings from "@/components/ProductResults/ProductListings.vue";
</script>
