<template>
  <div>
    <Tutorial />
    <div v-for="testimonial in testimonials.data" :key="testimonial.id">
      <p>{{ testimonial.attributes.Author }}</p>
      <p>{{ testimonial.attributes.Testimonial }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      testimonials: [],
    }
  },
  async fetch() {
    this.testimonials = await this.$axios.$get('/testimonials')
  },
}
</script>
