(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ProductCollection.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ProductCollection.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  layout: 'mardom',
  props: {
    source: String
  },
  components: {},
  metaInfo: function metaInfo() {
    return {
      title: this.category,
      titleTemplate: '%s | Khodgi',
      property: 'og:title',
      meta: [{
        name: 'site_name',
        content: 'Khodgi',
        property: 'og:site_name'
      }, {
        name: 'url',
        content: this.currentUrl,
        property: 'og:url'
      }, {
        name: 'description',
        content: "Essence of classic, contemporary embroidery submerging beautifully with base color. ".concat(this.category),
        property: 'og:description'
      }, {
        name: 'type',
        content: 'website',
        property: 'og:type'
      }, {
        name: 'image',
        content: this.pageImage,
        property: 'og:image'
      }]
    };
  },
  data: function data() {
    return {
      products: [],
      user_location: [],
      cat: "",
      pagination: {},
      currentUrl: window.location.href,
      category: '',
      page: 1,
      itemSort: ["Price, low to high", "Price, high to low", "Alphabetically, A-Z", "Alphabetically, Z-A", "Date, old to new", "Date, new to old"],
      item: "Date, new to old",
      sortOptions: {
        orderBy: "",
        sortBy: ""
      },
      url: '',
      data: [],
      pageImage: ''
    };
  },
  watch: {
    cat: function cat() {
      this.fetchProduct();
    }
  },
  methods: {
    addToCart: function addToCart(event) {
      var index = event.currentTarget.id; //  const index = this.items.indexOf(event)
      //  console.log(index);

      this.$store.dispatch("addProductToCart", {
        product: this.items[index],
        type: 'Unstitched',
        size: 'Default',
        customSize: '',
        quantity: 1
      });
    },
    fetchProduct: function fetchProduct(pagei) {
      var _this = this;

      var sortBy = this.sortOptions.sortBy.length == 0 ? 'name' : this.sortOptions.sortBy;
      var orderBy = this.sortOptions.orderBy.length == 0 ? 'asc' : this.sortOptions.orderBy;
      pagei = pagei || "/api/products/categories/".concat(this.routeID);
      axios.get(pagei, {
        params: {
          'sort_by': sortBy,
          'order_by': orderBy
        }
      }).then(function (res) {
        _this.products = res.data.data;
        _this.category = res.data.data[0].category;
        _this.pageImage = res.data.data[0].image1;
        _this.pagination = {
          path: res.data.meta.path + "?page=",
          prev_page_url: res.data.links.prev,
          next_page_url: res.data.links.next,
          current_page: res.data.meta.current_page,
          first_page_url: res.data.links.first,
          last_page_url: res.data.links.last
        };
      })["catch"](function (err) {
        console.log();
      });
    },
    fetchPaginatedProduct: function fetchPaginatedProduct(url) {
      this.url = url;
      this.fetchProduct();
    }
  },
  computed: {
    routeID: function routeID() {
      return this.cat = this.$route.params.slug;
    },
    urls: function urls() {
      return this.url = "/api/products/categories/".concat(this.routeID);
    },
    sortings: function sortings() {
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
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ProductCollection.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ProductCollection.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.v-card--reveal {\n  align-items: center;\n  bottom: 0;\n  justify-content: center;\n  opacity: 1;\n  position: absolute;\n  width: 100%;\n}\n.img__wrapper{\n  position:relative;\n  overflow:hidden;\n}\n.img__wrapper img{\n  width: 100%;\n}\n.sold_out {\n    top: 2em;\n    left: -4em;\n    color: #fff;\n    display: block;\n    position:absolute;\n    text-align: center;\n    text-decoration: none;\n    letter-spacing: .06em;\n    background-color: #A00;\n    padding: 0.5em 5em 0.4em 5em;\n    text-shadow: 0 0 0.75em #444;\n    box-shadow: 0 0 0.5em rgba(0,0,0,0.5);\n    font: bold 16px/1.2em Arial, Sans-Serif;\n    -webkit-text-shadow: 0 0 0.75em #444;\n    -webkit-box-shadow: 0 0 0.5em rgba(0,0,0,0.5);\n    -webkit-transform: rotate(-45deg) scale(0.75,1);\n    z-index:1;\n}\n.sold_out:before {\n    content: '';\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    position: absolute;\n    margin: -0.3em -5em;\n    transform: scale(0.7);\n    -webkit-transform: scale(0.7);\n    border: 2px rgba(255,255,255,0.7) dashed;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ProductCollection.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ProductCollection.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ProductCollection.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ProductCollection.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ProductCollection.vue?vue&type=template&id=eee7b944&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ProductCollection.vue?vue&type=template&id=eee7b944& ***!
  \***************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "v-row",
        [
          _c(
            "v-col",
            {
              staticClass: "px-6",
              attrs: { cols: "12", sm: "3", md: "3", lg: "3", xl: "3" }
            },
            [
              _c("v-row", { staticClass: "d-flex justify-center mt-5" }, [
                _c("h1", [_vm._v(_vm._s(_vm.category))])
              ]),
              _vm._v(" "),
              _c(
                "v-row",
                { staticClass: "d-flex justify-center mb-2" },
                [_c("v-icon", [_vm._v("mdi-dots-horizontal")])],
                1
              ),
              _vm._v(" "),
              _c("v-select", {
                attrs: {
                  items: _vm.itemSort,
                  dense: "",
                  outlined: "",
                  label: "Filter By"
                },
                model: {
                  value: _vm.item,
                  callback: function($$v) {
                    _vm.item = $$v
                  },
                  expression: "item"
                }
              }),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  staticClass: "mt-n2",
                  attrs: { color: "primary", block: "", dark: "" },
                  on: {
                    click: function($event) {
                      return _vm.fetchProduct()
                    }
                  }
                },
                [_vm._v("Ok")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            {
              staticClass: "px-6",
              attrs: { cols: "12", sm: "9", md: "9", lg: "9", xl: "9" }
            },
            [
              _c(
                "v-row",
                { staticClass: "wrap" },
                _vm._l(_vm.products, function(i, index) {
                  return _c(
                    "v-col",
                    {
                      key: index,
                      staticClass: "px-3",
                      attrs: { cols: "6", sm: "4", md: "4", lg: "4", xl: "4" }
                    },
                    [
                      _c("v-hover", {
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "default",
                              fn: function(ref) {
                                var hover = ref.hover
                                return [
                                  _c(
                                    "v-card",
                                    {
                                      staticClass: "mb-2 img__wrapper",
                                      attrs: { color: "grey lighten-4" }
                                    },
                                    [
                                      _c(
                                        "router-link",
                                        {
                                          attrs: { to: "/products/" + i.slug }
                                        },
                                        [
                                          _c(
                                            "v-img",
                                            {
                                              attrs: {
                                                "aspect-ratio": 0.66,
                                                src: i.image1
                                              }
                                            },
                                            [
                                              hover
                                                ? _c("v-img", {
                                                    attrs: {
                                                      "aspect-ratio": 0.66,
                                                      src: i.image2
                                                    }
                                                  })
                                                : _vm._e()
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      !i.in_stock
                                        ? _c(
                                            "a",
                                            {
                                              staticClass:
                                                "sold_out white--text",
                                              attrs: { href: "" }
                                            },
                                            [_vm._v("Sold out")]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c(
                                        "v-card-text",
                                        {
                                          staticClass: "pt-6",
                                          staticStyle: { position: "relative" }
                                        },
                                        [
                                          i.new
                                            ? _c(
                                                "v-btn",
                                                {
                                                  staticClass: "white--text",
                                                  attrs: {
                                                    absolute: "",
                                                    color: "orange",
                                                    id: index,
                                                    fab: "",
                                                    right: "",
                                                    top: ""
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                      New\n                "
                                                  )
                                                ]
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "font-weight-light title mb-0 text-center hidden-xs-only"
                                            },
                                            [_vm._v(_vm._s(i.name))]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "font-weight-light hidden-sm-and-up mb-0 text-center"
                                            },
                                            [_vm._v(_vm._s(i.name))]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "h3",
                                            { staticClass: "text-center" },
                                            [
                                              i.offer > 0
                                                ? _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "subtitle-1 font-weight-medium orange--text mb-0 text-center",
                                                      staticStyle: {
                                                        "text-decoration":
                                                          "line-through"
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                  " +
                                                          _vm._s(
                                                            i.formatted_price
                                                          ) +
                                                          "\n                "
                                                      )
                                                    ]
                                                  )
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "title font-weight-black orange--text mb-0 text-center"
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                    " +
                                                      _vm._s(
                                                        i.formatted_offer
                                                      ) +
                                                      "\n                "
                                                  )
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-row",
                                            {
                                              staticClass:
                                                "mx-0 text-center d-flex justify-center",
                                              attrs: { align: "center" }
                                            },
                                            [
                                              _c("v-rating", {
                                                attrs: {
                                                  value: parseFloat(i.rating),
                                                  color: "amber",
                                                  dense: "",
                                                  "half-increments": "",
                                                  readonly: "",
                                                  size: "14"
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass: "grey--text ml-4"
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(i.rating) +
                                                      " (" +
                                                      _vm._s(i.total_reviews) +
                                                      ")"
                                                  )
                                                ]
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
                                ]
                              }
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
                1
              ),
              _vm._v(" "),
              _c(
                "v-row",
                { staticClass: "d-flex justify-center" },
                [
                  _c(
                    "v-btn",
                    {
                      staticClass: "mx-2",
                      attrs: {
                        color: "secondary",
                        fab: "",
                        "x-small": "",
                        light: "",
                        disabled: !_vm.pagination.prev_page_url
                      },
                      on: {
                        click: function($event) {
                          return _vm.fetchProduct(_vm.pagination.prev_page_url)
                        }
                      }
                    },
                    [_c("v-icon", [_vm._v("mdi-chevron-left")])],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticClass: "mx-2",
                      attrs: {
                        color: "secondary",
                        fab: "",
                        "x-small": "",
                        light: "",
                        disabled: !_vm.pagination.next_page_url
                      },
                      on: {
                        click: function($event) {
                          return _vm.fetchProduct(_vm.pagination.next_page_url)
                        }
                      }
                    },
                    [_c("v-icon", [_vm._v("mdi-chevron-right")])],
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
      _c("div", { attrs: { hidden: "" } }, [
        _vm._v(_vm._s(_vm.routeID) + " " + _vm._s(_vm.sortings))
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/ProductCollection.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/ProductCollection.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductCollection_vue_vue_type_template_id_eee7b944___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductCollection.vue?vue&type=template&id=eee7b944& */ "./resources/js/views/ProductCollection.vue?vue&type=template&id=eee7b944&");
/* harmony import */ var _ProductCollection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductCollection.vue?vue&type=script&lang=js& */ "./resources/js/views/ProductCollection.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ProductCollection_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductCollection.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/ProductCollection.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ProductCollection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductCollection_vue_vue_type_template_id_eee7b944___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductCollection_vue_vue_type_template_id_eee7b944___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/ProductCollection.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/ProductCollection.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/ProductCollection.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCollection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ProductCollection.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ProductCollection.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCollection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/ProductCollection.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/ProductCollection.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCollection_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ProductCollection.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ProductCollection.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCollection_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCollection_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCollection_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCollection_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCollection_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/ProductCollection.vue?vue&type=template&id=eee7b944&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/ProductCollection.vue?vue&type=template&id=eee7b944& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCollection_vue_vue_type_template_id_eee7b944___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ProductCollection.vue?vue&type=template&id=eee7b944& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ProductCollection.vue?vue&type=template&id=eee7b944&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCollection_vue_vue_type_template_id_eee7b944___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCollection_vue_vue_type_template_id_eee7b944___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);