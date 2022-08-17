<template>
  <ul class="flex flex-col content-center md:flex-row">
    <template v-for="navItem in renderNavigation">
      <li
        :key="navItem.id"
        class="w-auto py-3 md:py-0"
        @click="$nuxt.$emit('close-nav')"
      >
        <NuxtLink
          :key="navItem.id"
          :to="navItem.path"
          class="flex w-full self-start py-3 text-sm font-medium uppercase text-slate-900 no-underline transition-colors hover:text-zinc-400 md:mr-3 md:w-fit md:self-center md:px-4 md:py-0"
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
