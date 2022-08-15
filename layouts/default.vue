<template>
  <div class="bg-white">
    <TheNavbar />
    <Nuxt keep-alive />
    <TheFooter />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  mounted() {
    this.fetchMainMenu('main-navigation')
    this.fetchFooterMenu('footer-navigation')
    this.fetchFooterInfo()
  },
  methods: {
    ...mapActions(['fetchFooterInfo', 'fetchMainMenu', 'fetchFooterMenu']),
  },
}
</script>

