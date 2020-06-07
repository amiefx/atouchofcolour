(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/SignIn.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/auth/SignIn.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_recaptcha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-recaptcha */ "./node_modules/vue-recaptcha/dist/vue-recaptcha.es.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    'vue-recaptcha': vue_recaptcha__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      form: {
        email: '',
        password: '',
        robot: false
      },
      text: '',
      loading: false,
      snackbar: false,
      showPassword: false,
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
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])({
    signIn: 'auth/signIn'
  })), {}, {
    submit: function submit() {
      var _this = this;

      if (this.form.robot) {
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
        this.signIn(this.form).then(function (res) {
          if (_this.user.role == 'Administrator') {
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
        }); // this.$auth.loginWith('local', { data: this.form })
        //     .then(res => {
        //         if(this.$auth.user.role == 'Administrator') {
        //             this.$router.replace({ name: 'admin' })
        //         }else{
        //             this.$router.replace({ name: 'account' })
        //         }
        //     })
        //     .catch( err => {
        //         this.text = err.response.data.errors.email[0]
        //         this.snackbar = true
        //     })
      }
    },
    onVerify: function onVerify(response) {
      if (response) this.form.robot = true;
    }
  }),
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])({
    authenticated: "auth/authenticated",
    user: "auth/user"
  }))
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/SignIn.vue?vue&type=template&id=944d4d0c&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/auth/SignIn.vue?vue&type=template&id=944d4d0c& ***!
  \*********************************************************************************************************************************************************************************************************/
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
    "v-app",
    [
      _c(
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
                        [_c("v-toolbar-title", [_vm._v("Login form")])],
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
                                  label: "Login",
                                  rules: [
                                    _vm.rules.required,
                                    _vm.rules.validEmail
                                  ],
                                  name: "login",
                                  "prepend-icon": "mdi-account-circle",
                                  type: "text",
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
                                  label: "Password",
                                  rules: [
                                    _vm.rules.required,
                                    _vm.rules.minpass
                                  ],
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
                              _c("vue-recaptcha", {
                                ref: "recaptcha",
                                attrs: {
                                  sitekey:
                                    "6LfyD_4UAAAAAERoUg4F4avADxNTXtiIOAOYoa0z"
                                },
                                on: { verify: _vm.onVerify }
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
                                    [_vm._v("Login")]
                                  )
                                : _vm._e()
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card-actions",
                        { staticClass: "d-flex justify-end mr-2" },
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "overline",
                              attrs: { to: { name: "forgot-password" } }
                            },
                            [_vm._v(" Forgot Password ")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "d-flex justify-center mt-3" }, [
                    _c("div", { staticClass: "caption mr-3 mt-1" }, [
                      _vm._v("Don't have Account?")
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "overline",
                            attrs: { to: { name: "register" } }
                          },
                          [_vm._v(" SignUp ")]
                        )
                      ],
                      1
                    )
                  ]),
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-recaptcha/dist/vue-recaptcha.es.js":
/*!*************************************************************!*\
  !*** ./node_modules/vue-recaptcha/dist/vue-recaptcha.es.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var defer = function defer() {
  var state = false; // Resolved or not

  var callbacks = [];

  var resolve = function resolve(val) {
    if (state) {
      return;
    }

    state = true;

    for (var i = 0, len = callbacks.length; i < len; i++) {
      callbacks[i](val);
    }
  };

  var then = function then(cb) {
    if (!state) {
      callbacks.push(cb);
      return;
    }

    cb();
  };

  var deferred = {
    resolved: function resolved() {
      return state;
    },
    resolve: resolve,
    promise: {
      then: then
    }
  };
  return deferred;
};

var ownProp = Object.prototype.hasOwnProperty;
function createRecaptcha() {
  var deferred = defer();
  return {
    notify: function notify() {
      deferred.resolve();
    },
    wait: function wait() {
      return deferred.promise;
    },
    render: function render(ele, options, cb) {
      this.wait().then(function () {
        cb(window.grecaptcha.render(ele, options));
      });
    },
    reset: function reset(widgetId) {
      if (typeof widgetId === 'undefined') {
        return;
      }

      this.assertLoaded();
      this.wait().then(function () {
        return window.grecaptcha.reset(widgetId);
      });
    },
    execute: function execute(widgetId) {
      if (typeof widgetId === 'undefined') {
        return;
      }

      this.assertLoaded();
      this.wait().then(function () {
        return window.grecaptcha.execute(widgetId);
      });
    },
    checkRecaptchaLoad: function checkRecaptchaLoad() {
      if (ownProp.call(window, 'grecaptcha') && ownProp.call(window.grecaptcha, 'render')) {
        this.notify();
      }
    },
    assertLoaded: function assertLoaded() {
      if (!deferred.resolved()) {
        throw new Error('ReCAPTCHA has not been loaded');
      }
    }
  };
}
var recaptcha = createRecaptcha();

if (typeof window !== 'undefined') {
  window.vueRecaptchaApiLoaded = recaptcha.notify;
}

var VueRecaptcha = {
  name: 'VueRecaptcha',
  props: {
    sitekey: {
      type: String,
      required: true
    },
    theme: {
      type: String
    },
    badge: {
      type: String
    },
    type: {
      type: String
    },
    size: {
      type: String
    },
    tabindex: {
      type: String
    },
    loadRecaptchaScript: {
      type: Boolean,
      "default": false
    },
    recaptchaScriptId: {
      type: String,
      "default": '__RECAPTCHA_SCRIPT'
    },
    recaptchaHost: {
      type: String,
      "default": 'www.google.com'
    },
    language: {
      type: String,
      "default": ''
    }
  },
  beforeMount: function beforeMount() {
    if (this.loadRecaptchaScript) {
      if (!document.getElementById(this.recaptchaScriptId)) {
        // Note: vueRecaptchaApiLoaded load callback name is per the latest documentation
        var script = document.createElement('script');
        script.id = this.recaptchaScriptId;
        script.src = "https://" + this.recaptchaHost + "/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit&hl=" + this.language;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    recaptcha.checkRecaptchaLoad();

    var opts = _extends({}, this.$props, {
      callback: this.emitVerify,
      'expired-callback': this.emitExpired,
      'error-callback': this.emitError
    });

    var container = this.$slots["default"] ? this.$el.children[0] : this.$el;
    recaptcha.render(container, opts, function (id) {
      _this.$widgetId = id;

      _this.$emit('render', id);
    });
  },
  methods: {
    reset: function reset() {
      recaptcha.reset(this.$widgetId);
    },
    execute: function execute() {
      recaptcha.execute(this.$widgetId);
    },
    emitVerify: function emitVerify(response) {
      this.$emit('verify', response);
    },
    emitExpired: function emitExpired() {
      this.$emit('expired');
    },
    emitError: function emitError() {
      this.$emit('error');
    }
  },
  render: function render(h) {
    return h('div', {}, this.$slots["default"]);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (VueRecaptcha);


/***/ }),

/***/ "./resources/js/views/auth/SignIn.vue":
/*!********************************************!*\
  !*** ./resources/js/views/auth/SignIn.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SignIn_vue_vue_type_template_id_944d4d0c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SignIn.vue?vue&type=template&id=944d4d0c& */ "./resources/js/views/auth/SignIn.vue?vue&type=template&id=944d4d0c&");
/* harmony import */ var _SignIn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignIn.vue?vue&type=script&lang=js& */ "./resources/js/views/auth/SignIn.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SignIn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SignIn_vue_vue_type_template_id_944d4d0c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SignIn_vue_vue_type_template_id_944d4d0c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/auth/SignIn.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/auth/SignIn.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/auth/SignIn.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SignIn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SignIn.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/SignIn.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SignIn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/auth/SignIn.vue?vue&type=template&id=944d4d0c&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/auth/SignIn.vue?vue&type=template&id=944d4d0c& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SignIn_vue_vue_type_template_id_944d4d0c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SignIn.vue?vue&type=template&id=944d4d0c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/SignIn.vue?vue&type=template&id=944d4d0c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SignIn_vue_vue_type_template_id_944d4d0c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SignIn_vue_vue_type_template_id_944d4d0c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);