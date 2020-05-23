webpackHotUpdate("static/development/pages/dactylo.js",{

/***/ "./containers/train/style.ts":
/*!***********************************!*\
  !*** ./containers/train/style.ts ***!
  \***********************************/
/*! exports provided: DactyloContainer, DactyloTitle, DactyloTextContainer, DactyloLine, DactyloInput, DactyloWord, DactyloLetter, DactyloHint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DactyloContainer", function() { return DactyloContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DactyloTitle", function() { return DactyloTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DactyloTextContainer", function() { return DactyloTextContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DactyloLine", function() { return DactyloLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DactyloInput", function() { return DactyloInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DactyloWord", function() { return DactyloWord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DactyloLetter", function() { return DactyloLetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DactyloHint", function() { return DactyloHint; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _constants_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/style */ "./constants/style.ts");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");



var DactyloContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "style__DactyloContainer",
  componentId: "todod4-0"
})(["position:fixed;background:", ";top:0;left:0;width:100vw;height:100vh;"], _constants_style__WEBPACK_IMPORTED_MODULE_1__["colors"].white);
var DactyloTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h1.withConfig({
  displayName: "style__DactyloTitle",
  componentId: "todod4-1"
})(["position:relative;width:400px;height:40px;line-height:40px;left:calc(50% - 200px);margin-top:5rem;text-align:center;font-family:\"Varela Round\",sans-serif;font-size:2.5rem;color:", ";"], _constants_style__WEBPACK_IMPORTED_MODULE_1__["colors"].primary);
var DactyloTextContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "style__DactyloTextContainer",
  componentId: "todod4-2"
})(["position:relative;width:1000px;margin-top:5rem;left:calc(50% - 500px);"]);
var DactyloLine = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p.withConfig({
  displayName: "style__DactyloLine",
  componentId: "todod4-3"
})(["width:1000px;text-align:center;"]);
var DactyloInput = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(antd__WEBPACK_IMPORTED_MODULE_2__["Input"]).withConfig({
  displayName: "style__DactyloInput",
  componentId: "todod4-4"
})(["position:relative;width:180px;height:40px;left:calc(50% - 100px);margin-top:200px;border:1px #334455 solid;border-radius:4px;font-family:\"Abel\";text-align:center;"]);
var DactyloWord = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span.withConfig({
  displayName: "style__DactyloWord",
  componentId: "todod4-5"
})(["font-family:\"Abel\";display:inline-block;margin:0 3px;"]);
var DactyloLetter = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span.withConfig({
  displayName: "style__DactyloLetter",
  componentId: "todod4-6"
})(["background:", ";"], function (props) {
  return props.status === "OK" ? _constants_style__WEBPACK_IMPORTED_MODULE_1__["colors"].safe : props.status === "WRONG" ? _constants_style__WEBPACK_IMPORTED_MODULE_1__["colors"].danger : "none";
});
var DactyloHint = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h3.withConfig({
  displayName: "style__DactyloHint",
  componentId: "todod4-7"
})(["margin-top:6rem;font-size:1.5rem;font-family:\"Abel\";width:400px;margin-left:calc(50% - 200px);text-align:center;color:", ";"], _constants_style__WEBPACK_IMPORTED_MODULE_1__["colors"].primary);

/***/ })

})
//# sourceMappingURL=dactylo.js.be78bf471b6957019f14.hot-update.js.map