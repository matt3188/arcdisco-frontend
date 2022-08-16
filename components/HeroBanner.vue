<template>
  <header
    class="flex relative w-full bg-center bg-cover"
    :style="`backgroundImage: url(${banner})`"
  >
    <div
      class="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50 py-12"
    >
      <h2 class="mt-8 mb-6 text-4xl lg:text-5xl font-bold text-gray-100">
        {{ heading }}
      </h2>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeroBanner',
  props: {
    heading: {
      type: String,
      default: '',
    },
    banner: {
      type: String,
      default: '',
    },
  },
}
</script>
