<template>
  <div v-if="!$apollo.loading" class="prose max-w-none">
    <HeroBanner
      :heading="page.header.heading"
      :banner="page.header.banner.url"
    />
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
  async asyncData({ app }) {
    const client = app.apolloProvider.defaultClient
    const res = await client.query({
      query: aboutPage,
    })
    return {
      page: normalise(res.data).aboutUs,
    }
  },
}
</script>
