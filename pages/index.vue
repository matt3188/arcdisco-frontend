<template>
  <div class="prose max-w-none">
    <img v-if="page.heroImage" :src="page.heroImage" />
    <PageContent>
      <HeadingTag :heading="page.mainHeading" />
      <RenderedMarkdown :content="page.description" />
    </PageContent>
    <QuoteBanner
      tag="h3"
      heading="Book your event with us today"
      background-color="bg-orange-100"
    >
      <NuxtLink
        to="/book-us"
        class="bg-white text-slate-900 no-underline px-6 py-2"
      >
        Book us
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
    const heroImage = data.heroImage[0].url

    return {
      reviews,
      page: {
        ...data,
        heroImage,
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
