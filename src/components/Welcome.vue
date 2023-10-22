<script setup lang="ts">
const props = defineProps(["darkMode"]);
</script>
<template>
  <div class="flex flex-row gap-20 items-center justify-center pt-28">
    <p class="text-[70px] font-bold w-[500px]">
      See what's
      <span :class="[props.darkMode ? 'dark-gradient' : 'gradient']">New</span>
      &
      <span :class="[props.darkMode ? 'dark-stroked-text' : 'stroked-text']"
        >Book</span
      >
      Your Ticket
    </p>
  </div>
  <button>Book Now</button>
</template>
