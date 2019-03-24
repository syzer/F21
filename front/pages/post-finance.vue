<template>
  <section class="page">
    <section class="container">
      <img width="100%" src="post-finance.png" />
      <n-link to="/promotions">
        <img class="shopXp" width="30%" src="shopXp.jpg" />
      </n-link>
      <img
        v-if="notifications"
        class="shopXp-notification"
        width="8%"
        src="red-dot.jpg"
      />
    </section>
  </section>
</template>
<script>
import io from 'socket.io-client'

export default {
  components: {},
  computed: {
    discounts() {
      return this.$store.state.discounts
    },
    notifications() {
      return this.$store.state.notifications
    }
  },
  watch: {
    discounts(newCount, oldCount) {
      if (newCount !== oldCount) {
        // TODO finish me
      }
    }
  },
  mounted() {
    const socket = io('http://localhost:4000')

    this.$getLocation({}).then(coordinates =>
      socket.emit('getPersonalizedDiscounts', {
        coordinates,
        uuid: this.$store.state.user.uuid
      })
    )

    socket.on('personalizedDiscounts', discounts => {
      this.$store.commit('newDiscounts', discounts)
    })
  }
}
</script>

<style>
.shopXp {
  position: absolute;
  bottom: 150px;
  right: 50px;
}

.shopXp-notification {
  position: absolute;
  z-index: 10;
  bottom: 220px;
  right: 35px;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
