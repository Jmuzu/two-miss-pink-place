<template>
  <header :class="['w-full', 'text-sm', 'h-16']">
    <div class="fixed top-0 left-0 h-16 w-full bg-white">
      <div
        class="mx-auto flex h-full flex-nowrap border-b border-solid border-gray-300 px-8 justify-between bg-black text-white"
      >
        <router-link
          :to="{ name: 'Home' }"
          class="flex h-full items-center text-xl"
        >
          Logo
        </router-link>

        <div class="h-full flex w-96 items-center">
          <form
            class="flex h-12 w-48 xs:w-36 sm:w-52 md:w-60 lg:w-full xl:w-full items-center rounded-3xl bg-white"
            @submit.prevent=""
          >
            <font-awesome-icon
              :icon="['fas', 'search']"
              class="ml-4 mr-3 text-black"
            />

            <div class="flex h-full flex-1 flex-nowrap font-light">
              <div class="relative flex h-full flex-1 items-center pr-3">
                <text-input
                  id="search"
                  v-model.lazy.trim="productSearchTerm"
                  placeholder="Search for product"
                  class="text-black text-sm"
                />
              </div>
            </div>

            <action-button
              text="Search"
              type="secondary"
              class="rounded-r-3xl"
              @click="userStore.UPDATE_NAME_SEARCH_TERM(productSearchTerm)"
            />
          </form>
        </div>

        <div class="flex h-full items-center">
          <button class="text-white hover:text-gray-400 text-lg">
            <font-awesome-icon :icon="['fas', 'cart-shopping']" />
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import TextInput from "@/components/Shared/TextInput.vue";
import ActionButton from "@/components/Shared/ActionButton.vue";

import { useUserStore } from "@/stores/user";

const userStore = useUserStore();

const productSearchTerm = ref<string>("");
</script>
