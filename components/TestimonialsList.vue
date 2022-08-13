<template>
  <div v-if="testimonials" class="p-8 bg-gray-100">
    <client-only>
      <agile :options="options">
        <TestimonialCard
          v-for="testimonial in testimonials"
          :key="testimonial.id"
          v-bind="testimonial"
        />
      </agile>
    </client-only>
  </div>
</template>

<script>
import TestimonialCard from '@/components/TestimonialCard'

export default {
  name: 'TestimonialsList',
  components: { TestimonialCard },
  props: { testimonials: { type: Array, default: () => [] } },
  data() {
    return {
      options: {
        autoplay: true,
        slidesToShow: 3,
        navButtons: false,
        centerMode: true,
      },
    }
  },
}
</script>

