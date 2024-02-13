<template>
  <div class="w-full max-w-md mx-auto">
    <div class="flex justify-between">
      <span>₱ {{ Math.floor(userStore.minPrice) }}</span>
      <span>₱ {{ Math.floor(Number(productStore.maxPrice)) }}</span>
    </div>
    <input
      type="range"
      class="block w-full mt-4 accent-black"
      :min="Math.floor(Number(productStore.minPrice))"
      :max="Math.floor(Number(productStore.maxPrice))"
      v-model="userStore.minPrice"
    />
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { useUserStore } from "@/stores/user";
import { useProductsStore } from "@/stores/products";

const userStore = useUserStore();
const productStore = useProductsStore();

onMounted(
  () => (userStore.minPrice = Math.floor(Number(productStore.minPrice)))
);
</script>
