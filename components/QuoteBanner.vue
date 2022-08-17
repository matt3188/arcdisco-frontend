<template>
  <section
    :class="[
      backgroundColor,
      { 'bg-center bg-cover': banner.length },
      'flex relative max-w-none py-24 ',
    ]"
    :style="banner ? `backgroundImage: url(${banner})` : ''"
  >
    <div class="flex flex-col items-center justify-center w-full h-full">
      <component :is="tag" class="text-slate-900 m-0 text-3xl font-light">
        {{ heading }}
      </component>
      <RenderedMarkdown :content="content" size="text-lg" />
      <p v-if="citation" class="font-light">{{ citation }}</p>
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  name: 'QuoteBanner',
  props: {
    heading: {
      type: String,
      default: '',
    },
    tag: {
      type: String,
      default: 'h2',
    },
    content: {
      type: String,
      default: '',
    },
    citation: {
      type: String,
      default: '',
    },
    banner: {
      type: String,
      default: '',
    },
    backgroundColor: {
      type: String,
      default: 'bg-white',
    },
  },
}
</script>
