(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!******************************************!*\
  !*** C:/Users/周锐/Desktop/kunkun/main.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 2));\n__webpack_require__(/*! uni-pages */ 6);\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 39));\nvar _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 42));\nvar _store = _interopRequireDefault(__webpack_require__(/*! ./store */ 43));\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n_vue.default.config.productionTip = false;\n_App.default.mpType = 'app';\nvar app = new _vue.default(_objectSpread({\n  store: _store.default\n}, _App.default));\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiQXBwIiwibXBUeXBlIiwiYXBwIiwic3RvcmUiLCIkbW91bnQiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUFtQjtBQUduQjtBQUVBO0FBQTJCO0FBQUE7QUFEM0JBLFlBQUcsQ0FBQ0MsTUFBTSxDQUFDQyxhQUFhLEdBQUcsS0FBSztBQUdoQ0MsWUFBRyxDQUFDQyxNQUFNLEdBQUcsS0FBSztBQUNsQixJQUFNQyxHQUFHLEdBQUcsSUFBSUwsWUFBRztFQUNqQk0sS0FBSyxFQUFMQTtBQUFLLEdBQ0ZILFlBQUcsRUFDTjtBQUNGRSxHQUFHLENBQUNFLE1BQU0sRUFBRSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1bmktcGFnZXMnO2ltcG9ydCBBcHAgZnJvbSAnLi9BcHAnXG5cblxuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5WdWUuY29uZmlnLnByb2R1Y3Rpb25UaXAgPSBmYWxzZVxuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnXG5cbkFwcC5tcFR5cGUgPSAnYXBwJ1xuY29uc3QgYXBwID0gbmV3IFZ1ZSh7XG4gIHN0b3JlLFxuICAuLi5BcHBcbn0pXG5hcHAuJG1vdW50KClcblxuXG5cblxuXG5cblxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 2 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 3);
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 3 */
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 4)["default"];
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ 5);
function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 4 */
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 5 */
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 4)["default"];
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 6 */
/*!*********************************************!*\
  !*** C:/Users/周锐/Desktop/kunkun/pages.json ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  var global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/index/index', function () {
  return Vue.extend(__webpack_require__(/*! pages/index/index.vue?mpType=page */ 7).default);
});

/***/ }),
/* 7 */
/*!********************************************************************!*\
  !*** C:/Users/周锐/Desktop/kunkun/pages/index/index.vue?mpType=page ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 8);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 10);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 19);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ2dNO0FBQ2hNLGdCQUFnQix5TUFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZTg0YTNjJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXEhCdWlsZGVyWC4zLjYuMTcuMjAyMzAxMTJcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9pbmRleC9pbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!**************************************************************************************************!*\
  !*** C:/Users/周锐/Desktop/kunkun/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 9);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 9 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/周锐/Desktop/kunkun/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "app", _i: 0 } },
    [
      _c("menu-module", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm._$s(1, "v-show", !_vm.gameIng),
            expression: "_$s(1,'v-show',!gameIng)",
          },
        ],
        attrs: { _i: 1 },
        on: { gameBegin: _vm.gameBegin },
      }),
      _c("game", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm._$s(2, "v-show", _vm.gameIng),
            expression: "_$s(2,'v-show',gameIng)",
          },
        ],
        ref: "game",
        attrs: { _i: 2 },
        on: {
          backToHome: function ($event) {
            _vm.gameIng = false
          },
        },
      }),
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 10 */
/*!********************************************************************************************!*\
  !*** C:/Users/周锐/Desktop/kunkun/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 11);\n/* harmony import */ var _D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVwQixDQUFnQixzckJBQUcsRUFBQyIsImZpbGUiOiIxMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYLjMuNi4xNy4yMDIzMDExMlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUQ6XFxcXEhCdWlsZGVyWC4zLjYuMTcuMjAyMzAxMTJcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFEOlxcXFxIQnVpbGRlclguMy42LjE3LjIwMjMwMTEyXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXEhCdWlsZGVyWC4zLjYuMTcuMjAyMzAxMTJcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYLjMuNi4xNy4yMDIzMDExMlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUQ6XFxcXEhCdWlsZGVyWC4zLjYuMTcuMjAyMzAxMTJcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFEOlxcXFxIQnVpbGRlclguMy42LjE3LjIwMjMwMTEyXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXEhCdWlsZGVyWC4zLjYuMTcuMjAyMzAxMTJcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/周锐/Desktop/kunkun/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _menu = _interopRequireDefault(__webpack_require__(/*! ../../components/menu.vue */ 12));\nvar _game = _interopRequireDefault(__webpack_require__(/*! ../../components/game.vue */ 20));\nvar _bulletChat = _interopRequireDefault(__webpack_require__(/*! ../../components/bullet-chat.vue */ 33));\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = {\n  name: \"App\",\n  data: function data() {\n    return {\n      gameIng: false\n    };\n  },\n  components: {\n    game: _game.default,\n    menuModule: _menu.default,\n    bulletChat: _bulletChat.default\n  },\n  methods: {\n    /**\r\n     * @description: 开始游戏\r\n     * @param {*}\r\n     * @return {*}\r\n     */\n    gameBegin: function gameBegin() {\n      window.backMusic.currentTime = 1;\n      this.gameIng = true;\n      this.$refs.game.gameBegin();\n    }\n  }\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIl0sIm5hbWVzIjpbIm5hbWUiLCJkYXRhIiwiZ2FtZUluZyIsImNvbXBvbmVudHMiLCJnYW1lIiwibWVudU1vZHVsZSIsImJ1bGxldENoYXQiLCJtZXRob2RzIiwiZ2FtZUJlZ2luIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBYUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O2VBQ0E7RUFDQUE7RUFDQUM7SUFDQTtNQUNBQztJQUNBO0VBQ0E7RUFDQUM7SUFDQUM7SUFDQUM7SUFDQUM7RUFDQTtFQUNBQztJQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFDQUM7TUFDQUM7TUFDQTtNQUNBO0lBQ0E7RUFDQTtBQUNBO0FBQUEiLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuPHRlbXBsYXRlPlxyXG4gIDxkaXYgaWQ9XCJhcHBcIj5cclxuICAgIDwhLS0g5bm05YW96IOM5pmvIC0tPlxyXG4gICAgPCEtLSA8aW1nIHNyYz1cIi4uLy4uL2Fzc2V0cy9pc3N1ZS1za2luLnBuZ1wiIGNsYXNzPVwiaXNzdWUtc2tpblwiIC8+IC0tPlxyXG4gICAgPCEtLSDlvLnluZUgLS0+XHJcbiAgICA8IS0tIDxidWxsZXQtY2hhdCB2LWlmPVwiJHN0b3JlLnN0YXRlLnNldHRpbmcuc2hvd0J1bGxldENoYXRcIj48L2J1bGxldC1jaGF0PiAtLT5cclxuICAgIDxtZW51LW1vZHVsZSB2LXNob3c9XCIhZ2FtZUluZ1wiIEBnYW1lQmVnaW49XCJnYW1lQmVnaW5cIj48L21lbnUtbW9kdWxlPlxyXG4gICAgPGdhbWUgdi1zaG93PVwiZ2FtZUluZ1wiIHJlZj1cImdhbWVcIiBAYmFja1RvSG9tZT1cImdhbWVJbmcgPSBmYWxzZVwiPjwvZ2FtZT5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBtZW51TW9kdWxlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL21lbnUudnVlXCI7XHJcbmltcG9ydCBnYW1lIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2dhbWUudnVlXCI7XHJcbmltcG9ydCBidWxsZXRDaGF0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2J1bGxldC1jaGF0LnZ1ZVwiO1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogXCJBcHBcIixcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZ2FtZUluZzogZmFsc2UsXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgY29tcG9uZW50czoge1xyXG4gICAgZ2FtZSxcclxuICAgIG1lbnVNb2R1bGUsXHJcbiAgICBidWxsZXRDaGF0LFxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb246IOW8gOWni+a4uOaIj1xyXG4gICAgICogQHBhcmFtIHsqfVxyXG4gICAgICogQHJldHVybiB7Kn1cclxuICAgICAqL1xyXG4gICAgZ2FtZUJlZ2luKCkge1xyXG4gICAgICB3aW5kb3cuYmFja011c2ljLmN1cnJlbnRUaW1lID0gMTtcclxuICAgICAgdGhpcy5nYW1lSW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy4kcmVmcy5nYW1lLmdhbWVCZWdpbigpO1xyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuI2FwcCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgZm9udC1mYW1pbHk6IFBpbmdGYW5nU0MtUmVndWxhciwgTWljcm9zb2Z0IFlhaGVpLCBzYW5zLXNlcmlmO1xyXG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNjZTE0MWEsICNhYjY0MDApOyAqL1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9iZWlqaW5nMS5wbmdcIik7XHJcbn1cclxuLmlzc3VlLXNraW4ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbWFyZ2luLXRvcDogLTMyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMjYwcHg7XHJcbiAgb3BhY2l0eTogMC4xO1xyXG59XHJcbjwvc3R5bGU+XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!******************************************************!*\
  !*** C:/Users/周锐/Desktop/kunkun/components/menu.vue ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu_vue_vue_type_template_id_5c648b9a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.vue?vue&type=template&id=5c648b9a&scoped=true& */ 13);\n/* harmony import */ var _menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.vue?vue&type=script&lang=js& */ 15);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 19);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _menu_vue_vue_type_template_id_5c648b9a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _menu_vue_vue_type_template_id_5c648b9a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"5c648b9a\",\n  null,\n  false,\n  _menu_vue_vue_type_template_id_5c648b9a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"components/menu.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDd0Q7QUFDTDs7O0FBR25EO0FBQ2dNO0FBQ2hNLGdCQUFnQix5TUFBVTtBQUMxQixFQUFFLDBFQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL21lbnUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVjNjQ4YjlhJnNjb3BlZD10cnVlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbWVudS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL21lbnUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxIQnVpbGRlclguMy42LjE3LjIwMjMwMTEyXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI1YzY0OGI5YVwiLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL21lbnUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/*!*************************************************************************************************!*\
  !*** C:/Users/周锐/Desktop/kunkun/components/menu.vue?vue&type=template&id=5c648b9a&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_template_id_5c648b9a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./menu.vue?vue&type=template&id=5c648b9a&scoped=true& */ 14);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_template_id_5c648b9a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_template_id_5c648b9a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_template_id_5c648b9a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_template_id_5c648b9a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 14 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/周锐/Desktop/kunkun/components/menu.vue?vue&type=template&id=5c648b9a&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: _vm._$s(0, "sc", "menu-wrap"), attrs: { _i: 0 } },
    [
      _c("div", { staticClass: _vm._$s(1, "sc", "title"), attrs: { _i: 1 } }),
      _c(
        "div",
        { staticClass: _vm._$s(2, "sc", "menu-box"), attrs: { _i: 2 } },
        _vm._l(
          _vm._$s(3, "f", { forItems: _vm.menuList }),
          function (item, index, $20, $30) {
            return _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm._$s("3-" + $30, "v-show", item.show()),
                    expression: "_$s((\"3-\"+$30),'v-show',item.show())",
                  },
                ],
                key: _vm._$s(3, "f", { forIndex: $20, key: index }),
                staticClass: _vm._$s("3-" + $30, "sc", "menu-item"),
                attrs: { _i: "3-" + $30 },
                on: {
                  mouseover: function ($event) {
                    return _vm.$store.commit("playAudio", _vm.hoverMusic)
                  },
                  click: function ($event) {
                    _vm.$store.commit("playAudio", _vm.clickMusic),
                      item.clickHandle()
                  },
                },
              },
              [_vm._v(_vm._$s("3-" + $30, "t0-0", _vm._s(item.name)))]
            )
          }
        ),
        0
      ),
      _c("transition", { attrs: { name: "fadeUp", _i: 4 } }, [
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm._$s(5, "v-show", _vm.dialog === "support"),
                expression: "_$s(5,'v-show',dialog === 'support')",
              },
            ],
            staticClass: _vm._$s(5, "sc", "dialog"),
            attrs: { _i: 5 },
          },
          [
            _c("p"),
            _c(
              "div",
              {
                staticClass: _vm._$s(7, "sc", "dialog-footer"),
                attrs: { _i: 7 },
              },
              [
                _c("div", {
                  staticClass: _vm._$s(8, "sc", "footer-btn close-btn"),
                  attrs: { _i: 8 },
                  on: {
                    click: function ($event) {
                      ;(_vm.dialog = false),
                        _vm.$store.commit("playAudio", _vm.clickMusic)
                    },
                  },
                }),
              ]
            ),
          ]
        ),
      ]),
      _c("transition", { attrs: { name: "fadeUp", _i: 9 } }, [
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm._$s(10, "v-show", _vm.dialog === "sound"),
                expression: "_$s(10,'v-show',dialog === 'sound')",
              },
            ],
            staticClass: _vm._$s(10, "sc", "dialog"),
            attrs: { _i: 10 },
          },
          [
            _c("p"),
            _c(
              "div",
              {
                staticClass: _vm._$s(12, "sc", "dialog-footer"),
                attrs: { _i: 12 },
              },
              [
                _c("div", {
                  staticClass: _vm._$s(13, "sc", "footer-btn"),
                  attrs: { _i: 13 },
                  on: {
                    click: function ($event) {
                      _vm.dialog = false
                    },
                  },
                }),
                _c("div", {
                  staticClass: _vm._$s(14, "sc", "footer-btn close-btn"),
                  attrs: { _i: 14 },
                  on: {
                    click: function ($event) {
                      ;(_vm.dialog = false),
                        _vm.$store.commit("tooglePlay", true),
                        _vm.$store.commit("playAudio", _vm.clickMusic)
                    },
                  },
                }),
              ]
            ),
          ]
        ),
      ]),
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 15 */
/*!*******************************************************************************!*\
  !*** C:/Users/周锐/Desktop/kunkun/components/menu.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./menu.vue?vue&type=script&lang=js& */ 16);\n/* harmony import */ var _D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJvQixDQUFnQiwwcUJBQUcsRUFBQyIsImZpbGUiOiIxNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYLjMuNi4xNy4yMDIzMDExMlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUQ6XFxcXEhCdWlsZGVyWC4zLjYuMTcuMjAyMzAxMTJcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFEOlxcXFxIQnVpbGRlclguMy42LjE3LjIwMjMwMTEyXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXEhCdWlsZGVyWC4zLjYuMTcuMjAyMzAxMTJcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWVudS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYLjMuNi4xNy4yMDIzMDExMlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUQ6XFxcXEhCdWlsZGVyWC4zLjYuMTcuMjAyMzAxMTJcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFEOlxcXFxIQnVpbGRlclguMy42LjE3LjIwMjMwMTEyXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXEhCdWlsZGVyWC4zLjYuMTcuMjAyMzAxMTJcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWVudS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///15\n");

