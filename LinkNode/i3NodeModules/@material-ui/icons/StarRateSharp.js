"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement("path", {
  transform: "scale(1.33, 1.33)",
  fill: "none",
  d: "M0 0h18v18H0V0z"
}), _react.default.createElement("path", {
  transform: "scale(1.33, 1.33)",
  d: "M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14 9 11.3z"
})), 'StarRateSharp');

exports.default = _default;