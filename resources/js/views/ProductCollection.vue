<template>
  <div>
    <v-row>
      <v-col cols="12" sm="3" md="3" lg="3" xl="3" class="px-6">
        <v-row class="d-flex justify-center mt-5">
          <h1>{{category}}</h1>
        </v-row>
        <v-row class="d-flex justify-center mb-2">
          <v-icon>mdi-dots-horizontal</v-icon>
        </v-row>
        <v-select :items="itemSort" v-model="item" dense outlined label="Filter By" ></v-select>
        <v-btn color="primary" class="mt-n2" block="" dark="" @click="fetchProduct()">Ok</v-btn>
      </v-col>
      <v-col cols="12" sm="9" md="9" lg="9" xl="9" class="px-6">
        <v-row class="wrap">
          <v-col cols="6" sm="4" md="4" lg="4" xl="4" class="px-3" v-for="(i, index) in products" :key="index">
            <v-hover v-slot:default="{ hover }">
              <v-card class="mb-2" color="grey lighten-4">
                <router-link :to="`/products/${i.slug}`">
                    <v-img :aspect-ratio="0.66" :src="i.image1">
                  <v-img v-if="hover" :aspect-ratio="0.66" :src="i.image2"></v-img>
                </v-img>
                </router-link>
                <v-card-text class="pt-6" style="position: relative;">
                  <!-- <v-btn absolute color="orange" class="white--text" :id="index" @click="addToCart" fab large right top>
              <v-icon>mdi-cart</v-icon>
                  </v-btn> -->
                  <div class="font-weight-light title mb-0 text-center hidden-xs-only">{{i.name}}</div>
                  <div class="font-weight-light hidden-sm-and-up mb-0 text-center">{{i.name}}</div>
                  <h3
                    class="title font-weight-black orange--text mb-0 text-center"
                  >{{i.symbol}}{{i.price}}</h3>
                  <v-row align="center" class="mx-0 text-center d-flex justify-center">
                    <v-rating
                      :value="parseFloat(i.rating)"
                      color="amber"
                      dense
                      half-increments
                      readonly
                      size="14"
                    ></v-rating>

                    <div class="grey--text ml-4">{{i.rating}} ({{i.total_reviews}})</div>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
        <v-row class="d-flex justify-center">
            <v-btn color="secondary" fab x-small light class="mx-2" @click="fetchProduct(pagination.prev_page_url)" :disabled="!pagination.prev_page_url">
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <v-btn color="secondary" fab x-small light  class="mx-2" @click="fetchProduct(pagination.next_page_url)" :disabled="!pagination.next_page_url">
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
        </v-row>
      </v-col>
    </v-row>
    <div hidden>{{routeID}} {{sortings}}</div>
  </div>
</template>

<script>
export default {
  layout: 'mardom',
  props: {
    source: String
  },
  components: {
  },
  metaInfo () {
    return {
      title: this.category,
      titleTemplate: '%s | Khodgi',
      meta: [
        { name: 'description', content: this.category}
      ]
    }
  },
  data: () => {
    return {
      products: [],
      user_location: [],
      cat: "",
      pagination: {},
      // currentUrl: window.location.origin,
      category: '',
      page: 1,
      itemSort: [
        "Price, low to high",
        "Price, high to low",
        "Alphabetically, A-Z",
        "Alphabetically, Z-A",
        "Date, old to new",
        "Date, new to old"
      ],
      item: "Date, new to old",
      sortOptions: {
        orderBy: "",
        sortBy: ""
      },
      url: '',
      data: []
    };
  },

  watch: {
    cat() {
      this.fetchProduct();
    },

  },

  methods: {
    addToCart(event) {
        const index = event.currentTarget.id;
      //  const index = this.items.indexOf(event)
      //  console.log(index);
        this.$store.dispatch("addProductToCart", {
            product: this.items[index],
            type: 'Unstitched',
            size: 'Default',
            customSize: '',
            quantity: 1
        });
    },

    fetchProduct(pagei) {
        const sortBy = this.sortOptions.sortBy.length == 0 ? 'name' : this.sortOptions.sortBy;
        const orderBy = this.sortOptions.orderBy.length == 0 ? 'asc' : this.sortOptions.orderBy;
         pagei = pagei || `/api/products/categories/${this.routeID}`;
      axios
        .get(pagei, {params:{'sort_by': sortBy, 'order_by': orderBy}})
        .then(res => {
          this.products = res.data.data;
          this.category = res.data.data[0].category;
          this.pagination = {
            path: res.data.meta.path+"?page=",
             prev_page_url: res.data.links.prev,
             next_page_url: res.data.links.next,
             current_page : res.data.meta.current_page,
             first_page_url: res.data.links.first,
             last_page_url: res.data.links.last,
          }

        })
        .catch(err => {
          console.log();
        });
    },
    fetchPaginatedProduct(url) {
        this.url = url
        this.fetchProduct()
    }
  },

  computed: {

    routeID() {
      return (this.cat = this.$route.params.slug);
    },
    urls(){
        return (this.url = `/api/products/categories/${this.routeID}`);
    },
    sortings() {
      if (this.item == "Price, low to high") {
        this.sortOptions.sortBy = "price_pkr";
        this.sortOptions.orderBy = "asc";
      }
      if (this.item == "Price, high to low") {
        this.sortOptions.sortBy = "price_pkr";
        this.sortOptions.orderBy = "desc";
      }

      if (this.item == "Alphabetically, A-Z") {
        this.sortOptions.sortBy = "name";
        this.sortOptions.orderBy = "asc";
      }
      if (this.item == "Alphabetically, Z-A") {
        this.sortOptions.sortBy = "name";
        this.sortOptions.orderBy = "desc";
      }

      if (this.item == "Date, old to new") {
        this.sortOptions.sortBy = "created_at";
        this.sortOptions.orderBy = "asc";
      }
      if (this.item == "Date, new to old") {
        this.sortOptions.sortBy = "created_at";
        this.sortOptions.orderBy = "desc";
      }
    }
  }
};
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 1;
  position: absolute;
  width: 100%;
}
</style>