/***/ }),
/* 16 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/周锐/Desktop/kunkun/components/menu.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = {\n  name: \"\",\n  data: function data() {\n    var _this = this;\n    return {\n      menuList: [{\n        name: \"开始游戏\",\n        clickHandle: function clickHandle() {\n          _this.gameBegin();\n        },\n        show: function show() {\n          return true;\n        }\n      }, {\n        name: \"打开声音(强烈建议)\",\n        clickHandle: function clickHandle() {\n          _this.$store.commit(\"tooglePlay\", true);\n        },\n        show: function show() {\n          return !_this.$store.state.setting.isPlay;\n        }\n      }, {\n        name: \"关闭声音\",\n        clickHandle: function clickHandle() {\n          _this.$store.commit(\"tooglePlay\", false);\n        },\n        show: function show() {\n          return _this.$store.state.setting.isPlay;\n        }\n      },\n      // {\n      //   name: \"打开弹幕\",\n      //   clickHandle: () => {\n      //     this.$store.commit(\"toggleBulletChat\");\n      //   },\n      //   show: () => !this.$store.state.setting.showBulletChat,\n      // },\n      // {\n      //   name: \"关闭弹幕\",\n      //   clickHandle: () => {\n      //     this.$store.commit(\"toggleBulletChat\");\n      //   },\n      //   show: () => this.$store.state.setting.showBulletChat,\n      // },\n      // {\n      //   name: \"发送弹幕\",\n      //   clickHandle: () => {\n      //     this.dialog = \"comment\";\n      //   },\n      //   show: () => true,\n      // },\n      {\n        name: \"支持作者\",\n        clickHandle: function clickHandle() {\n          _this.dialog = \"support\";\n        },\n        show: function show() {\n          return true;\n        }\n      }],\n      dialog: false,\n      sound: false,\n      hoverMusic: __webpack_require__(/*! ../assets/mp3/hover.wav */ 17),\n      clickMusic: __webpack_require__(/*! ../assets/mp3/click.wav */ 18)\n    };\n  },\n  methods: {\n    gameBegin: function gameBegin() {\n      this.$emit(\"gameBegin\");\n    }\n  }\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9tZW51LnZ1ZSJdLCJuYW1lcyI6WyJuYW1lIiwiZGF0YSIsIm1lbnVMaXN0IiwiY2xpY2tIYW5kbGUiLCJzaG93IiwiZGlhbG9nIiwic291bmQiLCJob3Zlck11c2ljIiwiY2xpY2tNdXNpYyIsIm1ldGhvZHMiLCJnYW1lQmVnaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBaUZBO0VBQ0FBO0VBQ0FDO0lBQUE7SUFDQTtNQUNBQyxXQUNBO1FBQ0FGO1FBQ0FHO1VBQ0E7UUFDQTtRQUNBQztVQUFBO1FBQUE7TUFDQSxHQUNBO1FBQ0FKO1FBQ0FHO1VBQ0E7UUFDQTtRQUNBQztVQUFBO1FBQUE7TUFDQSxHQUNBO1FBQ0FKO1FBQ0FHO1VBQ0E7UUFDQTtRQUNBQztVQUFBO1FBQUE7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO1FBQ0FKO1FBQ0FHO1VBQ0E7UUFDQTtRQUNBQztVQUFBO1FBQUE7TUFDQSxFQUNBO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO0lBQ0E7RUFDQTtFQUNBQztJQUNBQztNQUNBO0lBQ0E7RUFDQTtBQUNBO0FBQUEiLCJmaWxlIjoiMTYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cIm1lbnUtd3JhcFwiPlxuICAgIDwhLS0gPGRpdiBjbGFzcz1cImd6LXdyYXBcIj5cbiAgICAgIDxpbWcgc3JjPVwiaW1nL2d6LmpwZ1wiIGFsdD1cIlwiIC8+XG4gICAgICA8cD7lhazkvJflj7fvvJrnmb7ph4zpnZLlsbE8L3A+XG4gICAgPC9kaXY+IC0tPlxuICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxuICAgICAgPCEtLSA8aW1nIDpzcmM9XCJyZXF1aXJlKCdAL2Fzc2V0cy90aXRsZS5wbmcnKVwiIGFsdD1cIlwiIC8+IC0tPlxuICAgICAg5omT5Z2k5YW9XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIm1lbnUtYm94XCI+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwibWVudS1pdGVtXCJcbiAgICAgICAgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIG1lbnVMaXN0XCJcbiAgICAgICAgOmtleT1cImluZGV4XCJcbiAgICAgICAgQG1vdXNlb3Zlcj1cIiRzdG9yZS5jb21taXQoJ3BsYXlBdWRpbycsIGhvdmVyTXVzaWMpXCJcbiAgICAgICAgQGNsaWNrPVwiJHN0b3JlLmNvbW1pdCgncGxheUF1ZGlvJywgY2xpY2tNdXNpYyksIGl0ZW0uY2xpY2tIYW5kbGUoKVwiXG4gICAgICAgIHYtc2hvdz1cIml0ZW0uc2hvdygpXCJcbiAgICAgID5cbiAgICAgICAge3sgaXRlbS5uYW1lIH19XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8dHJhbnNpdGlvbiBuYW1lPVwiZmFkZVVwXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZGlhbG9nXCIgdi1zaG93PVwiZGlhbG9nID09PSAnc3VwcG9ydCdcIj5cbiAgICAgICAgPHA+XG4gICAgICAgICAg5oSf6LCi5oKo55qE5pSv5oyB77yM5pys5ri45oiP5L2c6ICF5piv5oqW6Z+z4oCc54yr54yr6Iqx54uX54uX4oCd77yM5aaC5p6c5oKo5oS/5oSP5a+55L2c6ICF6KGo56S65pSv5oyB77yM6K+35aSa5aSa57uZ5oiR54K56LWe5ZOf77yM5oSf6LCi5oKo55qE5pSv5oyB77yM5L2c6ICF5Zyo6L+Z6YeM5o+Q5YmN57uZ5oKo5ouc5bm05LqG77yM56Wd5oKo6Lqr5L2T5YGl5bq377yM6ZiW5a625qyi5LmQ77yBXG4gICAgICAgIDwvcD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRpYWxvZy1mb290ZXJcIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzcz1cImZvb3Rlci1idG4gY2xvc2UtYnRuXCJcbiAgICAgICAgICAgIEBjbGljaz1cIihkaWFsb2cgPSBmYWxzZSksICRzdG9yZS5jb21taXQoJ3BsYXlBdWRpbycsIGNsaWNrTXVzaWMpXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICDlhbPpl61cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3RyYW5zaXRpb24+XG4gICAgPCEtLSA8dHJhbnNpdGlvbiBuYW1lPVwiZmFkZVVwXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZGlhbG9nXCIgdi1zaG93PVwiZGlhbG9nID09PSAnY29tbWVudCdcIj5cbiAgICAgICAgPHA+XG4gICAgICAgICAg5bCP5ri45oiP566A6ZmL77yM5pyq5o6l5YWl5o6l5Y+j77yM5aaC5p6c5oKo5oOz5oKo55qE56Wd56aP5Ye6546w5Zyo5by55bmV5Lit77yM6K+35oKo54K55Ye76ZO+5o6lKDxhXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9qdWVqaW4uY24vcG9zdC83MDUxNDY0MDg2NzIyMTgzMjA1L1wiXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgPmh0dHBzOi8vanVlamluLmNuL3Bvc3QvNzA1MTQ2NDA4NjcyMjE4MzIwNS88L2FcbiAgICAgICAgICA+KeWJjeW+gOa0u+WKqOaWh+eroO+8jOaKiuaCqOeahOensOWRvOWPiuelneemj+WGmeWcqOivhOiuuuWMuuWNs+WPr++8gVxuICAgICAgICA8L3A+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkaWFsb2ctZm9vdGVyXCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3M9XCJmb290ZXItYnRuIGNsb3NlLWJ0blwiXG4gICAgICAgICAgICBAY2xpY2s9XCIoZGlhbG9nID0gZmFsc2UpLCAkc3RvcmUuY29tbWl0KCdwbGF5QXVkaW8nLCBjbGlja011c2ljKVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAg5YWz6ZetXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC90cmFuc2l0aW9uPiAtLT5cbiAgICA8dHJhbnNpdGlvbiBuYW1lPVwiZmFkZVVwXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZGlhbG9nXCIgdi1zaG93PVwiZGlhbG9nID09PSAnc291bmQnXCI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIOe9keermemFjeS5kOi+g+S4uuWWnOW6hu+8jOivt+ehruiupOaCqOeahOiAs+acuuW3sue7j+aPkuWFpe+8jOmfs+mHj+W3sue7j+iwg+Wlve+8jOWQpuWImeWuueaYk+mAoOaIkOekvuatu++8gVxuICAgICAgICA8L3A+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkaWFsb2ctZm9vdGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZvb3Rlci1idG5cIiBAY2xpY2s9XCJkaWFsb2cgPSBmYWxzZVwiPuWPlua2iDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzPVwiZm9vdGVyLWJ0biBjbG9zZS1idG5cIlxuICAgICAgICAgICAgQGNsaWNrPVwiXG4gICAgICAgICAgICAgIChkaWFsb2cgPSBmYWxzZSksXG4gICAgICAgICAgICAgICAgJHN0b3JlLmNvbW1pdCgndG9vZ2xlUGxheScsIHRydWUpLFxuICAgICAgICAgICAgICAgICRzdG9yZS5jb21taXQoJ3BsYXlBdWRpbycsIGNsaWNrTXVzaWMpXG4gICAgICAgICAgICBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIOehruiupFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvdHJhbnNpdGlvbj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIlwiLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBtZW51TGlzdDogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCLlvIDlp4vmuLjmiI9cIixcbiAgICAgICAgICBjbGlja0hhbmRsZTogKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5nYW1lQmVnaW4oKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNob3c6ICgpID0+IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcIuaJk+W8gOWjsOmfsyjlvLrng4jlu7rorq4pXCIsXG4gICAgICAgICAgY2xpY2tIYW5kbGU6ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdChcInRvb2dsZVBsYXlcIiwgdHJ1ZSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzaG93OiAoKSA9PiAhdGhpcy4kc3RvcmUuc3RhdGUuc2V0dGluZy5pc1BsYXksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcIuWFs+mXreWjsOmfs1wiLFxuICAgICAgICAgIGNsaWNrSGFuZGxlOiAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoXCJ0b29nbGVQbGF5XCIsIGZhbHNlKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNob3c6ICgpID0+IHRoaXMuJHN0b3JlLnN0YXRlLnNldHRpbmcuaXNQbGF5LFxuICAgICAgICB9LFxuICAgICAgICAvLyB7XG4gICAgICAgIC8vICAgbmFtZTogXCLmiZPlvIDlvLnluZVcIixcbiAgICAgICAgLy8gICBjbGlja0hhbmRsZTogKCkgPT4ge1xuICAgICAgICAvLyAgICAgdGhpcy4kc3RvcmUuY29tbWl0KFwidG9nZ2xlQnVsbGV0Q2hhdFwiKTtcbiAgICAgICAgLy8gICB9LFxuICAgICAgICAvLyAgIHNob3c6ICgpID0+ICF0aGlzLiRzdG9yZS5zdGF0ZS5zZXR0aW5nLnNob3dCdWxsZXRDaGF0LFxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyB7XG4gICAgICAgIC8vICAgbmFtZTogXCLlhbPpl63lvLnluZVcIixcbiAgICAgICAgLy8gICBjbGlja0hhbmRsZTogKCkgPT4ge1xuICAgICAgICAvLyAgICAgdGhpcy4kc3RvcmUuY29tbWl0KFwidG9nZ2xlQnVsbGV0Q2hhdFwiKTtcbiAgICAgICAgLy8gICB9LFxuICAgICAgICAvLyAgIHNob3c6ICgpID0+IHRoaXMuJHN0b3JlLnN0YXRlLnNldHRpbmcuc2hvd0J1bGxldENoYXQsXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIHtcbiAgICAgICAgLy8gICBuYW1lOiBcIuWPkemAgeW8ueW5lVwiLFxuICAgICAgICAvLyAgIGNsaWNrSGFuZGxlOiAoKSA9PiB7XG4gICAgICAgIC8vICAgICB0aGlzLmRpYWxvZyA9IFwiY29tbWVudFwiO1xuICAgICAgICAvLyAgIH0sXG4gICAgICAgIC8vICAgc2hvdzogKCkgPT4gdHJ1ZSxcbiAgICAgICAgLy8gfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwi5pSv5oyB5L2c6ICFXCIsXG4gICAgICAgICAgY2xpY2tIYW5kbGU6ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGlhbG9nID0gXCJzdXBwb3J0XCI7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzaG93OiAoKSA9PiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIGRpYWxvZzogZmFsc2UsXG4gICAgICBzb3VuZDogZmFsc2UsXG4gICAgICBob3Zlck11c2ljOiByZXF1aXJlKFwiLi4vYXNzZXRzL21wMy9ob3Zlci53YXZcIiksXG4gICAgICBjbGlja011c2ljOiByZXF1aXJlKFwiLi4vYXNzZXRzL21wMy9jbGljay53YXZcIiksXG4gICAgfTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGdhbWVCZWdpbigpIHtcbiAgICAgIHRoaXMuJGVtaXQoXCJnYW1lQmVnaW5cIik7XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cbjxzdHlsZSBzY29wZWQ+XG4uZ3otd3JhcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwcHg7XG4gIGJvdHRvbTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmd6LXdyYXAgaW1nIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xufVxuLmd6LXdyYXAgcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4ubWVudS13cmFwIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IDM7XG59XG4udGl0bGUge1xuICBmb250LXNpemU6IDUwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzkyOGRlNztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogMzBweDtcbiAgbWFyZ2luLXRvcDogMjB2aDtcbn1cbi5tZW51LWJveCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDE1MHB4O1xuICB0b3A6IDU1JTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcbn1cbi5tZW51LWl0ZW0ge1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgYm90dG9tLCAjOTI4ZGU3LCAjOWRkOGU2KTtcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IDFweCByZ2IoMjU1IDIzNyAyNiAvIDIwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMC44O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbn1cbi5tZW51LWl0ZW06aG92ZXIge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG59XG4uZGlhbG9nIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICM5ZGQ4ZTY7XG4gIGNvbG9yOiAjOTI4ZGU3O1xuICBwYWRkaW5nOiAyMHB4O1xuICB0ZXh0LWluZGVudDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xufVxuLmRpYWxvZyBhIHtcbiAgY29sb3I6ICNmZmRmODM7XG59XG4uZGlhbG9nIHAge1xuICB1c2VyLXNlbGVjdDogdGV4dDtcbn1cbi5kaWFsb2ctZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogNDBweCBhdXRvIDIwcHg7XG4gIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXG59XG4uZm9vdGVyLWJ0biB7XG4gIHdpZHRoOiAyMDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbn1cbi5jbG9zZS1idG4ge1xuICB0ZXh0LWluZGVudDogMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjOWRkOGU2O1xuICBiYWNrZ3JvdW5kOiAjOTI4ZGU3O1xufVxuLmZvb3Rlci1idG46aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG59XG5cbi5mYWRlVXAtZW50ZXItYWN0aXZlLFxuLmZhZGVVcC1sZWF2ZS1hY3RpdmUge1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MsIHRyYW5zZm9ybSAwLjNzO1xufVxuLmZhZGVVcC1lbnRlciAvKiAuZmFkZS1sZWF2ZS1hY3RpdmUgYmVsb3cgdmVyc2lvbiAyLjEuOCAqLyB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpIHNjYWxlKDAuOCk7XG59XG4uZmFkZVVwLWxlYXZlLXRvIHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSkgc2NhbGUoMC44KTtcbn1cbjwvc3R5bGU+Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///16\n");

/***/ }),
/* 17 */
/*!*******************************************************!*\
  !*** C:/Users/周锐/Desktop/kunkun/assets/mp3/hover.wav ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/assets/mp3/hover.wav\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjE3LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvbXAzL2hvdmVyLndhdlwiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
/*!*******************************************************!*\
  !*** C:/Users/周锐/Desktop/kunkun/assets/mp3/click.wav ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/assets/mp3/click.wav\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjE4LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvbXAzL2NsaWNrLndhdlwiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///18\n");

/***/ }),
/* 19 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 20 */
/*!******************************************************!*\
  !*** C:/Users/周锐/Desktop/kunkun/components/game.vue ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_vue_vue_type_template_id_16ee40ad___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.vue?vue&type=template&id=16ee40ad& */ 21);\n/* harmony import */ var _game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.vue?vue&type=script&lang=js& */ 24);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 19);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _game_vue_vue_type_template_id_16ee40ad___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _game_vue_vue_type_template_id_16ee40ad___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _game_vue_vue_type_template_id_16ee40ad___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"components/game.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaUg7QUFDakg7QUFDd0Q7QUFDTDs7O0FBR25EO0FBQ2dNO0FBQ2hNLGdCQUFnQix5TUFBVTtBQUMxQixFQUFFLDBFQUFNO0FBQ1IsRUFBRSwrRUFBTTtBQUNSLEVBQUUsd0ZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsbUZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2dhbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE2ZWU0MGFkJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vZ2FtZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2dhbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxIQnVpbGRlclguMy42LjE3LjIwMjMwMTEyXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9nYW1lLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///20\n");

/***/ }),
/* 21 */
/*!*************************************************************************************!*\
  !*** C:/Users/周锐/Desktop/kunkun/components/game.vue?vue&type=template&id=16ee40ad& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_template_id_16ee40ad___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./game.vue?vue&type=template&id=16ee40ad& */ 22);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_template_id_16ee40ad___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_template_id_16ee40ad___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_template_id_16ee40ad___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_template_id_16ee40ad___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 22 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/周锐/Desktop/kunkun/components/game.vue?vue&type=template&id=16ee40ad& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      ref: "gemeWrap",
      staticClass: _vm._$s(0, "sc", "game-wrap"),
      attrs: { _i: 0 },
      on: { mouseup: _vm.removeMove },
    },
    [
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm._$s(1, "v-show", _vm.nianshouHP),
              expression: "_$s(1,'v-show',nianshouHP)",
            },
          ],
          staticClass: _vm._$s(1, "sc", "nianshou"),
          style: _vm._$s(1, "s", "marginLeft:" + _vm.nianshouLeft + "px"),
          attrs: { _i: 1 },
        },
        [
          _c("p", [_vm._v(_vm._$s(2, "t0-0", _vm._s(_vm.nianshouHP)))]),
          _c("img", {
            staticClass: _vm._$s(3, "sc", "nianshou-img"),
            attrs: {
              src: _vm._$s(3, "a-src", __webpack_require__(/*! ../assets/ji.png */ 23)),
              _i: 3,
            },
          }),
        ]
      ),
      _c(
        "div",
        {
          ref: "paozhu",
          staticClass: _vm._$s(4, "sc", "paozhu"),
          style: _vm._$s(4, "s", "marginLeft:" + _vm.paozhuLeft + "px"),
          attrs: { _i: 4 },
          on: { mousedown: _vm.addMove, touchmove: _vm.touchM },
        },
        [_c("img", {})]
      ),
      _vm._$s(6, "i", this.state == 0 ? true : false)
        ? _c(
            "div",
            { staticClass: _vm._$s(6, "sc", "panel-wrap"), attrs: { _i: 6 } },
            [
              _c(
                "div",
                {
                  staticClass: _vm._$s(7, "sc", "game-panel panel-item"),
                  attrs: { _i: 7 },
                },
                [
                  _c("p", {
                    staticClass: _vm._$s(8, "sc", "game-title"),
                    attrs: { _i: 8 },
                  }),
                  _c(
                    "div",
                    {
                      staticClass: _vm._$s(9, "sc", "game-data-wrap"),
                      attrs: { _i: 9 },
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: _vm._$s(10, "sc", "game-data-item"),
                          attrs: { _i: 10 },
                        },
                        [
                          _c("p", {
                            staticClass: _vm._$s(11, "sc", "game-data-title"),
                            attrs: { _i: 11 },
                          }),
                          _c(
                            "p",
                            {
                              staticClass: _vm._$s(12, "sc", "game-data-value"),
                              attrs: { _i: 12 },
                            },
                            [
                              _vm._v(
                                _vm._$s(
                                  12,
                                  "t0-0",
                                  _vm._s(_vm.formatTime(_vm.gameDuration))
                                )
                              ),
                            ]
                          ),
                        ]
                      ),
                      _c(
                        "div",
                        {
                          staticClass: _vm._$s(13, "sc", "game-data-item"),
                          attrs: { _i: 13 },
                        },
                        [
                          _c("p", {
                            staticClass: _vm._$s(14, "sc", "game-data-title"),
                            attrs: { _i: 14 },
                          }),
                          _c(
                            "p",
                            {
                              staticClass: _vm._$s(15, "sc", "game-data-value"),
                              attrs: { _i: 15 },
                            },
                            [_vm._v(_vm._$s(15, "t0-0", _vm._s(_vm.frequency)))]
                          ),
                        ]
                      ),
                      _c(
                        "div",
                        {
                          staticClass: _vm._$s(16, "sc", "game-data-item"),
                          attrs: { _i: 16 },
                        },
                        [
                          _c("p", {
                            staticClass: _vm._$s(17, "sc", "game-data-title"),
                            attrs: { _i: 17 },
                          }),
                          _c(
                            "p",
                            {
                              staticClass: _vm._$s(18, "sc", "game-data-value"),
                              attrs: { _i: 18 },
                            },
                            [
                              _vm._v(
                                _vm._$s(18, "t0-0", _vm._s(_vm.bulletSpeed))
                              ),
                            ]
                          ),
                        ]
                      ),
                      _c(
                        "div",
                        {
                          staticClass: _vm._$s(19, "sc", "game-data-item"),
                          attrs: { _i: 19 },
                        },
                        [
                          _c("p", {
                            staticClass: _vm._$s(20, "sc", "game-data-title"),
                            attrs: { _i: 20 },
                          }),
                          _c(
                            "p",
                            {
                              staticClass: _vm._$s(21, "sc", "game-data-value"),
                              attrs: { _i: 21 },
                            },
                            [_vm._v(_vm._$s(21, "t0-0", _vm._s(_vm.damage)))]
                          ),
                        ]
                      ),
                    ]
                  ),
                ]
              ),
            ]
          )
        : _vm._e(),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm._$s(22, "v-show", !_vm.nianshouHP),
              expression: "_$s(22,'v-show',!nianshouHP)",
            },
          ],
          staticClass: _vm._$s(22, "sc", "result-box"),
          attrs: { _i: 22 },
        },
        [
          _c("div", {
            staticClass: _vm._$s(23, "sc", "result-title"),
            attrs: { _i: 23 },
          }),
          _c(
            "div",
            {
              staticClass: _vm._$s(24, "sc", "result-content"),
              attrs: { _i: 24 },
            },
            [
              _c(
                "div",
                {
                  staticClass: _vm._$s(25, "sc", "result-desc result-block"),
                  attrs: { _i: 25 },
                },
                [
                  _vm._v(
                    _vm._$s(
                      25,
                      "t0-0",
                      _vm._s(_vm.formatTime(_vm.gameDuration))
                    )
                  ),
                ]
              ),
              _c(
                "div",
                {
                  staticClass: _vm._$s(26, "sc", "userBlessing"),
                  attrs: { _i: 26 },
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: _vm._$s(
                        27,
                        "sc",
                        "blessing-username result-block"
                      ),
                      attrs: { _i: 27 },
                    },
                    [_c("b")]
                  ),
                  _c("div", {
                    staticClass: _vm._$s(
                      29,
                      "sc",
                      "blessing-content result-block"
                    ),
                    attrs: { _i: 29 },
                  }),
                ]
              ),
              _c(
                "div",
                {
                  staticClass: _vm._$s(30, "sc", "btn-wrap"),
                  attrs: { _i: 30 },
                },
                _vm._l(
                  _vm._$s(31, "f", { forItems: _vm.resultBtnData }),
                  function (item, $10, $20, $30) {
                    return _c(
                      "div",
                      {
                        key: _vm._$s(31, "f", {
                          forIndex: $20,
                          key: item.name,
                        }),
                        staticClass: _vm._$s(
                          "31-" + $30,
                          "sc",
                          "btn-item result-block"
                        ),
                        attrs: { _i: "31-" + $30 },
                        on: {
                          mouseover: function ($event) {
                            return _vm.$store.commit(
                              "playAudio",
                              _vm.hoverMusic
                            )
                          },
                          click: function ($event) {
                            _vm.$store.commit("playAudio", _vm.clickMusic),
                              item.clickHandle()
                          },
                        },
                      },
                      [_vm._v(_vm._$s("31-" + $30, "t0-0", _vm._s(item.name)))]
                    )
                  }
                ),
                0
              ),
            ]
          ),
        ]
      ),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 23 */
