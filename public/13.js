(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Categories.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Categories.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  layout: 'admin',
  middleware: ['auth', 'admin'],
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: 'Category',
    titleTemplate: '%s | Khodgi'
  },
  data: function data() {
    return {
      text: '',
      dialog: false,
      snackbar: false,
      headers: [{
        text: '#',
        align: 'start',
        sortable: false,
        value: 'id'
      }, {
        text: 'Image',
        value: 'image'
      }, {
        text: 'Name',
        value: 'name'
      }, {
        text: 'Parent ID',
        value: 'parent_id'
      }, {
        text: 'Active',
        value: 'is_active'
      }, {
        text: 'Menu',
        value: 'is_menu'
      }, {
        text: 'Home Section',
        value: 'is_home_section'
      }, {
        text: 'Order',
        value: 'order'
      }, {
        text: 'Actions',
        value: 'action',
        sortable: false
      }],
      categories: [],
      status: [{
        text: 'Yes',
        value: true
      }, {
        text: 'No',
        value: false
      }],
      rules: {
        required: function required(v) {
          return !!v || 'This Field is Required';
        }
      },
      editedIndex: -1,
      editedItem: {
        id: '',
        name: '',
        parent_id: '',
        image: '',
        is_active: '',
        is_menu: '',
        is_home_section: '',
        order: ''
      },
      defaultItem: {
        id: '',
        name: '',
        parent_id: '',
        image: '',
        is_active: '',
        is_menu: '',
        is_home_section: '',
        order: ''
      }
    };
  },
  computed: {
    formTitle: function formTitle() {
      return this.editedIndex === -1 ? 'New Category' : 'Edit Category';
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
    initialize: function initialize() {
      var _this = this;

      // Add a request interceptor
      axios.interceptors.request.use(function (config) {
        _this.loading = true;
        return config;
      }, function (error) {
        _this.loading = false;
        return Promise.reject(error);
      }); // Add a response interceptor

      axios.interceptors.response.use(function (response) {
        _this.loading = false;
        return response;
      }, function (error) {
        _this.loading = false;
        return Promise.reject(error);
      });
      axios.get('/api/admin/categories').then(function (res) {
        return _this.categories = res.data.data;
      })["catch"](function (err) {
        console.log(err);
      });
    },
    uploadPhoto: function uploadPhoto(item) {
      var _this2 = this;

      if (this.editedItem.image != null) {
        var index = this.categories.indexOf(item);
        var formData = new FormData();
        formData.append('photo', this.editedItem.image, this.editedItem.image.name);
        formData.append('category', item.id);
        axios.post('/api/admin/categories/change-photo', formData).then(function (res) {
          _this2.categories[index].image = res.data.category.image;
          _this2.editedItem.image = null;
        })["catch"](function (err) {
          return console.log(err.response);
        });
      }
    },
    updateActiveStatus: function updateActiveStatus(item) {
      var _this3 = this;

      var index = this.categories.indexOf(item);
      axios.post('/api/admin/categories/change-active', {
        'is_active': item.is_active,
        'category': item.id
      }).then(function (res) {
        _this3.text = "Categories active status updated successfully.";
        _this3.snackbar = true;
      })["catch"](function (error) {
        _this3.categories[index].role = error.response;
        _this3.snackbar = true;
        console.dir(error.response);
      });
    },
    updateMenuStatus: function updateMenuStatus(item) {
      var _this4 = this;

      var index = this.categories.indexOf(item);
      axios.post('/api/admin/categories/change-menu', {
        'is_menu': item.is_menu,
        'category': item.id
      }).then(function (res) {
        _this4.text = "Categories menu status updated successfully.";
        _this4.snackbar = true;
      })["catch"](function (error) {
        _this4.categories[index].role = error.response;
        _this4.snackbar = true;
        console.dir(error.response);
      });
    },
    updateHsectionStatus: function updateHsectionStatus(item) {
      var _this5 = this;

      var index = this.categories.indexOf(item);
      axios.post('/api/admin/categories/change-home-section', {
        'is_home_section': item.is_home_section,
        'category': item.id
      }).then(function (res) {
        _this5.text = "Categories home section status updated successfully.";
        _this5.snackbar = true;
      })["catch"](function (error) {
        _this5.categories[index].role = error.response;
        _this5.snackbar = true;
        console.dir(error.response);
      });
    },
    editItem: function editItem(item) {
      this.editedIndex = this.categories.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem: function deleteItem(item) {
      var _this6 = this;

      var index = this.categories.indexOf(item);
      var decide = confirm('Are you sure you want to delete this item?');

      if (decide) {
        axios["delete"]('/api/admin/categories/' + item.id).then(function (res) {
          _this6.snackbar = true;

          _this6.categories.splice(index, 1);
        })["catch"](function (err) {
          return console.log(err.response);
        });
      }
    },
    close: function close() {
      var _this7 = this;

      this.dialog = false;
      setTimeout(function () {
        _this7.editedItem = Object.assign({}, _this7.defaultItem);
        _this7.editedIndex = -1;
      }, 300);
    },
    save: function save() {
      var _this8 = this;

      if (this.editedIndex > -1) {
        axios.put('/api/admin/categories/' + this.editedItem.id, this.editedItem); //  .then(res => {
        //    Object.assign(this.categories[this.editedIndex], res.data.data)
        //  })
        //  .catch(err => console.log(err.response))

        Object.assign(this.categories[this.editedIndex], this.editedItem);
      } else {
        axios.post('/api/admin/categories', this.editedItem).then(function (res) {
          _this8.categories.push(res.data.category);
        })["catch"](function (err) {
          return console.dir(err.response);
        });
      }

      this.close();
    },
    getColor: function getColor(status) {
      if (status == 0) return 'red';else return 'green';
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Categories.vue?vue&type=template&id=1e5593fb&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Categories.vue?vue&type=template&id=1e5593fb& ***!
  \**************************************************************************************************************************************************************************************************************/
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
      _c("v-data-table", {
        staticClass: "elevation-1",
        attrs: { headers: _vm.headers, items: _vm.categories, "sort-by": "id" },
        scopedSlots: _vm._u([
          {
            key: "top",
            fn: function() {
              return [
                _c(
                  "v-toolbar",
                  { attrs: { flat: "", color: "white" } },
                  [
                    _c("v-toolbar-title", [_vm._v("Categories")]),
                    _vm._v(" "),
                    _c("v-divider", {
                      staticClass: "mx-4",
                      attrs: { inset: "", vertical: "" }
                    }),
                    _vm._v(" "),
                    _c("v-spacer"),
                    _vm._v(" "),
                    _c(
                      "v-dialog",
                      {
                        attrs: { "max-width": "500px" },
                        scopedSlots: _vm._u([
                          {
                            key: "activator",
                            fn: function(ref) {
                              var on = ref.on
                              return [
                                _c(
                                  "v-btn",
                                  _vm._g(
                                    {
                                      staticClass: "mb-2",
                                      attrs: { color: "primary", dark: "" }
                                    },
                                    on
                                  ),
                                  [_vm._v("New Category")]
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
                                _vm._v(_vm._s(_vm.formTitle))
                              ])
                            ]),
                            _vm._v(" "),
                            _c(
                              "v-card-text",
                              [
                                _c(
                                  "v-container",
                                  [
                                    _c(
                                      "v-row",
                                      [
                                        _c(
                                          "v-col",
                                          {
                                            attrs: {
                                              cols: "12",
                                              sm: "12",
                                              md: "12"
                                            }
                                          },
                                          [
                                            _c("v-text-field", {
                                              attrs: { label: "Name" },
                                              model: {
                                                value: _vm.editedItem.name,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.editedItem,
                                                    "name",
                                                    $$v
                                                  )
                                                },
                                                expression: "editedItem.name"
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c("v-text-field", {
                                              attrs: { label: "Parent ID" },
                                              model: {
                                                value: _vm.editedItem.parent_id,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.editedItem,
                                                    "parent_id",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "editedItem.parent_id"
                                              }
                                            }),
                                            _vm._v(" "),
                                            _vm.editedIndex == -1
                                              ? _c("v-select", {
                                                  attrs: {
                                                    items: _vm.status,
                                                    "item-text":
                                                      _vm.status.text,
                                                    "item-value":
                                                      _vm.status.value,
                                                    label:
                                                      "Select IsActive Status"
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.editedItem.is_active,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.editedItem,
                                                        "is_active",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "editedItem.is_active"
                                                  }
                                                })
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _vm.editedIndex == -1
                                              ? _c("v-select", {
                                                  attrs: {
                                                    items: _vm.status,
                                                    "item-text":
                                                      _vm.status.text,
                                                    "item-value":
                                                      _vm.status.value,
                                                    label:
                                                      "Select IsMenu Status"
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.editedItem.is_menu,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.editedItem,
                                                        "is_menu",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "editedItem.is_menu"
                                                  }
                                                })
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _vm.editedIndex == -1
                                              ? _c("v-select", {
                                                  attrs: {
                                                    items: _vm.status,
                                                    "item-text":
                                                      _vm.status.text,
                                                    "item-value":
                                                      _vm.status.value,
                                                    label:
                                                      "Select IsHomeSection Status"
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.editedItem
                                                        .is_home_section,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.editedItem,
                                                        "is_home_section",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "editedItem.is_home_section"
                                                  }
                                                })
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _c("v-text-field", {
                                              attrs: { label: "Order" },
                                              model: {
                                                value: _vm.editedItem.order,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.editedItem,
                                                    "order",
                                                    $$v
                                                  )
                                                },
                                                expression: "editedItem.order"
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
                              "v-card-actions",
                              [
                                _c("v-spacer"),
                                _vm._v(" "),
                                _c(
                                  "v-btn",
                                  {
                                    attrs: { color: "primary", text: "" },
                                    on: { click: _vm.close }
                                  },
                                  [_vm._v("Cancel")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-btn",
                                  {
                                    attrs: { color: "primary", text: "" },
                                    on: { click: _vm.save }
                                  },
                                  [_vm._v("Save")]
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
                  "v-icon",
                  {
                    staticClass: "mr-2",
                    attrs: { small: "" },
                    on: {
                      click: function($event) {
                        return _vm.editItem(item)
                      }
                    }
                  },
                  [_vm._v("\n        mdi-pencil\n      ")]
                ),
                _vm._v(" "),
                _c(
                  "v-icon",
                  {
                    attrs: { small: "" },
                    on: {
                      click: function($event) {
                        return _vm.deleteItem(item)
                      }
                    }
                  },
                  [_vm._v("\n        mdi-delete\n      ")]
                )
              ]
            }
          },
          {
            key: "no-data",
            fn: function() {
              return [
                _c(
                  "v-btn",
                  {
                    attrs: { color: "primary" },
                    on: { click: _vm.initialize }
                  },
                  [_vm._v("Reset")]
                )
              ]
            },
            proxy: true
          },
          {
            key: "item.is_active",
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
                      "return-value": item.is_active
                    },
                    on: {
                      "update:returnValue": function($event) {
                        return _vm.$set(item, "is_active", $event)
                      },
                      "update:return-value": function($event) {
                        return _vm.$set(item, "is_active", $event)
                      },
                      save: function($event) {
                        return _vm.updateActiveStatus(item)
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
                                  items: _vm.status,
                                  "item-text": _vm.status.text,
                                  "item-value": _vm.status.value,
                                  label: "Select Status"
                                },
                                model: {
                                  value: item.is_active,
                                  callback: function($$v) {
                                    _vm.$set(item, "is_active", $$v)
                                  },
                                  expression: "item.is_active"
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
                  [
                    _c(
                      "v-chip",
                      {
                        attrs: { color: _vm.getColor(item.is_active), dark: "" }
                      },
                      [
                        item.is_active == 1
                          ? _c("span", [_vm._v("Yes")])
                          : _c("span", [_vm._v("No")])
                      ]
                    )
                  ],
                  1
                )
              ]
            }
          },
          {
            key: "item.is_menu",
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
                      "return-value": item.is_menu
                    },
                    on: {
                      "update:returnValue": function($event) {
                        return _vm.$set(item, "is_menu", $event)
                      },
                      "update:return-value": function($event) {
                        return _vm.$set(item, "is_menu", $event)
                      },
                      save: function($event) {
                        return _vm.updateMenuStatus(item)
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
                                  items: _vm.status,
                                  "item-text": _vm.status.text,
                                  "item-value": _vm.status.value,
                                  label: "Select Status"
                                },
                                model: {
                                  value: item.is_menu,
                                  callback: function($$v) {
                                    _vm.$set(item, "is_menu", $$v)
                                  },
                                  expression: "item.is_menu"
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
                  [
                    _c(
                      "v-chip",
                      {
                        attrs: { color: _vm.getColor(item.is_menu), dark: "" }
                      },
                      [
                        item.is_menu == 1
                          ? _c("span", [_vm._v("Yes")])
                          : _c("span", [_vm._v("No")])
                      ]
                    )
                  ],
                  1
                )
              ]
            }
          },
          {
            key: "item.is_home_section",
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
                      "return-value": item.is_home_section
                    },
                    on: {
                      "update:returnValue": function($event) {
                        return _vm.$set(item, "is_home_section", $event)
                      },
                      "update:return-value": function($event) {
                        return _vm.$set(item, "is_home_section", $event)
                      },
                      save: function($event) {
                        return _vm.updateHsectionStatus(item)
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
                                  items: _vm.status,
                                  "item-text": _vm.status.text,
                                  "item-value": _vm.status.value,
                                  label: "Select Status"
                                },
                                model: {
                                  value: item.is_home_section,
                                  callback: function($$v) {
                                    _vm.$set(item, "is_home_section", $$v)
                                  },
                                  expression: "item.is_home_section"
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
                  [
                    _c(
                      "v-chip",
                      {
                        attrs: {
                          color: _vm.getColor(item.is_home_section),
                          dark: ""
                        }
                      },
                      [
                        item.is_home_section == 1
                          ? _c("span", [_vm._v("Yes")])
                          : _c("span", [_vm._v("No")])
                      ]
                    )
                  ],
                  1
                )
              ]
            }
          },
          {
            key: "item.image",
            fn: function(ref) {
              var item = ref.item
              return [
                _c(
                  "v-edit-dialog",
                  {
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "input",
                          fn: function() {
                            return [
                              _c("v-file-input", {
                                attrs: {
                                  label: "Select Photo",
                                  placeholder: "Upload Avatar",
                                  accept:
                                    "image/jpg, image/png, image/bmp, image/jpeg"
                                },
                                on: {
                                  change: function($event) {
                                    return _vm.uploadPhoto(item)
                                  }
                                },
                                model: {
                                  value: _vm.editedItem.image,
                                  callback: function($$v) {
                                    _vm.$set(_vm.editedItem, "image", $$v)
                                  },
                                  expression: "editedItem.image"
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
                  [
                    _c("v-avatar", { attrs: { size: "36px" } }, [
                      _c("img", { attrs: { src: item.image, alt: "Avatar" } })
                    ])
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
          _vm._v("\n    " + _vm._s(_vm.text) + "\n    "),
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
            [_vm._v("\n        Close\n    ")]
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

/***/ "./resources/js/views/admin/Categories.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/admin/Categories.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Categories_vue_vue_type_template_id_1e5593fb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Categories.vue?vue&type=template&id=1e5593fb& */ "./resources/js/views/admin/Categories.vue?vue&type=template&id=1e5593fb&");
/* harmony import */ var _Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Categories.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/Categories.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Categories_vue_vue_type_template_id_1e5593fb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Categories_vue_vue_type_template_id_1e5593fb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/Categories.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/Categories.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/admin/Categories.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Categories.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Categories.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/Categories.vue?vue&type=template&id=1e5593fb&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/admin/Categories.vue?vue&type=template&id=1e5593fb& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_template_id_1e5593fb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Categories.vue?vue&type=template&id=1e5593fb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Categories.vue?vue&type=template&id=1e5593fb&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_template_id_1e5593fb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_template_id_1e5593fb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);