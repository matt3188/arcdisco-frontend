<template>
  <div v-if="!$apollo.loading" class="prose max-w-none">
    <HeroBanner :heading="page.header.heading" />

    <QuoteBanner
      :heading="page.banner.heading"
      :content="page.banner.content"
    />
    <PageContent>
      <template v-if="Object.keys(page.services).length">
        <div class="grid grid-cols-4">
          <ServiceCard
            v-for="service in page.services"
            :key="service.name"
            :name="service.name"
            :image="service.image && service.image.url"
            :description="service.description"
            :button-text="service.button_text"
            :button-link="service.button_link"
          />
        </div>
      </template>
    </PageContent>
  </div>
</template>

<script>
import { servicesPage } from '~/graphql/ourServices'
import { normalise } from '~/utils/normalise'

export default {
  name: 'OurServices',
  async asyncData({ app }) {
    const client = app.apolloProvider.defaultClient
    const res = await client.query({
      query: servicesPage,
    })
    return {
      page: normalise(res.data).ourService,
    }
  },
}
</script>