/*!************************************************!*\
  !*** C:/Users/周锐/Desktop/kunkun/assets/ji.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/assets/ji.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjIzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvamkucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///23\n");

/***/ }),
/* 24 */
/*!*******************************************************************************!*\
  !*** C:/Users/周锐/Desktop/kunkun/components/game.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./game.vue?vue&type=script&lang=js& */ 25);\n/* harmony import */ var _D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_game_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJvQixDQUFnQiwwcUJBQUcsRUFBQyIsImZpbGUiOiIyNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYLjMuNi4xNy4yMDIzMDExMlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUQ6XFxcXEhCdWlsZGVyWC4zLjYuMTcuMjAyMzAxMTJcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFEOlxcXFxIQnVpbGRlclguMy42LjE3LjIwMjMwMTEyXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXEhCdWlsZGVyWC4zLjYuMTcuMjAyMzAxMTJcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZ2FtZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYLjMuNi4xNy4yMDIzMDExMlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUQ6XFxcXEhCdWlsZGVyWC4zLjYuMTcuMjAyMzAxMTJcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFEOlxcXFxIQnVpbGRlclguMy42LjE3LjIwMjMwMTEyXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXEhCdWlsZGVyWC4zLjYuMTcuMjAyMzAxMTJcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZ2FtZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///24\n");

