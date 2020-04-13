webpackHotUpdate("static/development/pages/detail/[id].js",{

/***/ "./pages/detail/[id].js":
/*!******************************!*\
  !*** ./pages/detail/[id].js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions */ "./actions/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");


var _jsxFileName = "/Users/mitulshah/Desktop/Next/pages/detail/[id].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



function MovieDetail(_ref) {
  var Poster = _ref.Poster,
      Title = _ref.Title,
      imdbRating = _ref.imdbRating,
      Director = _ref.Director,
      Language = _ref.Language,
      Released = _ref.Released,
      Writer = _ref.Writer,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["Poster", "Title", "imdbRating", "Director", "Language", "Released", "Writer"]);

  var Meta = antd__WEBPACK_IMPORTED_MODULE_4__["Card"].Meta;
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    hoverable: true,
    style: {
      width: 240
    },
    cover: __jsx("img", {
      alt: "example",
      src: Poster,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 20
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx(Meta, {
    title: Title,
    description: "The movie was directed by ".concat(Director, " in following ").concat(Language, " \n                It was Released on ").concat(Released, " and writer of this movie is ").concat(Writer),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }));
}

MovieDetail.getInitialProps = function _callee(context) {
  var id, res;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          id = context.query.id;
          _context.t0 = _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a;
          _context.next = 4;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["getMovieDetail"])({
            id: id
          }));

        case 4:
          _context.t1 = _context.sent.json();
          _context.next = 7;
          return _context.t0.awrap.call(_context.t0, _context.t1);

        case 7:
          res = _context.sent;
          return _context.abrupt("return", res);

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (MovieDetail);

/***/ })

})
//# sourceMappingURL=[id].js.fedb25d0561df2d4e58b.hot-update.js.map