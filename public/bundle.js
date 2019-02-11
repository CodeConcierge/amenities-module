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

/***/ "./client/amenity.jsx":
/*!****************************!*\
  !*** ./client/amenity.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Amenity = function Amenity(props) {\n  var amenitiesNames = [];\n  var amenitiesImages = [];\n  var aTableRowOfNamesAndImages = [];\n\n  if (props.amenities[0]) {\n    aTableRowOfNamesAndImages = props.amenities.map(function (ele) {\n      return React.createElement(\"tr\", {\n        key: ele.name\n      }, React.createElement(\"td\", null, React.createElement(\"div\", null, ele.name)), React.createElement(\"td\", null, React.createElement(\"img\", {\n        src: ele.img_url,\n        style: {\n          height: 20,\n          width: 20\n        }\n      })));\n    }); // amenitiesNames = props.amenities.map(ele => <div>{ele.name}</div>);\n    // amenitiesImages = props.amenities.map(ele => <img src={ele.img_url} style={{height:20,width:20}}></img>);\n  }\n\n  return React.createElement(\"tbody\", null, aTableRowOfNamesAndImages) // <tr>\n  //     <td>\n  //         {amenitiesImages}\n  //     </td>\n  //     <td>\n  //         {amenitiesNames}\n  //     </td>\n  // </tr>\n  ;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Amenity);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvYW1lbml0eS5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvYW1lbml0eS5qc3g/ZjMzNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmxldCBBbWVuaXR5ID0gKHByb3BzKSA9PiB7XG4gICAgbGV0IGFtZW5pdGllc05hbWVzID0gW107XG4gICAgbGV0IGFtZW5pdGllc0ltYWdlcyA9IFtdO1xuICAgIGxldCBhVGFibGVSb3dPZk5hbWVzQW5kSW1hZ2VzID0gW107XG4gICAgaWYocHJvcHMuYW1lbml0aWVzWzBdKSB7XG4gICAgICAgIGFUYWJsZVJvd09mTmFtZXNBbmRJbWFnZXMgPSBwcm9wcy5hbWVuaXRpZXMubWFwKGVsZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDx0ciBrZXk9e2VsZS5uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgPHRkPjxkaXY+e2VsZS5uYW1lfTwvZGl2PjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD48aW1nIHNyYz17ZWxlLmltZ191cmx9IHN0eWxlPXt7aGVpZ2h0OjIwLHdpZHRoOjIwfX0+PC9pbWc+PC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKVxuICAgICAgICB9KVxuICAgICAgICAvLyBhbWVuaXRpZXNOYW1lcyA9IHByb3BzLmFtZW5pdGllcy5tYXAoZWxlID0+IDxkaXY+e2VsZS5uYW1lfTwvZGl2Pik7XG4gICAgICAgIC8vIGFtZW5pdGllc0ltYWdlcyA9IHByb3BzLmFtZW5pdGllcy5tYXAoZWxlID0+IDxpbWcgc3JjPXtlbGUuaW1nX3VybH0gc3R5bGU9e3toZWlnaHQ6MjAsd2lkdGg6MjB9fT48L2ltZz4pO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8dGJvZHk+e2FUYWJsZVJvd09mTmFtZXNBbmRJbWFnZXN9PC90Ym9keT5cbiAgICAgICAgLy8gPHRyPlxuICAgICAgICAvLyAgICAgPHRkPlxuICAgICAgICAvLyAgICAgICAgIHthbWVuaXRpZXNJbWFnZXN9XG4gICAgICAgIC8vICAgICA8L3RkPlxuICAgICAgICAvLyAgICAgPHRkPlxuICAgICAgICAvLyAgICAgICAgIHthbWVuaXRpZXNOYW1lc31cbiAgICAgICAgLy8gICAgIDwvdGQ+XG4gICAgICAgIC8vIDwvdHI+XG4gICAgKTtcbiAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgQW1lbml0eTsiXSwibWFwcGluZ3MiOiJBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQVlBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/amenity.jsx\n");

/***/ }),

