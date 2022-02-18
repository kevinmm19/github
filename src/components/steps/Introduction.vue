<script
  setup
  lang="ts"
>
  import Navigation from './Navigation.vue'
</script>

<template>
  <div class="
    mx-auto mt-8 p-8 max-w-2xl
    border border-solid border-green-400 rounded-3xl shadow-2xl
  ">
    <h2 class="pb-6 text-green-400">Welcome to GitHub Buddy!</h2>

    <h3 class="pb-6">Join the new community of GitHub developers!</h3>

    <div class="text-left">
      <p class="pb-6">To join the community you must first provide: full name, username, email and agreement to terms and services.</p>

      <p>After registration you can enjoy the benefits of our community:</p>

      <ul class="pb-16 pl-6">
        <li>Direct access to your profile data in GitHub with syncronized edition capabilities</li>

        <li>Deep look of developers near you and on the radar</li>

        <li>Events happening around you</li>

        <li>Weekly newsletter with relevant topics</li>

        <li>Chat and connect to developers from the Buddy community</li>

        <li>Explore other developers based on specific search criteria</li>

        <li>And so much more :) ...</li>
      </ul>
    </div>

    <Navigation
      :current-step="1"
      :isNextButtonDisabled="false"
    />
  </div>
</template>
