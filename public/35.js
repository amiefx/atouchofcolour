(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/products/Slug.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/products/Slug.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  layout: 'admin',
  middleware: ['auth', 'admin'],
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: 'Products',
    titleTemplate: '%s | Khodgi'
  },
  components: {},
  data: function data() {
    return {
      date: null,
      menu_special_price_start: null,
      menu_special_price_end: null,
      menu_new_from: null,
      menu_new_to: null,
      attrib: '',
      attribs: [],
      subattrib: '',
      subattribs: [],
      size_attribs: [{
        attribute_set: '',
        attribute: '',
        xs: '',
        s: '',
        m: '',
        l: '',
        xl: ''
      }],
      // demo about
      valid: true,
      dialog: false,
      dialogPhoto1: false,
      dialogPhoto2: false,
      dialogPhoto3: false,
      dialogPhoto4: false,
      dialogPhoto5: false,
      dialogPhoto6: false,
      loading: false,
      snackbar: false,
      text: '',
      product: '',
      success: '',
      error: '',
      categories: [],
      options: {
        sortBy: ['name'],
        sortDesc: [true]
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
      productImg: window.location.origin + "/storage/images/product_image.png",
      imagesItems: {
        image1: null,
        image2: null,
        image3: null,
        image4: null,
        image5: null,
        image6: null
      },
      editedItem: {
        id: '',
        name: '',
        slug: '',
        category_id: '',
        description: '',
        is_active: '',
        price_pkr: '',
        price_usd: '',
        price_aud: '',
        price_eur: '',
        price_gbp: '',
        stitched_price_pkr: '',
        stitched_price_usd: '',
        stitched_price_aud: '',
        stitched_price_eur: '',
        stitched_price_gbp: '',
        special_price_percentage: '',
        special_price_start: '',
        special_price_end: '',
        manage_inventory: '',
        quantity: '',
        image1: null,
        image2: null,
        image3: null,
        image4: null,
        image5: null,
        image6: null,
        new_from: '',
        new_to: '',
        short_description: '',
        created_at: '',
        size_attribs: [{
          id: '',
          attribute_set: '',
          attributes_id: '',
          xs: '',
          s: '',
          m: '',
          l: '',
          xl: ''
        }]
      }
    };
  },
  //   async asyncData({ $axios, params, error, redirect }) {
  //     try {
  //       const product = await $axios.get(`/api/admin/products/${params.slug}`)
  //       return { product: product.product }
  //     } catch (err) {}
  //   },
  created: function created() {
    var _this = this;

    axios.get("/api/admin/products/".concat(this.$route.params.slug)).then(function (res) {
      //   console.log(res)
      _this.editedItem = res.data.product;
    }).then(function (err) {
      console.log(err);
    });
    axios.get('/api/admin/attributes').then(function (res) {
      _this.subattribs = res.data.attributes; //  console.log(res)
    });
    axios.get('/api/admin/categories').then(function (res) {
      _this.categories = res.data.data; //  console.log(res)
    });
  },
  methods: {
    uploadPhoto1: function uploadPhoto1() {
      var _this2 = this;

      var index = this.product.id;
      var formData = new FormData();
      formData.append('photo', this.imagesItems.image1, this.imagesItems.image1.name);
      formData.append('product', this.editedItem.id);
      axios.post('/api/admin/products/change-photo1', formData).then(function (res) {
        _this2.editedItem.image1 = res.data.product.image1;
      })["catch"](function (err) {
        return console.log(err.response);
      });
    },
    uploadPhoto2: function uploadPhoto2() {
      var _this3 = this;

      var index = this.product.id;
      var formData = new FormData();
      formData.append('photo', this.imagesItems.image2, this.imagesItems.image2.name);
      formData.append('product', this.editedItem.id);
      axios.post('/api/admin/products/change-photo2', formData).then(function (res) {
        _this3.editedItem.image2 = res.data.product.image2;
      })["catch"](function (err) {
        return console.log(err.response);
      });
    },
    uploadPhoto3: function uploadPhoto3() {
      var _this4 = this;

      var index = this.product.id;
      var formData = new FormData();
      formData.append('photo', this.imagesItems.image3, this.imagesItems.image3.name);
      formData.append('product', this.editedItem.id);
      axios.post('/api/admin/products/change-photo3', formData).then(function (res) {
        _this4.editedItem.image3 = res.data.product.image3;
      })["catch"](function (err) {
        return console.log(err.response);
      });
    },
    uploadPhoto4: function uploadPhoto4() {
      var _this5 = this;

      var index = this.product.id;
      var formData = new FormData();
      formData.append('photo', this.imagesItems.image4, this.imagesItems.image4.name);
      formData.append('product', this.editedItem.id);
      axios.post('/api/admin/products/change-photo4', formData).then(function (res) {
        _this5.editedItem.image4 = res.data.product.image4;
      })["catch"](function (err) {
        return console.log(err.response);
      });
    },
    uploadPhoto5: function uploadPhoto5() {
      var _this6 = this;

      var index = this.product.id;
      var formData = new FormData();
      formData.append('photo', this.imagesItems.image5, this.imagesItems.image5.name);
      formData.append('product', this.editedItem.id);
      axios.post('/api/admin/products/change-photo5', formData).then(function (res) {
        _this6.editedItem.image5 = res.data.product.image5;
      })["catch"](function (err) {
        return console.log(err.response);
      });
    },
    uploadPhoto6: function uploadPhoto6() {
      var _this7 = this;

      var index = this.product.id;
      var formData = new FormData();
      formData.append('photo', this.imagesItems.image6, this.imagesItems.image6.name);
      formData.append('product', this.editedItem.id);
      axios.post('/api/admin/products/change-photo6', formData).then(function (res) {
        _this7.editedItem.image6 = res.data.product.image6;
      })["catch"](function (err) {
        return console.log(err.response);
      });
    },
    deleteRow: function deleteRow(index, size_attrib) {
      var idx = this.editedItem.size_attribs.indexOf(size_attrib); // console.log(idx, index);

      if (idx > -1) {
        this.editedItem.size_attribs.splice(idx, 1);
      }
    },
    addNewRow: function addNewRow() {
      this.editedItem.size_attribs.push({
        attributes_id: "",
        xs: "",
        s: "",
        m: "",
        l: "",
        xl: ""
      });
    },
    submit: function submit() {
      var _this8 = this;

      axios.put("/api/admin/products/".concat(this.$route.params.slug), this.editedItem).then(function (res) {
        //    console.log(res)
        //   this.editedItem = res.data.product
        _this8.$router.replace("/admin/products");

        _this8.text = "Record Updated Successfully!";
        _this8.snackbar = true;
      })["catch"](function (err) {
        console.log(err.response);
        _this8.text = "Error Updating Record";
        _this8.snackbar = true;
      });
    }
  } //   mounted() {
  //     if (this.product) {
  //       Object.keys(this.editedItem).forEach(key => {
  //         if (this.product.hasOwnProperty(key)) {
  //           this.editedItem[key] = this.product[key]
  //         }
  //       }),
  //         axios.get('/api/admin/attributes').then(res => {
  //           this.subattribs = res.data.attributes
  //           console.log(res)
  //         })
  //       axios.get('/api/admin/categories').then(res => {
  //         this.categories = res.data.data
  //         console.log(res)
  //       })
  //     }
  //   }

});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/products/Slug.vue?vue&type=template&id=7c4ef1a7&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/products/Slug.vue?vue&type=template&id=7c4ef1a7& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
        "v-container",
        [
          _c(
            "v-toolbar",
            { attrs: { flat: "" } },
            [
              _c("v-toolbar-title", [
                _vm._v("Edit " + _vm._s(_vm.editedItem.name))
              ]),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "div",
                [
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        text: "",
                        color: "primary",
                        to: { name: "admin-products" }
                      }
                    },
                    [_vm._v("Back to products list")]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-expansion-panels",
            [
              _c(
                "v-expansion-panel",
                [
                  _c("v-expansion-panel-header", {
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function(ref) {
                          var open = ref.open
                          return [
                            _c(
                              "v-row",
                              { attrs: { "no-gutters": "" } },
                              [
                                _c("v-col", { attrs: { cols: "4" } }, [
                                  _vm._v("General")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "v-col",
                                  {
                                    staticClass: "text--secondary",
                                    attrs: { cols: "8" }
                                  },
                                  [
                                    _c("v-fade-transition", {
                                      attrs: { "leave-absolute": "" }
                                    })
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
                  }),
                  _vm._v(" "),
                  _c(
                    "v-expansion-panel-content",
                    [
                      _c(
                        "v-row",
                        {
                          staticClass: "d-flex justify-space-around",
                          attrs: { "no-gutters": "" }
                        },
                        [
                          _c(
                            "v-col",
                            {
                              attrs: {
                                cols: "12",
                                sm: "5",
                                md: "5",
                                lg: "5",
                                xl: "5"
                              }
                            },
                            [
                              _c("v-text-field", {
                                attrs: { label: "Name" },
                                model: {
                                  value: _vm.editedItem.name,
                                  callback: function($$v) {
                                    _vm.$set(_vm.editedItem, "name", $$v)
                                  },
                                  expression: "editedItem.name"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-divider", {
                            staticClass: "mx-4 hidden-xs-only",
                            attrs: { vertical: "" }
                          }),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              attrs: {
                                cols: "12",
                                sm: "5",
                                md: "5",
                                lg: "5",
                                xl: "5"
                              }
                            },
                            [
                              _c("v-select", {
                                attrs: {
                                  items: _vm.categories,
                                  "item-text": "name",
                                  "item-value": "id",
                                  label: "Category"
                                },
                                model: {
                                  value: _vm.editedItem.category_id,
                                  callback: function($$v) {
                                    _vm.$set(_vm.editedItem, "category_id", $$v)
                                  },
                                  expression: "editedItem.category_id"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { staticClass: "my-3", attrs: { cols: "12" } },
                            [
                              _c("vue-editor", {
                                model: {
                                  value: _vm.editedItem.description,
                                  callback: function($$v) {
                                    _vm.$set(_vm.editedItem, "description", $$v)
                                  },
                                  expression: "editedItem.description"
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
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-expansion-panel",
                [
                  _c("v-expansion-panel-header", {
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function(ref) {
                          var open = ref.open
                          return [
                            _c(
                              "v-row",
                              { attrs: { "no-gutters": "" } },
                              [
                                _c("v-col", { attrs: { cols: "4" } }, [
                                  _vm._v("Price")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "v-col",
                                  {
                                    staticClass: "text--secondary",
                                    attrs: { cols: "8" }
                                  },
                                  [
                                    _c("v-fade-transition", {
                                      attrs: { "leave-absolute": "" }
                                    })
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
                  }),
                  _vm._v(" "),
                  _c(
                    "v-expansion-panel-content",
                    [
                      _c(
                        "v-row",
                        {
                          staticClass: "d-flex justify-space-around",
                          attrs: { "no-gutters": "" }
                        },
                        [
                          _c(
                            "v-col",
                            {
                              attrs: {
                                cols: "12",
                                sm: "3",
                                md: "3",
                                lg: "3",
                                xl: "3"
                              }
                            },
                            [
                              _c("v-text-field", {
                                attrs: { label: "Price PKR" },
                                model: {
                                  value: _vm.editedItem.price_pkr,
                                  callback: function($$v) {
                                    _vm.$set(_vm.editedItem, "price_pkr", $$v)
                                  },
                                  expression: "editedItem.price_pkr"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: { label: "Price USD" },
                                model: {
                                  value: _vm.editedItem.price_usd,
                                  callback: function($$v) {
                                    _vm.$set(_vm.editedItem, "price_usd", $$v)
                                  },
                                  expression: "editedItem.price_usd"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: { label: "Price AUD" },
                                model: {
                                  value: _vm.editedItem.price_aud,
                                  callback: function($$v) {
                                    _vm.$set(_vm.editedItem, "price_aud", $$v)
                                  },
                                  expression: "editedItem.price_aud"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: { label: "Price EUR" },
                                model: {
                                  value: _vm.editedItem.price_eur,
                                  callback: function($$v) {
                                    _vm.$set(_vm.editedItem, "price_eur", $$v)
                                  },
                                  expression: "editedItem.price_eur"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: { label: "Price GBP" },
                                model: {
                                  value: _vm.editedItem.price_gbp,
                                  callback: function($$v) {
                                    _vm.$set(_vm.editedItem, "price_gbp", $$v)
                                  },
                                  expression: "editedItem.price_gbp"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-divider", {
                            staticClass: "mx-4 hidden-xs-only",
                            attrs: { vertical: "" }
                          }),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              attrs: {
                                cols: "12",
                                sm: "3",
                                md: "3",
                                lg: "3",
                                xl: "3"
                              }
                            },
                            [
                              _c("v-text-field", {
                                attrs: { label: "Stitched Price PKR" },
                                model: {
                                  value: _vm.editedItem.stitched_price_pkr,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.editedItem,
                                      "stitched_price_pkr",
                                      $$v
                                    )
                                  },
                                  expression: "editedItem.stitched_price_pkr"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: { label: "Stitched Price USD" },
                                model: {
                                  value: _vm.editedItem.stitched_price_usd,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.editedItem,
                                      "stitched_price_usd",
                                      $$v
                                    )
                                  },
                                  expression: "editedItem.stitched_price_usd"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: { label: "Stitched Price AUD" },
                                model: {
                                  value: _vm.editedItem.stitched_price_aud,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.editedItem,
                                      "stitched_price_aud",
                                      $$v
                                    )
                                  },
                                  expression: "editedItem.stitched_price_aud"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: { label: "Stitched Price EUR" },
                                model: {
                                  value: _vm.editedItem.stitched_price_eur,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.editedItem,
                                      "stitched_price_eur",
                                      $$v
                                    )
                                  },
                                  expression: "editedItem.stitched_price_eur"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: { label: "Stitched Price GBP" },
                                model: {
                                  value: _vm.editedItem.stitched_price_gbp,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.editedItem,
                                      "stitched_price_gbp",
                                      $$v
                                    )
                                  },
                                  expression: "editedItem.stitched_price_gbp"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-divider", {
                            staticClass: "mx-4 hidden-xs-only",
                            attrs: { vertical: "" }
                          }),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              attrs: {
                                cols: "12",
                                sm: "4",
                                md: "4",
                                lg: "4",
                                xl: "4"
                              }
                            },
                            [
                              _c("v-text-field", {
                                attrs: { label: "Special Price % OFF" },
                                model: {
                                  value:
                                    _vm.editedItem.special_price_percentage,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.editedItem,
                                      "special_price_percentage",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "editedItem.special_price_percentage"
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "v-menu",
                                {
                                  attrs: {
                                    "close-on-content-click": false,
                                    "nudge-right": 40,
                                    transition: "scale-transition",
                                    "offset-y": "",
                                    "min-width": "290px"
                                  },
                                  scopedSlots: _vm._u([
                                    {
                                      key: "activator",
                                      fn: function(ref) {
                                        var on = ref.on
                                        return [
                                          _c(
                                            "v-text-field",
                                            _vm._g(
                                              {
                                                attrs: {
                                                  label: "Special Price Start",
                                                  "prepend-icon":
                                                    "mdi-calendar-month",
                                                  readonly: ""
                                                },
                                                model: {
                                                  value:
                                                    _vm.editedItem
                                                      .special_price_start,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.editedItem,
                                                      "special_price_start",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "editedItem.special_price_start"
                                                }
                                              },
                                              on
                                            )
                                          )
                                        ]
                                      }
                                    }
                                  ]),
                                  model: {
                                    value: _vm.menu_special_price_start,
                                    callback: function($$v) {
                                      _vm.menu_special_price_start = $$v
                                    },
                                    expression: "menu_special_price_start"
                                  }
                                },
                                [
                                  _vm._v(" "),
                                  _c("v-date-picker", {
                                    on: {
                                      input: function($event) {
                                        _vm.menu_special_price_start = false
                                      }
                                    },
                                    model: {
                                      value: _vm.editedItem.special_price_start,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.editedItem,
                                          "special_price_start",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "editedItem.special_price_start"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-menu",
                                {
                                  attrs: {
                                    "close-on-content-click": false,
                                    "nudge-right": 40,
                                    transition: "scale-transition",
                                    "offset-y": "",
                                    "min-width": "290px"
                                  },
                                  scopedSlots: _vm._u([
                                    {
                                      key: "activator",
                                      fn: function(ref) {
                                        var on = ref.on
                                        return [
                                          _c(
                                            "v-text-field",
                                            _vm._g(
                                              {
                                                attrs: {
                                                  label: "Special Price End",
                                                  "prepend-icon":
                                                    "mdi-calendar-month",
                                                  readonly: ""
                                                },
                                                model: {
                                                  value:
                                                    _vm.editedItem
                                                      .special_price_end,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.editedItem,
                                                      "special_price_end",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "editedItem.special_price_end"
                                                }
                                              },
                                              on
                                            )
                                          )
                                        ]
                                      }
                                    }
                                  ]),
                                  model: {
                                    value: _vm.menu_special_price_end,
                                    callback: function($$v) {
                                      _vm.menu_special_price_end = $$v
                                    },
                                    expression: "menu_special_price_end"
                                  }
                                },
                                [
                                  _vm._v(" "),
                                  _c("v-date-picker", {
                                    on: {
                                      input: function($event) {
                                        _vm.menu_special_price_end = false
                                      }
                                    },
                                    model: {
                                      value: _vm.editedItem.special_price_end,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.editedItem,
                                          "special_price_end",
                                          $$v
                                        )
                                      },
                                      expression: "editedItem.special_price_end"
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
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-expansion-panel",
                [
                  _c("v-expansion-panel-header", {
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function(ref) {
                          var open = ref.open
                          return [
                            _c(
                              "v-row",
                              { attrs: { "no-gutters": "" } },
                              [
                                _c("v-col", { attrs: { cols: "4" } }, [
                                  _vm._v("Images")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "v-col",
                                  {
                                    staticClass: "text--secondary",
                                    attrs: { cols: "8" }
                                  },
                                  [
                                    _c("v-fade-transition", {
                                      attrs: { "leave-absolute": "" }
                                    })
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
                  }),
                  _vm._v(" "),
                  _c(
                    "v-expansion-panel-content",
                    [
                      _c(
                        "v-row",
                        {
                          staticClass: "d-flex justify-space-around",
                          attrs: { "no-gutters": "" }
                        },
                        [
                          _c(
                            "v-dialog",
                            {
                              attrs: { "max-width": "300px" },
                              scopedSlots: _vm._u([
                                {
                                  key: "activator",
                                  fn: function(ref) {
                                    var on = ref.on
                                    return [
                                      _c(
                                        "v-avatar",
                                        _vm._g(
                                          {
                                            staticClass: "profile",
                                            attrs: {
                                              color: "grey",
                                              size: "164",
                                              tile: ""
                                            }
                                          },
                                          on
                                        ),
                                        [
                                          _c("v-img", {
                                            attrs: {
                                              src: _vm.editedItem.image1
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    ]
                                  }
                                }
                              ]),
                              model: {
                                value: _vm.dialogPhoto1,
                                callback: function($$v) {
                                  _vm.dialogPhoto1 = $$v
                                },
                                expression: "dialogPhoto1"
                              }
                            },
                            [
                              _vm._v(" "),
                              _c(
                                "v-card",
                                [
                                  _c("v-card-title", [
                                    _c("span", { staticClass: "headline" }, [
                                      _vm._v("Update Product Image")
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "v-card-text",
                                    [
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12" } },
                                        [
                                          _c("v-file-input", {
                                            attrs: {
                                              label: "Select Photo",
                                              placeholder: "Upload Image",
                                              accept:
                                                "image/jpg, image/png, image/bmp, image/jpeg"
                                            },
                                            on: {
                                              change: function($event) {
                                                return _vm.uploadPhoto1()
                                              }
                                            },
                                            model: {
                                              value: _vm.imagesItems.image1,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.imagesItems,
                                                  "image1",
                                                  $$v
                                                )
                                              },
                                              expression: "imagesItems.image1"
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
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-dialog",
                            {
                              attrs: { "max-width": "300px" },
                              scopedSlots: _vm._u([
                                {
                                  key: "activator",
                                  fn: function(ref) {
                                    var on = ref.on
                                    return [
                                      _c(
                                        "v-avatar",
                                        _vm._g(
                                          {
                                            staticClass: "profile",
                                            attrs: {
                                              color: "grey",
                                              size: "164",
                                              tile: ""
                                            }
                                          },
                                          on
                                        ),
                                        [
                                          _c("v-img", {
                                            attrs: {
                                              src: _vm.editedItem.image2
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    ]
                                  }
                                }
                              ]),
                              model: {
                                value: _vm.dialogPhoto2,
                                callback: function($$v) {
                                  _vm.dialogPhoto2 = $$v
                                },
                                expression: "dialogPhoto2"
                              }
                            },
                            [
                              _vm._v(" "),
                              _c(
                                "v-card",
                                [
                                  _c("v-card-title", [
                                    _c("span", { staticClass: "headline" }, [
                                      _vm._v("Update Product Image")
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "v-card-text",
                                    [
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12" } },
                                        [
                                          _c("v-file-input", {
                                            attrs: {
                                              label: "Select Photo",
                                              placeholder: "Upload Image",
                                              accept:
                                                "image/jpg, image/png, image/bmp, image/jpeg"
                                            },
                                            on: {
                                              change: function($event) {
                                                return _vm.uploadPhoto2()
                                              }
                                            },
                                            model: {
                                              value: _vm.imagesItems.image2,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.imagesItems,
                                                  "image2",
                                                  $$v
                                                )
                                              },
                                              expression: "imagesItems.image2"
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
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-dialog",
                            {
                              attrs: { "max-width": "300px" },
                              scopedSlots: _vm._u([
                                {
                                  key: "activator",
                                  fn: function(ref) {
                                    var on = ref.on
                                    return [
                                      _c(
                                        "v-avatar",
                                        _vm._g(
                                          {
                                            staticClass: "profile",
                                            attrs: {
                                              color: "grey",
                                              size: "164",
                                              tile: ""
                                            }
                                          },
                                          on
                                        ),
                                        [
                                          _vm.editedItem.image3
                                            ? _c("v-img", {
                                                attrs: {
                                                  src: _vm.editedItem.image3
                                                }
                                              })
                                            : _c("v-img", {
                                                attrs: { src: _vm.productImg }
                                              })
                                        ],
                                        1
                                      )
                                    ]
                                  }
                                }
                              ]),
                              model: {
                                value: _vm.dialogPhoto3,
                                callback: function($$v) {
                                  _vm.dialogPhoto3 = $$v
                                },
                                expression: "dialogPhoto3"
                              }
                            },
                            [
                              _vm._v(" "),
                              _c(
                                "v-card",
                                [
                                  _c("v-card-title", [
                                    _c("span", { staticClass: "headline" }, [
                                      _vm._v("Update Product Image")
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "v-card-text",
                                    [
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12" } },
                                        [
                                          _c("v-file-input", {
                                            attrs: {
                                              label: "Select Photo",
                                              placeholder: "Upload Image",
                                              accept:
                                                "image/jpg, image/png, image/bmp, image/jpeg"
                                            },
                                            on: {
                                              change: function($event) {
                                                return _vm.uploadPhoto3()
                                              }
                                            },
                                            model: {
                                              value: _vm.imagesItems.image3,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.imagesItems,
                                                  "image3",
                                                  $$v
                                                )
                                              },
                                              expression: "imagesItems.image3"
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
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-dialog",
                            {
                              attrs: { "max-width": "300px" },
                              scopedSlots: _vm._u([
                                {
                                  key: "activator",
                                  fn: function(ref) {
                                    var on = ref.on
                                    return [
                                      _c(
                                        "v-avatar",
                                        _vm._g(
                                          {
                                            staticClass: "profile",
                                            attrs: {
                                              color: "grey",
                                              size: "164",
                                              tile: ""
                                            }
                                          },
                                          on
                                        ),
                                        [
                                          _vm.editedItem.image4
                                            ? _c("v-img", {
                                                attrs: {
                                                  src: _vm.editedItem.image4
                                                }
                                              })
                                            : _c("v-img", {
                                                attrs: { src: _vm.productImg }
                                              })
                                        ],
                                        1
                                      )
                                    ]
                                  }
                                }
                              ]),
                              model: {
                                value: _vm.dialogPhoto4,
                                callback: function($$v) {
                                  _vm.dialogPhoto4 = $$v
                                },
                                expression: "dialogPhoto4"
                              }
                            },
                            [
                              _vm._v(" "),
                              _c(
                                "v-card",
                                [
                                  _c("v-card-title", [
                                    _c("span", { staticClass: "headline" }, [
                                      _vm._v("Update Product Image")
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "v-card-text",
                                    [
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12" } },
                                        [
                                          _c("v-file-input", {
                                            attrs: {
                                              label: "Select Photo",
                                              placeholder: "Upload Image",
                                              accept:
                                                "image/jpg, image/png, image/bmp, image/jpeg"
                                            },
                                            on: {
                                              change: function($event) {
                                                return _vm.uploadPhoto4()
                                              }
                                            },
                                            model: {
                                              value: _vm.imagesItems.image4,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.imagesItems,
                                                  "image4",
                                                  $$v
                                                )
                                              },
                                              expression: "imagesItems.image4"
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
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-dialog",
                            {
                              attrs: { "max-width": "300px" },
                              scopedSlots: _vm._u([
                                {
                                  key: "activator",
                                  fn: function(ref) {
                                    var on = ref.on
                                    return [
                                      _c(
                                        "v-avatar",
                                        _vm._g(
                                          {
                                            staticClass: "profile",
                                            attrs: {
                                              color: "grey",
                                              size: "164",
                                              tile: ""
                                            }
                                          },
                                          on
                                        ),
                                        [
                                          _vm.editedItem.image5
                                            ? _c("v-img", {
                                                attrs: {
                                                  src: _vm.editedItem.image5
                                                }
                                              })
                                            : _c("v-img", {
                                                attrs: { src: _vm.productImg }
                                              })
                                        ],
                                        1
                                      )
                                    ]
                                  }
                                }
                              ]),
                              model: {
                                value: _vm.dialogPhoto5,
                                callback: function($$v) {
                                  _vm.dialogPhoto5 = $$v
                                },
                                expression: "dialogPhoto5"
                              }
                            },
                            [
                              _vm._v(" "),
                              _c(
                                "v-card",
                                [
                                  _c("v-card-title", [
                                    _c("span", { staticClass: "headline" }, [
                                      _vm._v("Update Product Image")
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "v-card-text",
                                    [
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12" } },
                                        [
                                          _c("v-file-input", {
                                            attrs: {
                                              label: "Select Photo",
                                              placeholder: "Upload Image",
                                              accept:
                                                "image/jpg, image/png, image/bmp, image/jpeg"
                                            },
                                            on: {
                                              change: function($event) {
                                                return _vm.uploadPhoto5()
                                              }
                                            },
                                            model: {
                                              value: _vm.imagesItems.image5,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.imagesItems,
                                                  "image5",
                                                  $$v
                                                )
                                              },
                                              expression: "imagesItems.image5"
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
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-dialog",
                            {
                              attrs: { "max-width": "300px" },
                              scopedSlots: _vm._u([
                                {
                                  key: "activator",
                                  fn: function(ref) {
                                    var on = ref.on
                                    return [
                                      _c(
                                        "v-avatar",
                                        _vm._g(
                                          {
                                            staticClass: "profile",
                                            attrs: {
                                              color: "grey",
                                              size: "164",
                                              tile: ""
                                            }
                                          },
                                          on
                                        ),
                                        [
                                          _vm.editedItem.image6
                                            ? _c("v-img", {
                                                attrs: {
                                                  src: _vm.editedItem.image6
                                                }
                                              })
                                            : _c("v-img", {
                                                attrs: { src: _vm.productImg }
                                              })
                                        ],
                                        1
                                      )
                                    ]
                                  }
                                }
                              ]),
                              model: {
                                value: _vm.dialogPhoto6,
                                callback: function($$v) {
                                  _vm.dialogPhoto6 = $$v
                                },
                                expression: "dialogPhoto6"
                              }
                            },
                            [
                              _vm._v(" "),
                              _c(
                                "v-card",
                                [
                                  _c("v-card-title", [
                                    _c("span", { staticClass: "headline" }, [
                                      _vm._v("Update Product Image")
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "v-card-text",
                                    [
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12" } },
                                        [
                                          _c("v-file-input", {
                                            attrs: {
                                              label: "Select Photo",
                                              placeholder: "Upload Image",
                                              accept:
                                                "image/jpg, image/png, image/bmp, image/jpeg"
                                            },
                                            on: {
                                              change: function($event) {
                                                return _vm.uploadPhoto6()
                                              }
                                            },
                                            model: {
                                              value: _vm.imagesItems.image6,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.imagesItems,
                                                  "image6",
                                                  $$v
                                                )
                                              },
                                              expression: "imagesItems.image6"
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
                "v-expansion-panel",
                [
                  _c("v-expansion-panel-header", {
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function(ref) {
                          var open = ref.open
                          return [
                            _c(
                              "v-row",
                              { attrs: { "no-gutters": "" } },
                              [
                                _c("v-col", { attrs: { cols: "4" } }, [
                                  _vm._v("Attributes")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "v-col",
                                  {
                                    staticClass: "text--secondary",
                                    attrs: { cols: "8" }
                                  },
                                  [
                                    _c("v-fade-transition", {
                                      attrs: { "leave-absolute": "" }
                                    })
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
                  }),
                  _vm._v(" "),
                  _c(
                    "v-expansion-panel-content",
                    [
                      _c(
                        "v-row",
                        {
                          staticClass: "d-flex justify-space-around",
                          attrs: { "no-gutters": "" }
                        },
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c("v-simple-table", {
                                scopedSlots: _vm._u([
                                  {
                                    key: "default",
                                    fn: function() {
                                      return [
                                        _c("thead", [
                                          _c("tr", [
                                            _c("th"),
                                            _vm._v(" "),
                                            _c("th", [_vm._v("Attribute")]),
                                            _vm._v(" "),
                                            _c(
                                              "th",
                                              { staticClass: "text-center" },
                                              [_vm._v("XS")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "th",
                                              { staticClass: "text-center" },
                                              [_vm._v("S")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "th",
                                              { staticClass: "text-center" },
                                              [_vm._v("M")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "th",
                                              { staticClass: "text-center" },
                                              [_vm._v("L")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "th",
                                              { staticClass: "text-center" },
                                              [_vm._v("XL")]
                                            )
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "tbody",
                                          _vm._l(
                                            _vm.editedItem.size_attribs,
                                            function(size_attrib, k) {
                                              return _c("tr", { key: k }, [
                                                _c(
                                                  "td",
                                                  { attrs: { scope: "row" } },
                                                  [
                                                    _c(
                                                      "v-btn",
                                                      {
                                                        attrs: { icon: "" },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            return _vm.deleteRow(
                                                              k,
                                                              size_attrib
                                                            )
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "v-icon",
                                                          {
                                                            attrs: {
                                                              color: "error"
                                                            }
                                                          },
                                                          [_vm._v("mdi-delete")]
                                                        )
                                                      ],
                                                      1
                                                    )
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "td",
                                                  [
                                                    _c("v-select", {
                                                      attrs: {
                                                        items: _vm.subattribs,
                                                        "item-text": "name",
                                                        "item-value": "id",
                                                        label: "Sub"
                                                      },
                                                      model: {
                                                        value:
                                                          size_attrib.attributes_id,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            size_attrib,
                                                            "attributes_id",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "size_attrib.attributes_id"
                                                      }
                                                    })
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "td",
                                                  [
                                                    _c("v-text-field", {
                                                      attrs: {
                                                        type: "number",
                                                        min: "0",
                                                        step: ".01"
                                                      },
                                                      model: {
                                                        value: size_attrib.xs,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            size_attrib,
                                                            "xs",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "size_attrib.xs"
                                                      }
                                                    })
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "td",
                                                  [
                                                    _c("v-text-field", {
                                                      attrs: {
                                                        type: "number",
                                                        min: "0",
                                                        step: ".01"
                                                      },
                                                      model: {
                                                        value: size_attrib.s,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            size_attrib,
                                                            "s",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "size_attrib.s"
                                                      }
                                                    })
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "td",
                                                  [
                                                    _c("v-text-field", {
                                                      attrs: {
                                                        type: "number",
                                                        min: "0",
                                                        step: ".01"
                                                      },
                                                      model: {
                                                        value: size_attrib.m,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            size_attrib,
                                                            "m",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "size_attrib.m"
                                                      }
                                                    })
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "td",
                                                  [
                                                    _c("v-text-field", {
                                                      attrs: {
                                                        type: "number",
                                                        min: "0",
                                                        step: ".01"
                                                      },
                                                      model: {
                                                        value: size_attrib.l,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            size_attrib,
                                                            "l",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "size_attrib.l"
                                                      }
                                                    })
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "td",
                                                  [
                                                    _c("v-text-field", {
                                                      attrs: {
                                                        type: "number",
                                                        min: "0",
                                                        step: ".01"
                                                      },
                                                      model: {
                                                        value: size_attrib.xl,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            size_attrib,
                                                            "xl",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "size_attrib.xl"
                                                      }
                                                    })
                                                  ],
                                                  1
                                                )
                                              ])
                                            }
                                          ),
                                          0
                                        )
                                      ]
                                    },
                                    proxy: true
                                  }
                                ])
                              }),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  staticClass: "mt-2",
                                  attrs: { color: "secondary" },
                                  on: { click: _vm.addNewRow }
                                },
                                [_vm._v("Add Row")]
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
                "v-expansion-panel",
                [
                  _c("v-expansion-panel-header", {
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function(ref) {
                          var open = ref.open
                          return [
                            _c(
                              "v-row",
                              { attrs: { "no-gutters": "" } },
                              [
                                _c("v-col", { attrs: { cols: "4" } }, [
                                  _vm._v("Additionals")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "v-col",
                                  {
                                    staticClass: "text--secondary",
                                    attrs: { cols: "8" }
                                  },
                                  [
                                    _c("v-fade-transition", {
                                      attrs: { "leave-absolute": "" }
                                    })
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
                  }),
                  _vm._v(" "),
                  _c(
                    "v-expansion-panel-content",
                    [
                      _c(
                        "v-row",
                        {
                          staticClass: "d-flex justify-space-around",
                          attrs: { "no-gutters": "" }
                        },
                        [
                          _c(
                            "v-col",
                            {
                              attrs: {
                                cols: "12",
                                sm: "5",
                                md: "5",
                                lg: "5",
                                xl: "5"
                              }
                            },
                            [
                              _c("v-textarea", {
                                attrs: {
                                  name: "input-7-1",
                                  label: "Short Description",
                                  hint: "Hint text"
                                },
                                model: {
                                  value: _vm.editedItem.short_description,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.editedItem,
                                      "short_description",
                                      $$v
                                    )
                                  },
                                  expression: "editedItem.short_description"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-divider", {
                            staticClass: "mx-4 hidden-xs-only",
                            attrs: { vertical: "" }
                          }),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              attrs: {
                                cols: "12",
                                sm: "5",
                                md: "5",
                                lg: "5",
                                xl: "5"
                              }
                            },
                            [
                              _c(
                                "v-menu",
                                {
                                  attrs: {
                                    "close-on-content-click": false,
                                    "nudge-right": 40,
                                    transition: "scale-transition",
                                    "offset-y": "",
                                    "min-width": "290px"
                                  },
                                  scopedSlots: _vm._u([
                                    {
                                      key: "activator",
                                      fn: function(ref) {
                                        var on = ref.on
                                        return [
                                          _c(
                                            "v-text-field",
                                            _vm._g(
                                              {
                                                attrs: {
                                                  label: "Product New From",
                                                  "prepend-icon":
                                                    "mdi-calendar-month",
                                                  readonly: ""
                                                },
                                                model: {
                                                  value:
                                                    _vm.editedItem.new_from,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.editedItem,
                                                      "new_from",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "editedItem.new_from"
                                                }
                                              },
                                              on
                                            )
                                          )
                                        ]
                                      }
                                    }
                                  ]),
                                  model: {
                                    value: _vm.menu_new_from,
                                    callback: function($$v) {
                                      _vm.menu_new_from = $$v
                                    },
                                    expression: "menu_new_from"
                                  }
                                },
                                [
                                  _vm._v(" "),
                                  _c("v-date-picker", {
                                    on: {
                                      input: function($event) {
                                        _vm.menu_new_from = false
                                      }
                                    },
                                    model: {
                                      value: _vm.editedItem.new_from,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.editedItem,
                                          "new_from",
                                          $$v
                                        )
                                      },
                                      expression: "editedItem.new_from"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-menu",
                                {
                                  attrs: {
                                    "close-on-content-click": false,
                                    "nudge-right": 40,
                                    transition: "scale-transition",
                                    "offset-y": "",
                                    "min-width": "290px"
                                  },
                                  scopedSlots: _vm._u([
                                    {
                                      key: "activator",
                                      fn: function(ref) {
                                        var on = ref.on
                                        return [
                                          _c(
                                            "v-text-field",
                                            _vm._g(
                                              {
                                                attrs: {
                                                  label: "Product New To",
                                                  "prepend-icon":
                                                    "mdi-calendar-month",
                                                  readonly: ""
                                                },
                                                model: {
                                                  value: _vm.editedItem.new_to,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.editedItem,
                                                      "new_to",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "editedItem.new_to"
                                                }
                                              },
                                              on
                                            )
                                          )
                                        ]
                                      }
                                    }
                                  ]),
                                  model: {
                                    value: _vm.menu_new_to,
                                    callback: function($$v) {
                                      _vm.menu_new_to = $$v
                                    },
                                    expression: "menu_new_to"
                                  }
                                },
                                [
                                  _vm._v(" "),
                                  _c("v-date-picker", {
                                    on: {
                                      input: function($event) {
                                        _vm.menu_new_to = false
                                      }
                                    },
                                    model: {
                                      value: _vm.editedItem.new_to,
                                      callback: function($$v) {
                                        _vm.$set(_vm.editedItem, "new_to", $$v)
                                      },
                                      expression: "editedItem.new_to"
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
            { staticClass: "float-right" },
            [
              _c(
                "v-btn",
                {
                  staticClass: "my-5",
                  attrs: { dark: "", color: "primary" },
                  on: { click: _vm.submit }
                },
                [_vm._v("Submit")]
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/admin/products/Slug.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/admin/products/Slug.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Slug_vue_vue_type_template_id_7c4ef1a7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Slug.vue?vue&type=template&id=7c4ef1a7& */ "./resources/js/views/admin/products/Slug.vue?vue&type=template&id=7c4ef1a7&");
/* harmony import */ var _Slug_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Slug.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/products/Slug.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Slug_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Slug_vue_vue_type_template_id_7c4ef1a7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Slug_vue_vue_type_template_id_7c4ef1a7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/products/Slug.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/products/Slug.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/admin/products/Slug.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Slug_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Slug.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/products/Slug.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Slug_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/products/Slug.vue?vue&type=template&id=7c4ef1a7&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/admin/products/Slug.vue?vue&type=template&id=7c4ef1a7& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Slug_vue_vue_type_template_id_7c4ef1a7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Slug.vue?vue&type=template&id=7c4ef1a7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/products/Slug.vue?vue&type=template&id=7c4ef1a7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Slug_vue_vue_type_template_id_7c4ef1a7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Slug_vue_vue_type_template_id_7c4ef1a7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);