<template>
  <div class="card text-center">
    <img class="thumb" :src="product.image" :alt="product.title" />
    <h3 class="font-bold text-gray-500 m-3 truncate">{{ product.title }}</h3>
    <NuxtLink class="btn my-2" :to="`/products/${product.id}`">View Details</NuxtLink>
  </div>
</template>

<script setup>
const { product } = defineProps(['product'])
</script>