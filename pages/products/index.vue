<template>
  <div class="flex flex-col">
    <h2 class="mb-3">Products</h2>
    
    <ul class="w-full grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
      <li v-for="product in products" :key="product.id">
        <ProductCard :product="product"/>
      </li>
    </ul>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'products'
})

// Fetch Products Data
const { data: products } = await useFetch('https://fakestoreapi.com/products')

// Add Page Meta Content
useHead({
  title: "Nuxt App | Product",
  meta: [
    {
      name: "description",
      content: "Nuxt 3 Product Page"
    }
  ]
})
</script>