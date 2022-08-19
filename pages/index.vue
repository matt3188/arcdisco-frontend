<template>
  <div class="prose max-w-none">
    <SlickCarousel v-if="page.carousel" :options="page.carousel_settings">
      <CarouselSlide
        v-for="slide in page.carousel"
        :key="slide.id"
        :heading="slide.heading"
        :sub-heading="slide.sub_heading"
        :banner="slide.image.url"
      />
    </SlickCarousel>
    <PageContent>
      <RenderedMarkdown :content="page.content.content" />
    </PageContent>
    <QuoteBanner
      v-if="page.banner"
      tag="h3"
      heading="Book your event with us today"
      background-color="bg-orange-100"
    >
      <NuxtLink
        :to="`/${page.banner.button_link}`"
        class="bg-white px-6 py-2 text-slate-900 no-underline"
      >
        {{ page.banner.button_text }}
      </NuxtLink>
    </QuoteBanner>
    <PageContent>
      <TestimonialsList v-if="reviews" :testimonials="reviews" />
    </PageContent>
  </div>
</template>

<script>
import { homePage } from '~/graphql/homePage'
import { testimonials } from '~/graphql/testimonials'
import { normalise } from '~/utils/normalise'
import TestimonialsList from '@/components/TestimonialsList'

export default {
  name: 'IndexPage',
  components: { TestimonialsList },
  async asyncData({ app }) {
    const client = app.apolloProvider.defaultClient
    const res = await client.query({
      query: homePage,
    })
    const list = await client.query({
      query: testimonials,
      variables: {
        limit: 4,
      },
    })

    const data = normalise(res.data).homePage
    const reviews = normalise(list.data).testimonials
    const banner = data.banner

    return {
      reviews,
      page: {
        ...data,
        banner,
        carousel: data.carousel,
        carousel_settings: data.carousel_settings,
      },
    }
  },
  head() {
    return {
      title: this.page.seo.metaTitle,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.seo.metaDescription,
        },
      ],
      fetchOnServer: true,
    }
  },
}
</script>
