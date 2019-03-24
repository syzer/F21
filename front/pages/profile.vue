<template>
  <section class="page">
    <navbar />
    <section class="container">
      <div>
        <h3>Hi {{ name }}</h3>
        <b-form-group label="Your shopping interests">
          <b-form-checkbox-group
            v-model="checked"
            switches
            stacked
            name="check-button"
            allselected="true"
            :options="options"
          />
        </b-form-group>

        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Other Interest"
            aria-label="Other Interest"
            aria-describedby="button-addon2"
            v-model="newInterest"
          />
          <div class="input-group-append">
            <button
              id="button-addon2"
              class="btn btn-outline-secondary"
              type="button"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import Navbar from '~/components/Navbar.vue'

import 'vue-thin-modal/dist/vue-thin-modal.css'

export default {
  components: {
    Navbar
  },
  data() {
    return {
      selected: [], // Must be an array reference!
      name: this.$store.state.user.name
    }
  },
  computed: {
    discounts() {
      return this.$store.state.discounts
    },
    options() {
      return this.$store.state.user.interests
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
