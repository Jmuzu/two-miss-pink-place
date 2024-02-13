<template>
  <button :class="buttonClass">
    <slot title="icon" />
    {{ text }}
  </button>
</template>

<script lang="ts" setup>
import { computed, toRefs } from "vue";

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: false,
    default: "primary",
    validator(value: string) {
      return ["primary", "secondary"].includes(value);
    },
  },
});

const { type } = toRefs(props);

const buttonClass = computed(() => {
  return {
    [type.value]: true,
  };
});
</script>

<style scoped>
button {
  @apply px-5 py-3.5 font-medium;
}

.primary {
  @apply rounded bg-black text-white hover:bg-gray-800;
}

.secondary {
  @apply bg-transparent text-black hover:bg-gray-900 hover:text-white;
}
</style>
