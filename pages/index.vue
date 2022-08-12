<template>
  <div>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <h1>{{ home.data.attributes.mainHeading }}</h1>
    <div v-html="content" />
    <h2>Testimonials</h2>
    <div v-for="testimonial in testimonials.data" :key="testimonial.id">
      <p>{{ testimonial.attributes.Author }}</p>
      <p>{{ testimonial.attributes.Testimonial }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  async asyncData({ $axios, $md }) {
    const testimonials = await $axios.$get('/testimonials')
    const home = await $axios.$get('/home-page')
    const content = $md.render(home.data.attributes.description)

    return {
      home,
      content,
      testimonials,
    }
  },
}
</script>
