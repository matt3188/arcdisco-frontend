<template>
  <nav class="p-8">
    <div class="flex content-center justify-between">
      <img
        class="max-h-12 mr-5"
        src="https://res.cloudinary.com/dicg2gmh9/image/upload/v1660577899/thumbnail_logo_1134eb0afd.png?width=219&height=192"
      />
      <div class="flex content-center">
        <template v-for="navItem in renderNavigation">
          <NuxtLink
            :key="navItem.id"
            :to="navItem.path"
            class="self-center mr-3"
          >
            {{ navItem.title }}
          </NuxtLink>
        </template>
      </div>
    </div>
  </nav>
</template>

<script>
import { mainNavigation } from '~/graphql/mainNavigation'

export default {
  name: 'TheNavbar',
  apollo: {
    renderNavigation: {
      query: mainNavigation,
    },
  },
}
</script>
