<template>
  <div class="p-3">
    <div class="bg-white shadow overflow-hidden sm:rounded-lg p-3">
      <h4 class="text-base text-slate-900 font-semibold mt-0 mb-0">
        {{ author }}
      </h4>
      <p class="mt-1">{{ event }}</p>
      <div class="text-sm">{{ testimonial }}</div>
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
