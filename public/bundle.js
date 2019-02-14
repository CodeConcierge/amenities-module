/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/app.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/app.jsx":
/*!************************!*\
  !*** ./client/app.jsx ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _shortAmenity_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shortAmenity.jsx */ \"./client/shortAmenity.jsx\");\n/* harmony import */ var _modal_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.jsx */ \"./client/modal.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar App =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App(props) {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));\n    _this.state = {\n      listingAmenities: [],\n      show: false\n    };\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      $.get('http://localhost:3003/api/amenities', function (serverData) {\n        var parsedServerData = JSON.parse(serverData);\n        var amenities = [];\n\n        for (var prop in parsedServerData) {\n          amenities.push(parsedServerData[prop]);\n        } //console.log(amenities)\n        //should order by attractiveness in the sql call. \n\n\n        _this2.setState({\n          listingAmenities: amenities\n        });\n\n        console.log(_this2.state.listingAmenities);\n      });\n    }\n  }, {\n    key: \"showModal\",\n    value: function showModal() {\n      this.setState({\n        show: true\n      });\n    }\n  }, {\n    key: \"hideModal\",\n    value: function hideModal() {\n      this.setState({\n        show: false\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"main\", {\n        style: {\n          color: '#484848',\n          fontFamily: 'Circular,\"Helvetica Neue\",Helvetica,Arial,sans-serif',\n          position: 'fixed',\n          top: -200,\n          overflow: 'hidden'\n        }\n      }, React.createElement(\"div\", {\n        style: {\n          fontSize: 100\n        }\n      }, \"placeholder\"), React.createElement(\"div\", {\n        style: {\n          fontSize: 100\n        }\n      }, \"placeholder\"), React.createElement(\"div\", {\n        style: {\n          fontSize: 100\n        }\n      }, \"placeholder\"), React.createElement(\"div\", {\n        style: {\n          fontSize: 100\n        }\n      }, \"placeholder\"), React.createElement(_modal_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        amenities: this.state.listingAmenities\n      }), React.createElement(\"h2\", null, \"Amenities\"), React.createElement(\"table\", {\n        style: {\n          marginBottom: 16\n        }\n      }, React.createElement(_shortAmenity_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        amenities: this.state.listingAmenities\n      })), React.createElement(\"a\", {\n        style: {\n          color: 'blue',\n          cursor: 'pointer'\n        },\n        onClick: function onClick() {\n          return console.log('click handler working');\n        }\n      }, React.createElement(\"u\", null, \"Show all \", this.state.listingAmenities.length, \" amenities\")), React.createElement(\"div\", {\n        style: {\n          fontSize: 100\n        }\n      }, \"placeholder\"), React.createElement(\"div\", {\n        style: {\n          fontSize: 100\n        }\n      }, \"placeholder\"), React.createElement(\"div\", {\n        style: {\n          fontSize: 100\n        }\n      }, \"placeholder\"));\n    }\n  }]);\n\n  return App;\n}(React.Component);\n\nReactDOM.render(React.createElement(App, null), document.getElementById('app'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvYXBwLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9hcHAuanN4PzJjNTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFtZW5pdHkgZnJvbSAnLi9zaG9ydEFtZW5pdHkuanN4JztcbmltcG9ydCBNb2RhbCBmcm9tICcuL21vZGFsLmpzeCc7XG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbGlzdGluZ0FtZW5pdGllczogW10sXG4gICAgICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgJC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMy9hcGkvYW1lbml0aWVzJywgKHNlcnZlckRhdGEpID0+IHtcbiAgICAgICAgICAgIGxldCBwYXJzZWRTZXJ2ZXJEYXRhID0gSlNPTi5wYXJzZShzZXJ2ZXJEYXRhKVxuICAgICAgICAgICAgbGV0IGFtZW5pdGllcyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBwYXJzZWRTZXJ2ZXJEYXRhKSB7XG4gICAgICAgICAgICAgICAgYW1lbml0aWVzLnB1c2gocGFyc2VkU2VydmVyRGF0YVtwcm9wXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coYW1lbml0aWVzKVxuICAgICAgICAgICAgLy9zaG91bGQgb3JkZXIgYnkgYXR0cmFjdGl2ZW5lc3MgaW4gdGhlIHNxbCBjYWxsLiBcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGxpc3RpbmdBbWVuaXRpZXM6IGFtZW5pdGllc1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUubGlzdGluZ0FtZW5pdGllcylcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzaG93TW9kYWwoKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvdzogdHJ1ZX0pO1xuICAgIH07XG5cbiAgICBoaWRlTW9kYWwoKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvdzogZmFsc2V9KTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPG1haW4gc3R5bGU9e3tjb2xvcjonIzQ4NDg0OCcsZm9udEZhbWlseTonQ2lyY3VsYXIsXCJIZWx2ZXRpY2EgTmV1ZVwiLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmJywgcG9zaXRpb246J2ZpeGVkJyx0b3A6LTIwMCxvdmVyZmxvdzonaGlkZGVuJ319PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmb250U2l6ZToxMDB9fT5wbGFjZWhvbGRlcjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmb250U2l6ZToxMDB9fT5wbGFjZWhvbGRlcjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmb250U2l6ZToxMDB9fT5wbGFjZWhvbGRlcjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmb250U2l6ZToxMDB9fT5wbGFjZWhvbGRlcjwvZGl2PlxuICAgICAgICAgICAgICAgIDxNb2RhbCBhbWVuaXRpZXM9e3RoaXMuc3RhdGUubGlzdGluZ0FtZW5pdGllc30vPlxuICAgICAgICAgICAgICAgIDxoMj5BbWVuaXRpZXM8L2gyPlxuICAgICAgICAgICAgICAgIDx0YWJsZSBzdHlsZT17e21hcmdpbkJvdHRvbToxNn19PlxuICAgICAgICAgICAgICAgICAgICA8QW1lbml0eSBhbWVuaXRpZXM9e3RoaXMuc3RhdGUubGlzdGluZ0FtZW5pdGllc30vPlxuICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgPGEgc3R5bGU9e3tjb2xvcjonYmx1ZScsY3Vyc29yOidwb2ludGVyJ319IG9uQ2xpY2s9eygpID0+IGNvbnNvbGUubG9nKCdjbGljayBoYW5kbGVyIHdvcmtpbmcnKX0+PHU+U2hvdyBhbGwge3RoaXMuc3RhdGUubGlzdGluZ0FtZW5pdGllcy5sZW5ndGh9IGFtZW5pdGllczwvdT48L2E+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZvbnRTaXplOjEwMH19PnBsYWNlaG9sZGVyPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZvbnRTaXplOjEwMH19PnBsYWNlaG9sZGVyPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZvbnRTaXplOjEwMH19PnBsYWNlaG9sZGVyPC9kaXY+XG4gICAgICAgICAgICA8L21haW4+XG4gICAgICAgIClcbiAgICB9XG59XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBTUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7Ozs7QUFuREE7QUFDQTtBQXFEQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/app.jsx\n");

