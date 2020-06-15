<template>
  <v-card flat class="mt-n8">
    <v-card-title>
      Sales by Customers
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
      :items="customers"
      :search="search"
      :items-per-page=5
    ></v-data-table>
  </v-card>
</template>

<script>
  export default {
    props: {
        customers: {
        required: true,
        type: Array
        }
    },
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Customer',
            align: 'start',
            sortable: false,
            value: 'billing_first_name',
          },
          { text: 'Email', value: 'customer_email' },
          { text: 'Type', value: 'Type' },
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
