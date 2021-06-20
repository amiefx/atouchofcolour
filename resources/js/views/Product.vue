<template>
  <div class="mx-5 mt-2">
    <v-row>
      <v-col cols="12" sm="5" md="5" lg="5" xl="5" class="pa-6 grey lighten-4 order-sm-first">
        <div class="headline mb-4">{{ product.name }}</div>

        <div class="my-4" v-if="product.in_stock">
          <span class="subheading">Type</span>
          <v-chip-group
            v-model="selection_type"
            active-class="deep-purple--text text--accent-4"
            mandatory
          >
            <v-chip v-for="type in types" :key="type" :value="type">
              {{type}}
            </v-chip>
          </v-chip-group>
        <div class="py-4 " v-if="selection_type == 'Stitched'">Product Price: {{product.symbol}} {{ (product.price).toFixed(2) }}</div>
        <div class=" " v-if="selection_type == 'Stitched'">Stitching Fee: {{product.symbol}} {{ (product.stitched_price).toFixed(2) }}</div>
        </div>

        <div class="my-4" v-else>
            <p class="text-center">Item out of stock - notify me!</p>
            <p>
                Enter your phone number or email address below to be notified when this item is back in stock:
            </p>
            <v-row class="mt-3 mr-auto">
            <v-text-field
                v-model="soldout.mobile"
                class="mt-2 mx-3"
                label="Mobile Number"
                outlined
                dense
            ></v-text-field>
            <v-btn @click="notifyMe" dark class="mt-2">Text me</v-btn>
            </v-row>
            <v-row class=" mr-auto">
            <v-text-field
                v-model="soldout.email"
                class=" mx-3"
                label="Enter your email"
                outlined
                dense
            ></v-text-field>
            <v-btn @click="notifyMe" dark class="">Email me</v-btn>
            </v-row>
        </div>

        <div class="my-4" v-if="selection_type == 'Stitched'">
          <span class="subheading">Size</span>

          <v-chip-group
            v-model="selection_size"
            active-class="deep-purple--text text--accent-4"
            mandatory
          >
            <v-chip v-for="size in sizes" :key="size" :value="size">
              {{size}}
            </v-chip>
          </v-chip-group>
        </div>
        <div v-if="selection_size == 'Custom Size'">
          <span class="subheading">Custom Size</span>
          <v-row class>
            <v-col cols="12" sm="6" md="6" lg="6" xl="6" class="d-block shirt">
              <v-img class :src="shirtImg" aspect-ratio="0.65">
                <span class="shirt_length">{{ customSize.shirtLength }}</span>
                <span class="shoulder">{{ customSize.shoulder }}</span>
                <span class="sleeve_length">{{ customSize.sleeveLength }}</span>
                <span class="wrist">{{ customSize.wrist }}</span>
                <span class="chest">{{ customSize.chest }}</span>
                <span class="waist">{{ customSize.waist }}</span>
                <span class="hip">{{ customSize.hip }}</span>
                <span class="bottom">{{ customSize.bottom }}</span>
                <span class="arm_hole">{{ customSize.armHole }}</span>
              </v-img>
            </v-col>
            <v-col cols="12" sm="6" md="6" lg="6" xl="6" class="d-block">
              <v-text-field v-model="customSize.shirtLength" label="Shirt Length" dense outlined></v-text-field>
              <v-text-field
                v-model="customSize.shoulder"
                label="Shoulder"
                dense
                outlined
                class="mt-n4"
              ></v-text-field>
              <v-text-field
                v-model="customSize.sleeveLength"
                label="Sleeve length"
                dense
                outlined
                class="mt-n4"
              ></v-text-field>
              <v-text-field v-model="customSize.wrist" label="Wrist" dense outlined class="mt-n4"></v-text-field>
              <v-text-field v-model="customSize.chest" label="Chest" dense outlined class="mt-n4"></v-text-field>
              <v-text-field v-model="customSize.waist" label="Waist" dense outlined class="mt-n4"></v-text-field>
              <v-text-field v-model="customSize.hip" label="Hip" dense outlined class="mt-n4"></v-text-field>
              <v-text-field v-model="customSize.bottom" label="Bottom" dense outlined class="mt-n4"></v-text-field>
              <v-text-field
                v-model="customSize.armHole"
                label="Arm Hole"
                dense
                outlined
                class="mt-n4"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class>
            <v-col cols="12" sm="6" md="6" lg="6" xl="6" class="d-block trouser">
              <v-img :src="trouserImg" aspect-ratio="0.61">
                <span class="trouserLength">{{ customSize.trouserLength }}</span>
                <span class="trouserWaist">{{ customSize.trouserWaist }}</span>
                <span class="trouserHip">{{ customSize.trouserHip }}</span>
                <span class="thigh">{{ customSize.thigh }}</span>
                <span class="kneeLength">{{ customSize.kneeLength }}</span>
                <span class="knee">{{ customSize.knee }}</span>
                <span class="trouserBottom">{{ customSize.trouserBottom }}</span>
              </v-img>
            </v-col>
            <v-col cols="12" sm="6" md="6" lg="6" xl="6" class="d-block">
              <v-text-field v-model="customSize.trouserLength" label="Length" dense outlined></v-text-field>
              <v-text-field
                v-model="customSize.trouserWaist"
                label="Trouser Waist"
                dense
                outlined
                class="mt-n4"
              ></v-text-field>
              <v-text-field
                v-model="customSize.trouserHip"
                label="Hip"
                dense
                outlined
                class="mt-n4"
              ></v-text-field>
              <v-text-field v-model="customSize.thigh" label="Thigh" dense outlined class="mt-n4"></v-text-field>
              <v-text-field
                v-model="customSize.kneeLength"
                label="Knee Length"
                dense
                outlined
                class="mt-n4"
              ></v-text-field>
              <v-text-field v-model="customSize.knee" label="Knee" dense outlined class="mt-n4"></v-text-field>
              <v-text-field
                v-model="customSize.trouserBottom"
                label="Bottom"
                dense
                outlined
                class="mt-n4"
              ></v-text-field>
            </v-col>
          </v-row>
        </div>
        <div class>
          <v-dialog v-model="dialog" width="600px">
            <template v-slot:activator="{ on }">
              <v-btn text v-on="on">
                <v-icon left>mdi-tshirt-v</v-icon>View Size Chart
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">Custom Size Chart</span>
              </v-card-title>
              <v-card-text>
                <div v-for="(topic, label, index) in product_sizes" :key="index" class="mt-3">
                  <div class="d-flex justify-center">
                    <strong class="text-center mt-3">{{ product.name }} {{ label }}</strong>
                  </div>

                  <v-simple-table>
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th width="35%" class="text-left">Size</th>
                          <th class="text-left">XS</th>
                          <th class="text-left">S</th>
                          <th class="text-left">M</th>
                          <th class="text-left">L</th>
                          <th class="text-left">XL</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(item, itemID) in topic" :key="itemID">
                          <td>{{ item.name }}</td>
                          <td>{{ item.xs }}</td>
                          <td>{{ item.s }}</td>
                          <td>{{ item.m }}</td>
                          <td>{{ item.l }}</td>
                          <td>{{ item.xl }}</td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </div>
              </v-card-text>
            </v-card>
          </v-dialog>
        </div>
        <div>
          <v-btn v-if="authenticated" class tile text color @click="addTotWishList">
            <v-icon left color="red">mdi-heart</v-icon>Add to wish list
          </v-btn>

            <v-dialog v-model="dialog2" max-width="500px" v-if="!authenticated">
                    <template v-slot:activator="{ on }">
                      <v-btn v-on="on"  class tile text color>
                            <v-icon left>mdi-account</v-icon>Login to Add to wish list
                        </v-btn>
                    </template>
                    <v-card>
                      <v-card-title>
                        <span class="headline">Login</span>
                      </v-card-title>

                      <v-card-text>
                        <v-form v-model="valid" method="post" v-on:submit.stop.prevent="login">
                          <v-text-field
                            label="Login"
                            v-model="login.email"
                            :rules="login.emailRules"
                            name="login"
                            prepend-icon="mdi-account-circle"
                            type="text"
                            required
                          />

                          <v-text-field
                            id="password"
                            label="Password"
                            v-model="login.password"
                            :rules="login.passwordRules"
                            name="password"
                            prepend-icon="mdi-lock"
                            type="password"
                            required
                          />
                        </v-form>
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer />
                        <v-btn
                          color="primary"
                          block
                          :disabled="!valid"
                          @click.prevent="loginfx"
                        >Login</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>


        </div>
        <div class="py-4 pl-1">
          <div class="subheading">Quantity</div>
          <v-btn icon color @click="decreaseqty">
            <v-icon>mdi-minus</v-icon>
          </v-btn>
          <input v-model.number="quantity" type="text" style="width: 40px;" class="text-center" />
          <v-btn icon color @click="quantity++">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </div>

        <div class="py-4 headline" v-if="selection_type == 'Stitched'">{{product.symbol}}{{ (product.price + product.stitched_price).toFixed(2) }}</div>
        <div class="py-4 headline" v-else>{{ product.formatted_price }}</div>

        <div class="py-4" >
          <v-btn v-if="product.in_stock" color="primary" dark @click="addToCart">Add to Cart</v-btn>
          <v-btn v-else color="grey darken-4" dark >Sold out</v-btn>
        </div>
        <div class="py-4">
          <div v-html="product.description"></div>
        </div>

        <SocialSharing :sharing="sharing" />

      </v-col>
      <v-col cols="12" sm="7" md="7" lg="7" xl="7" class="pl-6 pt-0 order-first">
        <carousel
          :perPage="1"
          :scrollPerPage="true"
          :mouse-drag="true"
          :touchDrag="true"
          :navigationEnabled="true"
          :navigation-next-label='`<img src="https://img.icons8.com/ios-glyphs/24/000000/chevron-right.png" class="chev-next"/>`'
          :navigation-prev-label='`<img src="https://img.icons8.com/ios-glyphs/24/000000/chevron-left.png" class="chev-prev"/>`'
          :navigationClickTargetSize="15"
          :autoplay="false"
          :paginationEnabled="true"
          class="hidden-sm-and-down"
        >
          <slide v-if="product.image1">
            <zoom-on-hover :img-normal="product.image1" :img-zoom="product.image1" :scale="1.5"></zoom-on-hover>
          </slide>
          <slide v-if="product.image2">
            <zoom-on-hover :img-normal="product.image2" :img-zoom="product.image2" :scale="1.5"></zoom-on-hover>
          </slide>
          <slide v-if="product.image3">
            <zoom-on-hover :img-normal="product.image3" :img-zoom="product.image3" :scale="1.5"></zoom-on-hover>
          </slide>
          <slide v-if="product.image4">
            <zoom-on-hover :img-normal="product.image4" :img-zoom="product.image4" :scale="1.5"></zoom-on-hover>
          </slide>
          <slide v-if="product.image5">
            <zoom-on-hover :img-normal="product.image5" :img-zoom="product.image5" :scale="1.5"></zoom-on-hover>
          </slide>
          <slide v-if="product.image6">
            <zoom-on-hover :img-normal="product.image6" :img-zoom="product.image6" :scale="1.5"></zoom-on-hover>
          </slide>
        </carousel>

        <carousel
          :perPage="1"
          :scrollPerPage="false"
          :mouse-drag="true"
          :touchDrag="true"
          :navigationEnabled="true"
          :navigation-next-label='`<img src="https://img.icons8.com/ios-glyphs/24/000000/chevron-right.png" class="chev-next"/>`'
          :navigation-prev-label='`<img src="https://img.icons8.com/ios-glyphs/24/000000/chevron-left.png" class="chev-prev"/>`'
          :navigationClickTargetSize="15"
          :autoplay="true"
          :paginationEnabled="true"
          class="hidden-md-and-up"
        >
          <slide v-if="product.image1">
            <v-img :aspect-ratio="0.66" :src="product.image1"></v-img>
          </slide>
          <slide v-if="product.image2">
            <v-img :aspect-ratio="0.66" :src="product.image2"></v-img>
          </slide>
          <slide v-if="product.image3">
            <v-img :aspect-ratio="0.66" :src="product.image3"></v-img>
          </slide>
          <slide v-if="product.image4">
            <v-img :aspect-ratio="0.66" :src="product.image4"></v-img>
          </slide>
          <slide v-if="product.image5">
            <v-img :aspect-ratio="0.66" :src="product.image5"></v-img>
          </slide>
          <slide v-if="product.image6">
            <v-img :aspect-ratio="0.66" :src="product.image6"></v-img>
          </slide>
        </carousel>
      </v-col>
    </v-row>
    <v-row class="pa-6 mt-4 grey lighten-4">
      <v-row class>
        <v-col cols="12" class="py-0 hidden-xs-only">
          <div class="title">Customers Reviews</div>
        </v-col>
        <v-col cols="12" class="py-0 hidden-xs-only">
          <v-row>
            <v-col cols="8" class="d-flex">
              <v-rating
                v-model="stars"
                background-color="grey"
                color="black accent-4"
                dense
                readonly
              ></v-rating>
              <span class="grey--text text--darken-3 ml-2 mt-1">Base on {{ total_review }} Review</span>
            </v-col>

            <v-spacer></v-spacer>

            <v-col>
              <v-btn class="float-right" text @click="showForm = !showForm">Write a review</v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-col cols="12" class="text-center hidden-sm-and-up">
        <div class="title">Customers Reviews</div>
      </v-col>
      <v-col cols="12" class="d-flex justify-center text-center py-0 hidden-sm-and-up">
        <v-rating
          v-model="rating"
          size="18"
          background-color="grey"
          color="black accent-4"
          dense
          readonly
          class="mr-0 hidden-sm-and-up"
        ></v-rating>
        <span
          class="grey--text text--darken-3 caption mt-1 hidden-sm-and-up"
        >Base on {{ total_review }} Review</span>
      </v-col>
      <v-col cols="12" class="text-center py-0 hidden-sm-and-up">
        <v-btn depressed small text @click="showForm = !showForm">Write a review</v-btn>
      </v-col>

      <!--review form --->
      <v-col cols="12" v-if="showForm">
        <v-form v-model="valid" method="post" v-on:submit.stop.prevent="save">
          <span class="mb-2">Write a review</span>
          <v-text-field
            v-model="form.name"
            class="mt-2"
            label="Name"
            outlined
            dense
            :rules="[rules.required, rules.min]"
          ></v-text-field>
          <v-text-field
            v-model="form.email"
            class="mt-n3"
            label="Email"
            outlined
            dense
            :rules="[rules.required, rules.validEmail]"
          ></v-text-field>
          <v-rating
            v-model="form.rating"
            background-color="grey"
            color="black accent-4"
            dense
            hover
            class="mt-n3"
            aria-label="Rating"
            :rules="[rules.required]"
          ></v-rating>
          <v-text-field
            v-model="form.title"
            class="mt-2"
            label="Review Title"
            outlined
            dense
            :rules="[rules.required]"
          ></v-text-field>
          <v-textarea
            v-model="form.body"
            class="mt-n3"
            label="Review Body"
            outlined
            dense
            :rules="[rules.required]"
          ></v-textarea>
          <v-btn
            class="float-right mt-n3"
            type="submit"
            :disabled="!valid"
            @click.prevent="save"
            dark
          >Submit</v-btn>
          <v-divider class="mt-10"></v-divider>
        </v-form>
      </v-col>
      <!--review form --->
      <v-col cols="12" v-for="review in reviews" :key="review.id">
        <v-rating
          v-model="review.rating"
          background-color="grey"
          color="black accent-4"
          dense
          hover
          class="mt-n3"
          aria-label="Rating"
          readonly
        ></v-rating>
        <div class="mt-2 mb-1 text-">
          <strong>{{ review.title }}</strong>
        </div>
          <p
            class="overline font-italic grey--text text--darken-3 mb-1"
          >
          <!-- {{ review.name }} on {{ review.created_at | formatDate }} -->
           {{ review.name }} on {{ review.created_at | date }}
          </p>
        <p class="mt-0">{{ review.body }}</p>
        <v-divider></v-divider>
      </v-col>
    </v-row>
    <v-row class="py-12">
      <v-col cols="12" class="mb-12 text-center">
        <h1>You may also like...</h1>
        <v-icon>mdi-dots-horizontal</v-icon>
      </v-col>
      <!-- related products --->
      <v-row class="wrap">
        <v-col cols="6" sm="3" md="3" lg="3" xl="3" v-for="product in related_products" :key="product.id">
          <RelatedProducts :product="product" />
        </v-col>
      </v-row>
      <!------->
    </v-row>
    <div hidden>{{ routeID }} {{pId}}</div>

    <v-snackbar
    v-model="snackbar"
    >
    {{ text }}
    <v-btn
        color="white"
        text
        @click="snackbar = false"
    >
        Close
    </v-btn>
  </v-snackbar>

  <div class="vld-parent">
        <loading
        :active.sync="isLoading"
        loader="dots"
        :opacity="opacity"
        color='#6200E'
        ></loading>
    </div>

  </div>
