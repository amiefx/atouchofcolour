<template>
  <v-card flat class="mt-n8">
    <v-card-title>
      Sales by Countries
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
      :items="countries"
      :search="search"
      :items-per-page=5
    ></v-data-table>
  </v-card>
</template>

<script>
  export default {
    props: {
        countries: {
        required: true,
        type: Array
        }
    },
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Country',
            align: 'start',
            sortable: false,
            value: 'shipping_country_region',
          },
          { text: 'Quantity', value: 'orders' },
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
