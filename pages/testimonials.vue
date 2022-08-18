<template>
  <div v-if="!$apollo.loading" class="max-w-none">
    <HeroBanner :heading="pageHeader.heading" :banner="pageHeader.banner.url" />
    <QuoteBanner v-bind="intro" background-color="bg-white" />
    <div class="container mx-auto px-4 pb-10">
      <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="testimonial in testimonials" :key="testimonial.id">
          <TestimonialCard
            :poptop-review="testimonial.poptop_review"
            v-bind="testimonial"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { testimonialsPage } from '~/graphql/testimonialsPage'
import { normalise } from '~/utils/normalise'

export default {
  name: 'Testimonials',
  async asyncData({ app }) {
    const client = app.apolloProvider.defaultClient
    const res = await client.query({
      query: testimonialsPage,
    })
    const page = normalise(res.data.testimonialsPage)
    const pageHeader = page.pageHeader
    const intro = page.intro
    const testimonials = normalise(res.data).testimonials

    return {
      pageHeader,
      intro,
      testimonials,
    }
  },
}
</script>