/***/ }),
/* 25 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/周锐/Desktop/kunkun/components/game.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n// const nianshowMove = new Worker('./nianshowMove.js')\nvar _default = {\n  name: \"game\",\n  data: function data() {\n    var _this = this;\n    return {\n      state: 0,\n      //面板显示\n      imgUrl: __webpack_require__(/*! ../assets/lanqiu.png */ 27),\n      //篮球地址\n      hoverMusic: __webpack_require__(/*! @/assets/mp3/hover.wav */ 17),\n      clickMusic: __webpack_require__(/*! @/assets/mp3/click.wav */ 18),\n      successMusic: __webpack_require__(/*! @/assets/mp3/success.mp3 */ 28),\n      successMusicAudio: null,\n      questionJson: __webpack_require__(/*! @/assets/data/question.json */ 29),\n      //问题源数据\n      questionData: [],\n      // 当前轮题库\n      userBlessingData: __webpack_require__(/*! @/assets/data/userBlessing.json */ 30),\n      // 用户祝福\n      userBlessing: {},\n      questionList: [],\n      // 问题列表\n      gameBeginTime: 0,\n      // 游戏开始时间\n      gameDuration: 0,\n      // 游戏持续时间\n      clientX: 0,\n      // 鼠标上次的位置\n      // paozhuLeft: document.documentElement.clientWidth / 2, // 坤坤距离左边的距离\n      paozhuLeft: 0,\n      // 坤坤距离左边的距离\n      nianshouLeft: 0,\n      // 年兽距离左边的距离\n      nianshouInterval: null,\n      // 年兽移动的定时器\n      nianshouHP: 250,\n      // 年兽的血量\n      screenWidth: document.documentElement.clientWidth,\n      // 屏幕宽度\n      screenHeight: document.documentElement.clientHeight,\n      // 屏幕高度\n      nianshouMoveDir: 2,\n      // 年兽移动的方向速度\n      createBulletInterval: null,\n      // 创建子弹的定时器\n      frequency: 5,\n      // 发射子弹频率\n      bulletSpeed: 5,\n      // 子弹飞行速度\n      damage: 4,\n      // 子弹攻击力\n      lastBulletTime: 0,\n      // 上次发射子弹时间\n      resultBtnData: [{\n        name: \"再来一次\",\n        clickHandle: function clickHandle() {\n          _this.state = 0;\n          _this.successMusicAudio.pause();\n          _this.gameBegin();\n        }\n      }, {\n        name: \"返回首页\",\n        clickHandle: function clickHandle() {\n          _this.successMusicAudio.pause();\n          window.backMusic.currentTime = 127.2;\n          _this.$emit(\"backToHome\");\n        }\n      }\n      // ,\n      // {\n      //   name: \"搭建过程\",\n      //   clickHandle: () => {\n      //     window.open(\"https://juejin.cn/post/7051464086722183205/\");\n      //   },\n      // },\n      // {\n      //   name: \"gitee\",\n      //   clickHandle: () => {\n      //     window.open(\"https://gitee.com/ihope_top/new-year-game\");\n      //   },\n      // },\n      // {\n      //   name: \"github\",\n      //   clickHandle: () => {\n      //     window.open(\"https://github.com/heyongsheng/new-year-game\");\n      //   },\n      // },\n      ]\n    };\n  },\n  mounted: function mounted() {\n    this.successMusicAudio = new Audio(this.successMusic);\n    this.successMusicAudio.loop = true;\n    this.successMusicAudio.volume = 0.5;\n    this.successMusicAudio.load();\n    // this.gameBegin()\n    __f__(\"log\", document.documentElement.clientWidth, \" at components/game.vue:223\");\n  },\n  methods: {\n    // 开始游戏\n    gameBegin: function gameBegin() {\n      // 开始时间\n      this.gameBeginTime = new Date().getTime();\n      // 重置年兽及炮车位置\n      // this.paozhuLeft = document.documentElement.clientWidth / 2;\n      this.paozhuLeft = 0;\n      this.nianshouLeft = 0;\n      this.clientX = 0;\n      // 清空年兽定时器\n      cancelAnimationFrame(this.nianshouInterval);\n      // 初始化问题列表\n      this.questionList = [];\n      this.questionData = JSON.parse(JSON.stringify(this.questionJson));\n      // 重置攻速、伤害、射速\n      this.frequency = this.$options.data().frequency;\n      this.damage = this.$options.data().damage;\n      this.bulletSpeed = this.$options.data().bulletSpeed;\n      // 重置年兽血量\n      this.nianshouHP = 250;\n      // 年兽开始移动\n      this.nianshouMove();\n      // 生成子弹\n      this.createBullet();\n      // 添加第一道问题\n      this.addQuestion();\n      // 从用户祝福库抽取随机祝福\n      var dataLength = this.userBlessingData.length;\n      var randomIndex = Math.floor(Math.random() * dataLength);\n      this.userBlessing = this.userBlessingData[randomIndex];\n    },\n    // 游戏结束\n    gameOver: function gameOver() {\n      // 播放游戏胜利音乐\n      if (this.$store.state.setting.isPlay) {\n        this.successMusicAudio.play();\n      }\n\n      // this.successMusicAudio.play()\n      // 清除年兽移动定时器\n      cancelAnimationFrame(this.nianshouInterval);\n      // 清除子弹定时器\n      cancelAnimationFrame(this.createBulletInterval);\n    },\n    // 鼠标按下，添加移动事件\n    addMove: function addMove(e) {\n      __f__(\"log\", 1, \" at components/game.vue:272\");\n      e = e || window.event;\n      this.clientX = e.clientX;\n      this.clientY = e.clientY;\n      // this.$refs.gemeWrap.onmousemove = this.moveFunc;\n      // this.$refs.gemeWrap.onmousemove = this.touchM;\n    },\n    //坤坤移动\n    touchM: function touchM(e) {\n      __f__(\"log\", e.touches[0].clientX, \" at components/game.vue:282\");\n      e = e || window.event;\n      e.preventDefault();\n      var movementX = e.touches[0].clientX - this.clientX;\n      this.paozhuLeft += movementX;\n      this.clientX = e.touches[0].clientX;\n    },\n    // 鼠标拖动，移动炮竹\n    moveFunc: function moveFunc(e) {\n      // console.log(2);\n      e = e || window.event;\n      e.preventDefault();\n      var movementX = e.clientX - this.clientX;\n      this.paozhuLeft += movementX;\n      this.clientX = e.clientX;\n    },\n    // 鼠标抬起，移除移动事件\n    removeMove: function removeMove() {\n      __f__(\"log\", 3, \" at components/game.vue:301\");\n      this.$refs.gemeWrap.onmousemove = null;\n    },\n    // 年兽移动\n    nianshouMove: function nianshouMove() {\n      // 更新游戏时间\n      this.gameDuration = new Date().getTime() - this.gameBeginTime;\n      if (this.nianshouLeft + 80 >= this.screenWidth) {\n        this.nianshouMoveDir = -2;\n      } else if (this.nianshouLeft < 0) {\n        this.nianshouMoveDir = 2;\n      }\n      this.nianshouLeft += this.nianshouMoveDir;\n      this.nianshouInterval = requestAnimationFrame(this.nianshouMove);\n    },\n    // 生成子弹\n    createBullet: function createBullet() {\n      var _this2 = this;\n      // 子弹\n      var now = new Date().getTime();\n      if (now - this.lastBulletTime > 1000 / this.frequency) {\n        var bullet = document.createElement(\"div\");\n        bullet.className = \"bullet\";\n        bullet.style.left = this.paozhuLeft + 25 + \"px\";\n        bullet.style.top = this.screenHeight - 123 + \"px\";\n        bullet.style.position = \"absolute\";\n        bullet.style.width = \"20px\";\n        bullet.style.height = \"20px\";\n        bullet.style.backgroundImage = \"url('../assets/lanqiu.png')\";\n        bullet.style.backgroundImage = \"url(\".concat(this.imgUrl, \")\");\n        this.$refs.gemeWrap.appendChild(bullet);\n        this.$store.commit(\"playAudio\", __webpack_require__(/*! ../assets/mp3/emit.mp3 */ 31));\n        // 子弹移动\n        var bulletMove = function bulletMove() {\n          bullet.style.top = bullet.offsetTop - _this2.bulletSpeed + \"px\";\n          // 如果子弹距离顶部的距离为年兽的高度时，判断子弹和年兽的水平位置是否重合\n          if (bullet.offsetTop <= 100 && bullet.offsetLeft >= _this2.nianshouLeft && bullet.offsetLeft <= _this2.nianshouLeft + 100) {\n            // 年兽掉血\n            _this2.nianshouHP -= _this2.damage;\n            _this2.$store.commit(\"playAudio\", __webpack_require__(/*! ../assets/mp3/a.mp3 */ 32));\n            if (_this2.nianshouHP <= 0) {\n              _this2.nianshouHP = 0;\n              _this2.state = 1;\n              _this2.gameOver();\n            }\n            // 子弹消失\n            _this2.$refs.gemeWrap.removeChild(bullet);\n            // cancelAnimationFrame(bulletMove)\n          } else if (bullet.offsetTop <= 0) {\n            _this2.$refs.gemeWrap.removeChild(bullet);\n            // cancelAnimationFrame(bulletMove)\n          } else {\n            requestAnimationFrame(bulletMove);\n          }\n        };\n        bulletMove();\n        this.lastBulletTime = now;\n      }\n      this.createBulletInterval = requestAnimationFrame(this.createBullet);\n    },\n    // 时间格式化为x分y秒z\n    formatTime: function formatTime(time) {\n      var minute = Math.floor(time / 60000);\n      var second = Math.floor(time % 60000 / 1000);\n      var millisecond = time % 1000;\n      // return `${minute}分${second}秒${millisecond}`;\n      return \"\".concat(minute, \"\\u5206\").concat(second, \"\\u79D2\");\n    },\n    /**\n     * @description: 添加问题\n     * @param {*}\n     * @return {*}\n     */\n    addQuestion: function addQuestion() {\n      var _this3 = this;\n      var dataLength = this.questionData.length;\n      var randomIndex = Math.floor(Math.random() * dataLength);\n      var question = this.questionData.splice(randomIndex, 1)[0];\n      // eslint-disable-next-line no-debugger\n      var data = {\n        question: question,\n        answerTime: 9,\n        showTime: 6\n      };\n      // 添加展示倒计时\n      var showCountDown = function showCountDown() {\n        data.showTime--;\n        if (data.showTime > 0) {\n          setTimeout(showCountDown, 1000);\n        } else {\n          // 倒计时结束，展示问题并开始答题倒计时\n          answerCountDown();\n        }\n      };\n      // 添加回答倒计时\n      var answerCountDown = function answerCountDown() {\n        data.answerTime--;\n        if (data.answerTime > 0) {\n          setTimeout(function () {\n            showCountDown();\n          }, 1000);\n        } else {\n          // 倒计时结束，如果没有选择正确答案，则添加一道错误答案\n          if (!data.result) {\n            data.result = \"10\";\n          }\n          // 如果问题不足5道，则添加一道问题\n          if (_this3.questionList.length < 5) {\n            _this3.addQuestion();\n          }\n        }\n      };\n      // 执行展示倒计时\n      showCountDown();\n      this.questionList.push(data);\n    },\n    /**\n     * @description: 回答问题\n     * @param {*} answer 选择的答案\n     * @param {*} question 回答的问题\n     * @return {*}\n     */\n    answerQuestion: function answerQuestion(answer, question) {\n      this.$store.commit(\"playAudio\", this.clickMusic);\n      question.result = answer;\n      // 如果回答正确，则增加buff\n      if (answer === question.question.answer) {\n        this.frequency++; // 攻速+1\n        this.bulletSpeed += 2; // 射速+2\n        this.damage += 1; // 伤害+10\n      }\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 26)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9nYW1lLnZ1ZSJdLCJuYW1lcyI6WyJuYW1lIiwiZGF0YSIsInN0YXRlIiwiaW1nVXJsIiwiaG92ZXJNdXNpYyIsImNsaWNrTXVzaWMiLCJzdWNjZXNzTXVzaWMiLCJzdWNjZXNzTXVzaWNBdWRpbyIsInF1ZXN0aW9uSnNvbiIsInF1ZXN0aW9uRGF0YSIsInVzZXJCbGVzc2luZ0RhdGEiLCJ1c2VyQmxlc3NpbmciLCJxdWVzdGlvbkxpc3QiLCJnYW1lQmVnaW5UaW1lIiwiZ2FtZUR1cmF0aW9uIiwiY2xpZW50WCIsInBhb3podUxlZnQiLCJuaWFuc2hvdUxlZnQiLCJuaWFuc2hvdUludGVydmFsIiwibmlhbnNob3VIUCIsInNjcmVlbldpZHRoIiwic2NyZWVuSGVpZ2h0IiwibmlhbnNob3VNb3ZlRGlyIiwiY3JlYXRlQnVsbGV0SW50ZXJ2YWwiLCJmcmVxdWVuY3kiLCJidWxsZXRTcGVlZCIsImRhbWFnZSIsImxhc3RCdWxsZXRUaW1lIiwicmVzdWx0QnRuRGF0YSIsImNsaWNrSGFuZGxlIiwid2luZG93IiwibW91bnRlZCIsIm1ldGhvZHMiLCJnYW1lQmVnaW4iLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImdhbWVPdmVyIiwiYWRkTW92ZSIsImUiLCJ0b3VjaE0iLCJtb3ZlRnVuYyIsInJlbW92ZU1vdmUiLCJuaWFuc2hvdU1vdmUiLCJjcmVhdGVCdWxsZXQiLCJidWxsZXQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJidWxsZXRNb3ZlIiwiZm9ybWF0VGltZSIsImFkZFF1ZXN0aW9uIiwicXVlc3Rpb24iLCJhbnN3ZXJUaW1lIiwic2hvd1RpbWUiLCJzZXRUaW1lb3V0IiwiYW5zd2VyQ291bnREb3duIiwic2hvd0NvdW50RG93biIsImFuc3dlclF1ZXN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpSkE7QUFBQSxlQUNBO0VBQ0FBO0VBQ0FDO0lBQUE7SUFDQTtNQUNBQztNQUFBO01BQ0FDO01BQUE7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFBQTtNQUNBQztNQUFBO01BQ0FDO01BQUE7TUFDQUM7TUFDQUM7TUFBQTtNQUNBQztNQUFBO01BQ0FDO01BQUE7TUFDQUM7TUFBQTtNQUNBO01BQ0FDO01BQUE7TUFDQUM7TUFBQTtNQUNBQztNQUFBO01BQ0FDO01BQUE7TUFDQUM7TUFBQTtNQUNBQztNQUFBO01BQ0FDO01BQUE7TUFDQUM7TUFBQTtNQUNBQztNQUFBO01BQ0FDO01BQUE7TUFDQUM7TUFBQTtNQUNBQztNQUFBO01BQ0FDLGdCQUNBO1FBQ0E1QjtRQUNBNkI7VUFDQTtVQUNBO1VBQ0E7UUFDQTtNQUNBLEdBQ0E7UUFDQTdCO1FBQ0E2QjtVQUNBO1VBQ0FDO1VBQ0E7UUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFBQTtJQUVBO0VBQ0E7RUFDQUM7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7RUFDQTtFQUNBQztJQUNBO0lBQ0FDO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBQztNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO0lBQ0E7SUFDQTtJQUNBQztNQUNBO01BQ0E7UUFDQTtNQUNBOztNQUVBO01BQ0E7TUFDQUQ7TUFDQTtNQUNBQTtJQUNBO0lBQ0E7SUFDQUU7TUFDQTtNQUVBQztNQUNBO01BQ0E7TUFDQTtNQUNBO0lBQ0E7SUFDQTtJQUNBQztNQUNBO01BQ0FEO01BQ0FBO01BQ0E7TUFDQTtNQUNBO0lBQ0E7SUFFQTtJQUNBRTtNQUNBO01BQ0FGO01BQ0FBO01BQ0E7TUFDQTtNQUNBO0lBQ0E7SUFDQTtJQUNBRztNQUNBO01BQ0E7SUFDQTtJQUNBO0lBQ0FDO01BQ0E7TUFDQTtNQUNBO1FBQ0E7TUFDQTtRQUNBO01BQ0E7TUFDQTtNQUNBO0lBQ0E7SUFDQTtJQUNBQztNQUFBO01BQ0E7TUFDQTtNQUNBO1FBQ0E7UUFDQUM7UUFDQUE7UUFDQUE7UUFDQUE7UUFDQUE7UUFDQUE7UUFDQUE7UUFDQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtVQUNBQTtVQUNBO1VBQ0EsSUFDQUEsMkJBQ0FBLDRDQUNBQSxnREFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO2NBQ0E7Y0FDQTtjQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7VUFDQTtZQUNBO1lBQ0E7VUFDQTtZQUNBQztVQUNBO1FBQ0E7UUFDQUM7UUFDQTtNQUNBO01BQ0E7SUFDQTtJQUNBO0lBQ0FDO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtJQUNBO0lBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUNBQztNQUFBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtRQUNBQztRQUNBQztRQUNBQztNQUNBO01BQ0E7TUFDQTtRQUNBakQ7UUFDQTtVQUNBa0Q7UUFDQTtVQUNBO1VBQ0FDO1FBQ0E7TUFDQTtNQUNBO01BQ0E7UUFDQW5EO1FBQ0E7VUFDQWtEO1lBQ0FFO1VBQ0E7UUFDQTtVQUNBO1VBQ0E7WUFDQXBEO1VBQ0E7VUFDQTtVQUNBO1lBQ0E7VUFDQTtRQUNBO01BQ0E7TUFDQTtNQUNBb0Q7TUFDQTtJQUNBO0lBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBQ0FDO01BQ0E7TUFDQU47TUFDQTtNQUNBO1FBQ0E7UUFDQTtRQUNBO01BQ0E7SUFDQTtFQUNBO0FBQ0E7QUFBQSwyQiIsImZpbGUiOiIyNS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiZ2FtZS13cmFwXCIgcmVmPVwiZ2VtZVdyYXBcIiBAbW91c2V1cD1cInJlbW92ZU1vdmVcIj5cbiAgICA8IS0tIOW5tOWFvSAtLT5cbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cIm5pYW5zaG91XCJcbiAgICAgIDpzdHlsZT1cIidtYXJnaW5MZWZ0OicgKyBuaWFuc2hvdUxlZnQgKyAncHgnXCJcbiAgICAgIHYtc2hvdz1cIm5pYW5zaG91SFBcIlxuICAgID5cbiAgICAgIDxwIHN0eWxlPVwiY29sb3I6ICdyZWQnXCI+5Z2k6KGAOiB7eyBuaWFuc2hvdUhQIH19PC9wPlxuICAgICAgPGltZyBzcmM9XCIuLi9hc3NldHMvamkucG5nXCIgY2xhc3M9XCJuaWFuc2hvdS1pbWdcIiAvPlxuICAgIDwvZGl2PlxuICAgIDwhLS0g6Z6t54KuIC0tPlxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwicGFvemh1XCJcbiAgICAgIHJlZj1cInBhb3podVwiXG4gICAgICBAbW91c2Vkb3duPVwiYWRkTW92ZVwiXG4gICAgICBAdG91Y2htb3ZlPVwidG91Y2hNXCJcbiAgICAgIDpzdHlsZT1cIidtYXJnaW5MZWZ0OicgKyBwYW96aHVMZWZ0ICsgJ3B4J1wiXG4gICAgPlxuICAgICAgPGltZyBzcmM9XCIuLi9hc3NldHMva3VuLnBuZ1wiIGFsdD1cIlwiIC8+XG4gICAgPC9kaXY+XG4gICAgPCEtLSDpnaLmnb/ljLogLS0+XG4gICAgPGRpdiBjbGFzcz1cInBhbmVsLXdyYXBcIiB2LWlmPVwidGhpcy5zdGF0ZSA9PSAwID8gdHJ1ZSA6IGZhbHNlXCI+XG4gICAgICA8IS0tIOa4uOaIj+mdouadvyAtLT5cbiAgICAgIDxkaXYgY2xhc3M9XCJnYW1lLXBhbmVsIHBhbmVsLWl0ZW1cIj5cbiAgICAgICAgPHAgY2xhc3M9XCJnYW1lLXRpdGxlXCI+5Ye76LSl5Z2k5YW9PC9wPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FtZS1kYXRhLXdyYXBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FtZS1kYXRhLWl0ZW1cIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiZ2FtZS1kYXRhLXRpdGxlXCI+5pe26Ze077yaPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJnYW1lLWRhdGEtdmFsdWVcIj57eyBmb3JtYXRUaW1lKGdhbWVEdXJhdGlvbikgfX08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImdhbWUtZGF0YS1pdGVtXCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImdhbWUtZGF0YS10aXRsZVwiPuaUu+mAn++8mjwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiZ2FtZS1kYXRhLXZhbHVlXCI+e3sgZnJlcXVlbmN5IH19PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJnYW1lLWRhdGEtaXRlbVwiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJnYW1lLWRhdGEtdGl0bGVcIj7lsITpgJ/vvJo8L3A+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImdhbWUtZGF0YS12YWx1ZVwiPnt7IGJ1bGxldFNwZWVkIH19PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJnYW1lLWRhdGEtaXRlbVwiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJnYW1lLWRhdGEtdGl0bGVcIj7kvKTlrrPvvJo8L3A+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImdhbWUtZGF0YS12YWx1ZVwiPnt7IGRhbWFnZSB9fTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDwhLS0g6Zeu6aKY6Z2i5p2/IC0tPlxuICAgICAgPCEtLSA8ZGl2XG4gICAgICAgIGNsYXNzPVwicXVlc3Rpb24tcGFuZWwgcGFuZWwtaXRlbVwiXG4gICAgICAgIDpjbGFzcz1cInsgY2xpZW50Q2VudGVyOiBxdWVzdGlvbi5hbnN3ZXJUaW1lID4gMCB9XCJcbiAgICAgICAgdi1mb3I9XCIocXVlc3Rpb24sIGluZGV4KSBpbiBxdWVzdGlvbkxpc3RcIlxuICAgICAgICA6a2V5PVwiaW5kZXhcIlxuICAgICAgPlxuICAgICAgICA8cCBjbGFzcz1cInNob3ctY291bnQtZG93blwiIHYtaWY9XCJxdWVzdGlvbi5zaG93VGltZSA+IDBcIj5cbiAgICAgICAgICB7eyBxdWVzdGlvbi5zaG93VGltZSB9fVxuICAgICAgICA8L3A+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJxdWVzdGlvbi13cmFwXCIgdi1lbHNlPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb3VudC1kb3duXCIgdi1pZj1cInF1ZXN0aW9uLmFuc3dlclRpbWUgPiAwXCI+XG4gICAgICAgICAgICA8cD7or7flnKh7eyBxdWVzdGlvbi5hbnN3ZXJUaW1lIH1956eS5YaF54K55Ye75q2j56Gu562U5qGIPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJxdWVzdGlvbi1wYW5lbC10aXRsZVwiPumXrumimCB7eyBpbmRleCArIDEgfX08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicXVlc3Rpb24tY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicXVlc3Rpb24tdGl0bGVcIj57eyBxdWVzdGlvbi5xdWVzdGlvbi50aXRsZSB9fTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFuc3dlci13cmFwIHNob3dcIiB2LWlmPVwiIXF1ZXN0aW9uLnJlc3VsdFwiPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJhbnN3ZXItaXRlbVwiXG4gICAgICAgICAgICAgICAgdi1mb3I9XCJpdGVtIGluIHF1ZXN0aW9uLnF1ZXN0aW9uLm9wdGlvblwiXG4gICAgICAgICAgICAgICAgOmtleT1cIml0ZW0ua2V5XCJcbiAgICAgICAgICAgICAgICBAbW91c2VvdmVyPVwiJHN0b3JlLmNvbW1pdCgncGxheUF1ZGlvJywgaG92ZXJNdXNpYylcIlxuICAgICAgICAgICAgICAgIEBjbGljaz1cImFuc3dlclF1ZXN0aW9uKGl0ZW0ua2V5LCBxdWVzdGlvbilcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3sgaXRlbS5rZXkgfX3vvJp7eyBpdGVtLnZhbHVlIH19XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW5zd2VyLXdyYXAgcmVzdWx0XCIgdi1lbHNlPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJhbnN3ZXItaXRlbVwiXG4gICAgICAgICAgICAgICAgdi1mb3I9XCJpdGVtIGluIHF1ZXN0aW9uLnF1ZXN0aW9uLm9wdGlvblwiXG4gICAgICAgICAgICAgICAgOmtleT1cIml0ZW0ua2V5XCJcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICAgICAgICAgICByZXN1bHQ6IHF1ZXN0aW9uLnF1ZXN0aW9uLmFuc3dlciA9PT0gaXRlbS5rZXksXG4gICAgICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7eyBpdGVtLmtleSB9fe+8mnt7IGl0ZW0udmFsdWUgfX1cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNoZWNrXCIgdi1pZj1cInF1ZXN0aW9uLnJlc3VsdCA9PT0gaXRlbS5rZXlcIj7il4c8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzPVwiYnVmZlwiXG4gICAgICAgICAgICAgIHYtaWY9XCJxdWVzdGlvbi5yZXN1bHQgPT09IHF1ZXN0aW9uLnF1ZXN0aW9uLmFuc3dlclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIOaUu+mAnysxIOWwhOmAnysxIOS8pOWusysxXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3M9XCJkZXNjXCJcbiAgICAgICAgICAgICAgdi1pZj1cIlxuICAgICAgICAgICAgICAgIHF1ZXN0aW9uLnJlc3VsdCAmJiBxdWVzdGlvbi5yZXN1bHQgIT09IHF1ZXN0aW9uLnF1ZXN0aW9uLmFuc3dlclxuICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7eyBxdWVzdGlvbi5xdWVzdGlvbi5kZXNjIH19XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj4gLS0+XG4gICAgPC9kaXY+XG4gICAgPCEtLSDmuLjmiI/nu5PmnZ8gLS0+XG4gICAgPCEtLSB2LXNob3c9XCIhbmlhbnNob3VIUFwiIC0tPlxuICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtYm94XCIgdi1zaG93PVwiIW5pYW5zaG91SFBcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtdGl0bGVcIj7kvaDlpb3vvIwyMDIz77yBPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWNvbnRlbnRcIj5cbiAgICAgICAgPCEtLSA8ZGl2IGNsYXNzPVwicmVzdWx0LXRpdG1lIHJlc3VsdC1ibG9ja1wiPlxuICAgICAgICAgIHt7IGZvcm1hdFRpbWUoZ2FtZUR1cmF0aW9uKSB9fVxuICAgICAgICA8L2Rpdj4gLS0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtZGVzYyByZXN1bHQtYmxvY2tcIj5cbiAgICAgICAgICDmgqjlhbHoirHotLnkuoZ7e1xuICAgICAgICAgICAgZm9ybWF0VGltZShnYW1lRHVyYXRpb24pXG4gICAgICAgICAgfX3nmoTml7bpl7Tlh7votKXkuoYyMDIy5bm055qE5Z2k5YW977yM5oGt5Zac5oKo6I635b6X5LqG5pyA57uI55qE6IOc5Yip77yB5Lmf5biM5pyb5oKo5omA5pyJ55qE54Om5oG86YO96ZqP552A6L+Z5Y+q5Z2k5YW95LiA6LW354Of5raI5LqR5pWj77yM56Wd5oKo5paw55qE5LiA5bm05b+D5oOz5LqL5oiQ77yM5LiH5LqL5aaC5oSP77yBXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidXNlckJsZXNzaW5nXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJsZXNzaW5nLXVzZXJuYW1lIHJlc3VsdC1ibG9ja1wiPlxuICAgICAgICAgICAgPCEtLSDmga3llpzkvaDojrflvpfkuoYgPGI+e3sgdXNlckJsZXNzaW5nLm5hbWUgfX08L2I+IOWvueS9oOmAgeWHuueahOelneemj++8miAtLT5cbiAgICAgICAgICAgIOaBreWWnOS9oOiOt+W+l+S6hiA8Yj7lnaTlnaTlhazkuLs8L2I+IOWvueS9oOmAgeWHuueahOelneemj++8mlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJibGVzc2luZy1jb250ZW50IHJlc3VsdC1ibG9ja1wiPlxuICAgICAgICAgICAgPCEtLSB7eyB1c2VyQmxlc3NpbmcudmFsdWUgfX0gLS0+XG4gICAgICAgICAgICDlsoHlsoHlubTlubTvvIzkuIfllpzkuIfoiKzlrpxcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJidG4td3JhcFwiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzPVwiYnRuLWl0ZW0gcmVzdWx0LWJsb2NrXCJcbiAgICAgICAgICAgIHYtZm9yPVwiaXRlbSBpbiByZXN1bHRCdG5EYXRhXCJcbiAgICAgICAgICAgIDprZXk9XCJpdGVtLm5hbWVcIlxuICAgICAgICAgICAgQG1vdXNlb3Zlcj1cIiRzdG9yZS5jb21taXQoJ3BsYXlBdWRpbycsIGhvdmVyTXVzaWMpXCJcbiAgICAgICAgICAgIEBjbGljaz1cIiRzdG9yZS5jb21taXQoJ3BsYXlBdWRpbycsIGNsaWNrTXVzaWMpLCBpdGVtLmNsaWNrSGFuZGxlKClcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt7IGl0ZW0ubmFtZSB9fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4vLyBjb25zdCBuaWFuc2hvd01vdmUgPSBuZXcgV29ya2VyKCcuL25pYW5zaG93TW92ZS5qcycpXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiZ2FtZVwiLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzdGF0ZTogMCwgLy/pnaLmnb/mmL7npLpcbiAgICAgIGltZ1VybDogcmVxdWlyZShcIi4uL2Fzc2V0cy9sYW5xaXUucG5nXCIpLCAvL+evrueQg+WcsOWdgFxuICAgICAgaG92ZXJNdXNpYzogcmVxdWlyZShcIkAvYXNzZXRzL21wMy9ob3Zlci53YXZcIiksXG4gICAgICBjbGlja011c2ljOiByZXF1aXJlKFwiQC9hc3NldHMvbXAzL2NsaWNrLndhdlwiKSxcbiAgICAgIHN1Y2Nlc3NNdXNpYzogcmVxdWlyZShcIkAvYXNzZXRzL21wMy9zdWNjZXNzLm1wM1wiKSxcbiAgICAgIHN1Y2Nlc3NNdXNpY0F1ZGlvOiBudWxsLFxuICAgICAgcXVlc3Rpb25Kc29uOiByZXF1aXJlKFwiQC9hc3NldHMvZGF0YS9xdWVzdGlvbi5qc29uXCIpLCAvL+mXrumimOa6kOaVsOaNrlxuICAgICAgcXVlc3Rpb25EYXRhOiBbXSwgLy8g5b2T5YmN6L2u6aKY5bqTXG4gICAgICB1c2VyQmxlc3NpbmdEYXRhOiByZXF1aXJlKFwiQC9hc3NldHMvZGF0YS91c2VyQmxlc3NpbmcuanNvblwiKSwgLy8g55So5oi356Wd56aPXG4gICAgICB1c2VyQmxlc3Npbmc6IHt9LFxuICAgICAgcXVlc3Rpb25MaXN0OiBbXSwgLy8g6Zeu6aKY5YiX6KGoXG4gICAgICBnYW1lQmVnaW5UaW1lOiAwLCAvLyDmuLjmiI/lvIDlp4vml7bpl7RcbiAgICAgIGdhbWVEdXJhdGlvbjogMCwgLy8g5ri45oiP5oyB57ut5pe26Ze0XG4gICAgICBjbGllbnRYOiAwLCAvLyDpvKDmoIfkuIrmrKHnmoTkvY3nva5cbiAgICAgIC8vIHBhb3podUxlZnQ6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCAvIDIsIC8vIOWdpOWdpOi3neemu+W3pui+ueeahOi3neemu1xuICAgICAgcGFvemh1TGVmdDogMCwgLy8g5Z2k5Z2k6Led56a75bem6L6555qE6Led56a7XG4gICAgICBuaWFuc2hvdUxlZnQ6IDAsIC8vIOW5tOWFvei3neemu+W3pui+ueeahOi3neemu1xuICAgICAgbmlhbnNob3VJbnRlcnZhbDogbnVsbCwgLy8g5bm05YW956e75Yqo55qE5a6a5pe25ZmoXG4gICAgICBuaWFuc2hvdUhQOiAyNTAsIC8vIOW5tOWFveeahOihgOmHj1xuICAgICAgc2NyZWVuV2lkdGg6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCwgLy8g5bGP5bmV5a695bqmXG4gICAgICBzY3JlZW5IZWlnaHQ6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsIC8vIOWxj+W5lemrmOW6plxuICAgICAgbmlhbnNob3VNb3ZlRGlyOiAyLCAvLyDlubTlhb3np7vliqjnmoTmlrnlkJHpgJ/luqZcbiAgICAgIGNyZWF0ZUJ1bGxldEludGVydmFsOiBudWxsLCAvLyDliJvlu7rlrZDlvLnnmoTlrprml7blmahcbiAgICAgIGZyZXF1ZW5jeTogNSwgLy8g5Y+R5bCE5a2Q5by56aKR546HXG4gICAgICBidWxsZXRTcGVlZDogNSwgLy8g5a2Q5by56aOe6KGM6YCf5bqmXG4gICAgICBkYW1hZ2U6IDQsIC8vIOWtkOW8ueaUu+WHu+WKm1xuICAgICAgbGFzdEJ1bGxldFRpbWU6IDAsIC8vIOS4iuasoeWPkeWwhOWtkOW8ueaXtumXtFxuICAgICAgcmVzdWx0QnRuRGF0YTogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCLlho3mnaXkuIDmrKFcIixcbiAgICAgICAgICBjbGlja0hhbmRsZTogKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IDA7XG4gICAgICAgICAgICB0aGlzLnN1Y2Nlc3NNdXNpY0F1ZGlvLnBhdXNlKCk7XG4gICAgICAgICAgICB0aGlzLmdhbWVCZWdpbigpO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcIui/lOWbnummlumhtVwiLFxuICAgICAgICAgIGNsaWNrSGFuZGxlOiAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN1Y2Nlc3NNdXNpY0F1ZGlvLnBhdXNlKCk7XG4gICAgICAgICAgICB3aW5kb3cuYmFja011c2ljLmN1cnJlbnRUaW1lID0gMTI3LjI7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KFwiYmFja1RvSG9tZVwiKTtcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICAvLyAsXG4gICAgICAgIC8vIHtcbiAgICAgICAgLy8gICBuYW1lOiBcIuaQreW7uui/h+eoi1wiLFxuICAgICAgICAvLyAgIGNsaWNrSGFuZGxlOiAoKSA9PiB7XG4gICAgICAgIC8vICAgICB3aW5kb3cub3BlbihcImh0dHBzOi8vanVlamluLmNuL3Bvc3QvNzA1MTQ2NDA4NjcyMjE4MzIwNS9cIik7XG4gICAgICAgIC8vICAgfSxcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8ge1xuICAgICAgICAvLyAgIG5hbWU6IFwiZ2l0ZWVcIixcbiAgICAgICAgLy8gICBjbGlja0hhbmRsZTogKCkgPT4ge1xuICAgICAgICAvLyAgICAgd2luZG93Lm9wZW4oXCJodHRwczovL2dpdGVlLmNvbS9paG9wZV90b3AvbmV3LXllYXItZ2FtZVwiKTtcbiAgICAgICAgLy8gICB9LFxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyB7XG4gICAgICAgIC8vICAgbmFtZTogXCJnaXRodWJcIixcbiAgICAgICAgLy8gICBjbGlja0hhbmRsZTogKCkgPT4ge1xuICAgICAgICAvLyAgICAgd2luZG93Lm9wZW4oXCJodHRwczovL2dpdGh1Yi5jb20vaGV5b25nc2hlbmcvbmV3LXllYXItZ2FtZVwiKTtcbiAgICAgICAgLy8gICB9LFxuICAgICAgICAvLyB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMuc3VjY2Vzc011c2ljQXVkaW8gPSBuZXcgQXVkaW8odGhpcy5zdWNjZXNzTXVzaWMpO1xuICAgIHRoaXMuc3VjY2Vzc011c2ljQXVkaW8ubG9vcCA9IHRydWU7XG4gICAgdGhpcy5zdWNjZXNzTXVzaWNBdWRpby52b2x1bWUgPSAwLjU7XG4gICAgdGhpcy5zdWNjZXNzTXVzaWNBdWRpby5sb2FkKCk7XG4gICAgLy8gdGhpcy5nYW1lQmVnaW4oKVxuICAgIGNvbnNvbGUubG9nKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCk7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICAvLyDlvIDlp4vmuLjmiI9cbiAgICBnYW1lQmVnaW4oKSB7XG4gICAgICAvLyDlvIDlp4vml7bpl7RcbiAgICAgIHRoaXMuZ2FtZUJlZ2luVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgLy8g6YeN572u5bm05YW95Y+K54Ku6L2m5L2N572uXG4gICAgICAvLyB0aGlzLnBhb3podUxlZnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggLyAyO1xuICAgICAgdGhpcy5wYW96aHVMZWZ0ID0gMDtcbiAgICAgIHRoaXMubmlhbnNob3VMZWZ0ID0gMDtcbiAgICAgIHRoaXMuY2xpZW50WCA9IDA7XG4gICAgICAvLyDmuIXnqbrlubTlhb3lrprml7blmahcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubmlhbnNob3VJbnRlcnZhbCk7XG4gICAgICAvLyDliJ3lp4vljJbpl67popjliJfooahcbiAgICAgIHRoaXMucXVlc3Rpb25MaXN0ID0gW107XG4gICAgICB0aGlzLnF1ZXN0aW9uRGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5xdWVzdGlvbkpzb24pKTtcbiAgICAgIC8vIOmHjee9ruaUu+mAn+OAgeS8pOWus+OAgeWwhOmAn1xuICAgICAgdGhpcy5mcmVxdWVuY3kgPSB0aGlzLiRvcHRpb25zLmRhdGEoKS5mcmVxdWVuY3k7XG4gICAgICB0aGlzLmRhbWFnZSA9IHRoaXMuJG9wdGlvbnMuZGF0YSgpLmRhbWFnZTtcbiAgICAgIHRoaXMuYnVsbGV0U3BlZWQgPSB0aGlzLiRvcHRpb25zLmRhdGEoKS5idWxsZXRTcGVlZDtcbiAgICAgIC8vIOmHjee9ruW5tOWFveihgOmHj1xuICAgICAgdGhpcy5uaWFuc2hvdUhQID0gMjUwO1xuICAgICAgLy8g5bm05YW95byA5aeL56e75YqoXG4gICAgICB0aGlzLm5pYW5zaG91TW92ZSgpO1xuICAgICAgLy8g55Sf5oiQ5a2Q5by5XG4gICAgICB0aGlzLmNyZWF0ZUJ1bGxldCgpO1xuICAgICAgLy8g5re75Yqg56ys5LiA6YGT6Zeu6aKYXG4gICAgICB0aGlzLmFkZFF1ZXN0aW9uKCk7XG4gICAgICAvLyDku47nlKjmiLfnpZ3npo/lupPmir3lj5bpmo/mnLrnpZ3npo9cbiAgICAgIGxldCBkYXRhTGVuZ3RoID0gdGhpcy51c2VyQmxlc3NpbmdEYXRhLmxlbmd0aDtcbiAgICAgIGxldCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGRhdGFMZW5ndGgpO1xuICAgICAgdGhpcy51c2VyQmxlc3NpbmcgPSB0aGlzLnVzZXJCbGVzc2luZ0RhdGFbcmFuZG9tSW5kZXhdO1xuICAgIH0sXG4gICAgLy8g5ri45oiP57uT5p2fXG4gICAgZ2FtZU92ZXIoKSB7XG4gICAgICAvLyDmkq3mlL7muLjmiI/og5zliKnpn7PkuZBcbiAgICAgIGlmICh0aGlzLiRzdG9yZS5zdGF0ZS5zZXR0aW5nLmlzUGxheSkge1xuICAgICAgICB0aGlzLnN1Y2Nlc3NNdXNpY0F1ZGlvLnBsYXkoKTtcbiAgICAgIH1cblxuICAgICAgLy8gdGhpcy5zdWNjZXNzTXVzaWNBdWRpby5wbGF5KClcbiAgICAgIC8vIOa4hemZpOW5tOWFveenu+WKqOWumuaXtuWZqFxuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5uaWFuc2hvdUludGVydmFsKTtcbiAgICAgIC8vIOa4hemZpOWtkOW8ueWumuaXtuWZqFxuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5jcmVhdGVCdWxsZXRJbnRlcnZhbCk7XG4gICAgfSxcbiAgICAvLyDpvKDmoIfmjInkuIvvvIzmt7vliqDnp7vliqjkuovku7ZcbiAgICBhZGRNb3ZlKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKDEpO1xuXG4gICAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XG4gICAgICB0aGlzLmNsaWVudFggPSBlLmNsaWVudFg7XG4gICAgICB0aGlzLmNsaWVudFkgPSBlLmNsaWVudFk7XG4gICAgICAvLyB0aGlzLiRyZWZzLmdlbWVXcmFwLm9ubW91c2Vtb3ZlID0gdGhpcy5tb3ZlRnVuYztcbiAgICAgIC8vIHRoaXMuJHJlZnMuZ2VtZVdyYXAub25tb3VzZW1vdmUgPSB0aGlzLnRvdWNoTTtcbiAgICB9LFxuICAgIC8v5Z2k5Z2k56e75YqoXG4gICAgdG91Y2hNKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGUudG91Y2hlc1swXS5jbGllbnRYKTtcbiAgICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGxldCBtb3ZlbWVudFggPSBlLnRvdWNoZXNbMF0uY2xpZW50WCAtIHRoaXMuY2xpZW50WDtcbiAgICAgIHRoaXMucGFvemh1TGVmdCArPSBtb3ZlbWVudFg7XG4gICAgICB0aGlzLmNsaWVudFggPSBlLnRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICB9LFxuXG4gICAgLy8g6byg5qCH5ouW5Yqo77yM56e75Yqo54Ku56u5XG4gICAgbW92ZUZ1bmMoZSkge1xuICAgICAgLy8gY29uc29sZS5sb2coMik7XG4gICAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBsZXQgbW92ZW1lbnRYID0gZS5jbGllbnRYIC0gdGhpcy5jbGllbnRYO1xuICAgICAgdGhpcy5wYW96aHVMZWZ0ICs9IG1vdmVtZW50WDtcbiAgICAgIHRoaXMuY2xpZW50WCA9IGUuY2xpZW50WDtcbiAgICB9LFxuICAgIC8vIOm8oOagh+aKrOi1t++8jOenu+mZpOenu+WKqOS6i+S7tlxuICAgIHJlbW92ZU1vdmUoKSB7XG4gICAgICBjb25zb2xlLmxvZygzKTtcbiAgICAgIHRoaXMuJHJlZnMuZ2VtZVdyYXAub25tb3VzZW1vdmUgPSBudWxsO1xuICAgIH0sXG4gICAgLy8g5bm05YW956e75YqoXG4gICAgbmlhbnNob3VNb3ZlKCkge1xuICAgICAgLy8g5pu05paw5ri45oiP5pe26Ze0XG4gICAgICB0aGlzLmdhbWVEdXJhdGlvbiA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gdGhpcy5nYW1lQmVnaW5UaW1lO1xuICAgICAgaWYgKHRoaXMubmlhbnNob3VMZWZ0ICsgODAgPj0gdGhpcy5zY3JlZW5XaWR0aCkge1xuICAgICAgICB0aGlzLm5pYW5zaG91TW92ZURpciA9IC0yO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm5pYW5zaG91TGVmdCA8IDApIHtcbiAgICAgICAgdGhpcy5uaWFuc2hvdU1vdmVEaXIgPSAyO1xuICAgICAgfVxuICAgICAgdGhpcy5uaWFuc2hvdUxlZnQgKz0gdGhpcy5uaWFuc2hvdU1vdmVEaXI7XG4gICAgICB0aGlzLm5pYW5zaG91SW50ZXJ2YWwgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5uaWFuc2hvdU1vdmUpO1xuICAgIH0sXG4gICAgLy8g55Sf5oiQ5a2Q5by5XG4gICAgY3JlYXRlQnVsbGV0KCkge1xuICAgICAgLy8g5a2Q5by5XG4gICAgICBsZXQgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICBpZiAobm93IC0gdGhpcy5sYXN0QnVsbGV0VGltZSA+IDEwMDAgLyB0aGlzLmZyZXF1ZW5jeSkge1xuICAgICAgICBsZXQgYnVsbGV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYnVsbGV0LmNsYXNzTmFtZSA9IFwiYnVsbGV0XCI7XG4gICAgICAgIGJ1bGxldC5zdHlsZS5sZWZ0ID0gdGhpcy5wYW96aHVMZWZ0ICsgMjUgKyBcInB4XCI7XG4gICAgICAgIGJ1bGxldC5zdHlsZS50b3AgPSB0aGlzLnNjcmVlbkhlaWdodCAtIDEyMyArIFwicHhcIjtcbiAgICAgICAgYnVsbGV0LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgICAgICBidWxsZXQuc3R5bGUud2lkdGggPSBcIjIwcHhcIjtcbiAgICAgICAgYnVsbGV0LnN0eWxlLmhlaWdodCA9IFwiMjBweFwiO1xuICAgICAgICBidWxsZXQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJy4uL2Fzc2V0cy9sYW5xaXUucG5nJylcIjtcbiAgICAgICAgYnVsbGV0LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHt0aGlzLmltZ1VybH0pYDtcbiAgICAgICAgdGhpcy4kcmVmcy5nZW1lV3JhcC5hcHBlbmRDaGlsZChidWxsZXQpO1xuICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoXCJwbGF5QXVkaW9cIiwgcmVxdWlyZShcIi4uL2Fzc2V0cy9tcDMvZW1pdC5tcDNcIikpO1xuICAgICAgICAvLyDlrZDlvLnnp7vliqhcbiAgICAgICAgbGV0IGJ1bGxldE1vdmUgPSAoKSA9PiB7XG4gICAgICAgICAgYnVsbGV0LnN0eWxlLnRvcCA9IGJ1bGxldC5vZmZzZXRUb3AgLSB0aGlzLmJ1bGxldFNwZWVkICsgXCJweFwiO1xuICAgICAgICAgIC8vIOWmguaenOWtkOW8uei3neemu+mhtumDqOeahOi3neemu+S4uuW5tOWFveeahOmrmOW6puaXtu+8jOWIpOaWreWtkOW8ueWSjOW5tOWFveeahOawtOW5s+S9jee9ruaYr+WQpumHjeWQiFxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGJ1bGxldC5vZmZzZXRUb3AgPD0gMTAwICYmXG4gICAgICAgICAgICBidWxsZXQub2Zmc2V0TGVmdCA+PSB0aGlzLm5pYW5zaG91TGVmdCAmJlxuICAgICAgICAgICAgYnVsbGV0Lm9mZnNldExlZnQgPD0gdGhpcy5uaWFuc2hvdUxlZnQgKyAxMDBcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIC8vIOW5tOWFveaOieihgFxuICAgICAgICAgICAgdGhpcy5uaWFuc2hvdUhQIC09IHRoaXMuZGFtYWdlO1xuICAgICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KFwicGxheUF1ZGlvXCIsIHJlcXVpcmUoXCIuLi9hc3NldHMvbXAzL2EubXAzXCIpKTtcbiAgICAgICAgICAgIGlmICh0aGlzLm5pYW5zaG91SFAgPD0gMCkge1xuICAgICAgICAgICAgICB0aGlzLm5pYW5zaG91SFAgPSAwO1xuICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gMTtcbiAgICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g5a2Q5by55raI5aSxXG4gICAgICAgICAgICB0aGlzLiRyZWZzLmdlbWVXcmFwLnJlbW92ZUNoaWxkKGJ1bGxldCk7XG4gICAgICAgICAgICAvLyBjYW5jZWxBbmltYXRpb25GcmFtZShidWxsZXRNb3ZlKVxuICAgICAgICAgIH0gZWxzZSBpZiAoYnVsbGV0Lm9mZnNldFRvcCA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLiRyZWZzLmdlbWVXcmFwLnJlbW92ZUNoaWxkKGJ1bGxldCk7XG4gICAgICAgICAgICAvLyBjYW5jZWxBbmltYXRpb25GcmFtZShidWxsZXRNb3ZlKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYnVsbGV0TW92ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBidWxsZXRNb3ZlKCk7XG4gICAgICAgIHRoaXMubGFzdEJ1bGxldFRpbWUgPSBub3c7XG4gICAgICB9XG4gICAgICB0aGlzLmNyZWF0ZUJ1bGxldEludGVydmFsID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuY3JlYXRlQnVsbGV0KTtcbiAgICB9LFxuICAgIC8vIOaXtumXtOagvOW8j+WMluS4unjliIZ556eSelxuICAgIGZvcm1hdFRpbWUodGltZSkge1xuICAgICAgbGV0IG1pbnV0ZSA9IE1hdGguZmxvb3IodGltZSAvIDYwMDAwKTtcbiAgICAgIGxldCBzZWNvbmQgPSBNYXRoLmZsb29yKCh0aW1lICUgNjAwMDApIC8gMTAwMCk7XG4gICAgICBsZXQgbWlsbGlzZWNvbmQgPSB0aW1lICUgMTAwMDtcbiAgICAgIC8vIHJldHVybiBgJHttaW51dGV95YiGJHtzZWNvbmR956eSJHttaWxsaXNlY29uZH1gO1xuICAgICAgcmV0dXJuIGAke21pbnV0ZX3liIYke3NlY29uZH3np5JgO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uOiDmt7vliqDpl67pophcbiAgICAgKiBAcGFyYW0geyp9XG4gICAgICogQHJldHVybiB7Kn1cbiAgICAgKi9cbiAgICBhZGRRdWVzdGlvbigpIHtcbiAgICAgIGxldCBkYXRhTGVuZ3RoID0gdGhpcy5xdWVzdGlvbkRhdGEubGVuZ3RoO1xuICAgICAgbGV0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZGF0YUxlbmd0aCk7XG4gICAgICBsZXQgcXVlc3Rpb24gPSB0aGlzLnF1ZXN0aW9uRGF0YS5zcGxpY2UocmFuZG9tSW5kZXgsIDEpWzBdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWRlYnVnZ2VyXG4gICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgcXVlc3Rpb246IHF1ZXN0aW9uLFxuICAgICAgICBhbnN3ZXJUaW1lOiA5LFxuICAgICAgICBzaG93VGltZTogNixcbiAgICAgIH07XG4gICAgICAvLyDmt7vliqDlsZXnpLrlgJLorqHml7ZcbiAgICAgIGxldCBzaG93Q291bnREb3duID0gKCkgPT4ge1xuICAgICAgICBkYXRhLnNob3dUaW1lLS07XG4gICAgICAgIGlmIChkYXRhLnNob3dUaW1lID4gMCkge1xuICAgICAgICAgIHNldFRpbWVvdXQoc2hvd0NvdW50RG93biwgMTAwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8g5YCS6K6h5pe257uT5p2f77yM5bGV56S66Zeu6aKY5bm25byA5aeL562U6aKY5YCS6K6h5pe2XG4gICAgICAgICAgYW5zd2VyQ291bnREb3duKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICAvLyDmt7vliqDlm57nrZTlgJLorqHml7ZcbiAgICAgIGxldCBhbnN3ZXJDb3VudERvd24gPSAoKSA9PiB7XG4gICAgICAgIGRhdGEuYW5zd2VyVGltZS0tO1xuICAgICAgICBpZiAoZGF0YS5hbnN3ZXJUaW1lID4gMCkge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc2hvd0NvdW50RG93bigpO1xuICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIOWAkuiuoeaXtue7k+adn++8jOWmguaenOayoeaciemAieaLqeato+ehruetlOahiO+8jOWImea3u+WKoOS4gOmBk+mUmeivr+etlOahiFxuICAgICAgICAgIGlmICghZGF0YS5yZXN1bHQpIHtcbiAgICAgICAgICAgIGRhdGEucmVzdWx0ID0gXCIxMFwiO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyDlpoLmnpzpl67popjkuI3otrM16YGT77yM5YiZ5re75Yqg5LiA6YGT6Zeu6aKYXG4gICAgICAgICAgaWYgKHRoaXMucXVlc3Rpb25MaXN0Lmxlbmd0aCA8IDUpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkUXVlc3Rpb24oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICAvLyDmiafooYzlsZXnpLrlgJLorqHml7ZcbiAgICAgIHNob3dDb3VudERvd24oKTtcbiAgICAgIHRoaXMucXVlc3Rpb25MaXN0LnB1c2goZGF0YSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb246IOWbnuetlOmXrumimFxuICAgICAqIEBwYXJhbSB7Kn0gYW5zd2VyIOmAieaLqeeahOetlOahiFxuICAgICAqIEBwYXJhbSB7Kn0gcXVlc3Rpb24g5Zue562U55qE6Zeu6aKYXG4gICAgICogQHJldHVybiB7Kn1cbiAgICAgKi9cbiAgICBhbnN3ZXJRdWVzdGlvbihhbnN3ZXIsIHF1ZXN0aW9uKSB7XG4gICAgICB0aGlzLiRzdG9yZS5jb21taXQoXCJwbGF5QXVkaW9cIiwgdGhpcy5jbGlja011c2ljKTtcbiAgICAgIHF1ZXN0aW9uLnJlc3VsdCA9IGFuc3dlcjtcbiAgICAgIC8vIOWmguaenOWbnuetlOato+ehru+8jOWImeWinuWKoGJ1ZmZcbiAgICAgIGlmIChhbnN3ZXIgPT09IHF1ZXN0aW9uLnF1ZXN0aW9uLmFuc3dlcikge1xuICAgICAgICB0aGlzLmZyZXF1ZW5jeSsrOyAvLyDmlLvpgJ8rMVxuICAgICAgICB0aGlzLmJ1bGxldFNwZWVkICs9IDI7IC8vIOWwhOmAnysyXG4gICAgICAgIHRoaXMuZGFtYWdlICs9IDE7IC8vIOS8pOWusysxMFxuICAgICAgfVxuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG48c3R5bGU+XG4uZ2FtZS13cmFwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG59XG4vKiDngq7nq7kgKi9cbi5wYW96aHUge1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICAvKiB3aWR0aDogMzBweDsgKi9cbiAgei1pbmRleDogMTAwO1xufVxuLnBhb3podSBpbWcge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTgwcHg7XG59XG4vKiDlubTlhb0gKi9cbi5uaWFuc2hvdSB7XG4gIC8qIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyNTBweDsgKi9cbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47ICovXG4gIGNvbG9yOiByZWQ7XG59XG4ubmlhbnNob3UgcCB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubmlhbnNob3UgaW1nIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICAvKiB3aWR0aDogMTAwJTsgKi9cbiAgLyogZmlsdGVyOiBodWUtcm90YXRlKDMwM2RlZyk7ICovXG59XG4vKiDlrZDlvLkgKi9cbi8qIC5idWxsZXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA1cHg7XG4gIGhlaWdodDogMzBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZmZWUwMCwgI2ZmZTM5NSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogMCAwIDVweCAjZmZmO1xufSAqL1xuLyog6Z2i5p2/5Yy65Z+fICovXG4vKiAucGFuZWwtd3JhcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDIwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn0gKi9cbi5wYW5lbC13cmFwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDI1MHB4O1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDEwcHg7XG4gIGNvbG9yOiAjZmZmYmRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5wYW5lbC1pdGVtIHtcbiAgd2lkdGg6IDEyMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIHBhZGRpbmc6IDVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLyog5ri45oiP6Z2i5p2/ICovXG4uZ2FtZS1wYW5lbCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCBib3R0b20sICM5MjhkZTcsICM5ZGQ4ZTYpO1xufVxuLmdhbWUtcGFuZWwgLmdhbWUtdGl0bGUge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZ2FtZS1kYXRhLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmdhbWUtZGF0YS10aXRsZSB7XG4gIHdpZHRoOiA1MHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLyog6Zeu6aKY6Z2i5p2/ICovXG4ucXVlc3Rpb24tcGFuZWwge1xuICAvKiBtYXJnaW4tdG9wOiAyMHB4OyAqL1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xufVxuLnF1ZXN0aW9uLXBhbmVsLmNsaWVudENlbnRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTEwMCUpIHNjYWxlKDEuNSk7XG59XG4vKiDlsZXnpLrlgJLorqHml7YgKi9cbi5zaG93LWNvdW50LWRvd24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1zaXplOiA2OHB4O1xuICBvcGFjaXR5OiAwLjg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4vKiDlm57nrZTlgJLorqHml7YgKi9cbi5jb3VudC1kb3duIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgdG9wOiAtNDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG59XG5cbi5xdWVzdGlvbi1wYW5lbC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5xdWVzdGlvbi10aXRsZSB7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbn1cbi5hbnN3ZXItaXRlbSB7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuLmFuc3dlci13cmFwLnNob3cgLmFuc3dlci1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xufVxuLmFuc3dlci13cmFwLnJlc3VsdCAuYW5zd2VyLWl0ZW0ucmVzdWx0IHtcbiAgYmFja2dyb3VuZDogIzk1Yjc3Nztcbn1cbi5hbnN3ZXItd3JhcC5yZXN1bHQgLmFuc3dlci1pdGVtIC5jaGVjayB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uYnVmZiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGJvdHRvbTogLTQwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBsZWZ0OiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xufVxuLmRlc2Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBib3R0b206IC0xMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbGVmdDogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xufVxuLyog5ri45oiP57uT5p2f5by55qGGICovXG4ucmVzdWx0LWJveCB7XG4gIHdpZHRoOiAzMDBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IGJvdHRvbSwgIzkyOGRlNywgIzlkZDhlNik7XG4gIHBhZGRpbmc6IDEwcHg7XG5cbiAgY29sb3I6ICNmZmZiZGU7XG59XG4ucmVzdWx0LXRpdGxlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IGJvdHRvbSwgIzkyOGRlNywgIzlkZDhlNik7XG5cbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMTAwcHg7XG4gIHRvcDogLTEyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnJlc3VsdC1jb250ZW50IHtcbn1cbi5yZXN1bHQtYmxvY2sge1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG59XG4ucmVzdWx0LXRpdG1lIHtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnJlc3VsdC1kZXNjIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5idG4td3JhcCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuLmJ0bi1pdGVtIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmJsZXNzaW5nLXVzZXJuYW1lIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5ibGVzc2luZy1jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbjwvc3R5bGU+Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///25\n");