/***/ }),

/***/ "./client/fullAmenity.jsx":
/*!********************************!*\
  !*** ./client/fullAmenity.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar FullAmenity = function FullAmenity(props) {\n  var fullAmenities = [];\n  var borderCss = {\n    borderBottomWidth: '1px',\n    borderBottomColor: '#EBEBEB',\n    borderBottomStyle: 'solid',\n    padding: 5\n  };\n\n  if (Object.keys(props).length > 0) {\n    var category = props[Object.keys(props)[0]];\n    fullAmenities = category.map(function (ele) {\n      return React.createElement(\"div\", {\n        key: ele.name\n      }, React.createElement(\"div\", {\n        style: {\n          fontSize: 14,\n          padding: '20px 0px 5px 0px'\n        }\n      }, ele.name), React.createElement(\"div\", {\n        style: {\n          fontSize: 12,\n          paddingBottom: 10\n        }\n      }, ele.description), React.createElement(\"div\", {\n        style: borderCss\n      }));\n    });\n  }\n\n  return fullAmenities;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FullAmenity);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvZnVsbEFtZW5pdHkuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY2xpZW50L2Z1bGxBbWVuaXR5LmpzeD9kNDg5Il0sInNvdXJjZXNDb250ZW50IjpbIlxubGV0IEZ1bGxBbWVuaXR5ID0gKHByb3BzKSA9PiB7XG4gICAgbGV0IGZ1bGxBbWVuaXRpZXMgPSBbXTtcbiAgICBsZXQgYm9yZGVyQ3NzID0ge1xuICAgICAgICBib3JkZXJCb3R0b21XaWR0aDonMXB4JyxcbiAgICAgICAgYm9yZGVyQm90dG9tQ29sb3I6JyNFQkVCRUInLFxuICAgICAgICBib3JkZXJCb3R0b21TdHlsZTonc29saWQnLFxuICAgICAgICBwYWRkaW5nOjVcbiAgICB9XG4gICAgaWYoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbGV0IGNhdGVnb3J5ID0gcHJvcHNbT2JqZWN0LmtleXMocHJvcHMpWzBdXVxuICAgICAgICBmdWxsQW1lbml0aWVzID0gY2F0ZWdvcnkubWFwKGVsZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtlbGUubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmb250U2l6ZToxNCxwYWRkaW5nOicyMHB4IDBweCA1cHggMHB4J319PntlbGUubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZvbnRTaXplOjEyLHBhZGRpbmdCb3R0b206MTB9fT57ZWxlLmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtib3JkZXJDc3N9PjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIGZ1bGxBbWVuaXRpZXNcbn1cblxuZXhwb3J0IGRlZmF1bHQgRnVsbEFtZW5pdHk7Il0sIm1hcHBpbmdzIjoiQUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/fullAmenity.jsx\n");

/***/ }),

