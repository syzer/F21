<template>
  <section class="page">
    <logo></logo>
    <section class="container">
      <div>
        <h5 class="title">
          Welcome Piotr
        </h5>
        <b-form-group label="You are interested in recommendations for ">
          <b-form-checkbox-group
            v-model="selected"
            checked=""
            stacked
            name="flavour2a"
            :options="options"
          />
        </b-form-group>
        <b-input></b-input>
      </div>
    </section>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

import 'vue-thin-modal/dist/vue-thin-modal.css'

export default {
  components: {
    Logo
  },
  data() {
    return {
      selected: [], // Must be an array reference!
      options: [
        { text: 'Tea and coffee', value: 'orange' },
        { text: 'Shoes', value: 'apple' },
        { text: 'Furniture', value: 'pineapple' },
        { text: 'Music events', value: 'grape' }
      ]
    }
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
</style>