/***/ }),
/* 26 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function jsonStringifyReplacer (k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }'
    default :
      return p
  }
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---'
      } catch (e) {
        v = type
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ }),
/* 27 */
/*!****************************************************!*\
  !*** C:/Users/周锐/Desktop/kunkun/assets/lanqiu.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/assets/lanqiu.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjI3LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvbGFucWl1LnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///27\n");

/***/ }),
/* 28 */
/*!*********************************************************!*\
  !*** C:/Users/周锐/Desktop/kunkun/assets/mp3/success.mp3 ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/assets/mp3/success.mp3\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvbXAzL3N1Y2Nlc3MubXAzXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///28\n");

/***/ }),
/* 29 */
/*!************************************************************!*\
  !*** C:/Users/周锐/Desktop/kunkun/assets/data/question.json ***!
  \************************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[{\\\"title\\\":\\\"神舟十二号是否返航？\\\",\\\"option\\\":[{\\\"key\\\":\\\"A\\\",\\\"value\\\":\\\"是\\\"},{\\\"key\\\":\\\"B\\\",\\\"value\\\":\\\"否\\\"}],\\\"answer\\\":\\\"A\\\",\\\"desc\\\":\\\"现在在天上的是十三哟\\\"},{\\\"title\\\":\\\"以下哪位是神舟十三号航天员？\\\",\\\"option\\\":[{\\\"key\\\":\\\"A\\\",\\\"value\\\":\\\"翟志刚\\\"},{\\\"key\\\":\\\"B\\\",\\\"value\\\":\\\"刘伯明\\\"},{\\\"key\\\":\\\"C\\\",\\\"value\\\":\\\"聂海胜\\\"}],\\\"answer\\\":\\\"A\\\",\\\"desc\\\":\\\"神舟十三号航天员是翟志刚、王亚平、叶光富\\\"},{\\\"title\\\":\\\"神舟十三号于几月份发射？\\\",\\\"option\\\":[{\\\"key\\\":\\\"A\\\",\\\"value\\\":\\\"九月\\\"},{\\\"key\\\":\\\"B\\\",\\\"value\\\":\\\"十月\\\"},{\\\"key\\\":\\\"C\\\",\\\"value\\\":\\\"十一月\\\"}],\\\"answer\\\":\\\"B\\\",\\\"desc\\\":\\\"十三是10月16日0时23分上天的哦\\\"},{\\\"title\\\":\\\"以下哪位不是神舟十二号航天员？\\\",\\\"option\\\":[{\\\"key\\\":\\\"A\\\",\\\"value\\\":\\\"景海鹏\\\"},{\\\"key\\\":\\\"B\\\",\\\"value\\\":\\\"刘伯明\\\"},{\\\"key\\\":\\\"C\\\",\\\"value\\\":\\\"聂海胜\\\"}],\\\"answer\\\":\\\"A\\\",\\\"desc\\\":\\\"神舟十二号航天员是聂海胜、刘伯明、汤红波\\\"},{\\\"title\\\":\\\"神舟十二号于几月份发射？\\\",\\\"option\\\":[{\\\"key\\\":\\\"A\\\",\\\"value\\\":\\\"四月\\\"},{\\\"key\\\":\\\"B\\\",\\\"value\\\":\\\"五月\\\"},{\\\"key\\\":\\\"C\\\",\\\"value\\\":\\\"六月\\\"}],\\\"answer\\\":\\\"C\\\",\\\"desc\\\":\\\"十二是6月17日9时22分上天的哦\\\"},{\\\"title\\\":\\\"2021年是我国建国多少周年？\\\",\\\"option\\\":[{\\\"key\\\":\\\"A\\\",\\\"value\\\":\\\"70周年\\\"},{\\\"key\\\":\\\"B\\\",\\\"value\\\":\\\"71周年\\\"},{\\\"key\\\":\\\"C\\\",\\\"value\\\":\\\"72周年\\\"}],\\\"answer\\\":\\\"C\\\",\\\"desc\\\":\\\"1949到2021年，我国建国72周年\\\"},{\\\"title\\\":\\\"2021年是我国建党多少周年？\\\",\\\"option\\\":[{\\\"key\\\":\\\"A\\\",\\\"value\\\":\\\"72周年\\\"},{\\\"key\\\":\\\"B\\\",\\\"value\\\":\\\"80周年\\\"},{\\\"key\\\":\\\"C\\\",\\\"value\\\":\\\"100周年\\\"}],\\\"answer\\\":\\\"C\\\",\\\"desc\\\":\\\"1921到2021年，我国建党100周年\\\"},{\\\"title\\\":\\\"2021年是我国建军多少周年？\\\",\\\"option\\\":[{\\\"key\\\":\\\"A\\\",\\\"value\\\":\\\"98\\\"},{\\\"key\\\":\\\"B\\\",\\\"value\\\":\\\"100周年\\\"},{\\\"key\\\":\\\"C\\\",\\\"value\\\":\\\"94周年\\\"}],\\\"answer\\\":\\\"C\\\",\\\"desc\\\":\\\"1927到2021年，我国建军94周年\\\"},{\\\"title\\\":\\\"以下哪位是我国首届国家最高科学技术奖得主？\\\",\\\"option\\\":[{\\\"key\\\":\\\"A\\\",\\\"value\\\":\\\"袁隆平\\\"},{\\\"key\\\":\\\"B\\\",\\\"value\\\":\\\"吴孟超\\\"},{\\\"key\\\":\\\"C\\\",\\\"value\\\":\\\"邓稼先\\\"}],\\\"answer\\\":\\\"A\\\",\\\"desc\\\":\\\"首届国家最高科学技术奖得主袁隆平院士和吴文俊院士\\\"},{\\\"title\\\":\\\"袁隆平院士是哪院院士？\\\",\\\"option\\\":[{\\\"key\\\":\\\"A\\\",\\\"value\\\":\\\"中国工程院\\\"},{\\\"key\\\":\\\"B\\\",\\\"value\\\":\\\"中国科学院\\\"}],\\\"answer\\\":\\\"A\\\",\\\"desc\\\":\\\"袁隆平院士是中国工程院院士\\\"},{\\\"title\\\":\\\"以下哪首歌曲是2021年春晚节目？\\\",\\\"option\\\":[{\\\"key\\\":\\\"A\\\",\\\"value\\\":\\\"灯火里的中国\\\"},{\\\"key\\\":\\\"B\\\",\\\"value\\\":\\\"我的祖国\\\"},{\\\"key\\\":\\\"C\\\",\\\"value\\\":\\\"映山红\\\"}],\\\"answer\\\":\\\"A\\\",\\\"desc\\\":\\\"2021春晚张也、周深献唱了灯火里的中国\\\"},{\\\"title\\\":\\\"岳云鹏在2021年春晚表演的相声是？\\\",\\\"option\\\":[{\\\"key\\\":\\\"A\\\",\\\"value\\\":\\\"年三十的歌\\\"},{\\\"key\\\":\\\"B\\\",\\\"value\\\":\\\"最亲的人\\\"},{\\\"key\\\":\\\"C\\\",\\\"value\\\":\\\"春晚的歌\\\"}],\\\"answer\\\":\\\"A\\\",\\\"desc\\\":\\\"2021春晚岳云鹏和孙越表演了相声-年三十的歌\\\"},{\\\"title\\\":\\\"以下哪位是掘金的运营？\\\",\\\"option\\\":[{\\\"key\\\":\\\"A\\\",\\\"value\\\":\\\"Tory\\\"},{\\\"key\\\":\\\"B\\\",\\\"value\\\":\\\"Tony\\\"},{\\\"key\\\":\\\"C\\\",\\\"value\\\":\\\"Troy\\\"}],\\\"answer\\\":\\\"C\\\",\\\"desc\\\":\\\"我们Troy老师可不要叫错了\\\"},{\\\"title\\\":\\\"掘金今年举办了几次更文挑战活动？\\\",\\\"option\\\":[{\\\"key\\\":\\\"A\\\",\\\"value\\\":\\\"2次\\\"},{\\\"key\\\":\\\"B\\\",\\\"value\\\":\\\"3次\\\"},{\\\"key\\\":\\\"C\\\",\\\"value\\\":\\\"4次\\\"}],\\\"answer\\\":\\\"C\\\",\\\"desc\\\":\\\"2021年掘金共举办6月、8月和10月三期更文活动\\\"},{\\\"title\\\":\\\"掘金签到单次矿石最高可得？\\\",\\\"option\\\":[{\\\"key\\\":\\\"A\\\",\\\"value\\\":\\\"4096\\\"},{\\\"key\\\":\\\"B\\\",\\\"value\\\":\\\"5120\\\"},{\\\"key\\\":\\\"C\\\",\\\"value\\\":\\\"2048\\\"}],\\\"answer\\\":\\\"B\\\",\\\"desc\\\":\\\"掘金签到单次矿石最高可得5120\\\"},{\\\"title\\\":\\\"请选择出正确的掘金域名？\\\",\\\"option\\\":[{\\\"key\\\":\\\"A\\\",\\\"value\\\":\\\"juejin.cn\\\"},{\\\"key\\\":\\\"B\\\",\\\"value\\\":\\\"juejin.net\\\"},{\\\"key\\\":\\\"C\\\",\\\"value\\\":\\\"juejin.com\\\"}],\\\"answer\\\":\\\"A\\\",\\\"desc\\\":\\\"掘金域名是juejin.cn\\\"},{\\\"title\\\":\\\"7·20特大暴雨发生在哪里？\\\",\\\"option\\\":[{\\\"key\\\":\\\"A\\\",\\\"value\\\":\\\"河南\\\"},{\\\"key\\\":\\\"B\\\",\\\"value\\\":\\\"河北\\\"},{\\\"key\\\":\\\"C\\\",\\\"value\\\":\\\"山西\\\"}],\\\"answer\\\":\\\"A\\\",\\\"desc\\\":\\\"2021年7月20日，河南郑州发生特大暴雨灾害\\\"},{\\\"title\\\":\\\"2022你会幸福吗？\\\",\\\"option\\\":[{\\\"key\\\":\\\"A\\\",\\\"value\\\":\\\"会\\\"},{\\\"key\\\":\\\"B\\\",\\\"value\\\":\\\"不会\\\"}],\\\"answer\\\":\\\"A\\\",\\\"desc\\\":\\\"2022你一定会幸福的，我不许你不幸福\\\"}]\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIyOS5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///29\n");

/***/ }),
/* 30 */
/*!****************************************************************!*\
  !*** C:/Users/周锐/Desktop/kunkun/assets/data/userBlessing.json ***!
  \****************************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[{\\\"name\\\":\\\"作者\\\",\\\"value\\\":\\\"祝你新的一年，心想事成，身体健康，幸福快乐！\\\"},{\\\"name\\\":\\\"作者\\\",\\\"value\\\":\\\"愿你新的一年，下雨有伞，天黑有灯！\\\"},{\\\"name\\\":\\\"作者\\\",\\\"value\\\":\\\"如果你能看到这一条，说明你新的一年要发财了！\\\"},{\\\"name\\\":\\\"Ylimhs\\\",\\\"value\\\":\\\"天天开怀，时时快乐，分分精彩，秒秒幸福\\\"},{\\\"name\\\":\\\"剁椒鲨鱼头\\\",\\\"value\\\":\\\"一往无前，惊喜满怀\\\"},{\\\"name\\\":\\\"掘金Troy\\\",\\\"value\\\":\\\"新年快乐\\\"},{\\\"name\\\":\\\"菜姐不吃菜\\\",\\\"value\\\":\\\"新年暴富\\\"},{\\\"name\\\":\\\"凡繁梵\\\",\\\"value\\\":\\\"往事归于尽，来年迎花开\\\"},{\\\"name\\\":\\\"liang\\\",\\\"value\\\":\\\"别人的小宝贝！新年快乐！\\\"},{\\\"name\\\":\\\"htc587\\\",\\\"value\\\":\\\"诸事顺利，得偿所愿\\\"},{\\\"name\\\":\\\"凉城a\\\",\\\"value\\\":\\\"年年有余，岁岁平安。\\\"}]\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIzMC5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///30\n");

/***/ }),
/* 31 */
/*!******************************************************!*\
  !*** C:/Users/周锐/Desktop/kunkun/assets/mp3/emit.mp3 ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/assets/mp3/emit.mp3\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjMxLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvbXAzL2VtaXQubXAzXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///31\n");

/***/ }),
/* 32 */
/*!***************************************************!*\
  !*** C:/Users/周锐/Desktop/kunkun/assets/mp3/a.mp3 ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/assets/mp3/a.mp3\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjMyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvbXAzL2EubXAzXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///32\n");

/***/ }),
/* 33 */
/*!*************************************************************!*\
  !*** C:/Users/周锐/Desktop/kunkun/components/bullet-chat.vue ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bullet_chat_vue_vue_type_template_id_462db1d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bullet-chat.vue?vue&type=template&id=462db1d8& */ 34);\n/* harmony import */ var _bullet_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bullet-chat.vue?vue&type=script&lang=js& */ 36);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _bullet_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _bullet_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 19);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _bullet_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _bullet_chat_vue_vue_type_template_id_462db1d8___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _bullet_chat_vue_vue_type_template_id_462db1d8___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _bullet_chat_vue_vue_type_template_id_462db1d8___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"components/bullet-chat.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0g7QUFDeEg7QUFDK0Q7QUFDTDs7O0FBRzFEO0FBQ2dNO0FBQ2hNLGdCQUFnQix5TUFBVTtBQUMxQixFQUFFLGlGQUFNO0FBQ1IsRUFBRSxzRkFBTTtBQUNSLEVBQUUsK0ZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMEZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMzMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2J1bGxldC1jaGF0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NjJkYjFkOCZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2J1bGxldC1jaGF0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vYnVsbGV0LWNoYXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxIQnVpbGRlclguMy42LjE3LjIwMjMwMTEyXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9idWxsZXQtY2hhdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///33\n");

