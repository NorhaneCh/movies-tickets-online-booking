<script setup lang="ts">
import NavBar from "./components/NavBar.vue";

import { ref } from "vue";
import Welcome from "./components/Welcome.vue";
const movieName = ref("");
const darkMode = ref(true);
const switchMode = (): void => {
  darkMode.value = !darkMode.value;
  console.log(darkMode.value);
};
</script>

<template>
  <div
    :class="[
      darkMode
        ? 'bg-dark-background text-dark-text'
        : 'bg-background text-text',
    ]"
    class="min-h-screen"
  >
    <NavBar :dark-mode="darkMode">
      <template v-slot:searchBar>
        <input
          type="text"
          v-model="movieName"
          placeholder="search ..."
          class="text-black-color px-2 ml-auto rounded-md py-1"
        />
      </template>
      <template v-slot:switchButton>
        <button
          :class="[
            darkMode
              ? 'bg-dark-primary text-dark-secondary'
              : 'bg-primary text-secondary',
          ]"
          class="px-3 py-2 rounded-md"
          @click="switchMode"
        >
          Switch Mode
        </button>
      </template>
    </NavBar>
    <Welcome :dark-mode="darkMode" />
  </div>
</template>
