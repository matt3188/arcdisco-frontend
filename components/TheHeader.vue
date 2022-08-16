<template>
  <nav class="w-full p-6 bg-transparent">
    <div class="flex items-center justify-between">
      <!-- Header logo -->
      <div>
        <TheLogo />
      </div>

      <!-- Mobile toggle -->
      <div class="md:hidden">
        <button @click="openDraw">
          <svg
            class="h-8 w-8 fill-current text-black"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      <!-- Navbar -->
      <div class="hidden md:block">
        <TheMainNav />
      </div>

      <!-- Dark Background Transition -->
      <transition
        enter-class="opacity-0"
        enter-active-class="ease-out transition-medium"
        enter-to-class="opacity-100"
        leave-class="opacity-100"
        leave-active-class="ease-out transition-medium"
        leave-to-class="opacity-0"
      >
        <div
          v-show="isOpen"
          class="z-10 fixed inset-0 transition-opacity"
          @keydown.esc="closeDraw"
        >
          <div
            class="absolute inset-0 bg-black opacity-50"
            tabindex="0"
            @click="closeDraw"
          ></div>
        </div>
      </transition>

      <!-- Drawer Menu -->
      <aside
        class="p-5 transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
        :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
      >
        <div class="close">
          <button class="absolute top-0 right-0 mt-4 mr-4" @click="closeDraw">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <span class="flex w-full items-center py-4 border-b" @click="closeDraw">
          <TheLogo />
        </span>

        <TheMainNav />

        <!-- <FollowUs /> -->
      </aside>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty('overflow', 'hidden')
          else document.body.style.removeProperty('overflow')
        }
      },
    },
  },
  created() {
    this.$nuxt.$on('close-nav', () => this.closeDraw())
  },
  mounted() {
    document.addEventListener('keydown', ($event) => {
      const keyCode = $event.key || $event.keyCode
      if ((keyCode === 27 || keyCode === 'Escape') && this.isOpen) {
        this.isOpen = false
      }
    })
  },
  methods: {
    openDraw() {
      this.isOpen = !this.isOpen
    },
    closeDraw() {
      this.isOpen = false
    },
  },
}
</script>

<style>
a.nuxt-link-exact-active {
  @apply text-zinc-400;
}
</style>
