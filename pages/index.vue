<template>
  <div class="prose max-w-none">
    <img v-if="page.heroImage" :src="page.heroImage" />
    <div class="container mx-auto">
      <h1 class="text-3xl font-bold">
        {{ page.mainHeading }}
      </h1>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-html="$md.render(page.description)" />
    </div>
    <TestimonialsList v-if="reviews" :testimonials="reviews" />
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
    const heroImage = `${process.env.IMAGE_ROUTE}${data.heroImage[0].url}`

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
      title: this.page.SEO.metaTitle,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.SEO.metaDescription,
        },
      ],
      fetchOnServer: true,
    }
  },
}
</script>