/***/ "./client/app.jsx":
/*!************************!*\
  !*** ./client/app.jsx ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _amenity_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./amenity.jsx */ \"./client/amenity.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar App =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App(props) {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));\n    _this.state = {\n      listingAmenities: []\n    };\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      $.get('http://localhost:3003/api/amenities', function (serverData) {\n        var parsedServerData = JSON.parse(serverData);\n        var amenities = [];\n\n        for (var prop in parsedServerData) {\n          amenities.push(parsedServerData[prop]);\n        } //console.log(amenities)\n        //should order by attractiveness in the sql call. \n\n\n        _this2.setState({\n          listingAmenities: amenities\n        }); //console.log(this.state.listingAmenities[2].name)\n\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"div\", null, React.createElement(\"section\", null, React.createElement(\"h2\", null, \"Amenities\"), React.createElement(\"div\", {\n        style: {\n          marginBottom: 16\n        }\n      }, React.createElement(\"table\", null, React.createElement(_amenity_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        amenities: this.state.listingAmenities\n      })))));\n    }\n  }]);\n\n  return App;\n}(React.Component);\n\nReactDOM.render(React.createElement(App, null), document.getElementById('app'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvYXBwLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9hcHAuanN4PzJjNTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFtZW5pdHkgZnJvbSAnLi9hbWVuaXR5LmpzeCdcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBsaXN0aW5nQW1lbml0aWVzOiBbXVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgJC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMy9hcGkvYW1lbml0aWVzJywgKHNlcnZlckRhdGEpID0+IHtcbiAgICAgICAgICAgIGxldCBwYXJzZWRTZXJ2ZXJEYXRhID0gSlNPTi5wYXJzZShzZXJ2ZXJEYXRhKVxuICAgICAgICAgICAgbGV0IGFtZW5pdGllcyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBwYXJzZWRTZXJ2ZXJEYXRhKSB7XG4gICAgICAgICAgICAgICAgYW1lbml0aWVzLnB1c2gocGFyc2VkU2VydmVyRGF0YVtwcm9wXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coYW1lbml0aWVzKVxuICAgICAgICAgICAgLy9zaG91bGQgb3JkZXIgYnkgYXR0cmFjdGl2ZW5lc3MgaW4gdGhlIHNxbCBjYWxsLiBcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGxpc3RpbmdBbWVuaXRpZXM6IGFtZW5pdGllc1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5zdGF0ZS5saXN0aW5nQW1lbml0aWVzWzJdLm5hbWUpXG4gICAgICAgIH0pXG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5BbWVuaXRpZXM8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luQm90dG9tOjE2fX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFtZW5pdHkgYW1lbml0aWVzPXt0aGlzLnN0YXRlLmxpc3RpbmdBbWVuaXRpZXN9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3R5bGU9e3toZWlnaHQ6MTksd2lkdGg6MTl9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIm0xMiAxNWEzIDMgMCAxIDAgMCA2IDMgMyAwIDAgMCAwLTZ6bTAgNWEyIDIgMCAxIDEgMC00IDIgMiAwIDAgMSAwIDR6bTUuOTItNS43OGEuNS41IDAgMSAxIC0uODQuNTVjLTEuMTktMS44MS0zLjA3LTIuNzctNS4wOC0yLjc3cy0zLjg5Ljk2LTUuMDggMi43OGEuNS41IDAgMCAxIC0uODQtLjU1YzEuMzgtMi4xIDMuNTgtMy4yMyA1LjkyLTMuMjNzNC41NCAxLjEzIDUuOTIgMy4yM3ptMi45OC0zLjAzYS41LjUgMCAxIDEgLS43OS42MWMtMS42Ni0yLjE0LTUuMjItMy44LTguMTEtMy44LTIuODMgMC02LjI2IDEuNjItOC4xMiAzLjgyYS41LjUgMCAwIDEgLS43Ni0uNjVjMi4wNS0yLjQyIDUuNzUtNC4xNyA4Ljg4LTQuMTcgMy4xOSAwIDcuMDUgMS44IDguOSA0LjE5em0yLjk1LTIuMzNhLjUuNSAwIDAgMSAtLjcxLS4wMmMtMi45NC0zLjA3LTYuNzEtNC44NC0xMS4xNC00Ljg0cy04LjIgMS43Ny0xMS4xNCA0Ljg1YS41LjUgMCAwIDEgLS43Mi0uNjljMy4xMi0zLjI3IDcuMTQtNS4xNiAxMS44Ni01LjE2czguNzQgMS44OSAxMS44NiA1LjE2YS41LjUgMCAwIDEgLS4wMi43MXpcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9hbWVuaXRpZXMtcGhvdG9zL2FtZW5pdGllcytpY29ucy93aWZpLnBuZ1wiIHN0eWxlPXt7aGVpZ2h0OjE5LHdpZHRoOjE5fX0+PC9pbWc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+d2lmaTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQUE7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFLQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQXFCQTs7OztBQW5EQTtBQUNBO0FBcURBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/app.jsx\n");

/***/ })

/******/ });