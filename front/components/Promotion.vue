<template>
  <div class="container-fluid max-width">
    <div class="row">
      <div class="col-12">
        <img :src="image.src" />
        <h3>{{ name }}</h3>
        {{ description }}
        <span class="price">{{ price_info.price }} </span> {{ currency }}
        <br />statt
        <br />
        <span class="price"> {{ price_info.original_price }} </span>
        {{ currency }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
        }
      })
    }
  },
  data: () => ({
    currency: 'CHF'
  }),
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
.price {
  font-weight: bold;
}
</style>
