<template>
  <div v-if="!$apollo.loading" class="max-w-none">
    <QuoteBanner
      :heading="`${page.galleries[0].name} Gallery`"
      background-color="bg-orange-200"
    />
    <div class="grid grid-cols-4">
      <template v-for="(image, i) in page.galleries[0].images">
        <div :key="i" class="m-4 border-2">
          <img class="p-4" :src="image.formats.thumbnail.url" />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { gallery } from '~/graphql/gallery'
import { normalise } from '~/utils/normalise'

export default {
  name: 'SingleGallery',
  async asyncData({ app, query }) {
    const client = app.apolloProvider.defaultClient
    const res = await client.query({
      query: gallery,
      variables: {
        name: query.name,
      },
    })
    return {
      page: normalise(res.data.gallery),
    }
  },
}
</script>
