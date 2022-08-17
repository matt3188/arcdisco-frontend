<template>
  <div
    :class="`${size} font-light leading-7 mb-5`"
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