/***/ "./client/modal.jsx":
/*!**************************!*\
  !*** ./client/modal.jsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fullAmenity_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fullAmenity.jsx */ \"./client/fullAmenity.jsx\");\n\n\nvar Modal = function Modal(props) {\n  //let show = props.show\n  var basics = props.amenities.filter(function (ele) {\n    return ele.category === 'Basic';\n  });\n  var hip = props.amenities.filter(function (ele) {\n    return ele.category === 'Hip';\n  });\n  var backgroundDivStyle = {\n    display: 'block',\n    position: 'fixed',\n    //zIndex: 2,\n    top: 0,\n    right: 0,\n    bottom: 0,\n    left: 0,\n    overflow: 'auto',\n    height: '100%',\n    width: '100%',\n    background: 'rgba(255,255,255,0.8)'\n  };\n  var displayDivStyle = {\n    display: 'block',\n    position: 'relative',\n    //zIndex: 3,\n    margin: '50px auto',\n    padding: '0px 30px',\n    height: '200%',\n    width: '70%',\n    backgroundColor: 'white',\n    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 1px 10px 0px' // let modalText = {\n    //     margin:'20px 30px'\n    // }\n\n  };\n  return React.createElement(\"div\", {\n    style: backgroundDivStyle,\n    role: \"dialog\"\n  }, React.createElement(\"div\", {\n    style: displayDivStyle\n  }, React.createElement(\"button\", {\n    style: {\n      margin: '20px 0px',\n      borderRadius: '50%'\n    }\n  }, \"\\xD7\"), React.createElement(\"h2\", {\n    style: {\n      margin: '0px 0px 20px 0px'\n    }\n  }, \"Amenities\"), React.createElement(\"h4\", {\n    style: {\n      margin: '10px 30px 10px 0px'\n    }\n  }, \"Basic\"), React.createElement(_fullAmenity_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    basics: basics\n  }), React.createElement(\"h4\", {\n    style: {\n      margin: '10px 30px 10px 0px'\n    }\n  }, \"Hip\"), React.createElement(_fullAmenity_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    hip: hip\n  }), React.createElement(\"h4\", {\n    style: {\n      margin: '15px 0px'\n    }\n  }, \"Not Included\"), React.createElement(\"div\", {\n    style: {\n      fontSize: 20\n    }\n  }, \"placey mcPlace place\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvbW9kYWwuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY2xpZW50L21vZGFsLmpzeD9hODNjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGdWxsQW1lbml0eSBmcm9tIFwiLi9mdWxsQW1lbml0eS5qc3hcIjtcblxuY29uc3QgTW9kYWwgPSAocHJvcHMpID0+IHtcbiAgICAvL2xldCBzaG93ID0gcHJvcHMuc2hvd1xuICAgIGxldCBiYXNpY3MgPSBwcm9wcy5hbWVuaXRpZXMuZmlsdGVyKGVsZSA9PiBlbGUuY2F0ZWdvcnkgPT09ICdCYXNpYycpXG4gICAgbGV0IGhpcCA9IHByb3BzLmFtZW5pdGllcy5maWx0ZXIoZWxlID0+IGVsZS5jYXRlZ29yeSA9PT0gJ0hpcCcpXG5cbiAgICBsZXQgYmFja2dyb3VuZERpdlN0eWxlID0ge1xuICAgICAgICBkaXNwbGF5OidibG9jaycsXG4gICAgICAgIHBvc2l0aW9uOidmaXhlZCcsXG4gICAgICAgIC8vekluZGV4OiAyLFxuICAgICAgICB0b3A6MCxcbiAgICAgICAgcmlnaHQ6MCxcbiAgICAgICAgYm90dG9tOjAsXG4gICAgICAgIGxlZnQ6MCxcbiAgICAgICAgb3ZlcmZsb3c6J2F1dG8nICxcbiAgICAgICAgaGVpZ2h0OicxMDAlJyxcbiAgICAgICAgd2lkdGg6JzEwMCUnLFxuICAgICAgICBiYWNrZ3JvdW5kOidyZ2JhKDI1NSwyNTUsMjU1LDAuOCknLFxuICAgIH1cblxuICAgIGxldCBkaXNwbGF5RGl2U3R5bGUgPSB7XG4gICAgICAgIGRpc3BsYXk6J2Jsb2NrJyxcbiAgICAgICAgcG9zaXRpb246J3JlbGF0aXZlJyxcbiAgICAgICAgLy96SW5kZXg6IDMsXG4gICAgICAgIG1hcmdpbjonNTBweCBhdXRvJyxcbiAgICAgICAgcGFkZGluZzonMHB4IDMwcHgnLFxuICAgICAgICBoZWlnaHQ6JzIwMCUnLFxuICAgICAgICB3aWR0aDonNzAlJyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOid3aGl0ZScsXG4gICAgICAgIGJveFNoYWRvdzoncmdiYSgwLCAwLCAwLCAwLjIpIDBweCAxcHggMTBweCAwcHgnLFxuICAgIH1cblxuICAgIC8vIGxldCBtb2RhbFRleHQgPSB7XG4gICAgLy8gICAgIG1hcmdpbjonMjBweCAzMHB4J1xuICAgIC8vIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e2JhY2tncm91bmREaXZTdHlsZX0gcm9sZT1cImRpYWxvZ1wiPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17ZGlzcGxheURpdlN0eWxlfT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXt7bWFyZ2luOicyMHB4IDBweCcsYm9yZGVyUmFkaXVzOic1MCUnfX0+JnRpbWVzOzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17e21hcmdpbjonMHB4IDBweCAyMHB4IDBweCd9fT5BbWVuaXRpZXM8L2gyPlxuICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17e21hcmdpbjonMTBweCAzMHB4IDEwcHggMHB4J319PkJhc2ljPC9oND5cbiAgICAgICAgICAgICAgICA8RnVsbEFtZW5pdHkgYmFzaWNzPXtiYXNpY3N9Lz5cbiAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3ttYXJnaW46JzEwcHggMzBweCAxMHB4IDBweCd9fT5IaXA8L2g0PlxuICAgICAgICAgICAgICAgIDxGdWxsQW1lbml0eSBoaXA9e2hpcH0vPlxuICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17e21hcmdpbjonMTVweCAwcHgnfX0+Tm90IEluY2x1ZGVkPC9oND5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Zm9udFNpemU6MjB9fT5wbGFjZXkgbWNQbGFjZSBwbGFjZTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kYWw7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBZkE7QUFnQkE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/modal.jsx\n");

