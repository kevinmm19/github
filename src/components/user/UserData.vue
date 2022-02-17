<script
  setup
  lang="ts"
>
  import { useUserStore } from '@/stores/user'
  import { useRouter } from 'vue-router'
  import GitHubData from './GitHubData.vue'

  const userStore = useUserStore()

  /* Router Navigation */

  const router = useRouter()

  const navigateHome = () => {
    router.push('/')
  }
</script>

<template>
  <Transition
    name="fade"
    mode="out-in"
    appear
  >
    <div class="userData">
      <h2>Welcome</h2>

      <div class="user-info">
        <p>Name: {{ userStore.firstName }} {{ userStore.lastName }}</p>
        
        <p>Email: {{ userStore.email }}</p>
        
        <p>Username: {{ userStore.username }}</p>
      </div>

      <Suspense>
        <template #default>
          <Transition
            name="fade"
            mode="out-in"
            appear
          >
            <GitHubData />
          </Transition>
        </template>

        <template #fallback>
          <p>Loading GitHub data...</p>
        </template>
      </Suspense>

      <button
        qa-ref="home-button"
        type="button"
        @click="navigateHome"
      >
        Home
      </button>
    </div>
  </Transition>
</template>

<style
  lang="scss"
  scoped
>

</style>