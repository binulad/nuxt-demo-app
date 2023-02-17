<template>
  <div>
    <Head>
      <Title>Nuxt App | {{ product.title }}</Title>
      <Meta name="description" :content="product.description" />
    </Head>
    <ProductDetails :productDetails="product"/>
  </div>
</template>

<script setup>
const { id } = useRoute().params;
// Fetch Product from the ID
const { data: product } = await useFetch(
  `https://fakestoreapi.com/products/${id}`,
  { key: id }
);

if(!product.value) {
  throw createError({ statusCode: 404, statusMessage: 'Product not found', fatal: true })
}

definePageMeta({
  layout: "products",
});
</script>
