webpackHotUpdate("static/development/pages/dactylo.js",{

/***/ "./containers/train/index.tsx":
/*!************************************!*\
  !*** ./containers/train/index.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dactylo; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./style */ "./containers/train/style.ts");
/* harmony import */ var _components_statistics__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/statistics */ "./components/statistics/index.tsx");
/* harmony import */ var _constants_words__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../constants/words */ "./constants/words.ts");
/* harmony import */ var _constants_keys__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../constants/keys */ "./constants/keys.ts");









var _jsxFileName = "/Users/seraphin/Documents/SBoccacci/Dev/dactylo/containers/train/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var numberOfLines = 3;
var SPACE = " ";

var Dactylo = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Dactylo, _React$Component);

  var _super = _createSuper(Dactylo);

  function Dactylo(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Dactylo);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "updateLettersStatus", function (newValue) {
      var displayedWords = _this.state.displayedWords;

      var _displayedWords2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(displayedWords, 1),
          _displayedWords2$ = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_displayedWords2[0], 1),
          targetWord = _displayedWords2$[0];

      var newValueLetters = newValue.split("");
      var updatedWordInfo = targetWord.wordInfo.map(function (letter, letterIndex) {
        if (!newValueLetters[letterIndex]) return _objectSpread({}, letter, {
          status: "NONE"
        });else if (newValueLetters[letterIndex] === letter.letter) return _objectSpread({}, letter, {
          status: "OK"
        });else if (newValueLetters[letterIndex] !== letter.letter) return _objectSpread({}, letter, {
          status: "WRONG"
        });else return _objectSpread({}, letter, {
          status: "NONE"
        });
      });
      displayedWords[0][0] = _objectSpread({}, targetWord, {
        wordInfo: updatedWordInfo
      });

      _this.setState({
        displayedWords: displayedWords,
        wordValue: newValue
      });

      _this.updateHint();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "goNextWord", function () {
      var displayedWords = _this.state.displayedWords;

      var _displayedWords3 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(displayedWords, 1),
          firstLine = _displayedWords3[0];

      var _firstLine = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(firstLine, 1),
          firstWordOfFirstLine = _firstLine[0];

      _this.updateSummary(firstWordOfFirstLine);

      var updateFirstLine = firstLine.slice(1, firstLine.length);
      var updatedDisplayedWords = [updateFirstLine].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(displayedWords.slice(1, 3)));

      if (!updateFirstLine.length) {
        updatedDisplayedWords = displayedWords.slice(1, 3);
        updatedDisplayedWords.push(fillLine());
      }

      _this.setState({
        displayedWords: updatedDisplayedWords,
        wordValue: ""
      });

      _this.updateHint(true);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "updateSummary", function (doneWord) {
      var isWordOk = doneWord.wordInfo.every(function (_ref) {
        var status = _ref.status;
        return status === "OK";
      });
      var wrongLetterCount = doneWord.wordInfo.reduce(function (prevCount, _ref2) {
        var status = _ref2.status;
        return status === "OK" ? prevCount : prevCount + 1;
      }, 0);
      var okLetterCount = doneWord.wordInfo.length - wrongLetterCount;

      _this.setState(function (_ref3) {
        var summary = _ref3.summary;
        return {
          summary: {
            okWords: isWordOk ? summary.okWords + 1 : summary.okWords,
            wrongWords: isWordOk ? summary.wrongWords : summary.wrongWords + 1,
            okLetters: summary.okLetters + okLetterCount,
            wrongLetters: summary.wrongLetters + wrongLetterCount
          }
        };
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "updateHint", function (isNextWord) {
      var displayedWords = _this.state.displayedWords;

      var _displayedWords4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(displayedWords, 1),
          _displayedWords4$ = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_displayedWords4[0], 1),
          targetWord = _displayedWords4$[0];

      var nextLetter = targetWord.wordInfo.find(function (_ref4) {
        var status = _ref4.status;
        return status === "NONE";
      });

      if (isNextWord) {
        var nextTargetWord = displayedWords[0][1] || displayedWords[1][0];
        var nextWordFirstLetter = nextTargetWord.wordInfo[0];

        _this.setState({
          hint: findInMap(nextWordFirstLetter === null || nextWordFirstLetter === void 0 ? void 0 : nextWordFirstLetter.letter)
        });
      } else {
        if (nextLetter) {
          _this.setState({
            hint: findInMap(nextLetter === null || nextLetter === void 0 ? void 0 : nextLetter.letter)
          });
        } else {
          _this.setState({
            hint: findInMap(SPACE)
          });
        }
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleChange", function (e) {
      var newValue = e.target.value;
      var newValueLetters = newValue.split("");
      var newLetter = newValueLetters[newValueLetters.length - 1];

      if (newLetter === SPACE) {
        _this.goNextWord();
      } else {
        _this.updateLettersStatus(newValue);
      }
    });

    var _displayedWords = [];

    for (var i = 0; i < numberOfLines; i++) {
      _displayedWords.push(fillLine());
    }

    _this.state = {
      displayedWords: _displayedWords,
      currentWordId: 0,
      wordValue: "",
      hint: "",
      summary: {
        okWords: 0,
        wrongWords: 0,
        okLetters: 0,
        wrongLetters: 0
      }
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Dactylo, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateHint();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          displayedWords = _this$state.displayedWords,
          wordValue = _this$state.wordValue,
          hint = _this$state.hint,
          summary = _this$state.summary;
      var targetWord = displayedWords[0][0];
      return __jsx(_style__WEBPACK_IMPORTED_MODULE_10__["DactyloContainer"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 7
        }
      }, __jsx(_components_statistics__WEBPACK_IMPORTED_MODULE_11__["default"], {
        okWords: summary.okWords,
        wrongWords: summary.wrongWords,
        okLetters: summary.okLetters,
        wrongLetters: summary.wrongLetters,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 9
        }
      }), __jsx(_style__WEBPACK_IMPORTED_MODULE_10__["DactyloTitle"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 9
        }
      }, "Let's write !"), __jsx(_style__WEBPACK_IMPORTED_MODULE_10__["DactyloTextContainer"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 9
        }
      }, displayedWords.map(function (line, index) {
        return __jsx(_style__WEBPACK_IMPORTED_MODULE_10__["DactyloLine"], {
          key: index,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 13
          }
        }, line.map(function (_ref5, wordIndex) {
          var wordInfo = _ref5.wordInfo;
          return __jsx(_style__WEBPACK_IMPORTED_MODULE_10__["DactyloWord"], {
            key: wordIndex,
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 186,
              columnNumber: 17
            }
          }, wordInfo.map(function (_ref6, letterIndex) {
            var letter = _ref6.letter,
                status = _ref6.status;
            return __jsx(_style__WEBPACK_IMPORTED_MODULE_10__["DactyloLetter"], {
              key: letterIndex,
              status: status,
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 188,
                columnNumber: 21
              }
            }, letter);
          }));
        }));
      })), __jsx(_style__WEBPACK_IMPORTED_MODULE_10__["DactyloInput"], {
        id: "input",
        value: wordValue,
        onChange: this.handleChange,
        maxLength: targetWord === null || targetWord === void 0 ? void 0 : targetWord.word.length,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 9
        }
      }), __jsx(_style__WEBPACK_IMPORTED_MODULE_10__["DactyloHint"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 9
        }
      }, hint));
    }
  }]);

  return Dactylo;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);



var fillLine = function fillLine() {
  var numberOfWords = 10;
  var line = [];

  for (var i = 0; i < numberOfWords; i++) {
    var randomIndex = Math.ceil(Math.random() * _constants_words__WEBPACK_IMPORTED_MODULE_12__["default"].length);
    var chosenWord = _constants_words__WEBPACK_IMPORTED_MODULE_12__["default"][randomIndex].toLowerCase();
    var wordInfo = chosenWord.split("").map(function (letter) {
      return {
        letter: letter,
        status: "NONE"
      };
    });
    line.push({
      wordInfo: wordInfo,
      word: chosenWord,
      status: "NONE"
    });
  }

  return line;
};

var findInMap = function findInMap(letter) {
  var _iterator = _createForOfIteratorHelper(_constants_keys__WEBPACK_IMPORTED_MODULE_13__["keysMap"]),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_step.value, 2),
          key = _step$value[0],
          value = _step$value[1];

      if (key.includes(letter)) return value;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};

/***/ })

})
//# sourceMappingURL=dactylo.js.d33f36d7ee72a7c42bea.hot-update.js.map