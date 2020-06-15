<template>
  <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-x>
    <template v-slot:activator="{ on }">
      <v-badge color="primary" :content="cartItemCount">
        <v-btn icon small v-on="on">
          <v-icon>mdi-cart</v-icon>
        </v-btn>
      </v-badge>
    </template>

    <v-card>
      <v-card-title>
        <v-row class="d-flex justify-center">
          <h5>SHOPPING CART</h5>
        </v-row>
      </v-card-title>
      <div v-if="this.cart == ''" class="px-2 pb-12">
          <v-row class="d-flex justify-center">
          Your cart is currently empty.
        </v-row>
      </div>
    <div v-else>
          <v-list three-line style="max-height: 500px; min-height: 100px;" class="overflow-y-auto">
        <v-list-item v-for="item in cart" :key="item.product.id">
          <v-list-item-avatar horizontal size="100">
            <!-- <img :src="item.product.image1" contain alt="img"> -->
            <v-img :src="item.product.image1" contain class="ml-2"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>
              <strong>{{item.product.name}}</strong>
            </v-list-item-title>
            <v-list-item-subtitle>{{item.quantity}} X {{item.product.symbol}}{{(item.price).toFixed(2)}}</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-btn class="green--text" icon  @click="increaseProductQty(item.product)">
              <v-icon>mdi-plus</v-icon>
            </v-btn>
            <v-btn class="red--text" icon v-if="item.quantity > 1" @click="decreaseProductQty(item.product)">
              <v-icon>mdi-minus</v-icon>
            </v-btn>
            <v-btn class="red--text" icon @click="removeProductFromCart(item.product)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>
       <v-list-item-subtitle class="ml-3 text-center my-3 font-weight-black">Total: {{symbol}} {{(cartTotalPrice).toFixed(2)}}</v-list-item-subtitle>
        <v-divider></v-divider>
      <v-card-actions class="d-flex">
        <v-btn class="float-left" color="error" text @click="clearCartItems">Clear Cart</v-btn>
        <v-spacer></v-spacer>
        <v-btn class="float-right" color="primary" :to="{ name: 'checkout' }" text @click="menu = false">Checkout</v-btn>
      </v-card-actions>
</div>
    </v-card>
  </v-menu>
</template>

<script>
import { mapState } from "vuex"
export default {
  data: () => ({
    menu: false,
  }),

  computed: {

    ...mapState({
        cart: state => state.cart.cart
    }),

   // ...mapGetters(["cartItemCount", "cartTotalPrice"])

    // cart() {
    //   return this.$cart.state.cart;
    // },
    cartItemCount() {
      return this.$store.getters['cart/cartItemCount'];
    },
    cartTotalPrice() {
      return this.$store.getters['cart/cartTotalPrice'];
    },

    symbol() {
      return this.cart[0].product.symbol;
    }
  },

  methods: {
    removeProductFromCart(product) {
      this.$store.dispatch("cart/removeProductFromCart", product);
    },

    clearCartItems() {
      this.$store.dispatch("cart/clearCartItems");
    },

    decreaseProductQty(product) {
      this.$store.dispatch("cart/decreaseProductQty", product);
    },

    increaseProductQty(product) {
      this.$store.dispatch("cart/increaseProductQty", product);
    },

  }
};
</script>

<style>
</style>
