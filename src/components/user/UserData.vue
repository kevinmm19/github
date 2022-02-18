<script
  setup
  lang="ts"
>
  import { useUserStore } from '@/stores/user'
  import GitHubData from './GitHubData.vue'

  const userStore = useUserStore()
</script>

<template>
  <Transition
    name="fade"
    mode="out-in"
    appear
  >
    <div class="
      mx-auto mt-8 p-8 max-w-2xl
      border border-solid border-green-400 rounded-3xl shadow-2xl
    ">
      <h2 class="pb-8 text-green-400">Hello {{ userStore.firstName }}!</h2>

      <div>
        <p>
          <span class="font-bold">Name:</span>
          {{ userStore.firstName }}
          {{ userStore.lastName }}
        </p>
        
        <p>
          <span class="font-bold">Username:</span>
          {{ userStore.username }}
        </p>

        <p>
          <span class="font-bold">Email:</span>
          {{ userStore.email }}
        </p>
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

      <router-link
        class="font-bold text-green-400"
        to="/"
      >
        Take Me Home
      </router-link>
    </div>
  </Transition>
</template>
