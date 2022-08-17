<template>
  <div class="h-screen bg-white">
    <TheHeader />
    <Nuxt keep-alive />
    <TheFooter />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}

.layout-enter-active,
.layout-leave-active {
  transition: opacity 0.5s;
}

.layout-enter,
.layout-leave-to {
  opacity: 0;
}
</style>