/***/ }),
/* 34 */
/*!********************************************************************************************!*\
  !*** C:/Users/周锐/Desktop/kunkun/components/bullet-chat.vue?vue&type=template&id=462db1d8& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_bullet_chat_vue_vue_type_template_id_462db1d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./bullet-chat.vue?vue&type=template&id=462db1d8& */ 35);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_bullet_chat_vue_vue_type_template_id_462db1d8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_bullet_chat_vue_vue_type_template_id_462db1d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_bullet_chat_vue_vue_type_template_id_462db1d8___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_bullet_chat_vue_vue_type_template_id_462db1d8___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 35 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/周锐/Desktop/kunkun/components/bullet-chat.vue?vue&type=template&id=462db1d8& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", {
    ref: "bulletChat",
    staticClass: _vm._$s(0, "sc", "bullet-chat-wrap"),
    attrs: { _i: 0 },
  })
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 36 */
/*!**************************************************************************************!*\
  !*** C:/Users/周锐/Desktop/kunkun/components/bullet-chat.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_bullet_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./bullet-chat.vue?vue&type=script&lang=js& */ 37);\n/* harmony import */ var _D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_bullet_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_bullet_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_bullet_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_bullet_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_bullet_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtwQixDQUFnQixpckJBQUcsRUFBQyIsImZpbGUiOiIzNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYLjMuNi4xNy4yMDIzMDExMlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUQ6XFxcXEhCdWlsZGVyWC4zLjYuMTcuMjAyMzAxMTJcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFEOlxcXFxIQnVpbGRlclguMy42LjE3LjIwMjMwMTEyXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXEhCdWlsZGVyWC4zLjYuMTcuMjAyMzAxMTJcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYnVsbGV0LWNoYXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWC4zLjYuMTcuMjAyMzAxMTJcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFEOlxcXFxIQnVpbGRlclguMy42LjE3LjIwMjMwMTEyXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS02LTEhRDpcXFxcSEJ1aWxkZXJYLjMuNi4xNy4yMDIzMDExMlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxcdXNpbmctY29tcG9uZW50cy5qcyFEOlxcXFxIQnVpbGRlclguMy42LjE3LjIwMjMwMTEyXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2J1bGxldC1jaGF0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///36\n");