/***/ }),

/***/ "./client/shortAmenity.jsx":
/*!*********************************!*\
  !*** ./client/shortAmenity.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar ShortAmenity = function ShortAmenity(props) {\n  var amenTableData = [];\n  var amenRow = [];\n\n  if (props.amenities[0]) {\n    var amenSliced = props.amenities.slice(0, 4);\n    amenTableData = amenSliced.map(function (ele) {\n      return React.createElement(\"td\", {\n        style: {\n          paddingRight: 110\n        }\n      }, React.createElement(\"img\", {\n        src: ele.img_url,\n        style: {\n          height: 20,\n          width: 20\n        }\n      }), ele.name);\n    });\n\n    for (var i = 0; i <= amenSliced.length / 2; i += 2) {\n      amenRow.push(React.createElement(\"tr\", {\n        key: amenSliced[i].name\n      }, amenTableData[i], amenTableData[i + 1]));\n    } //carbon monoxide? add it manually\n\n  }\n\n  return React.createElement(\"tbody\", null, amenRow);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ShortAmenity);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc2hvcnRBbWVuaXR5LmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zaG9ydEFtZW5pdHkuanN4P2MwYzAiXSwic291cmNlc0NvbnRlbnQiOlsiXG5sZXQgU2hvcnRBbWVuaXR5ID0gKHByb3BzKSA9PiB7XG4gICAgbGV0IGFtZW5UYWJsZURhdGEgPSBbXTtcbiAgICBsZXQgYW1lblJvdyA9IFtdO1xuICAgIGlmKHByb3BzLmFtZW5pdGllc1swXSkge1xuICAgICAgICBsZXQgYW1lblNsaWNlZCA9IHByb3BzLmFtZW5pdGllcy5zbGljZSgwLDQpO1xuICAgICAgICBhbWVuVGFibGVEYXRhID0gYW1lblNsaWNlZC5tYXAoZWxlID0+IHtcbiAgICAgICAgICAgIHJldHVybiA8dGQgc3R5bGU9e3twYWRkaW5nUmlnaHQ6MTEwfX0+PGltZyBzcmM9e2VsZS5pbWdfdXJsfSBzdHlsZT17e2hlaWdodDoyMCx3aWR0aDoyMH19PjwvaW1nPntlbGUubmFtZX08L3RkPlxuICAgICAgICB9KVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBhbWVuU2xpY2VkLmxlbmd0aCAvIDI7IGkrPTIpIHtcbiAgICAgICAgICAgIGFtZW5Sb3cucHVzaCg8dHIga2V5PXthbWVuU2xpY2VkW2ldLm5hbWV9PnthbWVuVGFibGVEYXRhW2ldfXthbWVuVGFibGVEYXRhW2krMV19PC90cj4pIFxuICAgICAgICB9XG4gICAgICAgIC8vY2FyYm9uIG1vbm94aWRlPyBhZGQgaXQgbWFudWFsbHlcbiAgICB9XG4gICAgcmV0dXJuIDx0Ym9keT57YW1lblJvd308L3Rib2R5PlxufVxuXG5leHBvcnQgZGVmYXVsdCBTaG9ydEFtZW5pdHk7Il0sIm1hcHBpbmdzIjoiQUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/shortAmenity.jsx\n");

/***/ })

/******/ });