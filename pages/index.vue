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
