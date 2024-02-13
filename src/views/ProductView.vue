<template>
  <div class="flex w-full flex-row flex-nowrap">
    <product-details :id="Number(currentProductId)" />
  </div>
</template>
<script lang="ts" setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import ProductDetails from "@/components/ProductResults/ProductDetails.vue";

const route = useRoute();
const currentProductId = computed(() => route.params.id);
</script>
