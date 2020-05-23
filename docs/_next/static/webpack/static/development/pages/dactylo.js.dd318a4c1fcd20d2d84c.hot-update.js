webpackHotUpdate("static/development/pages/dactylo.js",{

/***/ "./components/statistics/index.tsx":
/*!*****************************************!*\
  !*** ./components/statistics/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style */ "./components/statistics/style.ts");





var _jsxFileName = "/Users/seraphin/Documents/SBoccacci/Dev/dactylo/components/statistics/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var Index = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Index, _React$Component);

  var _super = _createSuper(Index);

  function Index(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    _this = _super.call(this, props);
    _this.state = {};
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var startTime = this.state.startTime;
      if (!startTime) this.setState({
        startTime: new Date()
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          okWords = _this$props.okWords,
          wrongWords = _this$props.wrongWords,
          okLetters = _this$props.okLetters,
          wrongLetters = _this$props.wrongLetters;
      var startTime = this.state.startTime;
      var totalLetters = okLetters + wrongLetters === 0 ? 1 : okLetters + wrongLetters;
      var accuracy = Math.floor(okLetters / totalLetters * 10000) / 100;
      var spentTime = startTime && new Date().getTime() - startTime.getTime();
      var spentTimeInMinute = spentTime && spentTime / 60000;
      var wordsPerMinute = spentTimeInMinute && (okWords || wrongWords) && (okWords + wrongWords) / spentTimeInMinute;
      return __jsx(_style__WEBPACK_IMPORTED_MODULE_6__["StatisticsContainer"], {
        title: "Your Stats",
        bordered: true,
        size: "small",
        column: 2,
        layout: vertical,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 7
        }
      }, __jsx(_style__WEBPACK_IMPORTED_MODULE_6__["StatisticsItem"], {
        label: "Mots justes",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 9
        }
      }, okWords), __jsx(_style__WEBPACK_IMPORTED_MODULE_6__["StatisticsItem"], {
        label: "Mots faux",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 9
        }
      }, wrongWords), __jsx(_style__WEBPACK_IMPORTED_MODULE_6__["StatisticsItem"], {
        label: "Pr\xE9cision",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 9
        }
      }, accuracy), __jsx(_style__WEBPACK_IMPORTED_MODULE_6__["StatisticsItem"], {
        label: "Mots par minutes",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 9
        }
      }, Math.floor((wordsPerMinute || 0) * 100) / 100));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ })

})
//# sourceMappingURL=dactylo.js.dd318a4c1fcd20d2d84c.hot-update.js.map