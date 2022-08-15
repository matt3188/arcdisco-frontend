<template>
  <div class="prose max-w-none">
    <img v-if="page.heroImage" :src="page.heroImage" />
    <div class="container mx-auto">
      <h1 class="text-3xl font-bold">
        {{ page.mainHeading }}
      </h1>
      <div v-html="$md.render(page.description)" />
      <TestimonialsList v-if="reviews" :testimonials="reviews" />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
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
  mounted() {
    this.fetchMainMenu('main-navigation')
    this.fetchFooterMenu('footer-navigation')
    this.fetchFooterInfo()
  },
  methods: {
    ...mapActions(['fetchFooterInfo', 'fetchMainMenu', 'fetchFooterMenu']),
  },
}
</script>
