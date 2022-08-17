<template>
  <div class="p-3">
    <div class="relative text-center overflow-hidden p-3">
      <h4 class="text-base text-slate-900 font-medium mt-0 mb-5">
        {{ event }}
      </h4>
      <RenderedMarkdown :content="testimonial" />
      <p class="font-medium text-sm text-slate-900">- {{ author }}</p>
      <div
        v-if="poptopReview"
        class="absolute bottom-9 right-0 overflow-visible"
      >
        <PopTopLogo />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestimonialCard',
  props: {
    date: {
      type: String,
      default: '',
    },
    author: {
      type: String,
      default: '',
    },
    event: {
      type: String,
      default: '',
    },
    testimonial: {
      type: String,
      default: '',
    },
    poptopReview: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
