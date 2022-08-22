<template>
  <div class="h-full px-2 pb-2">
    <div
      :class="[
        'flex h-full flex-col border-2 p-4 text-center ',
        { 'justify-between': image },
      ]"
    >
      <div
        v-if="image"
        class="h-40 overflow-hidden bg-cover bg-center"
        :style="`backgroundImage: url(${image})`"
      />
      <h4 class="text-lg font-thin">{{ name }}</h4>
      <div v-if="description" class="text-sm" v-html="description" />
      <NuxtLink
        :to="buttonLink"
        class="mx-4 mt-4 inline-block border-2 bg-white px-6 py-2 text-slate-900 no-underline transition-colors duration-300 hover:border-orange-200 hover:bg-orange-200"
      >
        {{ buttonText }}
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceCard',
  props: {
    name: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    buttonText: {
      type: String,
      default: '',
    },
    buttonLink: {
      type: String,
      default: '',
    },
  },
}
</script>
