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

    socket.emit('getPersonalizedDiscounts', {
      coordinates: { lat: 46.958898999999995, lng: 7.4657898 }, // real call might be slow
      uuid: this.$store.state.user.uuid
    })

    this.$getLocation({}).then(coordinates =>
      socket.emit('getPersonalizedDiscounts', {
        coordinates,
        uuid: this.$store.state.user.uuid
      })
    )

    socket.on('personalizedDiscounts', discounts => {
      this.notifyMe()
      this.$store.commit('newDiscounts', discounts)
    })
  },
  methods: {
    newNotification() {
      // ask notification
      const img = '/siroco.jpg'
      const text = 'HEY! 7% discount on tea 20m away!'
      return new Notification('ShopXp', {
        body: text,
        icon: img
      })
    },
    notifyMe() {
      let notification
      // Let's check if the browser supports notifications
      if (!('Notification' in window)) {
        alert('This browser does not support system notifications')
      }

      // Let's check whether notification permissions have already been granted
      else if (Notification.permission === 'granted') {
        // If it's okay let's create a notification
        notification = this.newNotification()
      }

      // Otherwise, we need to ask the user for permission
      else if (Notification.permission !== 'denied') {
        Notification.requestPermission(function(permission) {
          // If the user accepts, let's create a notification
          if (permission === 'granted') {
            notification = this.newNotification()
          }
        })
      }
      this.notification = notification
    }
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
