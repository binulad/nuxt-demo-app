<template>
  <div class="bg-emerald-200 h-full w-full flex flex-col items-center justify-center">
    <p class="text-8xl mb-4">{{ error.statusCode }}</p>
    <p class="text-3xl">{{ error.message }}</p>
    <button class="btn my-3" @click="handleClick()">Go to Home</button>
  </div>
</template>

<script setup>
  defineProps(['error'])

  const handleClick = () => clearError({ redirect: '/' })
</script>