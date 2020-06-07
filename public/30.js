(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/orders/Id.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/orders/Id.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
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
//var moment = require('moment');
/* harmony default export */ __webpack_exports__["default"] = ({
  layout: 'admin',
  middleware: ['auth', 'admin'],
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: 'Orders',
    titleTemplate: '%s | Khodgi'
  },
  data: function data() {
    return {
      order: [],
      dialog: false,
      dialog2: false,
      product_sizes: '',
      itemIndex: ''
    };
  },
  //     filters: {
  //       formatDate: function (value) {
  //           return moment(value).format('MMMM D, YYYY');
  //       }
  //   },
  created: function created() {
    var _this = this;

    axios.get("/api/admin/orders/single-order/".concat(this.$route.params.id)).then(function (res) {
      _this.order = res.data.order;
    })["catch"](function (err) {
      console.log();
    });
  },
  methods: {
    printme: function printme(el) {
      // let restorepage = document.body.innerHTML;
      // let printcontent = document.getElementById(el).innerHTML;
      // document.body.innerHTML = restorepage;
      window.print(); // document.body.innerHTML = restorepage;
    },
    getSize: function getSize(item) {
      var _this2 = this;

      axios.post("/api/admin/orders/get-item-size", {
        product_id: item.product_id,
        order_id: this.order.id
      }).then(function (res) {
        _this2.product_sizes = res.data.sizes;
      })["catch"](function (err) {
        console.log();
      });
    },
    getItemIndex: function getItemIndex(item) {
      this.itemIndex = this.order.order_items.indexOf(item);
    }
  },
  computed: {
    finalTotal: function finalTotal() {
      return parseFloat(this.order.total) - parseFloat(this.order.discount ? this.order.discount : 0) + parseFloat(this.order.shipping_cost ? this.order.shipping_cost : 0);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/orders/Id.vue?vue&type=template&id=33f10ab6&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/orders/Id.vue?vue&type=template&id=33f10ab6& ***!
  \*************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "printable" } }, [
    _c(
      "div",
      { staticClass: "mt-3" },
      [
        _c(
          "div",
          { staticClass: "d-flex " },
          [
            _c("h3", { staticClass: "my-2 float-left" }, [
              _vm._v("View Order")
            ]),
            _vm._v(" "),
            _c("v-spacer"),
            _vm._v(" "),
            _c(
              "v-btn",
              {
                staticClass: "hidden-print-only float-right",
                attrs: {
                  icon: "",
                  color: "",
                  target: "_blank",
                  to: "/admin/orders/print/" + _vm.order.id
                }
              },
              [
                _c("v-icon", [
                  _vm._v("\n                mdi-printer\n            ")
                ])
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("v-divider"),
        _vm._v(" "),
        _c("v-col", { attrs: { cols: "12", sm: "6", md: "6", lg: "6" } }, [
          _c("h4", { staticClass: "my-2" }, [_vm._v("Order Details")]),
          _vm._v(" "),
          _c("tbody", [
            _c("tr", [
              _c("td", [_vm._v("Telephone:")]),
              _vm._v(" "),
              _c("td", { staticClass: "pl-5" }, [
                _vm._v(_vm._s(_vm.order.customer_phone))
              ])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", [_vm._v("Email:")]),
              _vm._v(" "),
              _c("td", { staticClass: "pl-5" }, [
                _vm._v(_vm._s(_vm.order.customer_email))
              ])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", [_vm._v("Date:")]),
              _vm._v(" "),
              _c("td", { staticClass: "pl-5" }, [
                _vm._v(_vm._s(_vm._f("date")(_vm.order.created_at)))
              ])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", {}, [_vm._v("Payment Method:")]),
              _vm._v(" "),
              _c("td", { staticClass: "pl-5" }, [
                _vm._v(_vm._s(_vm.order.payment_method))
              ])
            ])
          ])
        ])
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      {},
      [
        _c(
          "v-col",
          {
            staticClass: "float-left",
            attrs: { cols: "12", sm: "6", md: "6", lg: "6" }
          },
          [
            _c("h4", { staticClass: "my-2" }, [_vm._v("Billing Address")]),
            _vm._v(" "),
            _c("tr", [
              _vm._v(
                _vm._s(_vm.order.billing_first_name) +
                  " " +
                  _vm._s(_vm.order.billing_last_name)
              )
            ]),
            _vm._v(" "),
            _c("tr", [_vm._v(_vm._s(_vm.order.billing_address))]),
            _vm._v(" "),
            _c("tr", [_vm._v(_vm._s(_vm.order.billing_appartment))]),
            _vm._v(" "),
            _c("tr", [
              _vm._v(
                _vm._s(_vm.order.billing_city) +
                  " " +
                  _vm._s(_vm.order.billing_postal_code)
              )
            ]),
            _vm._v(" "),
            _c("tr", [_vm._v(_vm._s(_vm.order.billing_country_region))])
          ]
        ),
        _vm._v(" "),
        _c(
          "v-col",
          {
            staticClass: "float-right",
            attrs: { cols: "12", sm: "6", md: "6", lg: "6" }
          },
          [
            _c("h4", { staticClass: "my-2" }, [_vm._v("Shipping Address")]),
            _vm._v(" "),
            _c("tr", [
              _vm._v(
                _vm._s(_vm.order.shipping_first_name) +
                  " " +
                  _vm._s(_vm.order.shipping_last_name)
              )
            ]),
            _vm._v(" "),
            _c("tr", [_vm._v(_vm._s(_vm.order.shipping_address))]),
            _vm._v(" "),
            _c("tr", [_vm._v(_vm._s(_vm.order.shipping_appartment))]),
            _vm._v(" "),
            _c("tr", [
              _vm._v(
                _vm._s(_vm.order.shipping_city) +
                  " " +
                  _vm._s(_vm.order.shipping_postal_code)
              )
            ]),
            _vm._v(" "),
            _c("tr", [_vm._v(_vm._s(_vm.order.shipping_country_region))])
          ]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      [
        _c(
          "v-col",
          { staticClass: "mt-6", attrs: { cols: "12" } },
          [
            _c("h4", { staticClass: "my-2" }, [_vm._v("Items Ordered")]),
            _vm._v(" "),
            _c("v-divider"),
            _vm._v(" "),
            _c("v-simple-table", {
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function() {
                    return [
                      _c("thead", [
                        _c("tr", [
                          _c("th", { staticClass: "text-left" }, [
                            _vm._v("Product")
                          ]),
                          _vm._v(" "),
                          _c("th", { staticClass: "text-left" }, [
                            _vm._v("Type")
                          ]),
                          _vm._v(" "),
                          _c("th", { staticClass: "text-left" }, [
                            _vm._v("Size")
                          ]),
                          _vm._v(" "),
                          _c("th", { staticClass: "text-left" }, [
                            _vm._v("Unit Price")
                          ]),
                          _vm._v(" "),
                          _c("th", { staticClass: "text-left" }, [
                            _vm._v("Quantity")
                          ]),
                          _vm._v(" "),
                          _c("th", { staticClass: "text-left" }, [
                            _vm._v("Line Total")
                          ]),
                          _vm._v(" "),
                          _c("th", { attrs: { width: "8%" } })
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "tbody",
                        _vm._l(_vm.order.order_items, function(item) {
                          return _c("tr", { key: item.id }, [
                            _c("td", [_vm._v(_vm._s(item.product_name))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(item.type))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(item.size))]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                _vm._s(item.currency_symbol) +
                                  _vm._s(item.unit_price)
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(item.qty))]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                _vm._s(item.currency_symbol) +
                                  _vm._s(item.line_total)
                              )
                            ]),
                            _vm._v(" "),
                            item.size
                              ? _c("th", [
                                  item.size != "Custom Size"
                                    ? _c(
                                        "div",
                                        [
                                          _c(
                                            "v-dialog",
                                            {
                                              attrs: { width: "300px" },
                                              scopedSlots: _vm._u(
                                                [
                                                  {
                                                    key: "activator",
                                                    fn: function(ref) {
                                                      var on = ref.on
                                                      return [
                                                        _c(
                                                          "v-btn",
                                                          _vm._g(
                                                            {
                                                              attrs: {
                                                                icon: ""
                                                              },
                                                              on: {
                                                                click: function(
                                                                  $event
                                                                ) {
                                                                  return _vm.getSize(
                                                                    item
                                                                  )
                                                                }
                                                              }
                                                            },
                                                            on
                                                          ),
                                                          [
                                                            _c(
                                                              "v-icon",
                                                              {
                                                                attrs: {
                                                                  left: ""
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "mdi-tshirt-v"
                                                                )
                                                              ]
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
                                              ),
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
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass: "headline"
                                                      },
                                                      [_vm._v("Size Chart")]
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-card-text",
                                                    _vm._l(
                                                      _vm.product_sizes,
                                                      function(
                                                        topic,
                                                        label,
                                                        index
                                                      ) {
                                                        return _c(
                                                          "div",
                                                          {
                                                            key: index,
                                                            staticClass: "mt-3"
                                                          },
                                                          [
                                                            _c(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "d-flex justify-center"
                                                              },
                                                              [
                                                                _c(
                                                                  "strong",
                                                                  {
                                                                    staticClass:
                                                                      "text-center mt-3"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      " #Order: " +
                                                                        _vm._s(
                                                                          _vm
                                                                            .order
                                                                            .id
                                                                        ) +
                                                                        " | " +
                                                                        _vm._s(
                                                                          item.product_name
                                                                        ) +
                                                                        " | " +
                                                                        _vm._s(
                                                                          item.type
                                                                        ) +
                                                                        " | " +
                                                                        _vm._s(
                                                                          item.size
                                                                        )
                                                                    )
                                                                  ]
                                                                )
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "d-flex justify-center"
                                                              },
                                                              [
                                                                _c(
                                                                  "strong",
                                                                  {
                                                                    staticClass:
                                                                      "text-center mt-3"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      " " +
                                                                        _vm._s(
                                                                          label
                                                                        )
                                                                    )
                                                                  ]
                                                                )
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "v-simple-table",
                                                              {
                                                                scopedSlots: _vm._u(
                                                                  [
                                                                    {
                                                                      key:
                                                                        "default",
                                                                      fn: function() {
                                                                        return [
                                                                          _c(
                                                                            "thead",
                                                                            [
                                                                              _c(
                                                                                "tr",
                                                                                [
                                                                                  _c(
                                                                                    "th",
                                                                                    {
                                                                                      staticClass:
                                                                                        "text-left",
                                                                                      attrs: {
                                                                                        width:
                                                                                          "60%"
                                                                                      }
                                                                                    },
                                                                                    [
                                                                                      _vm._v(
                                                                                        "Size Attribute"
                                                                                      )
                                                                                    ]
                                                                                  ),
                                                                                  _vm._v(
                                                                                    " "
                                                                                  ),
                                                                                  _c(
                                                                                    "th",
                                                                                    {
                                                                                      staticClass:
                                                                                        "text-left"
                                                                                    },
                                                                                    [
                                                                                      _vm._v(
                                                                                        "Size"
                                                                                      )
                                                                                    ]
                                                                                  )
                                                                                ]
                                                                              )
                                                                            ]
                                                                          ),
                                                                          _vm._v(
                                                                            " "
                                                                          ),
                                                                          _c(
                                                                            "tbody",
                                                                            _vm._l(
                                                                              topic,
                                                                              function(
                                                                                item,
                                                                                itemID
                                                                              ) {
                                                                                return _c(
                                                                                  "tr",
                                                                                  {
                                                                                    key: itemID
                                                                                  },
                                                                                  [
                                                                                    _c(
                                                                                      "td",
                                                                                      [
                                                                                        _vm._v(
                                                                                          _vm._s(
                                                                                            item.name
                                                                                          )
                                                                                        )
                                                                                      ]
                                                                                    ),
                                                                                    _vm._v(
                                                                                      " "
                                                                                    ),
                                                                                    _c(
                                                                                      "td",
                                                                                      [
                                                                                        _vm._v(
                                                                                          _vm._s(
                                                                                            item.size
                                                                                          )
                                                                                        )
                                                                                      ]
                                                                                    )
                                                                                  ]
                                                                                )
                                                                              }
                                                                            ),
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
                                                              }
                                                            )
                                                          ],
                                                          1
                                                        )
                                                      }
                                                    ),
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
                                      )
                                    : _c(
                                        "div",
                                        [
                                          _c(
                                            "v-dialog",
                                            {
                                              attrs: { width: "300px" },
                                              scopedSlots: _vm._u(
                                                [
                                                  {
                                                    key: "activator",
                                                    fn: function(ref) {
                                                      var on = ref.on
                                                      return [
                                                        _c(
                                                          "v-btn",
                                                          _vm._g(
                                                            {
                                                              attrs: {
                                                                icon: ""
                                                              },
                                                              on: {
                                                                click: function(
                                                                  $event
                                                                ) {
                                                                  return _vm.getItemIndex(
                                                                    item
                                                                  )
                                                                }
                                                              }
                                                            },
                                                            on
                                                          ),
                                                          [
                                                            _c(
                                                              "v-icon",
                                                              {
                                                                attrs: {
                                                                  left: ""
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "mdi-tshirt-v"
                                                                )
                                                              ]
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
                                              ),
                                              model: {
                                                value: _vm.dialog2,
                                                callback: function($$v) {
                                                  _vm.dialog2 = $$v
                                                },
                                                expression: "dialog2"
                                              }
                                            },
                                            [
                                              _vm._v(" "),
                                              _c(
                                                "v-card",
                                                [
                                                  _c("v-card-title", [
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass: "headline"
                                                      },
                                                      [_vm._v("Size Chart")]
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-card-text",
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "d-flex justify-center"
                                                        },
                                                        [
                                                          _c(
                                                            "strong",
                                                            {
                                                              staticClass:
                                                                "text-center mt-3"
                                                            },
                                                            [
                                                              _vm._v(
                                                                " #Order: " +
                                                                  _vm._s(
                                                                    _vm.order.id
                                                                  ) +
                                                                  " | " +
                                                                  _vm._s(
                                                                    item.product_name
                                                                  ) +
                                                                  " | " +
                                                                  _vm._s(
                                                                    item.type
                                                                  ) +
                                                                  " | " +
                                                                  _vm._s(
                                                                    item.size
                                                                  )
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
                                                                          staticClass:
                                                                            "text-left",
                                                                          attrs: {
                                                                            width:
                                                                              "60%"
                                                                          }
                                                                        },
                                                                        [
                                                                          _vm._v(
                                                                            "Size Attribute"
                                                                          )
                                                                        ]
                                                                      ),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _c(
                                                                        "th",
                                                                        {
                                                                          staticClass:
                                                                            "text-left"
                                                                        },
                                                                        [
                                                                          _vm._v(
                                                                            "Size"
                                                                          )
                                                                        ]
                                                                      )
                                                                    ])
                                                                  ]),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "tbody",
                                                                    _vm._l(
                                                                      _vm.order
                                                                        .order_items[
                                                                        "" +
                                                                          _vm.itemIndex
                                                                      ]
                                                                        .custom_size,
                                                                      function(
                                                                        value,
                                                                        key
                                                                      ) {
                                                                        return _c(
                                                                          "tr",
                                                                          {
                                                                            key: key
                                                                          },
                                                                          [
                                                                            _c(
                                                                              "td",
                                                                              [
                                                                                _vm._v(
                                                                                  _vm._s(
                                                                                    key
                                                                                  )
                                                                                )
                                                                              ]
                                                                            ),
                                                                            _vm._v(
                                                                              " "
                                                                            ),
                                                                            _c(
                                                                              "td",
                                                                              [
                                                                                _vm._v(
                                                                                  _vm._s(
                                                                                    value
                                                                                  )
                                                                                )
                                                                              ]
                                                                            )
                                                                          ]
                                                                        )
                                                                      }
                                                                    ),
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
                                                ],
                                                1
                                              )
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                ])
                              : _vm._e()
                          ])
                        }),
                        0
                      )
                    ]
                  },
                  proxy: true
                }
              ])
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "v-col",
          {
            staticClass: "float-right",
            attrs: { cols: "12", sm: "5", md: "5", lg: "5" }
          },
          [
            _c("v-simple-table", [
              _c("tbody", {}, [
                _c("tr", [
                  _c("td", [_vm._v("Subtotal:")]),
                  _vm._v(" "),
                  _c("td", { staticClass: "pl-5 text-right" }, [
                    _vm._v(
                      _vm._s(_vm.order.currency_symbol) +
                        _vm._s(_vm.order.total)
                    )
                  ])
                ]),
                _vm._v(" "),
                _vm.order.discount > 0
                  ? _c("tr", [
                      _c("td", [_vm._v("Discount:")]),
                      _vm._v(" "),
                      _c("td", { staticClass: "pl-5 text-right" }, [
                        _vm._v(
                          _vm._s(_vm.order.currency_symbol) +
                            _vm._s(_vm.order.discount)
                        )
                      ])
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.order.shipping_cost > 0
                  ? _c("tr", [
                      _c("td", [_vm._v("Shipping Cost:")]),
                      _vm._v(" "),
                      _c("td", { staticClass: "pl-5 text-right" }, [
                        _vm._v(
                          _vm._s(_vm.order.currency_symbol) +
                            _vm._s(_vm.order.shipping_cost)
                        )
                      ])
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_c("strong", [_vm._v("Total:")])]),
                  _vm._v(" "),
                  _c("td", { staticClass: "pl-5 text-right" }, [
                    _c("strong", [
                      _vm._v(
                        _vm._s(_vm.order.currency_symbol) +
                          _vm._s(_vm.finalTotal)
                      )
                    ])
                  ])
                ])
              ])
            ])
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/admin/orders/Id.vue":
/*!************************************************!*\
  !*** ./resources/js/views/admin/orders/Id.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Id_vue_vue_type_template_id_33f10ab6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Id.vue?vue&type=template&id=33f10ab6& */ "./resources/js/views/admin/orders/Id.vue?vue&type=template&id=33f10ab6&");
/* harmony import */ var _Id_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Id.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/orders/Id.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Id_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Id_vue_vue_type_template_id_33f10ab6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Id_vue_vue_type_template_id_33f10ab6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/orders/Id.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/orders/Id.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/admin/orders/Id.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Id_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Id.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/orders/Id.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Id_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/orders/Id.vue?vue&type=template&id=33f10ab6&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/admin/orders/Id.vue?vue&type=template&id=33f10ab6& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Id_vue_vue_type_template_id_33f10ab6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Id.vue?vue&type=template&id=33f10ab6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/orders/Id.vue?vue&type=template&id=33f10ab6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Id_vue_vue_type_template_id_33f10ab6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Id_vue_vue_type_template_id_33f10ab6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);