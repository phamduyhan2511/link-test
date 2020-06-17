"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement("path", {
  fill: "none",
  d: "M6 7h5v3H6zM13 7h5v3h-5z"
}), _react.default.createElement("path", {
  d: "M20 10V7c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v3c-1.1 0-2 .9-2 2v5h1.33l.51 1.53c.1.28.36.47.66.47.3 0 .56-.19.66-.47L5.67 17h12.67l.51 1.53c.09.28.35.47.65.47.3 0 .56-.19.66-.47l.51-1.53H22v-5c0-1.1-.9-2-2-2zm-9 0H6V8c0-.55.45-1 1-1h4v3zm7 0h-5V7h4c.55 0 1 .45 1 1v2z"
})), 'KingBedRounded');

exports.default = _default;