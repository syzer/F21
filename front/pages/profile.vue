<template>
  <section class="page">
    <navbar />
    <section class="container-resoponsive">
      <div class="row col-12">
        <div class="col-6">
          <h3>Hi {{ name }}</h3>
          <img src="img_avatar.png" alt="Avatar" class="avatar" />
        </div>
        <div class="col-6">
          <img src="map.png" alt="Avatar" class="map" />
        </div>
      </div>
      <div class="row col-12">
        <div class="col-12">
          <ul class="list-group">
            <b-form-group id="title" label="Your shopping interests">
              <b-form-checkbox-group
                v-model="checked"
                switches
                stacked
                name="check-button"
                allselected="true"
                :options="options"
              />
            </b-form-group>
          </ul>

          <div class="input-group mb-3">
            <input
              v-model="newInterest"
              type="text"
              class="form-control"
              placeholder="Other Interest"
              aria-label="Other Interest"
              aria-describedby="button-addon2"
              @click="addInterest"
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
      name: this.$store.state.user.name,
      newInterest: ''
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
    addInterest() {
      if (!this.newInterest) {
        return
      }
      this.$store.commit('addInterest', this.newInterest)
      this.newInterest = ''
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
.avatar {
  vertical-align: middle;
  width: 150px;
  height: 150px;
  border-radius: 50%;
}
.map {
  top: 50px;
  width: 150px;
  height: 150px;
}
#title > legend {
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
  font-size: 1.75rem;
}
</style>
