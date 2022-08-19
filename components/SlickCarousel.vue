<template>
  <VueSlickCarousel v-bind="options">
    <slot />
  </VueSlickCarousel>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'

export default {
  name: 'SlickCarousel',
  components: { VueSlickCarousel },
  props: {
    options: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
