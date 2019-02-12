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
eval("__webpack_require__.r(__webpack_exports__);\nvar Amenity = function Amenity(props) {\n  var amenTableData = [];\n  var amenRow = [];\n\n  if (props.amenities[0]) {\n    var amenSliced = props.amenities.slice(0, 4);\n    amenTableData = amenSliced.map(function (ele) {\n      return React.createElement(\"td\", {\n        style: {\n          paddingRight: 110\n        }\n      }, React.createElement(\"img\", {\n        src: ele.img_url,\n        style: {\n          height: 20,\n          width: 20\n        }\n      }), ele.name);\n    });\n\n    for (var i = 0; i <= amenSliced.length / 2; i += 2) {\n      amenRow.push(React.createElement(\"tr\", {\n        key: amenSliced[i].name\n      }, amenTableData[i], amenTableData[i + 1]));\n    } //carbon monoxide? add it manually\n\n  }\n\n  return React.createElement(\"tbody\", null, amenRow);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Amenity);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvYW1lbml0eS5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvYW1lbml0eS5qc3g/ZjMzNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmxldCBBbWVuaXR5ID0gKHByb3BzKSA9PiB7XG4gICAgbGV0IGFtZW5UYWJsZURhdGEgPSBbXTtcbiAgICBsZXQgYW1lblJvdyA9IFtdO1xuICAgIGlmKHByb3BzLmFtZW5pdGllc1swXSkge1xuICAgICAgICBsZXQgYW1lblNsaWNlZCA9IHByb3BzLmFtZW5pdGllcy5zbGljZSgwLDQpO1xuICAgICAgICBhbWVuVGFibGVEYXRhID0gYW1lblNsaWNlZC5tYXAoZWxlID0+IHtcbiAgICAgICAgICAgIHJldHVybiA8dGQgc3R5bGU9e3twYWRkaW5nUmlnaHQ6MTEwfX0+PGltZyBzcmM9e2VsZS5pbWdfdXJsfSBzdHlsZT17e2hlaWdodDoyMCx3aWR0aDoyMH19PjwvaW1nPntlbGUubmFtZX08L3RkPlxuICAgICAgICB9KVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBhbWVuU2xpY2VkLmxlbmd0aCAvIDI7IGkrPTIpIHtcbiAgICAgICAgICAgIGFtZW5Sb3cucHVzaCg8dHIga2V5PXthbWVuU2xpY2VkW2ldLm5hbWV9PnthbWVuVGFibGVEYXRhW2ldfXthbWVuVGFibGVEYXRhW2krMV19PC90cj4pIFxuICAgICAgICB9XG4gICAgICAgIC8vY2FyYm9uIG1vbm94aWRlPyBhZGQgaXQgbWFudWFsbHlcbiAgICB9XG4gICAgcmV0dXJuIDx0Ym9keT57YW1lblJvd308L3Rib2R5PlxufVxuXG5leHBvcnQgZGVmYXVsdCBBbWVuaXR5OyJdLCJtYXBwaW5ncyI6IkFBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/amenity.jsx\n");

/***/ }),

/***/ "./client/app.jsx":
/*!************************!*\
  !*** ./client/app.jsx ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _amenity_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./amenity.jsx */ \"./client/amenity.jsx\");\n/* harmony import */ var _modal_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.jsx */ \"./client/modal.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar App =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App(props) {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));\n    _this.state = {\n      listingAmenities: [],\n      show: false\n    };\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      $.get('http://localhost:3003/api/amenities', function (serverData) {\n        var parsedServerData = JSON.parse(serverData);\n        var amenities = [];\n\n        for (var prop in parsedServerData) {\n          amenities.push(parsedServerData[prop]);\n        } //console.log(amenities)\n        //should order by attractiveness in the sql call. \n\n\n        _this2.setState({\n          listingAmenities: amenities\n        }); //console.log(this.state.listingAmenities[2].name)\n\n      });\n    }\n  }, {\n    key: \"showModal\",\n    value: function showModal() {\n      this.setState({\n        show: true\n      });\n    }\n  }, {\n    key: \"hideModal\",\n    value: function hideModal() {\n      this.setState({\n        show: false\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"main\", {\n        style: {\n          height: '100vh'\n        }\n      }, React.createElement(_modal_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), React.createElement(\"h2\", null, \"Amenities\"), React.createElement(\"table\", {\n        style: {\n          marginBottom: 16\n        }\n      }, React.createElement(_amenity_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        amenities: this.state.listingAmenities\n      })), React.createElement(\"a\", {\n        style: {\n          color: 'blue',\n          cursor: 'pointer'\n        },\n        onClick: function onClick() {\n          return console.log('click handler working');\n        }\n      }, React.createElement(\"u\", null, \"Show all \", this.state.listingAmenities.length, \" amenities\")));\n    }\n  }]);\n\n  return App;\n}(React.Component);\n\nReactDOM.render(React.createElement(App, null), document.getElementById('app'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvYXBwLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9hcHAuanN4PzJjNTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFtZW5pdHkgZnJvbSAnLi9hbWVuaXR5LmpzeCc7XG5pbXBvcnQgTW9kYWwgZnJvbSAnLi9tb2RhbC5qc3gnO1xuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGxpc3RpbmdBbWVuaXRpZXM6IFtdLFxuICAgICAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgICQuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDMvYXBpL2FtZW5pdGllcycsIChzZXJ2ZXJEYXRhKSA9PiB7XG4gICAgICAgICAgICBsZXQgcGFyc2VkU2VydmVyRGF0YSA9IEpTT04ucGFyc2Uoc2VydmVyRGF0YSlcbiAgICAgICAgICAgIGxldCBhbWVuaXRpZXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIHByb3AgaW4gcGFyc2VkU2VydmVyRGF0YSkge1xuICAgICAgICAgICAgICAgIGFtZW5pdGllcy5wdXNoKHBhcnNlZFNlcnZlckRhdGFbcHJvcF0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGFtZW5pdGllcylcbiAgICAgICAgICAgIC8vc2hvdWxkIG9yZGVyIGJ5IGF0dHJhY3RpdmVuZXNzIGluIHRoZSBzcWwgY2FsbC4gXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBsaXN0aW5nQW1lbml0aWVzOiBhbWVuaXRpZXNcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuc3RhdGUubGlzdGluZ0FtZW5pdGllc1syXS5uYW1lKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHNob3dNb2RhbCgpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93OiB0cnVlfSk7XG4gICAgfTtcblxuICAgIGhpZGVNb2RhbCgpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93OiBmYWxzZX0pO1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bWFpbiBzdHlsZT17e2hlaWdodDonMTAwdmgnfX0+XG4gICAgICAgICAgICAgICAgPE1vZGFsIC8+XG4gICAgICAgICAgICAgICAgPGgyPkFtZW5pdGllczwvaDI+XG4gICAgICAgICAgICAgICAgPHRhYmxlIHN0eWxlPXt7bWFyZ2luQm90dG9tOjE2fX0+XG4gICAgICAgICAgICAgICAgICAgIDxBbWVuaXR5IGFtZW5pdGllcz17dGhpcy5zdGF0ZS5saXN0aW5nQW1lbml0aWVzfS8+XG4gICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICA8YSBzdHlsZT17e2NvbG9yOidibHVlJyxjdXJzb3I6J3BvaW50ZXInfX0gb25DbGljaz17KCkgPT4gY29uc29sZS5sb2coJ2NsaWNrIGhhbmRsZXIgd29ya2luZycpfT48dT5TaG93IGFsbCB7dGhpcy5zdGF0ZS5saXN0aW5nQW1lbml0aWVzLmxlbmd0aH0gYW1lbml0aWVzPC91PjwvYT5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUFBOzs7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFNQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTs7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBOzs7O0FBN0NBO0FBQ0E7QUErQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/app.jsx\n");

