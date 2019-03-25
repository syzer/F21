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
      <div class="col-6">
        <h3>Voucher code</h3>
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">{{ uuid }}</span>
          </div>
        </div>
        <qrcode :value="{ uuid }" :options="{ width: 300 }"></qrcode>
      </div>
    </div>
  </div>
</template>

<script>
import QrcodeVue from 'qrcode.vue'

export default {
  comments: {
    QrcodeVue
  },
  props: {
    uuid: {
      type: String,
      default: 'U9BQMSgobPvs4TSSAAAH'
    },
    size: {
      type: Number,
      default: 300
    },
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
  data() {
    return {
      currency: 'CHF'
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
.price {
  font-weight: bold;
}
</style>
