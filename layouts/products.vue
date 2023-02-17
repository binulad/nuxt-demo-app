<template>
  <div class="flex flex-col">
    <header class="shadow bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink class="font-bold" to="/">Logo</NuxtLink>
      </nav>
    </header>

    <div class="container mx-auto p-4 grow">
      <slot />
    </div>

    <footer class="container mx-auto p-4 border-t">
      <ul class="flex gap-4">
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">About</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/products">Products</NuxtLink>
        </li>
      </ul>
    </footer>
  </div>
</template>
