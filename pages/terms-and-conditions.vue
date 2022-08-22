<template>
  <div v-if="!$apollo.loading" class="prose max-w-none">
    <HeroBanner
      :heading="page.header.heading"
      :banner="page.header.banner && page.header.banner.url"
    />
    <div class="container mx-auto py-8 pl-4 pr-4">
      <RenderedMarkdown :content="page.content.content" />
    </div>
  </div>
</template>

<script>
import { termsPage } from '~/graphql/pages'
import { normalise } from '~/utils/normalise'

export default {
  async asyncData({ app }) {
    const client = app.apolloProvider.defaultClient
    const res = await client.query({
      query: termsPage,
    })
    return {
      page: normalise(res.data).termsAndCondition,
    }
  },
}
</script>
