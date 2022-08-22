<template>
  <div v-if="!$apollo.loading" class="prose max-w-none">
    <HeroBanner
      :heading="page.header.heading"
      :banner="page.header.banner.url"
    />
    <QuoteBanner
      v-if="page.banner"
      tag="h3"
      :heading="page.banner.heading"
      :content="page.banner.content"
    >
    </QuoteBanner>
    <PageContent>
      <div class="grid grid-cols-4">
        <ServiceCard
          v-for="gallery in page.galleries"
          :key="gallery.name"
          :name="gallery.name"
          :image="gallery.cover.formats.thumbnail.url"
          button-text="View gallery"
          :button-link="{
            path: `/gallery/${gallery.id}`,
            query: { name: gallery.name },
          }"
        />
      </div>
    </PageContent>
  </div>
</template>

<script>
import { galleryPage } from '~/graphql/pages'
import { normalise } from '~/utils/normalise'

export default {
  name: 'Gallery',
  async asyncData({ app }) {
    const client = app.apolloProvider.defaultClient
    const res = await client.query({
      query: galleryPage,
    })
    return {
      page: normalise(res.data).gallery,
    }
  },
}
</script>
