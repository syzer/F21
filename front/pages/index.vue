<template>
  <div>
    <img class="full-screen" height="670" src="post-finance2.png" />
    <n-link to="/promotions">
      <img class="shopXp" width="30%" src="shopXp.jpg" />
    </n-link>
    <img
      v-if="notifications"
      class="shopXp-notification"
      width="8%"
      src="red-dot.jpg"
    />
  </div>
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
    const serverUrl = 'http://471c8cba.eu.ngrok.io'
    const socket = io(serverUrl)

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
  bottom: 16%;
  right: 50px;
}

.shopXp-notification {
  position: absolute;
  z-index: 10;
  bottom: 28%;
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

.full-screen {
  background-size: 100%;
  width: 100%;
  /*height: 100%;*/
}
</style>
