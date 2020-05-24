<template>
  <v-hover v-slot:default="{ hover }">
    <v-card :to="`/products/${ product.slug }`" class="mx-2 mb-2" color="grey lighten-4">
      <v-img :aspect-ratio="0.66" :src="product.image1">
        <v-img v-if="hover" :aspect-ratio="0.66" :src="product.image2"></v-img>

        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out v-card--reveal"
            style="height: 20%;"
          >
            <v-btn class="primary">Shop Now</v-btn>
          </div>
        </v-expand-transition>
      </v-img>
      <v-card-text class="pt-6" style="position: relative;">
        <!-- <v-btn absolute color="orange" class="white--text" fab large right top>
        <v-icon>mdi-cart</v-icon>
        </v-btn>-->
        <div class="font-weight-light title mb-0 text-center">{{ product.name }}</div>
        <h3 class="title font-weight-black orange--text mb-0 text-center">{{ product.formatted_price }}</h3>
        <v-row align="center" class="mx-0 text-center d-flex justify-center">
          <v-rating
            :value="parseFloat(product.rating)"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>

          <div class="grey--text ml-4">{{ product.rating }} ({{ product.total_reviews }})</div>
        </v-row>
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: {
    product: {
      required: true,
      type: Object
    }
  }
}
</script>

<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 1;
  position: absolute;
  width: 100%;
}
</style>