/***/ }),

/***/ "./client/modal.jsx":
/*!**************************!*\
  !*** ./client/modal.jsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Modal = function Modal(props) {\n  var show = props.show;\n  var GREY = 'black';\n  var backgroundDivStyle = {\n    display: 'flex',\n    position: 'fixed',\n    top: 0,\n    left: 0,\n    height: '100%',\n    width: '100%',\n    background: 'rgba(255,255,255,0.8)'\n  };\n  var displayDivStyle = {\n    display: 'flex',\n    position: 'relative',\n    top: '10%',\n    left: '10%',\n    right: '10%',\n    bottom: '10%',\n    // justifyContent:'center',\n    // alignItems:'center',\n    height: '80%',\n    width: '40%',\n    backgroundColor: 'white',\n    boxShadow: \"1px 1px 1px 3px grey\" //itemsAlign: 'center'\n\n  };\n  return React.createElement(\"div\", {\n    style: backgroundDivStyle\n  }, React.createElement(\"div\", {\n    style: displayDivStyle\n  }, React.createElement(\"p\", null, \"Some text in the Modal..\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvbW9kYWwuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY2xpZW50L21vZGFsLmpzeD9hODNjIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IE1vZGFsID0gKHByb3BzKSA9PiB7XG4gICAgbGV0IHNob3cgPSBwcm9wcy5zaG93XG4gICAgbGV0IEdSRVkgPSAnYmxhY2snXG5cbiAgICBsZXQgYmFja2dyb3VuZERpdlN0eWxlID0ge1xuICAgICAgICBkaXNwbGF5OidmbGV4JyxcbiAgICAgICAgcG9zaXRpb246J2ZpeGVkJyxcbiAgICAgICAgdG9wOjAsXG4gICAgICAgIGxlZnQ6MCxcbiAgICAgICAgaGVpZ2h0OicxMDAlJyxcbiAgICAgICAgd2lkdGg6JzEwMCUnLFxuICAgICAgICBiYWNrZ3JvdW5kOidyZ2JhKDI1NSwyNTUsMjU1LDAuOCknLFxuICAgIH1cblxuICAgIGxldCBkaXNwbGF5RGl2U3R5bGUgPSB7XG4gICAgICAgIGRpc3BsYXk6J2ZsZXgnLFxuICAgICAgICBwb3NpdGlvbjoncmVsYXRpdmUnLFxuICAgICAgICB0b3A6JzEwJScsXG4gICAgICAgIGxlZnQ6JzEwJScsXG4gICAgICAgIHJpZ2h0OicxMCUnLFxuICAgICAgICBib3R0b206JzEwJScsXG4gICAgICAgIC8vIGp1c3RpZnlDb250ZW50OidjZW50ZXInLFxuICAgICAgICAvLyBhbGlnbkl0ZW1zOidjZW50ZXInLFxuICAgICAgICBoZWlnaHQ6JzgwJScsXG4gICAgICAgIHdpZHRoOic0MCUnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6J3doaXRlJyxcbiAgICAgICAgYm94U2hhZG93OmAxcHggMXB4IDFweCAzcHggZ3JleWAsXG4gICAgICAgIC8vaXRlbXNBbGlnbjogJ2NlbnRlcidcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXtiYWNrZ3JvdW5kRGl2U3R5bGV9PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17ZGlzcGxheURpdlN0eWxlfT5cbiAgICAgICAgICAgICAgICA8cD5Tb21lIHRleHQgaW4gdGhlIE1vZGFsLi48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2RhbDsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWJBO0FBZ0JBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFLQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/modal.jsx\n");

/***/ })

/******/ });