<template>
  <PrimevueToast />
  <template v-if="layoutMode === 'public'">
    <PublicLayout>
      <template #body>
        <RouterView />
      </template>
    </PublicLayout>
  </template>
  <template v-else-if="layoutMode === 'private'"> </template>
  <template v-else>
    <RouterView />
  </template>
</template>

<script lang="ts">
import { useRouter } from 'vue-router'

export default {
  name: 'App',
  setup() {
    const router = useRouter()

    return {
      router,
    }
  },

  data() {
    return {
      theme: 'light',
    }
  },

  computed: {
    layoutMode() {
      const path = this.router.currentRoute.value.path
      if (path.includes('/about-me') || path.includes('/skills') || path.includes('/projects')) {
        return 'public'
      }
      return null
    },
  },

  mounted() {
    this.setTheme()
  },

  methods: {
    setTheme() {
      const storedTheme = localStorage.getItem('theme')
      if (storedTheme) {
        this.theme = storedTheme
      }

      localStorage.setItem('theme', this.theme)

      document.body.classList.add(`${this.theme}`)
    },
  },
}
</script>

<style scoped lang="scss">
//
</style>
