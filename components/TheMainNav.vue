<template>
  <div class="prose flex content-center flex-col md:flex-row">
    <template v-for="navItem in renderNavigation">
      <NuxtLink
        :key="navItem.id"
        :to="navItem.path"
        class="self-start w-full md:w-auto py-3 md:py-0 md:self-center md:mr-3 hover:text-zinc-400 transition-colors no-underline"
        @click="toggle"
      >
        {{ navItem.title }}
      </NuxtLink>
    </template>
  </div>
</template>

<script>
import { mainNavigation } from '~/graphql/mainNavigation'

export default {
  name: 'TheMainNav',
  apollo: {
    renderNavigation: {
      query: mainNavigation,
    },
  },
  methods: {
    toggle() {
      this.$emit('toggle-nav', false)
    },
  },
}
</script>
