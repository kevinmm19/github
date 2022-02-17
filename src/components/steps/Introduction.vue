<script
  setup
  lang="ts"
>
  import Navigation from './Navigation.vue'
</script>

<template>
  <div class="introduction">
    <h2>Register Now</h2>

    <p>Build up your engineering connection!</p>

    <p>
      Just your name, GitHub's username and Email. After submitted your personal information, you will join the biggest engineering community in Berlin.
    </p>

    <p>What we offer:</p>

    <ul>
      <li>Daily email newsletter</li>

      <li>Regular team events</li>

      <li>Mentorship Program</li>
    </ul>

    <Navigation
      :current-step="1"
      :isNextButtonDisabled="false"
    />
  </div>
</template>