</template>

<script>
//var moment = require('moment')
import RelatedProducts from '../components/products/RelatedProducts'
import SocialSharing from '../components/global/SocialSharing'
import { mapGetters, mapActions } from "vuex"

// Import component
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';
export default {
  layout: 'mardom',
  metaInfo() {
    return {
      title: this.product.name,
      titleTemplate: '%s | Khodgi',
      property: 'og:title',
      meta: [
          { name: 'site_name', content: 'Khodgi', property: 'og:site_name' },
          { name: 'url', content: this.sharing.url, property:'og:url' },
          { name: 'description', content: this.product.short_description, property:'og:description' },
          { name: 'type', content: 'website', property:'og:type' },
          { name: 'image', content: this.product.image1, property:'og:image' },
          ]
    }
  },

  components: {
    RelatedProducts,
    SocialSharing,
    Loading
  },

  data: () => {
    return {
      snackbar: false,
      text:'',
      valid: true,
      dialog: false,
      dialog2: false,

      isLoading: false,
      fullPage: false,
      opacity: 0.99,

      showForm: false,
      rating: 0,
      product: [],
      product_sizes: [],
      user_location: [],
      trouserImg: window.location.origin+'/storage/images/trouser.webp',
      shirtImg: window.location.origin+'/storage/images/shirt.webp',
      selection_type: 'Unstitched',
      types: ['Unstitched', 'Stitched'],
      selection_size: '',
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'Custom Size'],
      qty: 1,
      prod_id: '',
      stars: null,
      total_review: null,
      reviews: [],
      quantity: 1,
     // price: 0,
      related_products: [],
      form: {
        product_id: '',
        name: '',
        email: '',
        rating: null,
        title: '',
        body: ''
      },
      customSize: {
        shirtLength: '',
        shoulder: '',
        sleeveLength: '',
        wrist: '',
        chest: '',
        waist: '',
        hip: '',
        bottom: '',
        armHole: '',

        trouserLength: '',
        trouserWaist: '',
        trouserHip: '',
        thigh: '',
        kneeLength: '',
        knee: '',
        trouserBottom: ''
      },
      rules: {
        required: v => !!v || 'This Field is Required',
        min: v => v.length >= 5 || 'Minimum 5 Chracters Required',
        validEmail: v => /.+@.+\..+/.test(v) || 'Email must be valid'
      },
      login: {
        email: "",
        emailRules: [
            v => !!v || "E-mail is required",
            v => /.+@.+\..+/.test(v) || "E-mail must be valid"
        ],
        password: "",
        passwordRules: [v => !!v || "Password is required"]
    },

      sharing: {
        url: window.location.href,
        title: '',
        description: '',
        quote: 'Best quality fasion clothes',
        hashtags: 'clothe,fasion,ladies',
        twitterUser: ''
      },

      soldout: {
          mible: '',
          email: '',
        //   product_id: this.product.id,
        //   product_name: this.product.name
      }

    }
  },

  methods: {

    ...mapActions({
        signIn: 'auth/signIn'
    }),

    decreaseqty: function() {
      if (this.quantity > 1) {
        this.quantity--
      }
    },

    save() {
      axios
        .post('/api/ratings', this.form)
        .then(res => {
          this.showForm = false
        })
        .catch(err => {
          console.dir(err)
        })
    },

    addToCart() {
      this.$store.dispatch("cart/addProductToCart", {
          product: this.product,
          quantity: this.quantity,
          price: this.price,
          type: this.selection_type,
          size: this.selection_size,
          customSize: this.customSize
      })
    },

    addTotWishList() {
      axios
        .post('/api/wishlist', { product_id: this.product.id})
        .then(res => {
          this.text = 'Product added to wishlist.'
          this.snackbar = true
        })
        .catch(err => {
          this.text = 'Product is already in you wishlist.'
          this.snackbar = true
        })
    },

    // loginAlert() {
    //     this.text = 'Please login to add product to your wish list.'
    //     this.snackbar = true
    // },

    notifyMe() {
        let soldouts = {
            mobile: this.soldout.mobile,
            email: this.soldout.email,
            product_slug: this.product.slug,
            product_name: this.product.name
        }

        axios
        .post('/api/notifyme', soldouts)
        .then(res => {
          this.soldout.mobile = ''
          this.soldout.email = ''
        })
        .catch(err => {
            //----
        })
    },

    loginfx: function() {

    this.signIn(this.login)
        .then(res => {
            //-------
        })
        .catch( err => {
            this.text = err.response.data.errors.email[0]
            this.snackbar = true
        })
    },

    windowPosition() {
        window.scrollTo(0, 0);
    },

    // ...mapActions({
    //    addProductToCart: 'cart/addProductToCart'
    // })

    doAjax() {
        this.isLoading = true;
    },
    loadingStart() {
        this.isLoading = true;
    },
    loadingEnd() {
        this.isLoading = false;
    }

  },

  watch: {
      prod_id() {

          this.doAjax()

          this.windowPosition();

          axios.get(`/api/products/${this.$route.params.slug}`)
            .then(res => {
            this.product= res.data.data
            this.sharing.title= res.data.data.name
            this.sharing.description= res.data.data.description
            })
            .catch(err => {
                console.log()
            })

        axios
        .get(`/api/products/get-related-products/${this.$route.params.slug}`)
            .then(res => {
                this.related_products = res.data
            })
            .catch(err => {
                console.log()
            })

            axios
            .get(`/api/product-sizes/${this.$route.params.slug}`)
            .then(res => {
                this.product_sizes = res.data.sizes
            })
            .catch(err => {
                console.log()
            })

            axios
            .get(`/api/ratings/${this.$route.params.slug}`)
            .then(res => {
                this.reviews = res.data.reviews
                this.stars = res.data.stars
                this.total_review = res.data.total_review
                this.isLoading = false
            })
            .catch(err => {
                console.log()
            })

      },

    selection_type() {
      if (this.selection_type == 'Stitched') {
        this.selection_size = 'XS'
      }
    }
  },

  computed: {
    ...mapGetters({
    authenticated: "auth/authenticated",
    user: "auth/user"
    }),

    routeID() {
      return (this.prod_id = this.$route.params.slug)
    },

    pageTitle() {
      return (
          this.metaInfo.title = this.product.name,
          this.sharing.title = this.metaInfo.title,
          this.sharing.description = this.product.short_description
          )
    },

    pId() {
        return (this.form.product_id = this.product.id)
    },

    linkURL() {
      return process.env.BASE_URL + this.$route.fullPath;
    },

    price() {
          if (this.selection_type == 'Stitched') {
              return (this.product.price + this.product.stitched_price);
          } else {
              return (this.product.price);
          }
      },

  }
}
</script>

