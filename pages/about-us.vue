<template>
  <div class="prose max-w-none">
    <HeroBanner :heading="page.heading" :banner="page.banner.url" />
    <div class="container mx-auto py-8 pl-4 pr-4">
      <RenderedMarkdown :content="page.content" />
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
