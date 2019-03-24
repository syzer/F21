<template>
  <section class="page">
    <navbar />
    <section class="container">
      <div>
        <logo />
        <h1 class="title">
          ShopXp
        </h1>
        <h2 class="subtitle">
          Better localized shop experience
        </h2>
        <div class="links">
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
            class="button--grey"
          >
            See nearby discounts
          </a>
          <img class="full-image" src="map.png" />
          <div>
            <button type="button" class="button--grey" @click="open">
              Show promotion
            </button>
            <modal name="example">
              <div class="basic-modal">
                <div v-for="(discount, index) in discounts" :key="index">
                  <Promotion :discount="discount" />
                </div>
                <button
                  class="button button--grey"
                  type="button"
                  @click="close"
                >
                  Close Modal
                </button>
              </div>
            </modal>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
<script>
import Logo from '~/components/Logo.vue'
import Promotion from '~/components/Promotion.vue'
import Navbar from '~/components/Navbar.vue'
import 'vue-thin-modal/dist/vue-thin-modal.css'

export default {
  components: {
    Logo,
    Navbar,
    Promotion
  },
  computed: {
    counter() {
      return this.$store.state.counter
    },
    discounts() {
      return this.$store.state.discounts
    }
  },
  methods: {
    open() {
      this.$modal.push('example')
    },

    close() {
      this.$modal.pop()
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

.full-image {
  width: 100%;
}
</style>
