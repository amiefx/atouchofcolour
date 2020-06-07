(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/orders/Index.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/orders/Index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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
      valid: true,
      dialog: false,
      loading: false,
      snackbar: false,
      text: '',
      roles: [],
      success: '',
      error: '',
      options: {
        sortBy: ['id'],
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
      headers: [{
        text: '#',
        value: 'id'
      }, {
        text: 'Customer Name',
        value: 'billing_first_name'
      }, {
        text: 'Customer Email',
        value: 'customer_email'
      }, {
        text: 'Status',
        value: 'status'
      }, {
        text: 'Total',
        value: 'total'
      }, {
        text: 'Created',
        value: 'created_at'
      }, {
        text: 'Actions',
        value: 'action',
        sortable: false
      }],
      statusItems: ['Canceled', 'Completed', 'On Hold', 'Pending', 'Pending Payment', 'Processing', 'Refunded'],
      orders: [],
      editedIndex: -1,
      editedItem: {
        id: '',
        billing_first_name: '',
        customer_email: '',
        status: '',
        created_at: '',
        total: ''
      },
      defaultItem: {
        id: '',
        billing_first_name: '',
        customer_email: '',
        status: '',
        created_at: '',
        total: ''
      }
    };
  },
  //     filters: {
  //       formatDate: function (value) {
  //           return moment(value).format('MMMM D, YYYY');
  //       }
  //   },
  computed: {
    formTitle: function formTitle() {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item';
    },
    passwordMatch: function passwordMatch() {
      return this.editedItem.password != this.editedItem.rpassword ? 'Password does Not Match' : true;
    }
  },
  watch: {
    dialog: function dialog(val) {
      val || this.close();
    }
  },
  created: function created() {
    this.initialize();
  },
  methods: {
    updateStatus: function updateStatus(item) {
      var _this = this;

      var index = this.orders.data.indexOf(item);
      axios.post('/api/admin/orders/change-status', {
        'status': item.status,
        'order': item.id
      }).then(function (res) {
        // this.orders.data[index].role = res.data.data.user.role
        _this.text = res.data.order.id + " Status Updated to " + res.data.order.status;
        _this.snackbar = true;
      })["catch"](function (error) {
        _this.text = 'Error Updating Orders Status';
        _this.orders.data[index].status = error.response.order.status;
        _this.snackbar = true;
        console.dir(error.response);
      });
    },
    checkEmail: function checkEmail() {
      var _this2 = this;

      if (/.+@.+\..+/.test(this.editedItem.email)) {
        axios.post('/api/admin/email/verify', {
          'email': this.editedItem.email
        }).then(function (res) {
          _this2.success = res.data.data.message;
          _this2.error = '';
        })["catch"](function (err) {
          _this2.success = '', _this2.error = 'Email Already Exists';
        });
      }
    },
    selectAll: function selectAll(e) {
      this.selected = [];

      if (e.length > 0) {
        this.selected = e.map(function (val) {
          return val.id;
        });
      }

      console.dir(this.selected);
    },
    deleteAll: function deleteAll() {
      var _this3 = this;

      var decide = confirm('Are you sure you want to delete these items?');

      if (decide) {
        axios.post('/api/admin/orders/delete', {
          'orders': this.selected
        }).then(function (res) {
          _this3.text = "Rcords Deleted Successfully!";

          _this3.selected.map(function (val) {
            var index = _this3.orders.data.indexOf(val);

            _this3.orders.data.splice(index, 1);
          });

          _this3.snackbar = true;
        })["catch"](function (err) {
          console.log(err.response);
          _this3.text = "Error Deleting Record";
          _this3.snackbar = true;
        });
      }
    },
    searchIt: function searchIt(e) {
      var _this4 = this;

      if (e.length > 3) {
        axios.get("/api/admin/orders/".concat(e)).then(function (res) {
          return _this4.orders = res.data.orders;
        })["catch"](function (err) {
          return console.dir(err.response);
        });
      }

      if (e.length <= 0) {
        // axios.get(`/api/admin/orders?page=${e.page}`,{params:{'per_page': e.itemsPerPage}})
        //   axios.get(`/api/admin/orders`)
        //     .then(res => this.orders = res.data.data.orders)
        //     .catch(err => console.dir(err.response))
        var sortBy = this.options.sortBy.length == 0 ? 'id' : this.options.sortBy[0];
        var orderBy = this.options.sortDesc.length > 0 || this.options.sortDesc[0] ? 'asc' : 'desc';
        axios.get("/api/admin/orders?page=".concat(e.page), {
          params: {
            'per_page': e.itemsPerPage,
            'sort_by': sortBy,
            'order_by': orderBy
          }
        }).then(function (res) {
          _this4.orders = res.data.orders;
        })["catch"](function (err) {
          return console.dir(err.response);
        });
      }
    },
    paginate: function paginate(e) {
      var _this5 = this;

      var sortBy = this.options.sortBy.length == 0 ? 'id' : this.options.sortBy[0];
      var orderBy = this.options.sortDesc.length > 0 || this.options.sortDesc[0] ? 'asc' : 'desc';
      axios.get("/api/admin/orders?page=".concat(e.page), {
        params: {
          'per_page': e.itemsPerPage,
          'sort_by': sortBy,
          'order_by': orderBy
        }
      }).then(function (res) {
        _this5.orders = res.data.orders;
      })["catch"](function (err) {//----
      });
    },
    initialize: function initialize() {
      var _this6 = this;

      // Add a request interceptor
      axios.interceptors.request.use(function (config) {
        _this6.loading = true;
        return config;
      }, function (error) {
        _this6.loading = false;
        return Promise.reject(error);
      }); // Add a response interceptor

      axios.interceptors.response.use(function (response) {
        _this6.loading = false;
        return response;
      }, function (error) {
        _this6.loading = false;
        return Promise.reject(error);
      });
    },
    editItem: function editItem(item) {
      this.editedIndex = this.orders.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem: function deleteItem(item) {
      var _this7 = this;

      var index = this.orders.data.indexOf(item);
      var decide = confirm('Are you sure you want to delete this item?');

      if (decide) {
        axios["delete"]('/api/admin/orders/' + item.id).then(function (res) {
          _this7.snackbar = true;

          _this7.orders.data.splice(index, 1);
        })["catch"](function (err) {
          console.log(err.response);
          _this7.text = "Error Deleting Record";
          _this7.snackbar = true;
        });
      }
    },
    close: function close() {
      var _this8 = this;

      this.dialog = false;
      setTimeout(function () {
        _this8.editedItem = Object.assign({}, _this8.defaultItem);
        _this8.editedIndex = -1;
      }, 300);
    },
    save: function save() {
      var _this9 = this;

      if (this.editedIndex > -1) {
        var index = this.editedIndex;
        axios.put('/api/admin/orders/' + this.editedItem.id, this.editedItem) //  .then(res => Object.assign(this.orders[this.editedIndex], this.editedItem))
        .then(function (res) {
          _this9.text = "Record Updated Successfully!";
          _this9.snackbar = true;
          Object.assign(_this9.orders.data[index], res.data.data.user);
        })["catch"](function (err) {
          console.log(err.response);
          _this9.text = "Error Updating Record";
          _this9.snackbar = true;
        }); //  Object.assign(this.orders.data[this.editedIndex], this.editedItem)
      } else {
        axios.post('/api/admin/orders', this.editedItem).then(function (res) {
          _this9.text = "Record Added Successfully!";
          _this9.snackbar = true;

          _this9.orders.data.push(res.data.data.user);
        })["catch"](function (err) {
          console.dir(err);
          _this9.text = "Error Inserting Record";
          _this9.snackbar = true;
        });
      }

      this.close();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/orders/Index.vue?vue&type=template&id=cc8b41f2&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/orders/Index.vue?vue&type=template&id=cc8b41f2& ***!
  \****************************************************************************************************************************************************************************************************************/
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
    "v-data-table",
    {
      staticClass: "elevation-1",
      attrs: {
        headers: _vm.headers,
        items: _vm.orders.data,
        "items-per-page": 5,
        "item-key": "id",
        loading: _vm.loading,
        options: _vm.options,
        "server-items-length": _vm.orders.total,
        "loading-text": "Loading.. Please Wait!",
        "footer-props": {
          itemsPerPageOptions: [5, 10, 15],
          "show-current-page": true,
          "show-first-last-page": true
        }
      },
      on: {
        pagination: _vm.paginate,
        "update:options": function($event) {
          _vm.options = $event
        },
        input: _vm.selectAll
      },
      scopedSlots: _vm._u([
        {
          key: "top",
          fn: function() {
            return [
              _c(
                "v-toolbar",
                { attrs: { flat: "", color: "" } },
                [
                  _c("v-toolbar-title", [_vm._v("Order Management")]),
                  _vm._v(" "),
                  _c("v-divider", {
                    staticClass: "mx-4",
                    attrs: { inset: "", vertical: "" }
                  }),
                  _vm._v(" "),
                  _c("v-spacer")
                ],
                1
              ),
              _vm._v(" "),
              _c("v-text-field", {
                staticClass: "mx-4",
                attrs: {
                  "append-icon": "mdi-search",
                  label: "Search",
                  "single-line": "",
                  "hide-details": ""
                },
                on: { input: _vm.searchIt }
              })
            ]
          },
          proxy: true
        },
        {
          key: "item.action",
          fn: function(ref) {
            var item = ref.item
            return [
              _c(
                "v-btn",
                { attrs: { icon: "", to: "/admin/orders/" + item.id } },
                [
                  _c("v-icon", { attrs: { small: "" } }, [
                    _vm._v("\n      mdi-eye\n    ")
                  ])
                ],
                1
              )
            ]
          }
        },
        {
          key: "item.total",
          fn: function(ref) {
            var item = ref.item
            return [
              _c("span", [
                _vm._v(_vm._s(item.currency_symbol) + _vm._s(item.total))
              ])
            ]
          }
        },
        {
          key: "item.created_at",
          fn: function(ref) {
            var item = ref.item
            return [
              _c("span", [_vm._v(_vm._s(_vm._f("date")(item.created_at)))])
            ]
          }
        },
        {
          key: "no-data",
          fn: function() {
            return [
              _c(
                "v-btn",
                { attrs: { color: "primary" }, on: { click: _vm.initialize } },
                [_vm._v("Reset")]
              )
            ]
          },
          proxy: true
        },
        {
          key: "item.photo",
          fn: function(ref) {
            var item = ref.item
            return [
              _c("v-avatar", { attrs: { size: "36px" } }, [
                _c("img", { attrs: { src: item.photo, alt: "Avatar" } })
              ])
            ]
          }
        },
        {
          key: "item.status",
          fn: function(ref) {
            var item = ref.item
            return [
              _c(
                "v-edit-dialog",
                {
                  attrs: {
                    large: "",
                    block: "",
                    persistent: "",
                    "return-value": item.status
                  },
                  on: {
                    "update:returnValue": function($event) {
                      return _vm.$set(item, "status", $event)
                    },
                    "update:return-value": function($event) {
                      return _vm.$set(item, "status", $event)
                    },
                    save: function($event) {
                      return _vm.updateStatus(item)
                    }
                  },
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "input",
                        fn: function() {
                          return [
                            _c("v-select", {
                              attrs: {
                                items: _vm.statusItems,
                                label: "Select Status",
                                rules: [_vm.rules.required]
                              },
                              model: {
                                value: item.status,
                                callback: function($$v) {
                                  _vm.$set(item, "status", $$v)
                                },
                                expression: "item.status"
                              }
                            })
                          ]
                        },
                        proxy: true
                      }
                    ],
                    null,
                    true
                  )
                },
                [_vm._v("\n          " + _vm._s(item.status) + "\n          ")]
              )
            ]
          }
        }
      ])
    },
    [
      _vm._v(" "),
      _vm._v(" "),
      _vm._v(" "),
      _vm._v(" "),
      _vm._v(" "),
      _vm._v(" "),
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

/***/ "./resources/js/views/admin/orders/Index.vue":
/*!***************************************************!*\
  !*** ./resources/js/views/admin/orders/Index.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_cc8b41f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=cc8b41f2& */ "./resources/js/views/admin/orders/Index.vue?vue&type=template&id=cc8b41f2&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/orders/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_cc8b41f2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_cc8b41f2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/orders/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/orders/Index.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/admin/orders/Index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/orders/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/orders/Index.vue?vue&type=template&id=cc8b41f2&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/admin/orders/Index.vue?vue&type=template&id=cc8b41f2& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_cc8b41f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=cc8b41f2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/orders/Index.vue?vue&type=template&id=cc8b41f2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_cc8b41f2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_cc8b41f2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);