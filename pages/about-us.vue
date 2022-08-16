<template>
  <div class="prose max-w-none">
    <header
      class="flex relative w-full bg-center bg-cover"
      :style="`backgroundImage: url(${page.banner.url})`"
    >
      <div
        class="
          flex
          items-center
          justify-center
          w-full
          h-full
          bg-gray-900 bg-opacity-50
          py-12
        "
      >
        <h2 class="mt-8 mb-6 text-4xl lg:text-5xl font-bold text-gray-100">
          {{ page.heading }}
        </h2>
      </div>
    </header>
    <div class="container mx-auto py-8 pl-4 pr-4">
      <div v-html="$md.render(page.content)" />
    </div>
  </div>
</template>

<script>
import { aboutPage } from '~/graphql/aboutPage'
import { normalise } from '~/utils/normalise'

export default {
  name: 'AboutUs',
  apollo: {
    page: {
      query: aboutPage,
      update: (page) => normalise(page.aboutUs),
    },
  },
}
</script>
