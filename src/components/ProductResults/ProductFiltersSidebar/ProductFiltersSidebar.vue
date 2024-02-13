<template>
  <div
    class="flex w-96 flex-col border-r border-solid border-gray-300 bg-white p-4"
  >
    <section class="pb-5">
      <product-filters-sidebar-prompt />

      <collapsable-accordion header="Categories">
        <product-filters-sidebar-category />
      </collapsable-accordion>

      <collapsable-accordion header="Price Range (PHP)">
        <product-filters-sidebar-price-range />
      </collapsable-accordion>
    </section>
  </div>
</template>

<script lang="ts" setup>
import CollapsableAccordion from "@/components/Shared/CollapsableAccordion.vue";
import ProductFiltersSidebarPrompt from "@/components/ProductResults/ProductFiltersSidebar/ProductFiltersSidebarPrompt.vue";
import ProductFiltersSidebarCategory from "./ProductFiltersSidebarCategory.vue";
import ProductFiltersSidebarPriceRange from "./ProductFiltersSidebarPriceRange.vue";
</script>