/***/ }),
/* 37 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/周锐/Desktop/kunkun/components/bullet-chat.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = {\n  name: 'bullet-chat',\n  data: function data() {\n    return {\n      blessingData: __webpack_require__(/*! ../assets/data/blessing.json */ 38),\n      ballistic: 0,\n      // 弹道数量\n      bulletSpeed: 2,\n      // 弹幕速度\n      bulletInterval: [300, 500],\n      // 弹幕间隔\n      screenWidth: document.documentElement.clientWidth,\n      // 屏幕宽度\n      screenHeight: document.documentElement.clientHeight // 屏幕高度\n    };\n  },\n  mounted: function mounted() {\n    this.showBullet();\n  },\n  methods: {\n    /**\n     * @description: 展示弹幕\n     * @param {*}\n     * @return {*}\n     */\n    showBullet: function showBullet() {\n      var _this = this;\n      // 根据屏幕高度和弹幕高度计算弹道数量\n      // let clientHeight = this.screenHeight\n      // let ballisticCount = Math.floor(clientHeight / this.bulletHeight)\n      // let ballisticArr = Array(ballisticCount).fill(1).map((item, index) => {\n      //   return index\n      // })\n      var ballisticArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];\n      // 按随机顺序在所有的弹道添加弹幕\n      var ballisticLaunch = function ballisticLaunch() {\n        var randomIndex = Math.floor(Math.random() * ballisticArr.length);\n        var ballisticIndex = ballisticArr.splice(randomIndex, 1)[0];\n        _this.createBullet(ballisticIndex);\n        if (ballisticArr.length > 0) {\n          setTimeout(ballisticLaunch, Math.random() * 1000);\n        }\n      };\n      ballisticLaunch();\n      // this.createBullet(2)\n    },\n    /**\n     * @description: 添加弹幕\n     * @param {*} index 弹道索引\n     * @return {*}\n     */\n    createBullet: function createBullet(index) {\n      var _this2 = this;\n      var bullet = document.createElement('div');\n      var bulletHeight = document.documentElement.clientHeight / 10;\n      bullet.className = 'bullet-chat';\n      bullet.style.left = this.screenWidth + 'px';\n      bullet.style.top = index * bulletHeight + 'px';\n      bullet.createNext = false; // 是否已创建下一个弹幕\n      bullet.nextSpace = Math.random() * (this.bulletInterval[1] - this.bulletInterval[0]) + this.bulletInterval[0]; // 下一个弹幕间隔\n      // 从弹幕库随机取弹幕\n      var dataLength = this.blessingData.length;\n      var randomIndex = Math.floor(Math.random() * dataLength);\n      var blessing = this.blessingData[randomIndex];\n      bullet.innerText = blessing.name + \"：\" + blessing.value;\n      this.$refs.bulletChat.appendChild(bullet);\n\n      // 弹幕移动\n      var bulletMove = function bulletMove() {\n        bullet.style.left = bullet.offsetLeft - _this2.bulletSpeed + 'px';\n        if (!bullet.createNext) {\n          // 如果弹幕距离屏幕右侧距离超出弹幕间隔，则加载下一条弹幕\n          if (bullet.offsetLeft < _this2.screenWidth - bullet.offsetWidth - bullet.nextSpace) {\n            _this2.createBullet(index);\n            bullet.createNext = true;\n          }\n        }\n\n        // 如果弹幕距离右侧距离大于等于屏幕宽度，则移除弹幕\n        if (bullet.offsetLeft < -bullet.offsetWidth) {\n          _this2.$refs.bulletChat.removeChild(bullet);\n        } else {\n          requestAnimationFrame(bulletMove);\n        }\n      };\n      bulletMove();\n    }\n  }\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9idWxsZXQtY2hhdC52dWUiXSwibmFtZXMiOlsibmFtZSIsImRhdGEiLCJibGVzc2luZ0RhdGEiLCJiYWxsaXN0aWMiLCJidWxsZXRTcGVlZCIsImJ1bGxldEludGVydmFsIiwic2NyZWVuV2lkdGgiLCJzY3JlZW5IZWlnaHQiLCJtb3VudGVkIiwibWV0aG9kcyIsInNob3dCdWxsZXQiLCJzZXRUaW1lb3V0IiwiYmFsbGlzdGljTGF1bmNoIiwiY3JlYXRlQnVsbGV0IiwiYnVsbGV0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYnVsbGV0TW92ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBY0E7RUFDQUE7RUFDQUM7SUFDQTtNQUNBQztNQUNBQztNQUFBO01BQ0FDO01BQUE7TUFDQUM7TUFBQTtNQUNBQztNQUFBO01BQ0FDO0lBQ0E7RUFDQTtFQUNBQztJQUNBO0VBQ0E7RUFDQUM7SUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBQ0FDO01BQUE7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtVQUNBQztRQUNBO01BQ0E7TUFDQUM7TUFDQTtJQUNBO0lBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUNBQztNQUFBO01BQ0E7TUFDQTtNQUNBQztNQUNBQTtNQUNBQTtNQUNBQTtNQUNBQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0FBO01BQ0E7O01BRUE7TUFDQTtRQUNBQTtRQUNBO1VBQ0E7VUFDQTtZQUNBO1lBQ0FBO1VBQ0E7UUFDQTs7UUFFQTtRQUNBO1VBQ0E7UUFDQTtVQUNBQztRQUNBO01BQ0E7TUFDQUM7SUFDQTtFQUNBO0FBQ0E7QUFBQSIsImZpbGUiOiIzNy5qcyIsInNvdXJjZXNDb250ZW50IjpbIjwhLS1cbiAqIEBBdXRob3I6IOi0uuawuOiDnFxuICogQERhdGU6IDIwMjItMDEtMDcgMTI6MjE6MzhcbiAqIEBlbWFpbDogMTM3ODQzMTAyOEBxcS5jb21cbiAqIEBMYXN0RWRpdG9yczog6LS65rC46IOcXG4gKiBATGFzdEVkaXRUaW1lOiAyMDIyLTAxLTEwIDAwOjE3OjAwXG4gKiBARGVzY3JpcHR0aW9uOiDlvLnluZXnu4Tku7Zcbi0tPlxuPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiYnVsbGV0LWNoYXQtd3JhcFwiIHJlZj1cImJ1bGxldENoYXRcIj48L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2J1bGxldC1jaGF0JyxcbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJsZXNzaW5nRGF0YTogcmVxdWlyZSgnLi4vYXNzZXRzL2RhdGEvYmxlc3NpbmcuanNvbicpLFxuICAgICAgYmFsbGlzdGljOiAwLCAvLyDlvLnpgZPmlbDph49cbiAgICAgIGJ1bGxldFNwZWVkOiAyLCAvLyDlvLnluZXpgJ/luqZcbiAgICAgIGJ1bGxldEludGVydmFsOiBbMzAwLCA1MDBdLCAvLyDlvLnluZXpl7TpmpRcbiAgICAgIHNjcmVlbldpZHRoOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsIC8vIOWxj+W5leWuveW6plxuICAgICAgc2NyZWVuSGVpZ2h0OiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LCAvLyDlsY/luZXpq5jluqZcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQgKCkge1xuICAgIHRoaXMuc2hvd0J1bGxldCgpXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb246IOWxleekuuW8ueW5lVxuICAgICAqIEBwYXJhbSB7Kn1cbiAgICAgKiBAcmV0dXJuIHsqfVxuICAgICAqL1xuICAgIHNob3dCdWxsZXQgKCkge1xuICAgICAgLy8g5qC55o2u5bGP5bmV6auY5bqm5ZKM5by55bmV6auY5bqm6K6h566X5by56YGT5pWw6YePXG4gICAgICAvLyBsZXQgY2xpZW50SGVpZ2h0ID0gdGhpcy5zY3JlZW5IZWlnaHRcbiAgICAgIC8vIGxldCBiYWxsaXN0aWNDb3VudCA9IE1hdGguZmxvb3IoY2xpZW50SGVpZ2h0IC8gdGhpcy5idWxsZXRIZWlnaHQpXG4gICAgICAvLyBsZXQgYmFsbGlzdGljQXJyID0gQXJyYXkoYmFsbGlzdGljQ291bnQpLmZpbGwoMSkubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgLy8gICByZXR1cm4gaW5kZXhcbiAgICAgIC8vIH0pXG4gICAgICBsZXQgYmFsbGlzdGljQXJyID0gWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDldXG4gICAgICAvLyDmjInpmo/mnLrpobrluo/lnKjmiYDmnInnmoTlvLnpgZPmt7vliqDlvLnluZVcbiAgICAgIGxldCBiYWxsaXN0aWNMYXVuY2ggPSAoKSA9PiB7XG4gICAgICAgIGxldCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGJhbGxpc3RpY0Fyci5sZW5ndGgpXG4gICAgICAgIGxldCBiYWxsaXN0aWNJbmRleCA9IGJhbGxpc3RpY0Fyci5zcGxpY2UocmFuZG9tSW5kZXgsIDEpWzBdXG4gICAgICAgIHRoaXMuY3JlYXRlQnVsbGV0KGJhbGxpc3RpY0luZGV4KVxuICAgICAgICBpZiAoYmFsbGlzdGljQXJyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KGJhbGxpc3RpY0xhdW5jaCwgTWF0aC5yYW5kb20oKSAqIDEwMDApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGJhbGxpc3RpY0xhdW5jaCgpXG4gICAgICAvLyB0aGlzLmNyZWF0ZUJ1bGxldCgyKVxuICAgIH0sXG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uOiDmt7vliqDlvLnluZVcbiAgICAgKiBAcGFyYW0geyp9IGluZGV4IOW8uemBk+e0ouW8lVxuICAgICAqIEByZXR1cm4geyp9XG4gICAgICovXG4gICAgY3JlYXRlQnVsbGV0IChpbmRleCkge1xuICAgICAgbGV0IGJ1bGxldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICBsZXQgYnVsbGV0SGVpZ2h0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCAvIDEwXG4gICAgICBidWxsZXQuY2xhc3NOYW1lID0gJ2J1bGxldC1jaGF0J1xuICAgICAgYnVsbGV0LnN0eWxlLmxlZnQgPSB0aGlzLnNjcmVlbldpZHRoICsgJ3B4J1xuICAgICAgYnVsbGV0LnN0eWxlLnRvcCA9IGluZGV4ICogYnVsbGV0SGVpZ2h0ICsgJ3B4J1xuICAgICAgYnVsbGV0LmNyZWF0ZU5leHQgPSBmYWxzZSAvLyDmmK/lkKblt7LliJvlu7rkuIvkuIDkuKrlvLnluZVcbiAgICAgIGJ1bGxldC5uZXh0U3BhY2UgPSBNYXRoLnJhbmRvbSgpICogKHRoaXMuYnVsbGV0SW50ZXJ2YWxbMV0gLSB0aGlzLmJ1bGxldEludGVydmFsWzBdKSArIHRoaXMuYnVsbGV0SW50ZXJ2YWxbMF0gLy8g5LiL5LiA5Liq5by55bmV6Ze06ZqUXG4gICAgICAvLyDku47lvLnluZXlupPpmo/mnLrlj5blvLnluZVcbiAgICAgIGxldCBkYXRhTGVuZ3RoID0gdGhpcy5ibGVzc2luZ0RhdGEubGVuZ3RoXG4gICAgICBsZXQgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBkYXRhTGVuZ3RoKVxuICAgICAgbGV0IGJsZXNzaW5nID0gdGhpcy5ibGVzc2luZ0RhdGFbcmFuZG9tSW5kZXhdXG4gICAgICBidWxsZXQuaW5uZXJUZXh0ID0gYmxlc3NpbmcubmFtZSArIFwi77yaXCIgKyBibGVzc2luZy52YWx1ZVxuICAgICAgdGhpcy4kcmVmcy5idWxsZXRDaGF0LmFwcGVuZENoaWxkKGJ1bGxldClcblxuICAgICAgLy8g5by55bmV56e75YqoXG4gICAgICBsZXQgYnVsbGV0TW92ZSA9ICgpID0+IHtcbiAgICAgICAgYnVsbGV0LnN0eWxlLmxlZnQgPSBidWxsZXQub2Zmc2V0TGVmdCAtIHRoaXMuYnVsbGV0U3BlZWQgKyAncHgnXG4gICAgICAgIGlmICghYnVsbGV0LmNyZWF0ZU5leHQpIHtcbiAgICAgICAgICAvLyDlpoLmnpzlvLnluZXot53nprvlsY/luZXlj7Pkvqfot53nprvotoXlh7rlvLnluZXpl7TpmpTvvIzliJnliqDovb3kuIvkuIDmnaHlvLnluZVcbiAgICAgICAgICBpZiAoYnVsbGV0Lm9mZnNldExlZnQgPCAodGhpcy5zY3JlZW5XaWR0aCAtIGJ1bGxldC5vZmZzZXRXaWR0aCAtIGJ1bGxldC5uZXh0U3BhY2UpKSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUJ1bGxldChpbmRleClcbiAgICAgICAgICAgIGJ1bGxldC5jcmVhdGVOZXh0ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOWmguaenOW8ueW5lei3neemu+WPs+S+p+i3neemu+Wkp+S6juetieS6juWxj+W5leWuveW6pu+8jOWImeenu+mZpOW8ueW5lVxuICAgICAgICBpZiAoYnVsbGV0Lm9mZnNldExlZnQgPCAoLWJ1bGxldC5vZmZzZXRXaWR0aCkpIHtcbiAgICAgICAgICB0aGlzLiRyZWZzLmJ1bGxldENoYXQucmVtb3ZlQ2hpbGQoYnVsbGV0KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShidWxsZXRNb3ZlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBidWxsZXRNb3ZlKClcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuPHN0eWxlPlxuLmJ1bGxldC1jaGF0LXdyYXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbn1cbi5idWxsZXQtY2hhdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjMpO1xuICBmb250LXNpemU6IDMycHg7XG4gIC8qIGZvbnQtd2VpZ2h0OiBib2xkOyAqL1xufVxuPC9zdHlsZT4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///37\n");

/***/ }),
/* 38 */
/*!************************************************************!*\
  !*** C:/Users/周锐/Desktop/kunkun/assets/data/blessing.json ***!
  \************************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[{\\\"name\\\":\\\"许昌人民\\\",\\\"value\\\":\\\"祝全国人民新春快乐，万事如意\\\"},{\\\"name\\\":\\\"河南人民\\\",\\\"value\\\":\\\"祝全国华人新年快乐\\\"},{\\\"name\\\":\\\"十里青山\\\",\\\"value\\\":\\\"祝所有的朋友心想事成\\\"},{\\\"name\\\":\\\"濠\\\",\\\"value\\\":\\\"🎆除夕夜，星空璀璨，你比烟花更耀眼\\\"},{\\\"name\\\":\\\"千\\\",\\\"value\\\":\\\"祝大家新的一年心想事成发大财\\\"},{\\\"name\\\":\\\"飞帅\\\",\\\"value\\\":\\\"祝大家万事如意心想事成身体健康\\\"},{\\\"name\\\":\\\"😈👿\\\",\\\"value\\\":\\\"祝贺叔新的一年，早日脱单！！！哈哈哈\\\"},{\\\"name\\\":\\\"_章鱼\\\",\\\"value\\\":\\\"风雨送春归，飞雪迎春到\\\"},{\\\"name\\\":\\\"Ylimhs\\\",\\\"value\\\":\\\"天天开怀，时时快乐，分分精彩，秒秒幸福\\\"},{\\\"name\\\":\\\"剁椒鲨鱼头\\\",\\\"value\\\":\\\"一往无前，惊喜满怀\\\"},{\\\"name\\\":\\\"掘金Troy\\\",\\\"value\\\":\\\"新年快乐\\\"},{\\\"name\\\":\\\"菜姐不吃菜\\\",\\\"value\\\":\\\"新年暴富\\\"},{\\\"name\\\":\\\"凡繁梵\\\",\\\"value\\\":\\\"往事归于尽，来年迎花开\\\"},{\\\"name\\\":\\\"掘金Troy\\\",\\\"value\\\":\\\"新年快乐\\\"},{\\\"name\\\":\\\"htc587\\\",\\\"value\\\":\\\"诸事顺利，得偿所愿\\\"},{\\\"name\\\":\\\"凉城a\\\",\\\"value\\\":\\\"年年有余，岁岁平安。\\\"},{\\\"name\\\":\\\"哀家在冷宫学习\\\",\\\"value\\\":\\\"新的一年，留着老牛智慧的打底裤，穿上虎虎生威的披风，快乐的去奔跑吧，成为更好的自己。\\\"},{\\\"name\\\":\\\"黄运錦\\\",\\\"value\\\":\\\"小黄最帅\\\"},{\\\"name\\\":\\\"掘金用户男德\\\",\\\"value\\\":\\\"男德男德歪瑞古德\\\"},{\\\"name\\\":\\\"掘金用户晚风吹行舟三里\\\",\\\"value\\\":\\\"年年皆胜意，岁岁皆欢愉。\\\"},{\\\"name\\\":\\\"掘金用户隔壁的猫\\\",\\\"value\\\":\\\"我想中奖啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊。\\\"},{\\\"name\\\":\\\"掘金用户setUser\\\",\\\"value\\\":\\\"给各位拜年啦祝各位2022--新春快乐，阖家团圆\\\"},{\\\"name\\\":\\\"掘金用户bodyno\\\",\\\"value\\\":\\\"2022立的 Flag都实现\\\"},{\\\"name\\\":\\\"掘金用户9711604789854\\\",\\\"value\\\":\\\"祝gym2022新年快乐，万事如意\\\"}]\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIzOC5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///38\n");

/***/ }),
/* 39 */
/*!******************************************!*\
  !*** C:/Users/周锐/Desktop/kunkun/App.vue ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 40);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 19);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDZ007QUFDaE0sZ0JBQWdCLHlNQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjM5LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRDpcXFxcSEJ1aWxkZXJYLjMuNi4xNy4yMDIzMDExMlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkFwcC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///39\n");

/***/ }),
/* 40 */
/*!*******************************************************************!*\
  !*** C:/Users/周锐/Desktop/kunkun/App.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 41);\n/* harmony import */ var _D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_6_17_20230112_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBvQixDQUFnQix5cUJBQUcsRUFBQyIsImZpbGUiOiI0MC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYLjMuNi4xNy4yMDIzMDExMlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUQ6XFxcXEhCdWlsZGVyWC4zLjYuMTcuMjAyMzAxMTJcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFEOlxcXFxIQnVpbGRlclguMy42LjE3LjIwMjMwMTEyXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXEhCdWlsZGVyWC4zLjYuMTcuMjAyMzAxMTJcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclguMy42LjE3LjIwMjMwMTEyXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRDpcXFxcSEJ1aWxkZXJYLjMuNi4xNy4yMDIzMDExMlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUQ6XFxcXEhCdWlsZGVyWC4zLjYuMTcuMjAyMzAxMTJcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHVzaW5nLWNvbXBvbmVudHMuanMhRDpcXFxcSEJ1aWxkZXJYLjMuNi4xNy4yMDIzMDExMlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///40\n");

