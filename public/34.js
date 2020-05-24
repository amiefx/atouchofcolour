(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/password-reset.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/auth/password-reset.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  layout: 'mardom',
  middleware: ['guest'],
  name: 'About',
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: 'Login',
    titleTemplate: '%s | Khodgi'
  },
  data: function data() {
    return {
      form: {
        email: '',
        password: '',
        password_confirmation: '',
        token: ''
      },
      text: '',
      loading: false,
      snackbar: false,
      showPassword: false,
      showPassword2: false,
      valid: true,
      rules: {
        required: function required(v) {
          return !!v || 'This Field is Required';
        },
        min: function min(v) {
          return v.length >= 3 || 'Minimum 5 Chracters Required';
        },
        minpass: function minpass(v) {
          return v.length >= 8 || 'Minimum 8 Chracters Required';
        },
        validEmail: function validEmail(v) {
          return /.+@.+\..+/.test(v) || 'Email must be valid';
        }
      }
    };
  },
  created: function created() {
    this.form.email = this.$route.query.email;
    this.form.token = this.$route.query.token;
  },
  computed: {
    passwordMatch: function passwordMatch() {
      return this.form.password != this.form.password_confirmation ? 'Password does Not Match' : true;
    }
  },
  methods: {
    submit: function submit() {
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
      axios.post('/api/password/reset', {
        'email': this.form.email,
        'password': this.form.password,
        'password_confirmation': this.form.password_confirmation,
        'token': this.form.token
      }).then(function (res) {
        if (_this.$auth.user.role == 'Administrator') {
          _this.$router.replace({
            name: 'dashboard'
          });
        } else {
          _this.$router.replace({
            name: 'account'
          });
        }
      })["catch"](function (err) {
        _this.text = err.response.data.errors.email[0];
        _this.snackbar = true;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/password-reset.vue?vue&type=template&id=a0761096&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/auth/password-reset.vue?vue&type=template&id=a0761096& ***!
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
    "v-container",
    [
      _c(
        "v-row",
        { attrs: { align: "center", justify: "center" } },
        [
          _c(
            "v-col",
            { attrs: { cols: "12", sm: "8", md: "5" } },
            [
              _c(
                "v-card",
                { staticClass: "elevation-12" },
                [
                  _c("v-progress-linear", {
                    attrs: {
                      active: _vm.loading,
                      indeterminate: _vm.loading,
                      absolute: "",
                      top: "",
                      color: "primary"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "v-toolbar",
                    { attrs: { color: "", flat: "" } },
                    [_c("v-toolbar-title", [_vm._v("Reset Password")])],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-form",
                    {
                      attrs: { method: "post" },
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.submit($event)
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
                          _c("v-text-field", {
                            attrs: {
                              label: "Email",
                              rules: [_vm.rules.required, _vm.rules.validEmail],
                              name: "login",
                              "prepend-icon": "mdi-account-circle",
                              type: "text",
                              disabled: "",
                              required: ""
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
                          _c("v-text-field", {
                            attrs: {
                              id: "password",
                              label: "New Password",
                              rules: [_vm.rules.required, _vm.rules.minpass],
                              name: "password",
                              "prepend-icon": "mdi-lock",
                              type: _vm.showPassword ? "text" : "password",
                              "append-icon": _vm.showPassword
                                ? "mdi-eye"
                                : "mdi-eye-off",
                              required: ""
                            },
                            on: {
                              "click:append": function($event) {
                                _vm.showPassword = !_vm.showPassword
                              }
                            },
                            model: {
                              value: _vm.form.password,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "password", $$v)
                              },
                              expression: "form.password"
                            }
                          }),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: {
                              id: "password_confirmation",
                              label: "Confirm Password",
                              rules: [_vm.rules.required, _vm.passwordMatch],
                              name: "password_confirmation",
                              "prepend-icon": "mdi-lock",
                              type: _vm.showPassword2 ? "text" : "password",
                              "append-icon": _vm.showPassword2
                                ? "mdi-eye"
                                : "mdi-eye-off",
                              required: ""
                            },
                            on: {
                              "click:append": function($event) {
                                _vm.showPassword2 = !_vm.showPassword2
                              }
                            },
                            model: {
                              value: _vm.form.password_confirmation,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "password_confirmation", $$v)
                              },
                              expression: "form.password_confirmation"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card-actions",
                        [
                          _c("v-spacer"),
                          _vm._v(" "),
                          !_vm.loading
                            ? _c(
                                "v-btn",
                                {
                                  attrs: {
                                    color: "primary",
                                    block: "",
                                    disabled: !_vm.valid,
                                    type: "submit"
                                  }
                                },
                                [_vm._v("Reset Password")]
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
                  _vm._v("\n      " + _vm._s(_vm.text) + "\n      "),
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
                    [_vm._v("\n          Close\n      ")]
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

/***/ "./resources/js/views/auth/password-reset.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/auth/password-reset.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _password_reset_vue_vue_type_template_id_a0761096___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./password-reset.vue?vue&type=template&id=a0761096& */ "./resources/js/views/auth/password-reset.vue?vue&type=template&id=a0761096&");
/* harmony import */ var _password_reset_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./password-reset.vue?vue&type=script&lang=js& */ "./resources/js/views/auth/password-reset.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _password_reset_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _password_reset_vue_vue_type_template_id_a0761096___WEBPACK_IMPORTED_MODULE_0__["render"],
  _password_reset_vue_vue_type_template_id_a0761096___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/auth/password-reset.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/auth/password-reset.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/auth/password-reset.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_password_reset_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./password-reset.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/password-reset.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_password_reset_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/auth/password-reset.vue?vue&type=template&id=a0761096&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/auth/password-reset.vue?vue&type=template&id=a0761096& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_password_reset_vue_vue_type_template_id_a0761096___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./password-reset.vue?vue&type=template&id=a0761096& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/password-reset.vue?vue&type=template&id=a0761096&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_password_reset_vue_vue_type_template_id_a0761096___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_password_reset_vue_vue_type_template_id_a0761096___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);