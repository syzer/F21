<template>
  <div class="container max-width">
    <div class="row">
      <div class="col-12">
        <img :src="image.src" />
        <h3>{{ name }}</h3>
        {{ description }}
        {{ price_info.price }} {{ currency }} {{ price_info.original_price }} {{ currency }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    currency: 'CHF'
  }),
  props: {
    discount: {
      type: Object,
      default: () => ({
        image: {
          src: ''
        },
        name: '',
        description: '',
        price_info: {
          price: 0
        },
      })
    }
  },
  computed: {
    image: function() {
      return this.discount.image
    },
    name: function() {
      return this.discount.name
    },
    description: function() {
      return this.discount.description
    },
    price_info: function() {
      return this.discount.price_info
    }
  }
}
</script>

<style>
.max-width {
  width: 100%;
}
</style>
