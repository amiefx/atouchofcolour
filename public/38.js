(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[38],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Contact.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Contact.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  layout: 'mardom',
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: 'Contact Us',
    titleTemplate: '%s | Khodgi'
  },
  data: function data() {
    return {
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
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Contact.vue?vue&type=template&id=753b7fc6&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Contact.vue?vue&type=template&id=753b7fc6& ***!
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
  return _c("v-container", { attrs: { fluid: "" } }, [
    _c(
      "div",
      { staticClass: "pb-10 pt-3" },
      [
        _c("v-row", { staticClass: "d-flex justify-center mt-5" }, [
          _c("h1", [_vm._v("CONTACT US")])
        ]),
        _vm._v(" "),
        _c(
          "v-row",
          { staticClass: "d-flex justify-center" },
          [_c("v-icon", [_vm._v("mdi-dots-horizontal")])],
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "mx-12" },
      [
        _c(
          "v-row",
          [
            _c(
              "v-col",
              {
                staticClass: "px-6",
                attrs: { cols: "12", sm: "6", md: "6", lg: "6", xl: "6" }
              },
              [
                _c("p", [
                  _vm._v("Phone Number: "),
                  _c("strong", [_vm._v("+92 00000000")])
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v("Whatsapp: "),
                  _c("strong", [_vm._v("+92 00000000")])
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v("Customer Complains: "),
                  _c("strong", [
                    _c(
                      "a",
                      {
                        attrs: {
                          href: "mailto:complains@khodgi.com?Subject=complain",
                          target: "_top"
                        }
                      },
                      [_vm._v("complains@khodgi.com")]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v("Order Queries: "),
                  _c("strong", [
                    _c(
                      "a",
                      {
                        attrs: {
                          href: "customerservices@khodgi.com?Subject=services",
                          target: "_top"
                        }
                      },
                      [_vm._v("customerservices@khodgi.com")]
                    )
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "v-col",
              { attrs: { cols: "12", sm: "6", md: "6", lg: "6", xl: "6" } },
              [
                _c("v-text-field", {
                  attrs: {
                    label: "Name",
                    outlined: "",
                    dense: "",
                    rules: [_vm.rules.required]
                  }
                }),
                _vm._v(" "),
                _c("v-text-field", {
                  staticClass: "mt-n3",
                  attrs: {
                    label: "Email",
                    outlined: "",
                    dense: "",
                    rules: [_vm.rules.required]
                  }
                }),
                _vm._v(" "),
                _c("v-text-field", {
                  staticClass: "mt-n3",
                  attrs: {
                    label: "Phone",
                    outlined: "",
                    dense: "",
                    rules: [_vm.rules.required]
                  }
                }),
                _vm._v(" "),
                _c("v-textarea", {
                  staticClass: "mt-n3",
                  attrs: {
                    label: "Message",
                    outlined: "",
                    dense: "",
                    rules: [_vm.rules.required]
                  }
                }),
                _vm._v(" "),
                _c(
                  "v-btn",
                  {
                    staticClass: "float-right mt-n3",
                    attrs: { color: "primary", dark: "" }
                  },
                  [_vm._v("Send")]
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/pages/Contact.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/pages/Contact.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Contact_vue_vue_type_template_id_753b7fc6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contact.vue?vue&type=template&id=753b7fc6& */ "./resources/js/views/pages/Contact.vue?vue&type=template&id=753b7fc6&");
/* harmony import */ var _Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Contact.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/Contact.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Contact_vue_vue_type_template_id_753b7fc6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Contact_vue_vue_type_template_id_753b7fc6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/Contact.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/Contact.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/pages/Contact.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Contact.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Contact.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/Contact.vue?vue&type=template&id=753b7fc6&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/pages/Contact.vue?vue&type=template&id=753b7fc6& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_753b7fc6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Contact.vue?vue&type=template&id=753b7fc6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Contact.vue?vue&type=template&id=753b7fc6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_753b7fc6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_753b7fc6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);