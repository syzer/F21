<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <img :src="image.src" />
      </div>
      <div class="col-6"></div>
    </div>
    <div class="row">
      <div class="col-12">
        <h3>{{ name }}</h3>
      </div>
    </div>
    <div class="row col-12">
      <div class="col-6">
        {{ description }}
      </div>
      <div class="col-6">
        {{ price_info.price }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['discount'],
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
    },
  }
}
</script>
