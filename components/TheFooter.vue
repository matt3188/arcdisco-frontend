<template>
  <footer class="sticky top-[100vh] max-w-none">
    <section class="footer-top bg-neutral-100 p-8">
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div>
          <HeadingTag tag="h3" heading="A.R.C Disco" />
          <div class="text-sm font-light leading-7">
            <RenderedMarkdown :content="data.info.address" />
            <p class="mb-2">
              <a :href="`mailto:${data.info.email}`">{{ data.info.email }}</a>
            </p>
            <p>
              <a :href="`tel:+${data.info.telephone}`">{{
                data.info.telephone
              }}</a>
            </p>
          </div>
        </div>
        <div>
          <HeadingTag tag="h3" heading="More links" />
          <template v-for="navItem in data.navigation">
            <NuxtLink
              :key="navItem.id"
              :to="navItem.path"
              class="self-center font-light"
            >
              {{ navItem.title }}
            </NuxtLink>
          </template>
        </div>
        <div>
          <HeadingTag tag="h3" heading="Even more links" />
        </div>
      </div>
    </section>
    <section
      class="footer-bottom flex items-center justify-center bg-neutral-200 p-8"
    >
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
