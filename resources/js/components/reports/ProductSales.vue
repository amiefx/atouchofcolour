<template>
  <v-card flat class="mt-n8">
    <v-card-title>
      Sales by Products
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
      :items="product"
      :search="search"
      :items-per-page=5
    ></v-data-table>
  </v-card>
</template>

<script>
  export default {
    props: {
        product: {
        required: true,
        type: Array
        }
    },
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Product',
            align: 'start',
            sortable: false,
            value: 'product_name',
          },
          { text: 'Type', value: 'type' },
          { text: 'Quantity', value: 'qty' },
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
