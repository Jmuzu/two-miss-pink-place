<template>
  <div class="mb-7 w-64 border border-gray-300 rounded-lg hover:border-black">
    <router-link :to="productPageLink" class="flex flex-col h-full p-2">
      <img :src="String(product.image)" class="object-contain h-64" />

      <div class="flex-grow mt-3">
        <h3 class="text-sm truncate">{{ product.title }}</h3>
      </div>

      <p class="text-sm font-medium mt-3">₱ {{ product.price }}</p>
    </router-link>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import type { Product } from "@/api/types";

const props = defineProps({
  product: {
    type: Object as () => Product,
    required: true,
  },
});

const productPageLink = computed(() => `/${props.product.id}`);
</script>
