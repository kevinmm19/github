<script
  setup
  lang="ts"
>
  import Header from '@/components/layout/Header.vue'
  import Footer from '@/components/layout/Footer.vue'
</script>

<template>
  <div class="flex flex-col items-center h-screen justify-between">
    <Header />

    <main class="container">
      <router-view />
    </main>

    <Footer />
  </div>
</template>

<style lang="scss">
  @import './styles/_transitions.scss';

  html {
    box-sizing: border-box;
    font-size: 62.5%; // ~10px
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
    color: #fff;
    font-size: 1.4rem;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
  }
</style>
