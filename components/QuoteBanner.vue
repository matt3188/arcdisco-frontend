<template>
  <section
    :class="[
      backgroundColor,
      { 'bg-cover bg-center': banner.length },
      'relative flex max-w-none py-24 text-center',
    ]"
    :style="banner ? `backgroundImage: url(${banner})` : ''"
  >
    <div class="flex h-full w-full flex-col items-center justify-center px-4">
      <component :is="tag" class="m-0 text-3xl font-light text-slate-900">
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
