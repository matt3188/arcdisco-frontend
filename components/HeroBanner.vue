<template>
  <header
    class="relative flex w-full bg-cover bg-center"
    :style="`backgroundImage: url(${banner})`"
  >
    <div
      class="flex h-full w-full items-center justify-center bg-orange-200 bg-opacity-50 py-12"
    >
      <h2
        v-if="heading"
        class="mt-8 mb-6 text-4xl font-light text-gray-100 lg:text-6xl"
      >
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
