<template>
  <footer>
    <section class="p-8 footer-top bg-neutral-100">
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div>
          <h3 class="mb-2">A.R.C Disco</h3>
          <div class="mb-2" v-html="$md.render(data.info.address)" />
          <p class="mb-2">
            <a :href="`mailto:${data.info.email}`">{{ data.info.email }}</a>
          </p>
          <p>
            <a :href="`tel:+${data.info.telephone}`">{{
              data.info.telephone
            }}</a>
          </p>
        </div>
        <div>
          <h3 class="mb-2">More links</h3>
          <template v-for="navItem in data.navigation">
            <NuxtLink :key="navItem.id" :to="navItem.path" class="self-center">
              {{ navItem.title }}
            </NuxtLink>
          </template>
        </div>
        <div>
          <h3 class="mb-2">Even more links</h3>
          <p>Contact us</p>
        </div>
      </div>
    </section>
    <section class="p-8 footer-bottom bg-neutral-200">
      &copy; A.R.C Disco. All rights reserved
    </section>
  </footer>
</template>

<script>
import { footer } from '~/graphql/footer'
import { normalise } from '~/utils/normalise'

export default {
  name: 'TheFooter',
  apollo: {
    data: {
      query: footer,
      update: (data) => {
        const footer = normalise(data)
        return {
          navigation: footer.renderNavigation,
          info: footer.footers[0],
        }
      },
    },
  },
}
</script>
