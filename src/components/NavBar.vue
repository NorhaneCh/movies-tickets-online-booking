<script setup lang="ts">
import { styles } from "../styles";

const props = defineProps(["darkMode"]);
</script>
<template>
  <div
    :class="[
      props.darkMode ? 'border-white-color/10' : 'border-black-color/10',
      styles.paddingX,
    ]"
    class="flex flex-row gap-6 items-center py-2 z-10 sticky border-b"
  >
    <p
      class="font-bold text-[20px]"
      :class="[darkMode ? 'text-dark-text' : 'text-text']"
    >
      CINEMA COSMOS
    </p>
    <slot name="searchBar"></slot>
    <slot name="switchButton"></slot>
  </div>
  <div
    :class="[
      darkMode ? 'bg-dark-primary text-text' : 'bg-primary text-dark-text',
    ]"
    class="h-[50px] flex flex-row gap-12 items-center justify-center font-bold"
  >
    <a
      :class="[darkMode ? 'hover:text-text/70' : 'hover:text-dark-text/70']"
      href="#"
      >What's On</a
    >
    <a
      :class="[darkMode ? 'hover:text-text/70' : 'hover:text-dark-text/70']"
      href="#"
      >Offers</a
    >
    <a
      :class="[darkMode ? 'hover:text-text/70' : 'hover:text-dark-text/70']"
      href="#"
      >About</a
    >
  </div>
</template>
