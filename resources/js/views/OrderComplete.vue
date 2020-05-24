<template>
      <v-container
        class="mt-12"
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-icon color="green" size="100">
              mdi-check-circle-outline
          </v-icon>
        </v-row>
        <v-row
          align="center"
          justify="center"
        >
          <p class="title">Your order has been placed!</p>
        </v-row>
        <v-row
          align="center"
          justify="center"
        >
          <p>
              Your order ID is <strong>#{{id}}</strong>
          </p>
        </v-row>
        <v-row
          align="center"
          justify="center"
        >
          <p>
              Thanks you for shopping with us.
          </p>
        </v-row>
        <div hidden>{{orderID}}</div>
      </v-container>
</template>

<script>
export default {
  layout: 'mardom',
    data: ()=> ({

        id: ''
    }),

    computed: {
        orderID () {
            return this.id = this.$route.params.id;
        }
    }
}
</script>

<style>

</style>
