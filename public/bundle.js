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
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar App =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App(props) {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));\n    _this.state = {};\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      $.get('http://localhost:3003/api/amenities', function (serverData) {\n        var parsedServerData = JSON.parse(serverData);\n        var amenities = [];\n\n        for (var prop in parsedServerData) {\n          amenities.push(parsedServerData[prop]);\n        }\n\n        console.log(amenities); // this.setState({\n        // linesList: stateLines\n        // })\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"div\", null, React.createElement(\"section\", null, React.createElement(\"h2\", null, \"Amenities\"), React.createElement(\"div\", {\n        style: {\n          marginBottom: 16\n        }\n      }, React.createElement(\"table\", null, React.createElement(\"tbody\", null, React.createElement(\"tr\", null, React.createElement(\"td\", null, React.createElement(\"svg\", {\n        viewBox: \"0 0 24 24\",\n        style: {\n          height: 19,\n          width: 19\n        }\n      }, React.createElement(\"path\", {\n        d: \"m10.5 0a .5.5 0 0 0 -.5.5v7a .5.5 0 0 1 -.49.5h-1.51v-7.5a.5.5 0 1 0 -1 0v7.5h-1.51a.5.5 0 0 1 -.49-.5v-7a .5.5 0 1 0 -1 0v7c0 .83.67 1.5 1.49 1.5h1.51v5c0 .03.01.06.02.09a1.49 1.49 0 0 0 -1.02 1.41v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.66-.43-1.21-1.02-1.41.01-.03.02-.06.02-.09v-5h1.51a1.5 1.5 0 0 0 1.49-1.5v-7a .5.5 0 0 0 -.5-.5zm-2.5 15.5v7a .5.5 0 0 1 -.5.5.5.5 0 0 1 -.5-.5v-7c0-.28.22-.5.5-.5s.5.22.5.5zm11.5-15.5h-2c-1.4 0-2.5 1.07-2.5 2.5v7c0 1.43 1.1 2.5 2.5 2.5h1.5v2.09a1.49 1.49 0 0 0 -.5-.09c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-22.5zm-2 11c-.86 0-1.5-.63-1.5-1.5v-7c0-.87.65-1.5 1.5-1.5h1.5v10zm1.5 11.5a.5.5 0 0 1 -.5.5.5.5 0 0 1 -.5-.5v-7c0-.28.22-.5.5-.5s.5.22.5.5z\",\n        fillRule: \"evenodd\"\n      }))), React.createElement(\"td\", null, React.createElement(\"img\", {\n        src: \"img/kitchen.png\",\n        style: {\n          height: 19,\n          width: 19\n        }\n      })), React.createElement(\"td\", null, React.createElement(\"div\", null, \"Kitchen\"))), React.createElement(\"tr\", null, React.createElement(\"td\", null, React.createElement(\"svg\", {\n        viewBox: \"0 0 24 24\",\n        style: {\n          height: 19,\n          width: 19\n        }\n      }, React.createElement(\"path\", {\n        d: \"m12 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 5a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm5.92-5.78a.5.5 0 1 1 -.84.55c-1.19-1.81-3.07-2.77-5.08-2.77s-3.89.96-5.08 2.78a.5.5 0 0 1 -.84-.55c1.38-2.1 3.58-3.23 5.92-3.23s4.54 1.13 5.92 3.23zm2.98-3.03a.5.5 0 1 1 -.79.61c-1.66-2.14-5.22-3.8-8.11-3.8-2.83 0-6.26 1.62-8.12 3.82a.5.5 0 0 1 -.76-.65c2.05-2.42 5.75-4.17 8.88-4.17 3.19 0 7.05 1.8 8.9 4.19zm2.95-2.33a.5.5 0 0 1 -.71-.02c-2.94-3.07-6.71-4.84-11.14-4.84s-8.2 1.77-11.14 4.85a.5.5 0 0 1 -.72-.69c3.12-3.27 7.14-5.16 11.86-5.16s8.74 1.89 11.86 5.16a.5.5 0 0 1 -.02.71z\"\n      }))), React.createElement(\"td\", null, React.createElement(\"img\", {\n        src: \"img/wifi.png\",\n        style: {\n          height: 19,\n          width: 19\n        }\n      })), React.createElement(\"td\", null, React.createElement(\"div\", null, \"wifi\"))))))));\n    }\n  }]);\n\n  return App;\n}(React.Component);\n\nReactDOM.render(React.createElement(App, null), document.getElementById('app'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvYXBwLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9hcHAuanN4PzJjNTUiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgJC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMy9hcGkvYW1lbml0aWVzJywgKHNlcnZlckRhdGEpID0+IHtcbiAgICAgICAgICAgIGxldCBwYXJzZWRTZXJ2ZXJEYXRhID0gSlNPTi5wYXJzZShzZXJ2ZXJEYXRhKVxuICAgICAgICAgICAgbGV0IGFtZW5pdGllcyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBwYXJzZWRTZXJ2ZXJEYXRhKSB7XG4gICAgICAgICAgICAgICAgYW1lbml0aWVzLnB1c2gocGFyc2VkU2VydmVyRGF0YVtwcm9wXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFtZW5pdGllcylcbiAgICAgICAgICAgIC8vIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgLy8gbGluZXNMaXN0OiBzdGF0ZUxpbmVzXG4gICAgICAgICAgICAvLyB9KVxuICAgICAgICB9KVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8aDI+QW1lbml0aWVzPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkJvdHRvbToxNn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0eWxlPXt7aGVpZ2h0OjE5LHdpZHRoOjE5fX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJtMTAuNSAwYSAuNS41IDAgMCAwIC0uNS41djdhIC41LjUgMCAwIDEgLS40OS41aC0xLjUxdi03LjVhLjUuNSAwIDEgMCAtMSAwdjcuNWgtMS41MWEuNS41IDAgMCAxIC0uNDktLjV2LTdhIC41LjUgMCAxIDAgLTEgMHY3YzAgLjgzLjY3IDEuNSAxLjQ5IDEuNWgxLjUxdjVjMCAuMDMuMDEuMDYuMDIuMDlhMS40OSAxLjQ5IDAgMCAwIC0xLjAyIDEuNDF2N2MwIC44My42NyAxLjUgMS41IDEuNXMxLjUtLjY3IDEuNS0xLjV2LTdjMC0uNjYtLjQzLTEuMjEtMS4wMi0xLjQxLjAxLS4wMy4wMi0uMDYuMDItLjA5di01aDEuNTFhMS41IDEuNSAwIDAgMCAxLjQ5LTEuNXYtN2EgLjUuNSAwIDAgMCAtLjUtLjV6bS0yLjUgMTUuNXY3YSAuNS41IDAgMCAxIC0uNS41LjUuNSAwIDAgMSAtLjUtLjV2LTdjMC0uMjguMjItLjUuNS0uNXMuNS4yMi41LjV6bTExLjUtMTUuNWgtMmMtMS40IDAtMi41IDEuMDctMi41IDIuNXY3YzAgMS40MyAxLjEgMi41IDIuNSAyLjVoMS41djIuMDlhMS40OSAxLjQ5IDAgMCAwIC0uNS0uMDljLS44MyAwLTEuNS42Ny0xLjUgMS41djdjMCAuODMuNjcgMS41IDEuNSAxLjVzMS41LS42NyAxLjUtMS41di0yMi41em0tMiAxMWMtLjg2IDAtMS41LS42My0xLjUtMS41di03YzAtLjg3LjY1LTEuNSAxLjUtMS41aDEuNXYxMHptMS41IDExLjVhLjUuNSAwIDAgMSAtLjUuNS41LjUgMCAwIDEgLS41LS41di03YzAtLjI4LjIyLS41LjUtLjVzLjUuMjIuNS41elwiIGZpbGxSdWxlPVwiZXZlbm9kZFwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcva2l0Y2hlbi5wbmdcIiBzdHlsZT17e2hlaWdodDoxOSx3aWR0aDoxOX19PjwvaW1nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PktpdGNoZW48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHlsZT17e2hlaWdodDoxOSx3aWR0aDoxOX19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwibTEyIDE1YTMgMyAwIDEgMCAwIDYgMyAzIDAgMCAwIDAtNnptMCA1YTIgMiAwIDEgMSAwLTQgMiAyIDAgMCAxIDAgNHptNS45Mi01Ljc4YS41LjUgMCAxIDEgLS44NC41NWMtMS4xOS0xLjgxLTMuMDctMi43Ny01LjA4LTIuNzdzLTMuODkuOTYtNS4wOCAyLjc4YS41LjUgMCAwIDEgLS44NC0uNTVjMS4zOC0yLjEgMy41OC0zLjIzIDUuOTItMy4yM3M0LjU0IDEuMTMgNS45MiAzLjIzem0yLjk4LTMuMDNhLjUuNSAwIDEgMSAtLjc5LjYxYy0xLjY2LTIuMTQtNS4yMi0zLjgtOC4xMS0zLjgtMi44MyAwLTYuMjYgMS42Mi04LjEyIDMuODJhLjUuNSAwIDAgMSAtLjc2LS42NWMyLjA1LTIuNDIgNS43NS00LjE3IDguODgtNC4xNyAzLjE5IDAgNy4wNSAxLjggOC45IDQuMTl6bTIuOTUtMi4zM2EuNS41IDAgMCAxIC0uNzEtLjAyYy0yLjk0LTMuMDctNi43MS00Ljg0LTExLjE0LTQuODRzLTguMiAxLjc3LTExLjE0IDQuODVhLjUuNSAwIDAgMSAtLjcyLS42OWMzLjEyLTMuMjcgNy4xNC01LjE2IDExLjg2LTUuMTZzOC43NCAxLjg5IDExLjg2IDUuMTZhLjUuNSAwIDAgMSAtLjAyLjcxelwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvd2lmaS5wbmdcIiBzdHlsZT17e2hlaWdodDoxOSx3aWR0aDoxOX19PjwvaW1nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PndpZmk8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFGQTtBQUdBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFZQTs7OztBQTNEQTtBQUNBO0FBNkRBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/app.jsx\n");

/***/ })

/******/ });