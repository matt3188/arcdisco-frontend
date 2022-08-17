<template>
  <component :is="tag" :class="`${size} m-0 font-light text-slate-900`">{{
    heading
  }}</component>
</template>

<script>
export default {
  name: 'HeadingTag',
  props: {
    tag: {
      type: String,
      default: 'h1',
    },
    heading: {
      type: String,
      default: '',
    },
  },
  computed: {
    size() {
      switch (this.tag) {
        case 'h2':
          return 'text-2xl'
        case 'h3':
          return 'text-xl'
        default:
          return 'text-3xl'
      }
    },
  },
}
</script>
