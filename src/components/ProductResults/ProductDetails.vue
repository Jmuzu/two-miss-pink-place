<template>
  <div class="container mx-auto px-4 py-8">
    <router-link
      :to="{ name: 'Home' }"
      class="text-gray-500 hover:text-black transition-colors"
    >
      <font-awesome-icon :icon="['fas', 'arrow-left']" />
    </router-link>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-36">
      <div class="md:col-span-1 lg:col-span-2">
        <div class="h-96">
          <img
            :src="String(product?.image)"
            alt="Product Image"
            class="w-full h-full object-contain rounded-lg"
          />
        </div>
      </div>

      <div class="md:col-span-1 lg:col-span-1">
        <h2 class="text-2xl font-bold">{{ product?.title }}</h2>
        <p class="text-md mb-4">{{ product?.category }}</p>
        <p class="text-3xl mb-4 font-bold">₱ {{ product?.price }}</p>
        <p class="text-md mb-2 font-medium">Product Description</p>
        <p class="text-md mb-4">{{ product?.description }}</p>

        <div class="flex justify-between">
          <div
            class="flex items-center rounded-lg border border-solid border-brand-gray-3"
          >
            <div class="flex h-full flex-1 items-center">
              <action-button
                text="-"
                type="secondary"
                class="rounded-l-lg"
                @click="
                  () => {
                    if (quantity === 0) return;
                    quantity--;
                  }
                "
              />
            </div>

            <span
              class="flex h-full items-center border-l border-r border-brand-gray-3 bg-brand-gray-2 px-3"
            >
              {{ quantity }}
            </span>

            <div class="flex h-full flex-1 items-center">
              <action-button
                text="+"
                type="secondary"
                class="rounded-r-lg"
                @click="() => quantity++"
              />
            </div>
          </div>

          <action-button
            text="Add to Cart"
            class="rounded-lg"
            @click="addToCart"
          >
            <font-awesome-icon class="mr-2" :icon="['fas', 'cart-plus']" />
          </action-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { getProductsById } from "@/api/getProducts";
import ActionButton from "@/components/Shared/ActionButton.vue";
import { Product } from "@/api/types";
import { addNewCart } from "@/api/carts";

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
});

const product = ref<Product>();
const quantity = ref<number>(1);
const addToCart = async () => {
  const data = {
    userId: 5,
    date: new Date(),
    products: [{ productId: product.value?.id, quantity: quantity.value }],
  };

  await addNewCart(data);
};
onMounted(async () => {
  product.value = await getProductsById(props.id);
  console.log(product.value);
});
</script>
