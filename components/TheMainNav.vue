<template>
  <ul class="flex content-center flex-col md:flex-row">
    <template v-for="navItem in renderNavigation">
      <li
        :key="navItem.id"
        class="w-auto py-3 md:py-0"
        @click="$nuxt.$emit('close-nav')"
      >
        <NuxtLink
          :key="navItem.id"
          :to="navItem.path"
          class="self-start w-full md:w-auto py-3 md:py-0 md:self-center md:mr-3 hover:text-zinc-400 transition-colors no-underline"
        >
          {{ navItem.title }}
        </NuxtLink>
      </li>
    </template>
  </ul>
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
}
</script>
