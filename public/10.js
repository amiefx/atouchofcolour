(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/About.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/About.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  layout: 'admin',
  components: {},
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: 'About Us',
    titleTemplate: '%s | Khodgi'
  },
  data: function data() {
    return {
      text: 'null',
      text_id: ''
    };
  },
  created: function created() {
    var _this = this;

    axios.get('/api/admin/about').then(function (res) {
      _this.text = res.data.about.text;
      _this.text_id = res.data.about.id;
    })["catch"](function (err) {
      return console.log(err.response);
    });
  },
  methods: {
    create: function create() {
      var _this2 = this;

      axios.post('/api/admin/about', {
        text: this.text
      }).then(function (res) {
        _this2.text = res.data.about.text;
        _this2.text_id = res.data.about.id;
      })["catch"](function (err) {
        return console.log(err.response);
      });
    },
    update: function update() {
      var _this3 = this;

      axios.put('/api/admin/about/1', {
        text: this.text
      }).then(function (res) {
        _this3.text = res.data.about.text;
        _this3.text_id = res.data.about.id;
      })["catch"](function (err) {
        return console.log(err.response);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/About.vue?vue&type=template&id=5f2f6404&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/About.vue?vue&type=template&id=5f2f6404& ***!
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
    "div",
    [
      _c("vue-editor", {
        model: {
          value: _vm.text,
          callback: function($$v) {
            _vm.text = $$v
          },
          expression: "text"
        }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mt-2" },
        [
          _vm.text_id != 1
            ? _c(
                "v-btn",
                {
                  attrs: { color: "primary", dark: "" },
                  on: { click: _vm.create }
                },
                [_vm._v("Save")]
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: { color: "primary", dark: "" },
              on: { click: _vm.update }
            },
            [_vm._v("Update")]
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

/***/ "./resources/js/views/admin/About.vue":
/*!********************************************!*\
  !*** ./resources/js/views/admin/About.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _About_vue_vue_type_template_id_5f2f6404___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./About.vue?vue&type=template&id=5f2f6404& */ "./resources/js/views/admin/About.vue?vue&type=template&id=5f2f6404&");
/* harmony import */ var _About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./About.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/About.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _About_vue_vue_type_template_id_5f2f6404___WEBPACK_IMPORTED_MODULE_0__["render"],
  _About_vue_vue_type_template_id_5f2f6404___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/About.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/About.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/admin/About.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./About.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/About.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/About.vue?vue&type=template&id=5f2f6404&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/admin/About.vue?vue&type=template&id=5f2f6404& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_5f2f6404___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./About.vue?vue&type=template&id=5f2f6404& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/About.vue?vue&type=template&id=5f2f6404&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_5f2f6404___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_5f2f6404___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);