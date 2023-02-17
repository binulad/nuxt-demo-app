<template>
  <div class="card grid grid-cols-2 gap-8">
    <div class="p-3">
      <img :src="productDetails.image" class="max-w-[70%] mx-auto" alt="Product Image">
    </div>

    <div>
      <p class="font-medium text-lg mb-1">{{ productDetails.title }}</p>
      <p class="text-lg font-bold">$ {{ productDetails.price }}</p>
      <h3 class="font-medium text-sm pb-2 mb-2 mt-6 border-b">Product Description</h3>
      <p class="text-sm text-slate-400">{{ productDetails.description }}</p>
      <div class="text-sm mb-2 mt-6">
        <span class="font-medium">Category:</span>
        <span class="ml-2 text-slate-400">{{ productDetails.category }}</span>
      </div>

      <button class="btn flex items-center my-5 text-sm font-medium uppercase">
        <span class="material-symbols-outlined mr-2">
          add_shopping_cart
        </span>
        Add to Cart
      </button>
    </div>
</div>
</template>

<script setup>
const { productDetails } = defineProps(['productDetails'])
</script>