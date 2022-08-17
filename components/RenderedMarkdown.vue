<template>
  <div
    :class="`${size} mb-5 font-light leading-7`"
    v-html="$md.render(content)"
  />
</template>

<script>
export default {
  name: 'RenderedMarkdown',
  props: {
    content: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'text-sm',
    },
  },
}
</script>