/***/ }),
/* 41 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/周锐/Desktop/kunkun/App.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _default = {};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7ZUFDZSxDQUNmLENBQUM7QUFBQSIsImZpbGUiOiI0MS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGRlZmF1bHQge1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///41\n");

/***/ }),
/* 42 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 43 */
/*!*************************************************!*\
  !*** C:/Users/周锐/Desktop/kunkun/store/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 44));\nvar _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 42));\n_vue.default.use(_vuex.default);\nwindow.backMusic = new Audio();\n// window.backMusic.src = 'https://m10.music.126.net/20220119015517/48d52d8000d38590024e7538d641c3f0/yyaac/obj/wonDkMOGw6XDiTHCmMOi/3064195211/8e9b/95ca/28ac/8d329b9e8180f0ba6234bf1e784995ed.m4a'\nwindow.backMusic.src = __webpack_require__(/*! ../assets/mp3/bjyy.mp3 */ 46);\nwindow.backMusic.loop = true;\nwindow.backMusic.load();\nwindow.backMusic.currentTime = 127.2; // 背景音乐默认定位到舒缓片段\nvar _default = new _vuex.default.Store({\n  state: {\n    setting: {\n      isPlay: false,\n      showBulletChat: true\n    }\n  },\n  mutations: {\n    toggleBulletChat: function toggleBulletChat(state) {\n      state.setting.showBulletChat = !state.setting.showBulletChat;\n    },\n    tooglePlay: function tooglePlay(state, status) {\n      if (status) {\n        // if (!state.setting.backMusic) {\n        //   this.commit('createBackMusic', require('../assets/mp3/back.mp3'))\n        //   // this.createBackMusic(require('../assets/mp3/back.mp3'))\n        // }\n        window.backMusic.play();\n      } else {\n        window.backMusic.pause();\n      }\n      state.setting.isPlay = status;\n    },\n    playAudio: function playAudio(state, src) {\n      if (state.setting.isPlay) {\n        var audio = new Audio();\n        audio.src = src;\n        audio.load();\n        audio.volume = .5;\n        audio.play();\n      }\n    } // createBackMusic (state, src) {\n    //   state.setting.backMusic = src\n    //   state.setting.backMusic.load()\n    // }\n  },\n  actions: {\n    increment: function increment(_ref) {\n      var commit = _ref.commit;\n      commit('increment');\n    }\n  }\n});\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vc3RvcmUvaW5kZXguanMiXSwibmFtZXMiOlsiVnVlIiwidXNlIiwiVnVleCIsIndpbmRvdyIsImJhY2tNdXNpYyIsIkF1ZGlvIiwic3JjIiwicmVxdWlyZSIsImxvb3AiLCJsb2FkIiwiY3VycmVudFRpbWUiLCJTdG9yZSIsInN0YXRlIiwic2V0dGluZyIsImlzUGxheSIsInNob3dCdWxsZXRDaGF0IiwibXV0YXRpb25zIiwidG9nZ2xlQnVsbGV0Q2hhdCIsInRvb2dsZVBsYXkiLCJzdGF0dXMiLCJwbGF5IiwicGF1c2UiLCJwbGF5QXVkaW8iLCJhdWRpbyIsInZvbHVtZSIsImFjdGlvbnMiLCJpbmNyZW1lbnQiLCJjb21taXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTtBQUNBO0FBRUFBLFlBQUcsQ0FBQ0MsR0FBRyxDQUFDQyxhQUFJLENBQUM7QUFDYkMsTUFBTSxDQUFDQyxTQUFTLEdBQUcsSUFBSUMsS0FBSyxFQUFFO0FBQzlCO0FBQ0FGLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDRSxHQUFHLEdBQUdDLG1CQUFPLENBQUMsZ0NBQXdCLENBQUM7QUFDeERKLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDSSxJQUFJLEdBQUcsSUFBSTtBQUM1QkwsTUFBTSxDQUFDQyxTQUFTLENBQUNLLElBQUksRUFBRTtBQUN2Qk4sTUFBTSxDQUFDQyxTQUFTLENBQUNNLFdBQVcsR0FBRyxLQUFLLEVBQUM7QUFBQSxlQUN0QixJQUFJUixhQUFJLENBQUNTLEtBQUssQ0FBQztFQUM1QkMsS0FBSyxFQUFFO0lBQ0xDLE9BQU8sRUFBRTtNQUNQQyxNQUFNLEVBQUUsS0FBSztNQUNiQyxjQUFjLEVBQUU7SUFDbEI7RUFDRixDQUFDO0VBQ0RDLFNBQVMsRUFBRTtJQUNUQyxnQkFBZ0IsNEJBQUNMLEtBQUssRUFBRTtNQUN0QkEsS0FBSyxDQUFDQyxPQUFPLENBQUNFLGNBQWMsR0FBRyxDQUFDSCxLQUFLLENBQUNDLE9BQU8sQ0FBQ0UsY0FBYztJQUM5RCxDQUFDO0lBQ0RHLFVBQVUsc0JBQUNOLEtBQUssRUFBRU8sTUFBTSxFQUFFO01BQ3hCLElBQUlBLE1BQU0sRUFBRTtRQUNWO1FBQ0E7UUFDQTtRQUNBO1FBQ0FoQixNQUFNLENBQUNDLFNBQVMsQ0FBQ2dCLElBQUksRUFBRTtNQUN6QixDQUFDLE1BQU07UUFDTGpCLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDaUIsS0FBSyxFQUFFO01BQzFCO01BQ0FULEtBQUssQ0FBQ0MsT0FBTyxDQUFDQyxNQUFNLEdBQUdLLE1BQU07SUFDL0IsQ0FBQztJQUNERyxTQUFTLHFCQUFDVixLQUFLLEVBQUVOLEdBQUcsRUFBRTtNQUNwQixJQUFJTSxLQUFLLENBQUNDLE9BQU8sQ0FBQ0MsTUFBTSxFQUFFO1FBQ3hCLElBQU1TLEtBQUssR0FBRyxJQUFJbEIsS0FBSyxFQUFFO1FBQ3pCa0IsS0FBSyxDQUFDakIsR0FBRyxHQUFHQSxHQUFHO1FBQ2ZpQixLQUFLLENBQUNkLElBQUksRUFBRTtRQUNaYyxLQUFLLENBQUNDLE1BQU0sR0FBRyxFQUFFO1FBQ2pCRCxLQUFLLENBQUNILElBQUksRUFBRTtNQUNkO0lBQ0YsQ0FBQyxDQUNEO0lBQ0E7SUFDQTtJQUNBO0VBQ0YsQ0FBQztFQUNESyxPQUFPLEVBQUU7SUFDUEMsU0FBUywyQkFBYTtNQUFBLElBQVZDLE1BQU0sUUFBTkEsTUFBTTtNQUNoQkEsTUFBTSxDQUFDLFdBQVcsQ0FBQztJQUNyQjtFQUNGO0FBQ0YsQ0FBQyxDQUFDO0FBQUEiLCJmaWxlIjoiNDMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBWdWV4IGZyb20gJ3Z1ZXgnXG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcblxuVnVlLnVzZShWdWV4KVxud2luZG93LmJhY2tNdXNpYyA9IG5ldyBBdWRpbygpXG4vLyB3aW5kb3cuYmFja011c2ljLnNyYyA9ICdodHRwczovL20xMC5tdXNpYy4xMjYubmV0LzIwMjIwMTE5MDE1NTE3LzQ4ZDUyZDgwMDBkMzg1OTAwMjRlNzUzOGQ2NDFjM2YwL3l5YWFjL29iai93b25Ea01PR3c2WERpVEhDbU1PaS8zMDY0MTk1MjExLzhlOWIvOTVjYS8yOGFjLzhkMzI5YjllODE4MGYwYmE2MjM0YmYxZTc4NDk5NWVkLm00YSdcbndpbmRvdy5iYWNrTXVzaWMuc3JjID0gcmVxdWlyZSgnLi4vYXNzZXRzL21wMy9ianl5Lm1wMycpXG53aW5kb3cuYmFja011c2ljLmxvb3AgPSB0cnVlXG53aW5kb3cuYmFja011c2ljLmxvYWQoKVxud2luZG93LmJhY2tNdXNpYy5jdXJyZW50VGltZSA9IDEyNy4yIC8vIOiDjOaZr+mfs+S5kOm7mOiupOWumuS9jeWIsOiIkue8k+eJh+autVxuZXhwb3J0IGRlZmF1bHQgbmV3IFZ1ZXguU3RvcmUoe1xuICBzdGF0ZToge1xuICAgIHNldHRpbmc6IHtcbiAgICAgIGlzUGxheTogZmFsc2UsXG4gICAgICBzaG93QnVsbGV0Q2hhdDogdHJ1ZVxuICAgIH1cbiAgfSxcbiAgbXV0YXRpb25zOiB7XG4gICAgdG9nZ2xlQnVsbGV0Q2hhdChzdGF0ZSkge1xuICAgICAgc3RhdGUuc2V0dGluZy5zaG93QnVsbGV0Q2hhdCA9ICFzdGF0ZS5zZXR0aW5nLnNob3dCdWxsZXRDaGF0XG4gICAgfSxcbiAgICB0b29nbGVQbGF5KHN0YXRlLCBzdGF0dXMpIHtcbiAgICAgIGlmIChzdGF0dXMpIHtcbiAgICAgICAgLy8gaWYgKCFzdGF0ZS5zZXR0aW5nLmJhY2tNdXNpYykge1xuICAgICAgICAvLyAgIHRoaXMuY29tbWl0KCdjcmVhdGVCYWNrTXVzaWMnLCByZXF1aXJlKCcuLi9hc3NldHMvbXAzL2JhY2subXAzJykpXG4gICAgICAgIC8vICAgLy8gdGhpcy5jcmVhdGVCYWNrTXVzaWMocmVxdWlyZSgnLi4vYXNzZXRzL21wMy9iYWNrLm1wMycpKVxuICAgICAgICAvLyB9XG4gICAgICAgIHdpbmRvdy5iYWNrTXVzaWMucGxheSgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cuYmFja011c2ljLnBhdXNlKClcbiAgICAgIH1cbiAgICAgIHN0YXRlLnNldHRpbmcuaXNQbGF5ID0gc3RhdHVzXG4gICAgfSxcbiAgICBwbGF5QXVkaW8oc3RhdGUsIHNyYykge1xuICAgICAgaWYgKHN0YXRlLnNldHRpbmcuaXNQbGF5KSB7XG4gICAgICAgIGNvbnN0IGF1ZGlvID0gbmV3IEF1ZGlvKClcbiAgICAgICAgYXVkaW8uc3JjID0gc3JjXG4gICAgICAgIGF1ZGlvLmxvYWQoKVxuICAgICAgICBhdWRpby52b2x1bWUgPSAuNVxuICAgICAgICBhdWRpby5wbGF5KClcbiAgICAgIH1cbiAgICB9LFxuICAgIC8vIGNyZWF0ZUJhY2tNdXNpYyAoc3RhdGUsIHNyYykge1xuICAgIC8vICAgc3RhdGUuc2V0dGluZy5iYWNrTXVzaWMgPSBzcmNcbiAgICAvLyAgIHN0YXRlLnNldHRpbmcuYmFja011c2ljLmxvYWQoKVxuICAgIC8vIH1cbiAgfSxcbiAgYWN0aW9uczoge1xuICAgIGluY3JlbWVudCh7IGNvbW1pdCB9KSB7XG4gICAgICBjb21taXQoJ2luY3JlbWVudCcpXG4gICAgfVxuICB9XG59KSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///43\n");

/***/ }),
/* 44 */
/*!**************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vuex3/dist/vuex.common.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */


function applyMixin (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
    ? global
    : {};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, { prepend: true });

  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, { prepend: true });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
function find (list, f) {
  return list.filter(f)[0]
}

/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
function deepCopy (obj, cache) {
  if ( cache === void 0 ) cache = [];

  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // if obj is hit, it is in circular structure
  var hit = find(cache, function (c) { return c.original === obj; });
  if (hit) {
    return hit.copy
  }

  var copy = Array.isArray(obj) ? [] : {};
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy: copy
  });

  Object.keys(obj).forEach(function (key) {
    copy[key] = deepCopy(obj[key], cache);
  });

  return copy
}

/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

function partial (fn, arg) {
  return function () {
    return fn(arg)
  }
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.hasChild = function hasChild (key) {
  return key in this._children
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if ((true)) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  var child = parent.getChild(key);

  if (!child) {
    if ((true)) {
      console.warn(
        "[vuex] trying to unregister module '" + key + "', which is " +
        "not registered"
      );
    }
    return
  }

  if (!child.runtime) {
    return
  }

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  if (parent) {
    return parent.hasChild(key)
  }

  return false
};

function update (path, targetModule, newModule) {
  if ((true)) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if ((true)) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if ((true)) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();
  this._makeLocalGettersCache = Object.create(null);

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors$1.state.set = function (v) {
  if ((true)) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });

  this._subscribers
    .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    ( true) &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  try {
    this._actionSubscribers
      .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
      .filter(function (sub) { return sub.before; })
      .forEach(function (sub) { return sub.before(action, this$1.state); });
  } catch (e) {
    if ((true)) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.after; })
          .forEach(function (sub) { return sub.after(action, this$1.state); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.error; })
          .forEach(function (sub) { return sub.error(action, this$1.state, error); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }
      reject(error);
    });
  })
};

Store.prototype.subscribe = function subscribe (fn, options) {
  return genericSubscribe(fn, this._subscribers, options)
};

Store.prototype.subscribeAction = function subscribeAction (fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if ((true)) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule (path) {
  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  return this._modules.isRegistered(path)
};

Store.prototype[[104,111,116,85,112,100,97,116,101].map(function (item) {return String.fromCharCode(item)}).join('')] = function (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors$1 );

function genericSubscribe (fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend
      ? subs.unshift(fn)
      : subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && ("development" !== 'production')) {
      console.error(("[vuex] duplicate namespace " + namespace + " for the namespaced module " + (path.join('/'))));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if ((true)) {
        if (moduleName in parentState) {
          console.warn(
            ("[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + (path.join('.')) + "\"")
          );
        }
      }
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) { return }

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function () { return store.getters[type]; },
        enumerable: true
      });
    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace]
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if ((true)) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if ((true)) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.reduce(function (state, key) { return state[key]; }, state)
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if ((true)) {
    assert(typeof type === 'string', ("expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if ((true)) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if (( true) && !isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept another params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if (( true) && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if (( true) && !isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (( true) && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if (( true) && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
function normalizeMap (map) {
  if (!isValidMap(map)) {
    return []
  }
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */
function isValidMap (map) {
  return Array.isArray(map) || isObject(map)
}

/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (( true) && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

// Credits: borrowed code from fcomb/redux-logger

function createLogger (ref) {
  if ( ref === void 0 ) ref = {};
  var collapsed = ref.collapsed; if ( collapsed === void 0 ) collapsed = true;
  var filter = ref.filter; if ( filter === void 0 ) filter = function (mutation, stateBefore, stateAfter) { return true; };
  var transformer = ref.transformer; if ( transformer === void 0 ) transformer = function (state) { return state; };
  var mutationTransformer = ref.mutationTransformer; if ( mutationTransformer === void 0 ) mutationTransformer = function (mut) { return mut; };
  var actionFilter = ref.actionFilter; if ( actionFilter === void 0 ) actionFilter = function (action, state) { return true; };
  var actionTransformer = ref.actionTransformer; if ( actionTransformer === void 0 ) actionTransformer = function (act) { return act; };
  var logMutations = ref.logMutations; if ( logMutations === void 0 ) logMutations = true;
  var logActions = ref.logActions; if ( logActions === void 0 ) logActions = true;
  var logger = ref.logger; if ( logger === void 0 ) logger = console;

  return function (store) {
    var prevState = deepCopy(store.state);

    if (typeof logger === 'undefined') {
      return
    }

    if (logMutations) {
      store.subscribe(function (mutation, state) {
        var nextState = deepCopy(state);

        if (filter(mutation, prevState, nextState)) {
          var formattedTime = getFormattedTime();
          var formattedMutation = mutationTransformer(mutation);
          var message = "mutation " + (mutation.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c prev state', 'color: #9E9E9E; font-weight: bold', transformer(prevState));
          logger.log('%c mutation', 'color: #03A9F4; font-weight: bold', formattedMutation);
          logger.log('%c next state', 'color: #4CAF50; font-weight: bold', transformer(nextState));
          endMessage(logger);
        }

        prevState = nextState;
      });
    }

    if (logActions) {
      store.subscribeAction(function (action, state) {
        if (actionFilter(action, state)) {
          var formattedTime = getFormattedTime();
          var formattedAction = actionTransformer(action);
          var message = "action " + (action.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c action', 'color: #03A9F4; font-weight: bold', formattedAction);
          endMessage(logger);
        }
      });
    }
  }
}

function startMessage (logger, message, collapsed) {
  var startMessage = collapsed
    ? logger.groupCollapsed
    : logger.group;

  // render
  try {
    startMessage.call(logger, message);
  } catch (e) {
    logger.log(message);
  }
}

function endMessage (logger) {
  try {
    logger.groupEnd();
  } catch (e) {
    logger.log('—— log end ——');
  }
}

function getFormattedTime () {
  var time = new Date();
  return (" @ " + (pad(time.getHours(), 2)) + ":" + (pad(time.getMinutes(), 2)) + ":" + (pad(time.getSeconds(), 2)) + "." + (pad(time.getMilliseconds(), 3)))
}

function repeat (str, times) {
  return (new Array(times + 1)).join(str)
}

function pad (num, maxLength) {
  return repeat('0', maxLength - num.toString().length) + num
}

var index_cjs = {
  Store: Store,
  install: install,
  version: '3.6.2',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers,
  createLogger: createLogger
};

module.exports = index_cjs;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 45)))

/***/ }),
/* 45 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 46 */
/*!******************************************************!*\
  !*** C:/Users/周锐/Desktop/kunkun/assets/mp3/bjyy.mp3 ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/assets/mp3/bjyy.mp3\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjQ2LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9hc3NldHMvbXAzL2JqeXkubXAzXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///46\n");

/***/ })
],[[0,"app-config"]]]);