<style>

.VueCarousel-navigation-prev {
  left: 10% !important;
}
.VueCarousel-navigation-next {
  right: 10% !important;
}

.shirt {
  position: relative;
  font-size: 12px;
  width: 100%;
}
.shirt img {
  widows: 100%;
}
.shirt_length {
  position: absolute;
  top: 50%;
  left: 88%;
  color: red;
}
.shoulder {
  position: absolute;
  top: 0%;
  left: 50%;
  color: red;
}
.sleeve_length {
  position: absolute;
  top: 15%;
  left: 13%;
  color: red;
}
.wrist {
  position: absolute;
  top: 33%;
  left: 10%;
  color: red;
}
.chest {
  position: absolute;
  top: 15%;
  left: 50%;
  color: red;
}
.waist {
  position: absolute;
  top: 28%;
  left: 50%;
  color: red;
}
.hip {
  position: absolute;
  top: 41%;
  left: 50%;
  color: red;
}
.bottom {
  position: absolute;
  top: 90%;
  left: 50%;
  color: red;
}
.arm_hole {
  position: absolute;
  top: 10%;
  left: 65%;
  color: red;
}

.trouser {
  position: relative;
  font-size: 12px;
  width: 100%;
}
.trouser img {
  widows: 100%;
}
.trouserLength {
  position: absolute;
  top: 50%;
  left: 10%;
  color: red;
}
.trouserWaist {
  position: absolute;
  top: 8%;
  left: 50%;
  color: red;
}
.trouserHip {
  position: absolute;
  top: 16%;
  left: 50%;
  color: red;
}
.thigh {
  position: absolute;
  top: 33%;
  left: 65%;
  color: red;
}
.kneeLength {
  position: absolute;
  top: 30%;
  left: 85%;
  color: red;
}
.knee {
  position: absolute;
  top: 53%;
  left: 65%;
  color: red;
}
.trouserBottom {
  position: absolute;
  top: 90%;
  left: 65%;
  color: red;
}

</style>
