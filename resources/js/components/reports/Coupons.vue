<template>
  <v-card flat class="mt-n8">
    <v-card-title>
      Sales by Coupons
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="coupons"
      :search="search"
      :items-per-page=5
    ></v-data-table>
  </v-card>
</template>

<script>
  export default {
    props: {
        coupons: {
        required: true,
        type: Array
        }
    },
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Coupon',
            align: 'start',
            sortable: false,
            value: 'coupon',
          },
          { text: 'Orders', value: 'orders' },
          { text: 'Sales (pkr)', value: 'pkr' },
          { text: 'Sales (aud)', value: 'aud' },
          { text: 'Sales (usd)', value: 'usd' },
          { text: 'Sales (eur)', value: 'eur' },
          { text: 'Sales (gbp)', value: 'gbp' },
        ],

      }
    },
  }
</script>
