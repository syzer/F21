<template>
  <section class="page">
    <section class="container">
      <img width="100%" src="post-finance.png" />
      <a href="/promotions"
        ><img class="shopXp" width="30%" src="shopXp.jpg"
      /></a>
    </section>
  </section>
</template>
<script>
import io from 'socket.io-client'

export default {
  components: {},
  computed: {},
  mounted() {
    const socket = io('http://localhost:4000')
    socket.emit('chat message', 'connecting')

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
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
