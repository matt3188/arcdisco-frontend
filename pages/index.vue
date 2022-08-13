<template>
  <div>
    <img v-if="page.heroImage" :src="page.heroImage" style="width: 100%" />
    <h1>{{ page.mainHeading }}</h1>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-html="$md.render(page.description)" />
  </div>
</template>

<script>
import { homePage } from '@/graphql/query'
import { normalise } from '~/utils/normalise'

export default {
  name: 'IndexPage',
  async asyncData({ app }) {
    const client = app.apolloProvider.defaultClient
    const res = await client.query({
      query: homePage,
    })
    const data = normalise(res.data).homePage
    const heroImage = `${process.env.IMAGE_ROUTE}${data.heroImage[0].url}`
    return {
      page: {
        ...data,
        heroImage,
      },
    }
  },
}
</script>
