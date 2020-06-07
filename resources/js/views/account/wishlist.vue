<template>

<div>
  <v-data-table
    :headers="headers"
    :items="wishlist"
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
        <v-tooltip bottom >
            <template v-slot:activator="{ on }">
                <v-btn icon v-on="on" >
                    <v-icon small @click="deleteItem(item)">
                        mdi-cart
                    </v-icon>
                </v-btn>
            </template>
            <span>Remove and Add to cart</span>
        </v-tooltip>

    <v-tooltip bottom>
        <template v-slot:activator="{ on }">
      <v-btn icon v-on="on" :to="`/products/${item.slug}`">
          <v-icon small>
            mdi-eye
        </v-icon>
      </v-btn>
      </template>
            <span>View product details</span>
        </v-tooltip>
    </template>
    <template v-slot:item.image1="{ item }">
            <v-list-item-avatar horizontal size="65" class="mr-2">
                    <v-img :src="`${currentUrl}/storage/${item.image1}`" contain></v-img>
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
      <span>{{item.created_at | date }}</span>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>

  </v-data-table>

</div>

</template>

<script>
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
        { text: '#', value: 'id' },
        {
          text: 'Thumbnail',
          align: 'start',
          sortable: false,
          value: 'image1',
        },
        { text: 'Product', value: 'name' },
        { text: 'Actions', value: 'action', sortable: false },
      ],
      wishlist: [],
      editedIndex: -1,
      editedItem: {
        id: '',
        name: '',
        image1: '',
        slug: ''
      },
      defaultItem: {
        id: '',
        name: '',
        image1: '',
        slug: ''
      },
      imgBase: window.location.origin + "/storage",
    }),

//     filters: {
//       formatDate: function (value) {
//           return moment(value).format('MMMM D, YYYY');
//       }
//   },

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

            axios.get('/api/wishlist')
                .then(res => {
                    this.wishlist = res.data.wishlist
                })
                .catch(err => {
                //----
                })
      },

      deleteItem (item) {
        const index = this.wishlist.indexOf(item)

            axios.delete('/api/wishlist/'+item.id)
            .then(res => {
                this.$router.replace(`/products/${item.slug}`)
            })
            .catch(err => console.log(err.response))

      },

    },

    computed: {
      currentUrl() {
          return window.location.origin;
      }
    }
  }
</script>
