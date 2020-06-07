(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/account/Index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/account/Index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  layout: 'khod',
  middleware: ['auth'],
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: 'Profile',
    titleTemplate: '%s | Khodgi'
  },
  data: function data() {
    return {
      valid: true,
      dialog: false,
      dialogPhoto: false,
      selectedFile: null,
      users: {
        id: "",
        name: "",
        email: "",
        role: "",
        photo: "",
        password: "",
        password_confirmation: "",
        current_password: "",
        created_at: ""
      },
      item: [],
      editedIndex: -1,
      editedItem: {
        id: "",
        name: "",
        email: "",
        role: "",
        photo: "",
        created_at: ""
      },
      rules: {
        required: function required(v) {
          return !!v || "This Field is Required";
        },
        min: function min(v) {
          return v.length >= 4 || "Minimum 5 Chracters Required";
        },
        validEmail: function validEmail(v) {
          return /.+@.+\..+/.test(v) || "Email must be valid";
        }
      }
    };
  },
  methods: {
    uploadPhoto: function uploadPhoto(item) {
      var _this = this;

      if (this.editedItem.photo != null) {
        var index = this.users.id;
        var formData = new FormData();
        formData.append("photo", this.editedItem.photo, this.editedItem.photo.name);
        formData.append("user", this.users.id);
        axios.post("/api/change-photo", formData).then(function (res) {
          _this.users = res.data.user; // this.editedItem.photo = null
        })["catch"](function (err) {
          return console.log(err.response);
        });
      }
    },
    save: function save() {
      var _this2 = this;

      axios.put("/api/settings/password", this.users).then(function (res) {
        _this2.users = res.data.data;
        _this2.text = "Record Updated Successfully!";
        _this2.snackbar = true;
        _this2.dialog = false;

        _this2.$router.push('/signin');
      })["catch"](function (err) {
        console.log(err.response);
        _this2.text = "Error Updating Record";
        _this2.snackbar = true;
      });
    }
  },
  created: function created() {
    var _this3 = this;

    axios.get('/api/me').then(function (res) {
      _this3.users = res.data.data;
    })["catch"](function (err) {
      console.log(err.response);
    });
  },
  computed: {
    passwordMatch: function passwordMatch() {
      return this.users.password != this.users.password_confirmation ? "Password does Not Match" : true;
    },
    userdata: function userdata() {// return this.users =  this.$auth.user
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/account/Index.vue?vue&type=template&id=440e703e&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/account/Index.vue?vue&type=template&id=440e703e& ***!
  \***********************************************************************************************************************************************************************************************************/
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
    "v-container",
    [
      _c(
        "v-card",
        { staticClass: "mx-auto" },
        [
          _c(
            "v-list",
            [
              _c(
                "v-list-item",
                [
                  _c(
                    "v-list-item-icon",
                    [
                      _c(
                        "v-list-item-avatar",
                        [_c("v-img", { attrs: { src: _vm.users.photo } })],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-list-item-content"),
                  _vm._v(" "),
                  _c(
                    "v-list-item-action",
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
                                    "v-btn",
                                    _vm._g({ attrs: { icon: "" } }, on),
                                    [
                                      _c("v-icon", [
                                        _vm._v("mdi-camera-account")
                                      ])
                                    ],
                                    1
                                  )
                                ]
                              }
                            }
                          ]),
                          model: {
                            value: _vm.dialogPhoto,
                            callback: function($$v) {
                              _vm.dialogPhoto = $$v
                            },
                            expression: "dialogPhoto"
                          }
                        },
                        [
                          _vm._v(" "),
                          _c(
                            "v-card",
                            [
                              _c("v-card-title", [
                                _c("span", { staticClass: "headline" }, [
                                  _vm._v("Update Profile Photo")
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
                                          placeholder: "Upload Avatar",
                                          accept:
                                            "image/jpg, image/png, image/bmp, image/jpeg"
                                        },
                                        on: {
                                          change: function($event) {
                                            return _vm.uploadPhoto(_vm.item)
                                          }
                                        },
                                        model: {
                                          value: _vm.editedItem.photo,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.editedItem,
                                              "photo",
                                              $$v
                                            )
                                          },
                                          expression: "editedItem.photo"
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
                "v-list-item",
                [
                  _c(
                    "v-list-item-content",
                    [
                      _c("v-list-item-title", { staticClass: "title" }, [
                        _vm._v(_vm._s(_vm.users.name))
                      ]),
                      _vm._v(" "),
                      _c("v-list-item-subtitle", [
                        _vm._v(_vm._s(_vm.users.email))
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-item-action",
                    [
                      _c(
                        "v-icon",
                        {
                          on: {
                            click: function($event) {
                              _vm.dialog = !_vm.dialog
                            }
                          }
                        },
                        [_vm._v("mdi-pencil")]
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
          _c("v-divider"),
          _vm._v(" "),
          _c(
            "v-list",
            [
              _c(
                "v-list-item",
                [
                  _c(
                    "v-list-item-icon",
                    [
                      _c("v-icon", { attrs: { color: "indigo" } }, [
                        _vm._v("mdi-email")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-item-content",
                    [
                      _c("v-list-item-title", [
                        _vm._v(_vm._s(_vm.users.email))
                      ]),
                      _vm._v(" "),
                      _c("v-list-item-subtitle", [_vm._v("Email")])
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("v-divider", { attrs: { inset: "" } }),
              _vm._v(" "),
              _c(
                "v-list-item",
                [
                  _c(
                    "v-list-item-icon",
                    [
                      _c("v-icon", { attrs: { color: "indigo" } }, [
                        _vm._v("mdi-account-box")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-item-content",
                    [
                      _c("v-list-item-title", [_vm._v(_vm._s(_vm.users.name))]),
                      _vm._v(" "),
                      _c("v-list-item-subtitle", [_vm._v("User Name")])
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
          attrs: { width: "500px" },
          model: {
            value: _vm.dialog,
            callback: function($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", {}, [_vm._v("Update Profile")]),
              _vm._v(" "),
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
                  _c(
                    "v-card-text",
                    [
                      _c(
                        "v-container",
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  "prepend-icon": "mdi-mail",
                                  placeholder: "User Name",
                                  rules: [_vm.rules.required, _vm.rules.min]
                                },
                                model: {
                                  value: _vm.users.name,
                                  callback: function($$v) {
                                    _vm.$set(_vm.users, "name", $$v)
                                  },
                                  expression: "users.name"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  type: "password",
                                  "prepend-icon": "mdi-lock",
                                  placeholder: "Current Password",
                                  rules: [_vm.rules.required]
                                },
                                model: {
                                  value: _vm.users.current_password,
                                  callback: function($$v) {
                                    _vm.$set(_vm.users, "current_password", $$v)
                                  },
                                  expression: "users.current_password"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  type: "password",
                                  "prepend-icon": "mdi-lock",
                                  placeholder: "New Password",
                                  rules: [_vm.rules.required]
                                },
                                model: {
                                  value: _vm.users.password,
                                  callback: function($$v) {
                                    _vm.$set(_vm.users, "password", $$v)
                                  },
                                  expression: "users.password"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  type: "password",
                                  "prepend-icon": "mdi-lock",
                                  placeholder: "Confirm Password",
                                  rules: [_vm.rules.required, _vm.passwordMatch]
                                },
                                model: {
                                  value: _vm.users.password_confirmation,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.users,
                                      "password_confirmation",
                                      $$v
                                    )
                                  },
                                  expression: "users.password_confirmation"
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
                          on: {
                            click: function($event) {
                              _vm.dialog = false
                            }
                          }
                        },
                        [_vm._v("Cancel")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: {
                            color: "primary",
                            type: "submit",
                            disabled: !_vm.valid
                          },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.save($event)
                            }
                          }
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/account/Index.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/account/Index.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_440e703e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=440e703e& */ "./resources/js/views/account/Index.vue?vue&type=template&id=440e703e&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/views/account/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_440e703e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_440e703e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/account/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/account/Index.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/account/Index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/account/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/account/Index.vue?vue&type=template&id=440e703e&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/account/Index.vue?vue&type=template&id=440e703e& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_440e703e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=440e703e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/account/Index.vue?vue&type=template&id=440e703e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_440e703e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_440e703e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);