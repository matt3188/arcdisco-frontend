<template>
  <div class="max-w-none">
    <HeroBanner
      :heading="page.pageHeader.heading"
      :banner="page.pageHeader.banner.url"
    />
    <QuoteBanner v-bind="page.intro" background-color="bg-white" />
    <div class="container mx-auto pb-10 px-4">
      <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="testimonial in page.testimonials" :key="testimonial.id">
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
  apollo: {
    page: {
      query: testimonialsPage,
      update: (page) => {
        const pageHeader = normalise(page.testimonialsPage).pageHeader
        const testimonials = normalise(page.testimonials)
        const intro = normalise(page.testimonialsPage).intro
        return {
          intro,
          testimonials,
          pageHeader,
        }
      },
    },
  },
}
</script>
