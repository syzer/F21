<template>
  <section class="page">
    <navbar />
    <section class="container">
      <div>
        <logo />
        <h1 class="title">
          Profile page
        </h1>
        <h2 class="subtitle">Hi {{ user }}</h2>
      </div>
    </section>
  </section>
</template>
<script>
// import { mapMutations } from 'vuex'
import Logo from '~/components/Logo.vue'
import Navbar from '~/components/Navbar.vue'

export default {
  components: {
    Logo,
    Navbar
  },
  computed: {
    user() {
      return this.$store.state.user
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
