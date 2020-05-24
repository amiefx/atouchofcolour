<template>

<div>
  <v-data-table
    :headers="headers"
    :items="orders"
    sort-by="id"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>My Orders</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>

      </v-toolbar>
    </template>
    <template v-slot:item.action="{ item }">
      <v-btn icon :to="`/account/order/${item.id}`">
          <v-icon
        small
      >
        mdi-eye
      </v-icon>
      </v-btn>
    </template>
    <template v-slot:item.total="{ item }">
      <span>{{item.currency_symbol}}{{item.total}}</span>
    </template>
    <template v-slot:item.created_at="{ item }">
      <span>{{item.created_at | formatDate}}</span>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>

  </v-data-table>
</div>

</template>

<script>
var moment = require('moment');
  export default {
    layout: 'khod',
  middleware: ['auth'],
      metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'Orders' ,
        titleTemplate: '%s | Khodgi'
        },
    data: () => ({
      dialog: false,
      snackbar: false,
      headers: [
        {
          text: 'Order ID',
          align: 'start',
          sortable: false,
          value: 'id',
        },
        { text: 'Date', value: 'created_at' },
        { text: 'Status', value: 'status' },
        { text: 'Total', value: 'total' },
        { text: 'Actions', value: 'action', sortable: false },
      ],
      orders: [],

    }),



    filters: {
      formatDate: function (value) {
          return moment(value).format('MMMM D, YYYY');
      }
  },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
          // Add a request interceptor
            axios.interceptors.request.use((config) => {
                this.loading = true
                return config;
            },  (error) => {
                this.loading = false
                return Promise.reject(error);
            });

            // Add a response interceptor
            axios.interceptors.response.use((response) => {
                this.loading = false
                return response;
            }, (error) => {
                this.loading = false
                return Promise.reject(error);
            });

            axios.get('/api/my-orders')
                .then(res => this.orders = res.data.orders)
                .catch(err => {
                })
      },

    },
  }
</script>
