<template>
  <div>
    <sections />

    <div class="pb-10 pt-3">
      <v-row class="d-flex justify-center mt-5">
        <h1>Latest Items</h1>
      </v-row>
      <v-row class="d-flex justify-center mb-2">
        <v-icon>mdi-dots-horizontal</v-icon>
      </v-row>

      <carousel
        :perPage="1"
        :scrollPerPage="true"
        :mouse-drag="true"
        :touchDrag="true"
        :navigationEnabled="true"
        :navigation-next-label='`<img src="https://img.icons8.com/ios-glyphs/24/000000/chevron-right.png" class="chev-next"/>`'
        :navigation-prev-label='`<img src="https://img.icons8.com/ios-glyphs/24/000000/chevron-left.png" class="chev-prev"/>`'
        :autoplay="false"
        :paginationEnabled="true"
        :autoplayHoverPause="true"
        :perPageCustom="[[360, 1], [640, 3], [1024, 4]]"
      >
        <slide v-for="product in products" :key="product.slug">
          <Product :product="product" />
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import Sections from '../components/home/Sections.vue'
import Product from '../components/products/Product'
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    Sections,
    Product
  },


  computed: {
    ...mapGetters({
      products: 'home/home_products'
    }),
  },

  created() {
        this.getHomeProducts()
    },

    methods: {
        ...mapActions({
            getHomeProducts: 'home/getHomeProducts'
        }),

    }

}
</script>

<style >
.VueCarousel-navigation-prev {
  left: 10% !important;
}
.VueCarousel-navigation-next {
  right: 10% !important;
}

.chev-next {
  height: 40px;
  width: 40px;
}

.chev-prev {
  height: 40px;
  width: 40px;
}
</style>
