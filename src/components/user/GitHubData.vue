<script
  setup
  lang="ts"
>
  import { useUserStore } from '@/stores/user'
  import { getGitHubData } from '@/services/github.service'
  import { computed } from 'vue'

  const userStore = useUserStore()

  /* GitHub Data */

  const gitHubData = await getGitHubData(userStore.username)

  const hasGitHubData = computed(() => Object.keys(gitHubData).length > 1)

  const createdAt = computed(() => gitHubData.created_at.replace('T', ' ').replace('Z', ' '))

  const updatedAt = computed(() => gitHubData.updated_at.replace('T', ' ').replace('Z', ' '))
</script>

<template>
  <div class="mt-8 mb-12">
    <div v-if="hasGitHubData">
      <div>
        <img
          :src="gitHubData.avatar_url"
          alt="GitHub avatar"
          class="object-contain h-96 w-full"
        />
      </div>

      <a
        :href="gitHubData.html_url"
        class="font-bold text-green-400"
        rel="noopener"
        target="_blank"
      >
        Go to GitHub profile
      </a>
      
      <ul class="mt-8 list-none">
        <li>
          <span class="font-bold">Followers:</span>
          {{ gitHubData.followers }}
        </li>
        
        <li>
          <span class="font-bold">Following:</span>
          {{ gitHubData.following }}
        </li>

        <li>
          <span class="font-bold">Public Repos:</span>
          {{ gitHubData.public_repos }}
        </li>

        <li>
          <span class="font-bold">Created On:</span>
          {{ createdAt }}
        </li>

        <li>
          <span class="font-bold">Last Update:</span>
          {{ updatedAt }}
        </li>
      </ul>
    </div>

    <p
      v-else
      class="font-bold text-green-400"
    >
      Username not found in GitHub.
    </p>
  </div>
</template>
