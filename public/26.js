(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Slides.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Slides.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  layout: 'admin',
  middleware: ['auth', 'admin'],
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: 'Home Slides',
    titleTemplate: '%s | Khodgi'
  },
  data: function data() {
    return {
      dialog: false,
      snackbar: false,
      text: '',
      links: [],
      headers: [{
        text: '#',
        align: 'start',
        sortable: false,
        value: 'id'
      }, {
        text: 'Name',
        value: 'name'
      }, {
        text: 'Large Image',
        value: 'large_image'
      }, {
        text: 'Small Image',
        value: 'small_image'
      }, {
        text: 'Link',
        value: 'link'
      }, {
        text: 'isActive',
        value: 'is_active'
      }, {
        text: 'Actions',
        value: 'action',
        sortable: false
      }],
      homeslides: [],
      editedIndex: -1,
      editedItem: {
        id: '',
        name: '',
        large_image: null,
        small_image: null,
        link: '',
        is_active: ''
      },
      defaultItem: {
        id: '',
        name: '',
        large_image: null,
        small_image: null,
        link: '',
        is_active: ''
      }
    };
  },
  computed: {
    formTitle: function formTitle() {
      return this.editedIndex === -1 ? 'New Slide' : 'Edit Slide';
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
    uploadPhotoS1: function uploadPhotoS1(item) {
      var _this = this;

      if (this.editedItem.small_image != null) {
        var index = this.homeslides.indexOf(item); //  console.log(this.editedItem.small_image);

        var formData = new FormData();
        formData.append('photo', this.editedItem.small_image, this.editedItem.small_image.name);
        formData.append('homeslide', item.id);
        axios.post('/api/admin/home-slides/change-photoS', formData).then(function (res) {
          _this.homeslides[index].small_image = res.data.homeslide.small_image;
          _this.editedItem.small_image = null;
        })["catch"](function (err) {
          return console.log(err.response);
        });
      }
    },
    uploadPhotoL1: function uploadPhotoL1(item) {
      var _this2 = this;

      if (this.editedItem.large_image != null) {
        var index = this.homeslides.indexOf(item); //     console.log(this.editedItem.large_image);

        var formData = new FormData();
        formData.append('photo', this.editedItem.large_image, this.editedItem.large_image.name);
        formData.append('homeslide', item.id);
        axios.post('/api/admin/home-slides/change-photoL', formData).then(function (res) {
          _this2.homeslides[index].large_image = res.data.homeslide.large_image;
          _this2.editedItem.large_image = null;
        })["catch"](function (err) {
          return console.log(err.response);
        });
      }
    },
    updateProfile: function updateProfile(e) {
      var _this3 = this;

      var file = e.target.files[0]; // console.log(file);

      var reader = new FileReader();

      if (file['size'] < 1000000) {
        reader.onloadend = function (file) {
          //  console.log('RESULT', reader.result)
          _this3.editedItem.large_image = reader.result;
        };

        reader.readAsDataURL(file);
      } else {
        this.text = 'Image size is greater than 1MB.';
        this.snackbar = true;
      }
    },
    updateProfile2: function updateProfile2(event) {
      var _this4 = this;

      var file2 = event.target.files[0]; // console.log(file);

      var reader2 = new FileReader();

      if (file2['size'] < 1000000) {
        reader2.onloadend = function (file2) {
          //  console.log('RESULT', reader.result)
          _this4.editedItem.small_image = reader2.result;
        };

        reader2.readAsDataURL(file2);
      } else {
        this.text = 'Image size is greater than 1MB.';
        this.snackbar = true;
      }
    },
    initialize: function initialize() {
      var _this5 = this;

      // Add a request interceptor
      axios.interceptors.request.use(function (config) {
        _this5.loading = true;
        return config;
      }, function (error) {
        _this5.loading = false;
        return Promise.reject(error);
      }); // Add a response interceptor

      axios.interceptors.response.use(function (response) {
        _this5.loading = false;
        return response;
      }, function (error) {
        _this5.loading = false;
        return Promise.reject(error);
      });
      axios.get('/api/admin/home-slides').then(function (res) {
        _this5.homeslides = res.data.homeslides;
        _this5.links = res.data.links;
      })["catch"](function (err) {
        _this5.text = err.response.data;
        _this5.snackbar = true;
      });
    },
    editItem: function editItem(item) {
      this.editedIndex = this.homeslides.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem: function deleteItem(item) {
      var _this6 = this;

      var index = this.homeslides.indexOf(item);
      var decide = confirm('Are you sure you want to delete this item?');

      if (decide) {
        axios["delete"]('/api/admin/home-slides/' + item.id).then(function (res) {
          _this6.text = 'Item deleted Successfully.';
          _this6.snackbar = true;

          _this6.homeslides.splice(index, 1);
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
        axios.put('/api/admin/home-slides/' + this.editedItem.id, this.editedItem); //  .then(res => Object.assign(this.homeslides[this.editedIndex], res.data.data.homeslide))
        //  .catch(err => console.log(err.response))

        Object.assign(this.homeslides[this.editedIndex], this.editedItem); // this.text = 'Slide updated successfully.'
        // this.snackbar = true
      } else {
        axios.post('/api/admin/home-slides', this.editedItem).then(function (res) {
          return _this8.homeslides.push(res.data.homeslide);
        })["catch"](function (err) {
          return console.dir(err.response);
        });
      }

      this.close();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Slides.vue?vue&type=template&id=2bf9af41&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Slides.vue?vue&type=template&id=2bf9af41& ***!
  \**********************************************************************************************************************************************************************************************************/
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
        attrs: {
          headers: _vm.headers,
          items: _vm.homeslides,
          "sort-by": "calories"
        },
        scopedSlots: _vm._u([
          {
            key: "top",
            fn: function() {
              return [
                _c(
                  "v-toolbar",
                  { attrs: { flat: "", color: "white" } },
                  [
                    _c("v-toolbar-title", [_vm._v("Home Slides")]),
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
                                  [_vm._v("New Slide")]
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
                                              attrs: { label: "Slide Name" },
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
                                            _c("v-select", {
                                              attrs: {
                                                items: _vm.links,
                                                label: "Select link"
                                              },
                                              model: {
                                                value: _vm.editedItem.link,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.editedItem,
                                                    "link",
                                                    $$v
                                                  )
                                                },
                                                expression: "editedItem.link"
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c("v-switch", {
                                              attrs: { label: "isActive" },
                                              model: {
                                                value: _vm.editedItem.is_active,
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
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _vm.editedIndex == -1
                                          ? _c(
                                              "v-col",
                                              { attrs: { cols: "12" } },
                                              [
                                                _c("input", {
                                                  attrs: { type: "file" },
                                                  on: {
                                                    change: _vm.updateProfile
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _c("br"),
                                                _vm._v(" "),
                                                _c("span", [
                                                  _vm._v("Large Image 1499X609")
                                                ])
                                              ]
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm.editedIndex == -1
                                          ? _c(
                                              "v-col",
                                              { attrs: { cols: "12" } },
                                              [
                                                _c("input", {
                                                  attrs: { type: "file" },
                                                  on: {
                                                    change: _vm.updateProfile2
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _c("br"),
                                                _vm._v(" "),
                                                _c("span", [
                                                  _vm._v("Small Image 600X800")
                                                ])
                                              ]
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
            key: "item.small_image",
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
                                  placeholder: "Upload Image",
                                  accept:
                                    "image/jpg, image/png, image/bmp, image/jpeg"
                                },
                                on: {
                                  change: function($event) {
                                    return _vm.uploadPhotoS1(item)
                                  }
                                },
                                model: {
                                  value: _vm.editedItem.small_image,
                                  callback: function($$v) {
                                    _vm.$set(_vm.editedItem, "small_image", $$v)
                                  },
                                  expression: "editedItem.small_image"
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
                    _c("v-img", {
                      attrs: {
                        src: item.small_image,
                        alt: "Avatar",
                        height: "36px",
                        width: "36px"
                      }
                    })
                  ],
                  1
                )
              ]
            }
          },
          {
            key: "item.large_image",
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
                                  placeholder: "Upload Image",
                                  accept:
                                    "image/jpg, image/png, image/bmp, image/jpeg"
                                },
                                on: {
                                  change: function($event) {
                                    return _vm.uploadPhotoL1(item)
                                  }
                                },
                                model: {
                                  value: _vm.editedItem.large_image,
                                  callback: function($$v) {
                                    _vm.$set(_vm.editedItem, "large_image", $$v)
                                  },
                                  expression: "editedItem.large_image"
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
                    _c("v-img", {
                      attrs: {
                        src: item.large_image,
                        alt: "Avatar",
                        height: "36px",
                        width: "50px"
                      }
                    })
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

/***/ "./resources/js/views/admin/Slides.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/admin/Slides.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Slides_vue_vue_type_template_id_2bf9af41___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Slides.vue?vue&type=template&id=2bf9af41& */ "./resources/js/views/admin/Slides.vue?vue&type=template&id=2bf9af41&");
/* harmony import */ var _Slides_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Slides.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/Slides.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Slides_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Slides_vue_vue_type_template_id_2bf9af41___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Slides_vue_vue_type_template_id_2bf9af41___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/Slides.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/Slides.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/admin/Slides.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Slides_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Slides.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Slides.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Slides_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/Slides.vue?vue&type=template&id=2bf9af41&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/admin/Slides.vue?vue&type=template&id=2bf9af41& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Slides_vue_vue_type_template_id_2bf9af41___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Slides.vue?vue&type=template&id=2bf9af41& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Slides.vue?vue&type=template&id=2bf9af41&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Slides_vue_vue_type_template_id_2bf9af41___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Slides_vue_vue_type_template_id_2bf9af41___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);