<template>

<div>
  <v-data-table
    :headers="headers"
    :items="reviews"
    sort-by="id"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>My reviews</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>

      </v-toolbar>
    </template>
    <template v-slot:item.action="{ item }">
      <v-btn icon :to="`/products/${item.product.slug}`">
          <v-icon small>
        mdi-eye
      </v-icon>
      </v-btn>
    </template>
    <template v-slot:item.product.image1="{ item }">
            <v-list-item-avatar horizontal size="65" class="mr-2">
                    <v-img :src="`${currentUrl}/storage/${item.product.image1}`" contain></v-img>
                  </v-list-item-avatar>
    </template>
    <template v-slot:item.rating="{ item }">
            <v-rating
        v-model="item.rating"
        background-color="grey"
        color="yellow accent-4"
        dense
        readonly
        size="18"
      ></v-rating>
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
        title: 'Reviews' ,
        titleTemplate: '%s | Khodgi',
        content: ''
        },

    data: () => ({
      dialog: false,
      snackbar: false,
      headers: [
        {
          text: '',
          align: 'start',
          sortable: false,
          value: 'product.image1',
        },
        { text: 'Product', value: 'product.name' },
        { text: 'Rating', value: 'rating' },
        { text: 'Date', value: 'created_at' },
        { text: 'Actions', value: 'action', sortable: false },
      ],
      reviews: [],
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

            axios.get('/api/my-reviews')
                .then(res => this.reviews = res.data.reviews)
                .catch(err => {
                //----
                })
      },
    },

    computed: {
      currentUrl() {
          return window.location.origin;
      }
    }
  }
</script>
