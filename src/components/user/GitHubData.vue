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
</script>

<template>
  <div class="github-info">
    <div
      v-if="hasGitHubData"
      qa-ref="github-info"
    >
      <div>
        <img
          :src="gitHubData.avatar_url"
          alt="Github avatar image"
          class="avatar-image"
        />
      </div>
      
      <div class="">
        <a
          :href="gitHubData.html_url"
          target="_blank"
          rel="noopener"
        >
          {{ gitHubData.html_url }}
        </a>
        
        <ul>
          <li>Followers: {{ gitHubData.followers }}</li>
          
          <li>Following: {{ gitHubData.following }}</li>
        </ul>
      </div>
    </div>

    <p
      v-else
      class="github-error"
      qa-ref="not-found-username"
    >
      Username not found in GitHub.
    </p>
  </div>
</template>