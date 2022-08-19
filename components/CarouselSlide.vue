<template>
  <header
    class="relative flex w-full bg-cover bg-center"
    :style="`backgroundImage: url(${banner})`"
  >
    <div
      class="flex h-full w-full flex-col items-center justify-center bg-gray-900 bg-opacity-50 py-12 text-center"
    >
      <h2
        v-if="heading"
        class="mt-8 mb-6 text-4xl font-light text-gray-100 lg:text-6xl"
      >
        {{ heading }}
      </h2>
      <h3
        v-if="subHeading"
        class="mt-8 mb-6 text-xl font-light text-gray-100 lg:text-2xl"
      >
        {{ subHeading }}
      </h3>
    </div>
  </header>
</template>

<script>
export default {
  name: 'CarouselSlide',
  props: {
    heading: {
      type: String,
      default: '',
    },
    subHeading: {
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
