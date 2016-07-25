'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    .dark {\n      color: ', ';\n    }\n\n    .dark .invertWhenDark path {\n      stroke: ', ';\n    }\n\n    .dark .invertWhenDark:hover {\n      color: ', ';\n    }\n\n    .dark .invertWhenDark:hover path {\n      stroke: ', ';\n    }\n\n    .backgroundColorIndex-brand extends .dark {\n      background-color: ', ';\n    }\n  '], ['\n    .dark {\n      color: ', ';\n    }\n\n    .dark .invertWhenDark path {\n      stroke: ', ';\n    }\n\n    .dark .invertWhenDark:hover {\n      color: ', ';\n    }\n\n    .dark .invertWhenDark:hover path {\n      stroke: ', ';\n    }\n\n    .backgroundColorIndex-brand extends .dark {\n      background-color: ', ';\n    }\n  ']);

var _csjs = require('csjs');

var _csjs2 = _interopRequireDefault(_csjs);

var _colors = require('./base/colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var theme = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var styles = (0, _assign2.default)((0, _extends3.default)({}, _colors2.default), theme.base);

  return (0, _csjs2.default)(_templateObject, styles.darkColor, styles.darkStroke, styles.darkHoverColor, styles.darkHoverStroke, styles.brandColor);
};

module.exports = exports.default;
module.exports = exports['default'];