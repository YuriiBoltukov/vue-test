<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <div class="title">
    <h1 class="black">{{ title }}</h1>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

.title h1 {
  text-align: center;
}

@media (min-width: 1024px) {
  .title h1 {
    text-align: left;
  }
}
</style>
