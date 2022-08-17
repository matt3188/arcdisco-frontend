<template>
  <div v-if="testimonials" class="my-8 py-8">
    <VueSlickCarousel v-bind="options">
      <TestimonialCard
        v-for="testimonial in testimonials"
        :key="testimonial.id"
        v-bind="testimonial"
      />
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import TestimonialCard from '@/components/TestimonialCard'

export default {
  name: 'TestimonialsList',
  components: { TestimonialCard, VueSlickCarousel },
  props: { testimonials: { type: Array, default: () => [] } },
  data() {
    return {
      options: {
        autoplay: true,
        slidesToShow: 3,
        arrows: false,
        dots: true,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    }
  },
}
</script>
