<template>
  <nav class="w-full bg-transparent p-6">
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
          class="fixed inset-0 z-10 transition-opacity"
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
        class="fixed top-0 left-0 z-30 h-full w-64 transform overflow-auto bg-white p-5 transition-all duration-300 ease-in-out"
        :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
      >
        <div class="close">
          <button class="absolute top-0 right-0 mt-4 mr-4" @click="closeDraw">
            <svg
              class="h-6 w-6"
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

        <span class="flex w-full items-center border-b py-4" @click="closeDraw">
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
