(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/SocialSharing.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/SocialSharing.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    sharing: {
      required: true,
      type: Object
    }
  },
  data: function data() {
    return {
      networks: [{
        network: 'facebook',
        name: 'Facebook',
        icon: 'mdi-facebook',
        color: '#1877f2'
      }, {
        network: 'twitter',
        name: 'Twitter',
        icon: 'mdi-twitter',
        color: '#1da1f2'
      }, {
        network: 'whatsapp',
        name: 'Whatsapp',
        icon: 'mdi-whatsapp',
        color: '#25d366'
      }, {
        network: 'telegram',
        name: 'Telegram',
        icon: 'mdi-telegram',
        color: '#0088cc'
      }, {
        network: 'skype',
        name: 'Skype',
        icon: 'mdi-skype',
        color: '#00aff0'
      }, {
        network: 'linkedin',
        name: 'LinkedIn',
        icon: 'mdi-linkedin',
        color: '#007bb5'
      }, {
        network: 'pinterest',
        name: 'Pinterest',
        icon: 'mdi-pinterest',
        color: '#bd081c'
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/products/RelatedProducts.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/products/RelatedProducts.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    product: {
      required: true,
      type: Object
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Product.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Product.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var _components_products_RelatedProducts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/products/RelatedProducts */ "./resources/js/components/products/RelatedProducts.vue");
/* harmony import */ var _components_global_SocialSharing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/global/SocialSharing */ "./resources/js/components/global/SocialSharing.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//var moment = require('moment')

 //import { mapActions } from "vuex"

/* harmony default export */ __webpack_exports__["default"] = ({
  layout: 'mardom',
  metaInfo: function metaInfo() {
    return {
      title: this.product.name,
      titleTemplate: '%s | Khodgi',
      meta: [{
        name: 'description',
        content: this.product.name
      }]
    };
  },
  components: {
    RelatedProducts: _components_products_RelatedProducts__WEBPACK_IMPORTED_MODULE_0__["default"],
    SocialSharing: _components_global_SocialSharing__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      snackbar: false,
      text: '',
      valid: true,
      dialog: false,
      showForm: false,
      rating: 0,
      product: [],
      product_sizes: [],
      user_location: [],
      trouserImg: window.location.origin + '/storage/images/trouser.webp',
      shirtImg: window.location.origin + '/storage/images/shirt.webp',
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
      related_products: [],
      form: {
        product_id: 1,
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
        required: function required(v) {
          return !!v || 'This Field is Required';
        },
        min: function min(v) {
          return v.length >= 5 || 'Minimum 5 Chracters Required';
        },
        validEmail: function validEmail(v) {
          return /.+@.+\..+/.test(v) || 'Email must be valid';
        }
      },
      sharing: {
        url: window.location.href,
        title: '',
        description: '',
        quote: 'Best quality fasion clothes',
        hashtags: 'clothe,fasion,ladies',
        twitterUser: ''
      }
    };
  },
  // created() {
  //     axios.get(`/api/products/${this.$route.params.slug}`)
  //     .then(res => {
  //       this.product= res.data.data
  //     })
  //     .catch(err => {
  //         console.log()
  //       })
  // },
  //   filters: {
  //     formatDate: function(value) {
  //       return moment(value).format('MMMM D, YYYY')
  //     }
  //   },
  //   mounted() {
  //     axios
  //    .get(`/api/products/get-related-products/${this.$route.params.slug}`)
  //       .then(res => {
  //         this.related_products = res.data
  //       })
  //       .catch(err => {
  //         console.log()
  //       })
  //     axios
  //       .get(`/api/product-sizes/5`)
  //       .then(res => {
  //         this.product_sizes = res.sizes
  //       })
  //       .catch(err => {
  //         console.log()
  //       })
  //     axios
  //       .get(`/api/ratings/5`)
  //       .then(res => {
  //         this.reviews = res.reviews
  //         this.stars = res.stars
  //         this.total_review = res.total_review
  //       })
  //       .catch(err => {
  //         console.log()
  //       })
  //   },
  methods: {
    decreaseqty: function decreaseqty() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
    save: function save() {
      var _this = this;

      axios.post('/api/ratings', this.form).then(function (res) {
        _this.showForm = false;
      })["catch"](function (err) {
        console.dir(err);
      });
    },
    addToCart: function addToCart() {
      this.$store.dispatch("cart/addProductToCart", {
        product: this.product,
        quantity: this.quantity,
        type: this.selection_type,
        size: this.selection_size,
        customSize: this.customSize
      });
    },
    addTotWishList: function addTotWishList() {
      var _this2 = this;

      axios.post('/api/wishlist', {
        product_id: this.product.id
      }).then(function (res) {
        _this2.text = 'Product added to wishlist.';
        _this2.snackbar = true;
      })["catch"](function (err) {
        _this2.text = 'Product is already in you wishlist.';
        _this2.snackbar = true;
      });
    },
    loginAlert: function loginAlert() {
      this.text = 'Please login to add product to your wish list.';
      this.snackbar = true;
    } // ...mapActions({
    //    addProductToCart: 'cart/addProductToCart'
    // })

  },
  watch: {
    prod_id: function prod_id() {
      var _this3 = this;

      axios.get("/api/products/".concat(this.$route.params.slug)).then(function (res) {
        _this3.product = res.data.data;
        _this3.sharing.title = res.data.data.name;
        _this3.sharing.description = res.data.data.description;
      })["catch"](function (err) {
        console.log();
      });
      axios.get("/api/products/get-related-products/".concat(this.$route.params.slug)).then(function (res) {
        _this3.related_products = res.data;
      })["catch"](function (err) {
        console.log();
      });
      axios.get("/api/product-sizes/".concat(this.$route.params.slug)).then(function (res) {
        _this3.product_sizes = res.data.sizes;
      })["catch"](function (err) {
        console.log();
      });
      axios.get("/api/ratings/".concat(this.$route.params.slug)).then(function (res) {
        _this3.reviews = res.data.reviews;
        _this3.stars = res.data.stars;
        _this3.total_review = res.data.total_review;
      })["catch"](function (err) {
        console.log();
      });
    },
    // prod_id() {
    //     this.$axios
    // .$get(`/admin/products/get-products/${this.$route.params.id}`)
    // .then(res => {
    //   this.product = res.data.product;
    //   this.form.product_id = this.product.id;
    // })
    // .catch(err => {
    //   console.log();
    // });
    // this.$axios
    //   .$get(`/admin/product-sizes/${this.$route.params.id}`)
    //   .then(res => {
    //     this.product_sizes = res.data.sizes;
    //   })
    //   .catch(err => {
    //     console.log();
    //   });
    // this.$axios.$get(`/admin/ratings/${this.$route.params.id}`)
    // .then(res => {
    //   this.reviews = res.data.reviews;
    //   this.stars = res.data.stars;
    //   this.total_review = res.data.total_review;
    // })
    // .catch(err => {
    //   console.log();
    // });
    //},
    selection_type: function selection_type() {
      if (this.selection_type == 'Stitched') {
        this.selection_size = 'XS';
      }
    }
  },
  computed: {
    routeID: function routeID() {
      return this.prod_id = this.$route.params.slug;
    },
    pageTitle: function pageTitle() {
      return this.metaInfo.title = this.product.name;
    },
    linkURL: function linkURL() {
      return process.env.BASE_URL + this.$route.fullPath;
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/products/RelatedProducts.vue?vue&type=style&index=0&id=814e45a2&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/products/RelatedProducts.vue?vue&type=style&index=0&id=814e45a2&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.v-card--reveal[data-v-814e45a2] {\n  align-items: center;\n  bottom: 0;\n  justify-content: center;\n  opacity: 1;\n  position: absolute;\n  width: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Product.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Product.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.VueCarousel-navigation-prev {\n  left: 10% !important;\n}\n.VueCarousel-navigation-next {\n  right: 10% !important;\n}\n.shirt {\n  position: relative;\n  font-size: 12px;\n  width: 100%;\n}\n.shirt img {\n  widows: 100%;\n}\n.shirt_length {\n  position: absolute;\n  top: 50%;\n  left: 88%;\n  color: red;\n}\n.shoulder {\n  position: absolute;\n  top: 0%;\n  left: 50%;\n  color: red;\n}\n.sleeve_length {\n  position: absolute;\n  top: 15%;\n  left: 13%;\n  color: red;\n}\n.wrist {\n  position: absolute;\n  top: 33%;\n  left: 10%;\n  color: red;\n}\n.chest {\n  position: absolute;\n  top: 15%;\n  left: 50%;\n  color: red;\n}\n.waist {\n  position: absolute;\n  top: 28%;\n  left: 50%;\n  color: red;\n}\n.hip {\n  position: absolute;\n  top: 41%;\n  left: 50%;\n  color: red;\n}\n.bottom {\n  position: absolute;\n  top: 90%;\n  left: 50%;\n  color: red;\n}\n.arm_hole {\n  position: absolute;\n  top: 10%;\n  left: 65%;\n  color: red;\n}\n.trouser {\n  position: relative;\n  font-size: 12px;\n  width: 100%;\n}\n.trouser img {\n  widows: 100%;\n}\n.trouserLength {\n  position: absolute;\n  top: 50%;\n  left: 10%;\n  color: red;\n}\n.trouserWaist {\n  position: absolute;\n  top: 8%;\n  left: 50%;\n  color: red;\n}\n.trouserHip {\n  position: absolute;\n  top: 16%;\n  left: 50%;\n  color: red;\n}\n.thigh {\n  position: absolute;\n  top: 33%;\n  left: 65%;\n  color: red;\n}\n.kneeLength {\n  position: absolute;\n  top: 30%;\n  left: 85%;\n  color: red;\n}\n.knee {\n  position: absolute;\n  top: 53%;\n  left: 65%;\n  color: red;\n}\n.trouserBottom {\n  position: absolute;\n  top: 90%;\n  left: 65%;\n  color: red;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/products/RelatedProducts.vue?vue&type=style&index=0&id=814e45a2&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/products/RelatedProducts.vue?vue&type=style&index=0&id=814e45a2&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./RelatedProducts.vue?vue&type=style&index=0&id=814e45a2&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/products/RelatedProducts.vue?vue&type=style&index=0&id=814e45a2&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Product.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Product.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Product.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/SocialSharing.vue?vue&type=template&id=605d6324&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/SocialSharing.vue?vue&type=template&id=605d6324& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    _vm._l(_vm.networks, function(network) {
      return _c(
        "ShareNetwork",
        {
          key: network.key,
          attrs: {
            network: network.network,
            url: _vm.sharing.url,
            title: _vm.sharing.title,
            description: _vm.sharing.description,
            quote: _vm.sharing.quote,
            hashtags: _vm.sharing.hashtags,
            twitterUser: _vm.sharing.twitterUser
          }
        },
        [
          _c(
            "v-btn",
            { attrs: { icon: "", fab: "", small: "", dark: "" } },
            [
              _c("v-icon", { attrs: { color: network.color } }, [
                _vm._v(" " + _vm._s(network.icon))
              ])
            ],
            1
          )
        ],
        1
      )
    }),
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/products/RelatedProducts.vue?vue&type=template&id=814e45a2&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/products/RelatedProducts.vue?vue&type=template&id=814e45a2&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("v-hover", {
    scopedSlots: _vm._u([
      {
        key: "default",
        fn: function(ref) {
          var hover = ref.hover
          return [
            _c(
              "v-card",
              {
                staticClass: "mb-2",
                attrs: { to: _vm.product.slug, color: "grey lighten-4" }
              },
              [
                _c(
                  "v-img",
                  { attrs: { "aspect-ratio": 0.66, src: _vm.product.image1 } },
                  [
                    hover
                      ? _c("v-img", {
                          attrs: {
                            "aspect-ratio": 0.66,
                            src: _vm.product.image2
                          }
                        })
                      : _vm._e()
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-card-text",
                  {
                    staticClass: "pt-6",
                    staticStyle: { position: "relative" }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "font-weight-light title mb-0 text-center hidden-xs-only"
                      },
                      [_vm._v(_vm._s(_vm.product.name))]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "font-weight-light hidden-sm-and-up mb-0 text-center"
                      },
                      [_vm._v(_vm._s(_vm.product.name))]
                    ),
                    _vm._v(" "),
                    _c(
                      "h3",
                      {
                        staticClass:
                          "title font-weight-black orange--text mb-0 text-center"
                      },
                      [_vm._v(_vm._s(_vm.product.formatted_price))]
                    ),
                    _vm._v(" "),
                    _c(
                      "v-row",
                      {
                        staticClass: "mx-0 text-center d-flex justify-center",
                        attrs: { align: "center" }
                      },
                      [
                        _c("v-rating", {
                          attrs: {
                            value: parseFloat(_vm.product.rating),
                            color: "amber",
                            dense: "",
                            "half-increments": "",
                            readonly: "",
                            size: "14"
                          }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "grey--text ml-4" }, [
                          _vm._v(
                            _vm._s(_vm.product.rating) +
                              " (" +
                              _vm._s(_vm.product.total_reviews) +
                              ")"
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          ]
        }
      }
    ])
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Product.vue?vue&type=template&id=7b8d5cc0&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Product.vue?vue&type=template&id=7b8d5cc0& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "mx-5 mt-2" },
    [
      _c(
        "v-row",
        [
          _c(
            "v-col",
            {
              staticClass: "pa-6 grey lighten-4 order-sm-first",
              attrs: { cols: "12", sm: "5", md: "5", lg: "5", xl: "5" }
            },
            [
              _c("div", { staticClass: "headline mb-4" }, [
                _vm._v(_vm._s(_vm.product.name))
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "my-4" },
                [
                  _c("span", { staticClass: "subheading" }, [_vm._v("Type")]),
                  _vm._v(" "),
                  _c(
                    "v-chip-group",
                    {
                      attrs: {
                        "active-class": "deep-purple--text text--accent-4",
                        mandatory: ""
                      },
                      model: {
                        value: _vm.selection_type,
                        callback: function($$v) {
                          _vm.selection_type = $$v
                        },
                        expression: "selection_type"
                      }
                    },
                    _vm._l(_vm.types, function(type) {
                      return _c(
                        "v-chip",
                        { key: type, attrs: { value: type } },
                        [
                          _vm._v(
                            "\n            " + _vm._s(type) + "\n          "
                          )
                        ]
                      )
                    }),
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _vm.selection_type == "Stitched"
                ? _c(
                    "div",
                    { staticClass: "my-4" },
                    [
                      _c("span", { staticClass: "subheading" }, [
                        _vm._v("Size")
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-chip-group",
                        {
                          attrs: {
                            "active-class": "deep-purple--text text--accent-4",
                            mandatory: ""
                          },
                          model: {
                            value: _vm.selection_size,
                            callback: function($$v) {
                              _vm.selection_size = $$v
                            },
                            expression: "selection_size"
                          }
                        },
                        _vm._l(_vm.sizes, function(size) {
                          return _c(
                            "v-chip",
                            { key: size, attrs: { value: size } },
                            [
                              _vm._v(
                                "\n            " + _vm._s(size) + "\n          "
                              )
                            ]
                          )
                        }),
                        1
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.selection_size == "Custom Size"
                ? _c(
                    "div",
                    [
                      _c("span", { staticClass: "subheading" }, [
                        _vm._v("Custom Size")
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        {},
                        [
                          _c(
                            "v-col",
                            {
                              staticClass: "d-block shirt",
                              attrs: {
                                cols: "12",
                                sm: "6",
                                md: "6",
                                lg: "6",
                                xl: "6"
                              }
                            },
                            [
                              _c(
                                "v-img",
                                {
                                  attrs: {
                                    src: _vm.shirtImg,
                                    "aspect-ratio": "0.65"
                                  }
                                },
                                [
                                  _c("span", { staticClass: "shirt_length" }, [
                                    _vm._v(_vm._s(_vm.customSize.shirtLength))
                                  ]),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "shoulder" }, [
                                    _vm._v(_vm._s(_vm.customSize.shoulder))
                                  ]),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "sleeve_length" }, [
                                    _vm._v(_vm._s(_vm.customSize.sleeveLength))
                                  ]),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "wrist" }, [
                                    _vm._v(_vm._s(_vm.customSize.wrist))
                                  ]),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "chest" }, [
                                    _vm._v(_vm._s(_vm.customSize.chest))
                                  ]),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "waist" }, [
                                    _vm._v(_vm._s(_vm.customSize.waist))
                                  ]),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "hip" }, [
                                    _vm._v(_vm._s(_vm.customSize.hip))
                                  ]),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "bottom" }, [
                                    _vm._v(_vm._s(_vm.customSize.bottom))
                                  ]),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "arm_hole" }, [
                                    _vm._v(_vm._s(_vm.customSize.armHole))
                                  ])
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              staticClass: "d-block",
                              attrs: {
                                cols: "12",
                                sm: "6",
                                md: "6",
                                lg: "6",
                                xl: "6"
                              }
                            },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "Shirt Length",
                                  dense: "",
                                  outlined: ""
                                },
                                model: {
                                  value: _vm.customSize.shirtLength,
                                  callback: function($$v) {
                                    _vm.$set(_vm.customSize, "shirtLength", $$v)
                                  },
                                  expression: "customSize.shirtLength"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                staticClass: "mt-n4",
                                attrs: {
                                  label: "Shoulder",
                                  dense: "",
                                  outlined: ""
                                },
                                model: {
                                  value: _vm.customSize.shoulder,
                                  callback: function($$v) {
                                    _vm.$set(_vm.customSize, "shoulder", $$v)
                                  },
                                  expression: "customSize.shoulder"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                staticClass: "mt-n4",
                                attrs: {
                                  label: "Sleeve length",
                                  dense: "",
                                  outlined: ""
                                },
                                model: {
                                  value: _vm.customSize.sleeveLength,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.customSize,
                                      "sleeveLength",
                                      $$v
                                    )
                                  },
                                  expression: "customSize.sleeveLength"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                staticClass: "mt-n4",
                                attrs: {
                                  label: "Wrist",
                                  dense: "",
                                  outlined: ""
                                },
                                model: {
                                  value: _vm.customSize.wrist,
                                  callback: function($$v) {
                                    _vm.$set(_vm.customSize, "wrist", $$v)
                                  },
                                  expression: "customSize.wrist"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                staticClass: "mt-n4",
                                attrs: {
                                  label: "Chest",
                                  dense: "",
                                  outlined: ""
                                },
                                model: {
                                  value: _vm.customSize.chest,
                                  callback: function($$v) {
                                    _vm.$set(_vm.customSize, "chest", $$v)
                                  },
                                  expression: "customSize.chest"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                staticClass: "mt-n4",
                                attrs: {
                                  label: "Waist",
                                  dense: "",
                                  outlined: ""
                                },
                                model: {
                                  value: _vm.customSize.waist,
                                  callback: function($$v) {
                                    _vm.$set(_vm.customSize, "waist", $$v)
                                  },
                                  expression: "customSize.waist"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                staticClass: "mt-n4",
                                attrs: {
                                  label: "Hip",
                                  dense: "",
                                  outlined: ""
                                },
                                model: {
                                  value: _vm.customSize.hip,
                                  callback: function($$v) {
                                    _vm.$set(_vm.customSize, "hip", $$v)
                                  },
                                  expression: "customSize.hip"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                staticClass: "mt-n4",
                                attrs: {
                                  label: "Bottom",
                                  dense: "",
                                  outlined: ""
                                },
                                model: {
                                  value: _vm.customSize.bottom,
                                  callback: function($$v) {
                                    _vm.$set(_vm.customSize, "bottom", $$v)
                                  },
                                  expression: "customSize.bottom"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                staticClass: "mt-n4",
                                attrs: {
                                  label: "Arm Hole",
                                  dense: "",
                                  outlined: ""
                                },
                                model: {
                                  value: _vm.customSize.armHole,
                                  callback: function($$v) {
                                    _vm.$set(_vm.customSize, "armHole", $$v)
                                  },
                                  expression: "customSize.armHole"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        {},
                        [
                          _c(
                            "v-col",
                            {
                              staticClass: "d-block trouser",
                              attrs: {
                                cols: "12",
                                sm: "6",
                                md: "6",
                                lg: "6",
                                xl: "6"
                              }
                            },
                            [
                              _c(
                                "v-img",
                                {
                                  attrs: {
                                    src: _vm.trouserImg,
                                    "aspect-ratio": "0.61"
                                  }
                                },
                                [
                                  _c("span", { staticClass: "trouserLength" }, [
                                    _vm._v(_vm._s(_vm.customSize.trouserLength))
                                  ]),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "trouserWaist" }, [
                                    _vm._v(_vm._s(_vm.customSize.trouserWaist))
                                  ]),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "trouserHip" }, [
                                    _vm._v(_vm._s(_vm.customSize.trouserHip))
                                  ]),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "thigh" }, [
                                    _vm._v(_vm._s(_vm.customSize.thigh))
                                  ]),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "kneeLength" }, [
                                    _vm._v(_vm._s(_vm.customSize.kneeLength))
                                  ]),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "knee" }, [
                                    _vm._v(_vm._s(_vm.customSize.knee))
                                  ]),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "trouserBottom" }, [
                                    _vm._v(_vm._s(_vm.customSize.trouserBottom))
                                  ])
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              staticClass: "d-block",
                              attrs: {
                                cols: "12",
                                sm: "6",
                                md: "6",
                                lg: "6",
                                xl: "6"
                              }
                            },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "Length",
                                  dense: "",
                                  outlined: ""
                                },
                                model: {
                                  value: _vm.customSize.trouserLength,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.customSize,
                                      "trouserLength",
                                      $$v
                                    )
                                  },
                                  expression: "customSize.trouserLength"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                staticClass: "mt-n4",
                                attrs: {
                                  label: "Trouser Waist",
                                  dense: "",
                                  outlined: ""
                                },
                                model: {
                                  value: _vm.customSize.trouserWaist,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.customSize,
                                      "trouserWaist",
                                      $$v
                                    )
                                  },
                                  expression: "customSize.trouserWaist"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                staticClass: "mt-n4",
                                attrs: {
                                  label: "Hip",
                                  dense: "",
                                  outlined: ""
                                },
                                model: {
                                  value: _vm.customSize.trouserHip,
                                  callback: function($$v) {
                                    _vm.$set(_vm.customSize, "trouserHip", $$v)
                                  },
                                  expression: "customSize.trouserHip"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                staticClass: "mt-n4",
                                attrs: {
                                  label: "Thigh",
                                  dense: "",
                                  outlined: ""
                                },
                                model: {
                                  value: _vm.customSize.thigh,
                                  callback: function($$v) {
                                    _vm.$set(_vm.customSize, "thigh", $$v)
                                  },
                                  expression: "customSize.thigh"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                staticClass: "mt-n4",
                                attrs: {
                                  label: "Knee Length",
                                  dense: "",
                                  outlined: ""
                                },
                                model: {
                                  value: _vm.customSize.kneeLength,
                                  callback: function($$v) {
                                    _vm.$set(_vm.customSize, "kneeLength", $$v)
                                  },
                                  expression: "customSize.kneeLength"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                staticClass: "mt-n4",
                                attrs: {
                                  label: "Knee",
                                  dense: "",
                                  outlined: ""
                                },
                                model: {
                                  value: _vm.customSize.knee,
                                  callback: function($$v) {
                                    _vm.$set(_vm.customSize, "knee", $$v)
                                  },
                                  expression: "customSize.knee"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                staticClass: "mt-n4",
                                attrs: {
                                  label: "Bottom",
                                  dense: "",
                                  outlined: ""
                                },
                                model: {
                                  value: _vm.customSize.trouserBottom,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.customSize,
                                      "trouserBottom",
                                      $$v
                                    )
                                  },
                                  expression: "customSize.trouserBottom"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "div",
                {},
                [
                  _c(
                    "v-dialog",
                    {
                      attrs: { width: "600px" },
                      scopedSlots: _vm._u([
                        {
                          key: "activator",
                          fn: function(ref) {
                            var on = ref.on
                            return [
                              _c(
                                "v-btn",
                                _vm._g({ attrs: { text: "" } }, on),
                                [
                                  _c("v-icon", { attrs: { left: "" } }, [
                                    _vm._v("mdi-tshirt-v")
                                  ]),
                                  _vm._v("View Size Chart\n            ")
                                ],
                                1
                              )
                            ]
                          }
                        }
                      ]),
                      model: {
                        value: _vm.dialog,
                        callback: function($$v) {
                          _vm.dialog = $$v
                        },
                        expression: "dialog"
                      }
                    },
                    [
                      _vm._v(" "),
                      _c(
                        "v-card",
                        [
                          _c("v-card-title", [
                            _c("span", { staticClass: "headline" }, [
                              _vm._v("Custom Size Chart")
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-card-text",
                            _vm._l(_vm.product_sizes, function(
                              topic,
                              label,
                              index
                            ) {
                              return _c(
                                "div",
                                { key: index, staticClass: "mt-3" },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "d-flex justify-center" },
                                    [
                                      _c(
                                        "strong",
                                        { staticClass: "text-center mt-3" },
                                        [
                                          _vm._v(
                                            _vm._s(_vm.product.name) +
                                              " " +
                                              _vm._s(label)
                                          )
                                        ]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("v-simple-table", {
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "default",
                                          fn: function() {
                                            return [
                                              _c("thead", [
                                                _c("tr", [
                                                  _c(
                                                    "th",
                                                    {
                                                      staticClass: "text-left",
                                                      attrs: { width: "35%" }
                                                    },
                                                    [_vm._v("Size")]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "th",
                                                    {
                                                      staticClass: "text-left"
                                                    },
                                                    [_vm._v("XS")]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "th",
                                                    {
                                                      staticClass: "text-left"
                                                    },
                                                    [_vm._v("S")]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "th",
                                                    {
                                                      staticClass: "text-left"
                                                    },
                                                    [_vm._v("M")]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "th",
                                                    {
                                                      staticClass: "text-left"
                                                    },
                                                    [_vm._v("L")]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "th",
                                                    {
                                                      staticClass: "text-left"
                                                    },
                                                    [_vm._v("XL")]
                                                  )
                                                ])
                                              ]),
                                              _vm._v(" "),
                                              _c(
                                                "tbody",
                                                _vm._l(topic, function(
                                                  item,
                                                  itemID
                                                ) {
                                                  return _c(
                                                    "tr",
                                                    { key: itemID },
                                                    [
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(item.name)
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(_vm._s(item.xs))
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(_vm._s(item.s))
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(_vm._s(item.m))
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(_vm._s(item.l))
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(_vm._s(item.xl))
                                                      ])
                                                    ]
                                                  )
                                                }),
                                                0
                                              )
                                            ]
                                          },
                                          proxy: true
                                        }
                                      ],
                                      null,
                                      true
                                    )
                                  })
                                ],
                                1
                              )
                            }),
                            0
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                [
                  2 > 1
                    ? _c(
                        "v-btn",
                        {
                          attrs: { tile: "", text: "", color: "" },
                          on: { click: _vm.addTotWishList }
                        },
                        [
                          _c("v-icon", { attrs: { left: "" } }, [
                            _vm._v("mdi-heart")
                          ]),
                          _vm._v("Add to wish list\n        ")
                        ],
                        1
                      )
                    : _c(
                        "v-btn",
                        {
                          attrs: { tile: "", text: "", color: "" },
                          on: { click: _vm.loginAlert }
                        },
                        [
                          _c("v-icon", { attrs: { left: "" } }, [
                            _vm._v("mdi-heart")
                          ]),
                          _vm._v("Add to wish list\n        ")
                        ],
                        1
                      )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "py-4 pl-1" },
                [
                  _c("div", { staticClass: "subheading" }, [
                    _vm._v("Quantity")
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { icon: "", color: "" },
                      on: { click: _vm.decreaseqty }
                    },
                    [_c("v-icon", [_vm._v("mdi-minus")])],
                    1
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value: _vm.quantity,
                        expression: "quantity",
                        modifiers: { number: true }
                      }
                    ],
                    staticClass: "text-center",
                    staticStyle: { width: "40px" },
                    attrs: { type: "text" },
                    domProps: { value: _vm.quantity },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.quantity = _vm._n($event.target.value)
                      },
                      blur: function($event) {
                        return _vm.$forceUpdate()
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { icon: "", color: "" },
                      on: {
                        click: function($event) {
                          _vm.quantity++
                        }
                      }
                    },
                    [_c("v-icon", [_vm._v("mdi-plus")])],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "py-4 headline" }, [
                _vm._v(_vm._s(_vm.product.formatted_price))
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "py-4" },
                [
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "grey darken-4", dark: "" },
                      on: { click: _vm.addToCart }
                    },
                    [_vm._v("Add to Cart")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "py-4" }, [
                _c("div", {
                  domProps: { innerHTML: _vm._s(_vm.product.description) }
                })
              ]),
              _vm._v(" "),
              _c("SocialSharing", { attrs: { sharing: _vm.sharing } })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            {
              staticClass: "pl-6 pt-0 order-first",
              attrs: { cols: "12", sm: "7", md: "7", lg: "7", xl: "7" }
            },
            [
              _c(
                "carousel",
                {
                  staticClass: "hidden-sm-and-down",
                  attrs: {
                    perPage: 1,
                    scrollPerPage: true,
                    "mouse-drag": true,
                    touchDrag: true,
                    navigationEnabled: true,
                    "navigation-next-label":
                      '<img src="https://img.icons8.com/ios-glyphs/24/000000/chevron-right.png" class="chev-next"/>',
                    "navigation-prev-label":
                      '<img src="https://img.icons8.com/ios-glyphs/24/000000/chevron-left.png" class="chev-prev"/>',
                    navigationClickTargetSize: 15,
                    autoplay: true,
                    paginationEnabled: true
                  }
                },
                [
                  _vm.product.image1
                    ? _c(
                        "slide",
                        [
                          _c("zoom-on-hover", {
                            attrs: {
                              "img-normal": _vm.product.image1,
                              "img-zoom": _vm.product.image1,
                              scale: 1.5
                            }
                          })
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.product.image2
                    ? _c(
                        "slide",
                        [
                          _c("zoom-on-hover", {
                            attrs: {
                              "img-normal": _vm.product.image2,
                              "img-zoom": _vm.product.image2,
                              scale: 1.5
                            }
                          })
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.product.image3
                    ? _c(
                        "slide",
                        [
                          _c("zoom-on-hover", {
                            attrs: {
                              "img-normal": _vm.product.image3,
                              "img-zoom": _vm.product.image3,
                              scale: 1.5
                            }
                          })
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.product.image4
                    ? _c(
                        "slide",
                        [
                          _c("zoom-on-hover", {
                            attrs: {
                              "img-normal": _vm.product.image4,
                              "img-zoom": _vm.product.image4,
                              scale: 1.5
                            }
                          })
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.product.image5
                    ? _c(
                        "slide",
                        [
                          _c("zoom-on-hover", {
                            attrs: {
                              "img-normal": _vm.product.image5,
                              "img-zoom": _vm.product.image5,
                              scale: 1.5
                            }
                          })
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.product.image6
                    ? _c(
                        "slide",
                        [
                          _c("zoom-on-hover", {
                            attrs: {
                              "img-normal": _vm.product.image6,
                              "img-zoom": _vm.product.image6,
                              scale: 1.5
                            }
                          })
                        ],
                        1
                      )
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "carousel",
                {
                  staticClass: "hidden-md-and-up",
                  attrs: {
                    perPage: 1,
                    scrollPerPage: true,
                    "mouse-drag": true,
                    touchDrag: true,
                    navigationEnabled: true,
                    "navigation-next-label":
                      '<img src="https://img.icons8.com/ios-glyphs/24/000000/chevron-right.png" class="chev-next"/>',
                    "navigation-prev-label":
                      '<img src="https://img.icons8.com/ios-glyphs/24/000000/chevron-left.png" class="chev-prev"/>',
                    navigationClickTargetSize: 15,
                    autoplay: true,
                    paginationEnabled: true
                  }
                },
                [
                  _vm.product.image1
                    ? _c(
                        "slide",
                        [
                          _c("v-img", {
                            attrs: {
                              "aspect-ratio": 0.66,
                              src: _vm.product.image1
                            }
                          })
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.product.image2
                    ? _c(
                        "slide",
                        [
                          _c("v-img", {
                            attrs: {
                              "aspect-ratio": 0.66,
                              src: _vm.product.image2
                            }
                          })
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.product.image3
                    ? _c(
                        "slide",
                        [
                          _c("v-img", {
                            attrs: {
                              "aspect-ratio": 0.66,
                              src: _vm.product.image3
                            }
                          })
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.product.image4
                    ? _c(
                        "slide",
                        [
                          _c("v-img", {
                            attrs: {
                              "aspect-ratio": 0.66,
                              src: _vm.product.image4
                            }
                          })
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.product.image5
                    ? _c(
                        "slide",
                        [
                          _c("v-img", {
                            attrs: {
                              "aspect-ratio": 0.66,
                              src: _vm.product.image5
                            }
                          })
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.product.image6
                    ? _c(
                        "slide",
                        [
                          _c("v-img", {
                            attrs: {
                              "aspect-ratio": 0.66,
                              src: _vm.product.image6
                            }
                          })
                        ],
                        1
                      )
                    : _vm._e()
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        { staticClass: "pa-6 mt-4 grey lighten-4" },
        [
          _c(
            "v-row",
            {},
            [
              _c(
                "v-col",
                { staticClass: "py-0 hidden-xs-only", attrs: { cols: "12" } },
                [
                  _c("div", { staticClass: "title" }, [
                    _vm._v("Customers Reviews")
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { staticClass: "py-0 hidden-xs-only", attrs: { cols: "12" } },
                [
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { staticClass: "d-flex", attrs: { cols: "8" } },
                        [
                          _c("v-rating", {
                            attrs: {
                              "background-color": "grey",
                              color: "black accent-4",
                              dense: "",
                              readonly: ""
                            },
                            model: {
                              value: _vm.stars,
                              callback: function($$v) {
                                _vm.stars = $$v
                              },
                              expression: "stars"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              staticClass: "grey--text text--darken-3 ml-2 mt-1"
                            },
                            [
                              _vm._v(
                                "Base on " +
                                  _vm._s(_vm.total_review) +
                                  " Review"
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        [
                          _c(
                            "v-btn",
                            {
                              staticClass: "float-right",
                              attrs: { text: "" },
                              on: {
                                click: function($event) {
                                  _vm.showForm = !_vm.showForm
                                }
                              }
                            },
                            [_vm._v("Write a review")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            {
              staticClass: "text-center hidden-sm-and-up",
              attrs: { cols: "12" }
            },
            [_c("div", { staticClass: "title" }, [_vm._v("Customers Reviews")])]
          ),
          _vm._v(" "),
          _c(
            "v-col",
            {
              staticClass:
                "d-flex justify-center text-center py-0 hidden-sm-and-up",
              attrs: { cols: "12" }
            },
            [
              _c("v-rating", {
                staticClass: "mr-0 hidden-sm-and-up",
                attrs: {
                  size: "18",
                  "background-color": "grey",
                  color: "black accent-4",
                  dense: "",
                  readonly: ""
                },
                model: {
                  value: _vm.rating,
                  callback: function($$v) {
                    _vm.rating = $$v
                  },
                  expression: "rating"
                }
              }),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass:
                    "grey--text text--darken-3 caption mt-1 hidden-sm-and-up"
                },
                [_vm._v("Base on " + _vm._s(_vm.total_review) + " Review")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            {
              staticClass: "text-center py-0 hidden-sm-and-up",
              attrs: { cols: "12" }
            },
            [
              _c(
                "v-btn",
                {
                  attrs: { depressed: "", small: "", text: "" },
                  on: {
                    click: function($event) {
                      _vm.showForm = !_vm.showForm
                    }
                  }
                },
                [_vm._v("Write a review")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm.showForm
            ? _c(
                "v-col",
                { attrs: { cols: "12" } },
                [
                  _c(
                    "v-form",
                    {
                      attrs: { method: "post" },
                      on: {
                        submit: function($event) {
                          $event.stopPropagation()
                          $event.preventDefault()
                          return _vm.save($event)
                        }
                      },
                      model: {
                        value: _vm.valid,
                        callback: function($$v) {
                          _vm.valid = $$v
                        },
                        expression: "valid"
                      }
                    },
                    [
                      _c("span", { staticClass: "mb-2" }, [
                        _vm._v("Write a review")
                      ]),
                      _vm._v(" "),
                      _c("v-text-field", {
                        staticClass: "mt-2",
                        attrs: {
                          label: "Name",
                          outlined: "",
                          dense: "",
                          rules: [_vm.rules.required, _vm.rules.min]
                        },
                        model: {
                          value: _vm.form.name,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "name", $$v)
                          },
                          expression: "form.name"
                        }
                      }),
                      _vm._v(" "),
                      _c("v-text-field", {
                        staticClass: "mt-n3",
                        attrs: {
                          label: "Email",
                          outlined: "",
                          dense: "",
                          rules: [_vm.rules.required, _vm.rules.validEmail]
                        },
                        model: {
                          value: _vm.form.email,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "email", $$v)
                          },
                          expression: "form.email"
                        }
                      }),
                      _vm._v(" "),
                      _c("v-rating", {
                        staticClass: "mt-n3",
                        attrs: {
                          "background-color": "grey",
                          color: "black accent-4",
                          dense: "",
                          hover: "",
                          "aria-label": "Rating",
                          rules: [_vm.rules.required]
                        },
                        model: {
                          value: _vm.form.rating,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "rating", $$v)
                          },
                          expression: "form.rating"
                        }
                      }),
                      _vm._v(" "),
                      _c("v-text-field", {
                        staticClass: "mt-2",
                        attrs: {
                          label: "Review Title",
                          outlined: "",
                          dense: "",
                          rules: [_vm.rules.required]
                        },
                        model: {
                          value: _vm.form.title,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "title", $$v)
                          },
                          expression: "form.title"
                        }
                      }),
                      _vm._v(" "),
                      _c("v-textarea", {
                        staticClass: "mt-n3",
                        attrs: {
                          label: "Review Body",
                          outlined: "",
                          dense: "",
                          rules: [_vm.rules.required]
                        },
                        model: {
                          value: _vm.form.body,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "body", $$v)
                          },
                          expression: "form.body"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          staticClass: "float-right mt-n3",
                          attrs: {
                            type: "submit",
                            disabled: !_vm.valid,
                            dark: ""
                          },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.save($event)
                            }
                          }
                        },
                        [_vm._v("Submit")]
                      ),
                      _vm._v(" "),
                      _c("v-divider", { staticClass: "mt-10" })
                    ],
                    1
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm._l(_vm.reviews, function(review) {
            return _c(
              "v-col",
              { key: review.id, attrs: { cols: "12" } },
              [
                _c("v-rating", {
                  staticClass: "mt-n3",
                  attrs: {
                    "background-color": "grey",
                    color: "black accent-4",
                    dense: "",
                    hover: "",
                    "aria-label": "Rating",
                    readonly: ""
                  },
                  model: {
                    value: review.rating,
                    callback: function($$v) {
                      _vm.$set(review, "rating", $$v)
                    },
                    expression: "review.rating"
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "mt-2 mb-1 text-" }, [
                  _c("strong", [_vm._v(_vm._s(review.title))])
                ]),
                _vm._v(" "),
                _c(
                  "p",
                  {
                    staticClass:
                      "overline font-italic grey--text text--darken-3 mb-1"
                  },
                  [
                    _vm._v(
                      "\n         " +
                        _vm._s(review.name) +
                        " on " +
                        _vm._s(_vm._f("date")(review.created_at)) +
                        "\n        "
                    )
                  ]
                ),
                _vm._v(" "),
                _c("p", { staticClass: "mt-0" }, [_vm._v(_vm._s(review.body))]),
                _vm._v(" "),
                _c("v-divider")
              ],
              1
            )
          })
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "v-row",
        { staticClass: "py-12" },
        [
          _c(
            "v-col",
            { staticClass: "mb-12 text-center", attrs: { cols: "12" } },
            [
              _c("h1", [_vm._v("You may also like...")]),
              _vm._v(" "),
              _c("v-icon", [_vm._v("mdi-dots-horizontal")])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-row",
            { staticClass: "wrap" },
            _vm._l(_vm.related_products, function(product) {
              return _c(
                "v-col",
                {
                  key: product.id,
                  attrs: { cols: "6", sm: "3", md: "3", lg: "3", xl: "3" }
                },
                [_c("RelatedProducts", { attrs: { product: product } })],
                1
              )
            }),
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { attrs: { hidden: "" } }, [_vm._v(_vm._s(_vm.routeID))]),
      _vm._v(" "),
      _c(
        "v-snackbar",
        {
          model: {
            value: _vm.snackbar,
            callback: function($$v) {
              _vm.snackbar = $$v
            },
            expression: "snackbar"
          }
        },
        [
          _vm._v("\n  " + _vm._s(_vm.text) + "\n  "),
          _c(
            "v-btn",
            {
              attrs: { color: "white", text: "" },
              on: {
                click: function($event) {
                  _vm.snackbar = false
                }
              }
            },
            [_vm._v("\n      Close\n  ")]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/global/SocialSharing.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/global/SocialSharing.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SocialSharing_vue_vue_type_template_id_605d6324___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SocialSharing.vue?vue&type=template&id=605d6324& */ "./resources/js/components/global/SocialSharing.vue?vue&type=template&id=605d6324&");
/* harmony import */ var _SocialSharing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SocialSharing.vue?vue&type=script&lang=js& */ "./resources/js/components/global/SocialSharing.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SocialSharing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SocialSharing_vue_vue_type_template_id_605d6324___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SocialSharing_vue_vue_type_template_id_605d6324___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/global/SocialSharing.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/global/SocialSharing.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/global/SocialSharing.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialSharing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SocialSharing.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/SocialSharing.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialSharing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/global/SocialSharing.vue?vue&type=template&id=605d6324&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/global/SocialSharing.vue?vue&type=template&id=605d6324& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialSharing_vue_vue_type_template_id_605d6324___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SocialSharing.vue?vue&type=template&id=605d6324& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/SocialSharing.vue?vue&type=template&id=605d6324&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialSharing_vue_vue_type_template_id_605d6324___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialSharing_vue_vue_type_template_id_605d6324___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/products/RelatedProducts.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/products/RelatedProducts.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RelatedProducts_vue_vue_type_template_id_814e45a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RelatedProducts.vue?vue&type=template&id=814e45a2&scoped=true& */ "./resources/js/components/products/RelatedProducts.vue?vue&type=template&id=814e45a2&scoped=true&");
/* harmony import */ var _RelatedProducts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RelatedProducts.vue?vue&type=script&lang=js& */ "./resources/js/components/products/RelatedProducts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _RelatedProducts_vue_vue_type_style_index_0_id_814e45a2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RelatedProducts.vue?vue&type=style&index=0&id=814e45a2&scoped=true&lang=css& */ "./resources/js/components/products/RelatedProducts.vue?vue&type=style&index=0&id=814e45a2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RelatedProducts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RelatedProducts_vue_vue_type_template_id_814e45a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RelatedProducts_vue_vue_type_template_id_814e45a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "814e45a2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/products/RelatedProducts.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/products/RelatedProducts.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/products/RelatedProducts.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RelatedProducts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./RelatedProducts.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/products/RelatedProducts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RelatedProducts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/products/RelatedProducts.vue?vue&type=style&index=0&id=814e45a2&scoped=true&lang=css&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/products/RelatedProducts.vue?vue&type=style&index=0&id=814e45a2&scoped=true&lang=css& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RelatedProducts_vue_vue_type_style_index_0_id_814e45a2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./RelatedProducts.vue?vue&type=style&index=0&id=814e45a2&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/products/RelatedProducts.vue?vue&type=style&index=0&id=814e45a2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RelatedProducts_vue_vue_type_style_index_0_id_814e45a2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RelatedProducts_vue_vue_type_style_index_0_id_814e45a2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RelatedProducts_vue_vue_type_style_index_0_id_814e45a2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RelatedProducts_vue_vue_type_style_index_0_id_814e45a2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RelatedProducts_vue_vue_type_style_index_0_id_814e45a2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/products/RelatedProducts.vue?vue&type=template&id=814e45a2&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/products/RelatedProducts.vue?vue&type=template&id=814e45a2&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RelatedProducts_vue_vue_type_template_id_814e45a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./RelatedProducts.vue?vue&type=template&id=814e45a2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/products/RelatedProducts.vue?vue&type=template&id=814e45a2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RelatedProducts_vue_vue_type_template_id_814e45a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RelatedProducts_vue_vue_type_template_id_814e45a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Product.vue":
/*!****************************************!*\
  !*** ./resources/js/views/Product.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Product_vue_vue_type_template_id_7b8d5cc0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product.vue?vue&type=template&id=7b8d5cc0& */ "./resources/js/views/Product.vue?vue&type=template&id=7b8d5cc0&");
/* harmony import */ var _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product.vue?vue&type=script&lang=js& */ "./resources/js/views/Product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Product_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Product.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/Product.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Product_vue_vue_type_template_id_7b8d5cc0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Product_vue_vue_type_template_id_7b8d5cc0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Product.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Product.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/views/Product.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Product.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/Product.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Product.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/Product.vue?vue&type=template&id=7b8d5cc0&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/Product.vue?vue&type=template&id=7b8d5cc0& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_7b8d5cc0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=template&id=7b8d5cc0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Product.vue?vue&type=template&id=7b8d5cc0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_7b8d5cc0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_7b8d5cc0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);