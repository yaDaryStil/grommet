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

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    .common {\n      color: inherit;\n      text-decoration: ', ';\n      cursor: pointer;\n    }\n\n    .common:hover {\n      color: ', ';\n      text-decoration: underline;\n    }\n\n    .iconPrimary path {\n      stroke: ', ';\n    }\n\n    .icon {\n      ', '\n    }\n\n    .icon:not(.iconPrimary) path {\n      stroke: ', ';\n    }\n\n    .label {\n      vertical-align: middle;\n    }\n\n    .iconReverse {\n      margin-right: 0;\n      margin-left: 12px;\n    }\n\n    .primary,\n    .iconLabel {\n      font-size: 19px;\n      font-weight: 600;\n\n      html.rtl & {\n        margin-right: 0;\n        margin-left: 12px;\n      }\n    }\n\n    .common:hover:not(.primary) .icon path {\n      stroke: ', ';\n    }\n\n    .primary.iconLabel:hover .iconAnimate {\n      transform: translateX(3px);\n    }\n\n    .hasIcon {\n      display: inline-block;\n    }\n\n    .disabled {\n      opacity: 0.3;\n      cursor: default;\n    }\n\n    .disabled:hover {\n      color: inherit;\n      text-decoration: none;\n    }\n\n    .disabled:hover:not(.primary) {\n      color: ', ';\n    }\n\n    ', '\n  '], ['\n    .common {\n      color: inherit;\n      text-decoration: ', ';\n      cursor: pointer;\n    }\n\n    .common:hover {\n      color: ', ';\n      text-decoration: underline;\n    }\n\n    .iconPrimary path {\n      stroke: ', ';\n    }\n\n    .icon {\n      ', '\n    }\n\n    .icon:not(.iconPrimary) path {\n      stroke: ', ';\n    }\n\n    .label {\n      vertical-align: middle;\n    }\n\n    .iconReverse {\n      margin-right: 0;\n      margin-left: 12px;\n    }\n\n    .primary,\n    .iconLabel {\n      font-size: 19px;\n      font-weight: 600;\n\n      html.rtl & {\n        margin-right: 0;\n        margin-left: 12px;\n      }\n    }\n\n    .common:hover:not(.primary) .icon path {\n      stroke: ', ';\n    }\n\n    .primary.iconLabel:hover .iconAnimate {\n      transform: translateX(3px);\n    }\n\n    .hasIcon {\n      display: inline-block;\n    }\n\n    .disabled {\n      opacity: 0.3;\n      cursor: default;\n    }\n\n    .disabled:hover {\n      color: inherit;\n      text-decoration: none;\n    }\n\n    .disabled:hover:not(.primary) {\n      color: ', ';\n    }\n\n    ', '\n  ']);

var _csjs = require('csjs');

var _csjs2 = _interopRequireDefault(_csjs);

var _colors = require('./base/colors');

var _colors2 = _interopRequireDefault(_colors);

var _defaults = require('./base/defaults');

var _defaults2 = _interopRequireDefault(_defaults);

var _icons = require('./base/icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var theme = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var styles = (0, _assign2.default)((0, _extends3.default)({}, _colors2.default, _defaults2.default), theme.base);

  return (0, _csjs2.default)(_templateObject, styles.linkTextDecoration, styles.linkHoverColor, styles.linkColor, _icons.controlIcon, styles.iconColor, styles.iconHoverColor, styles.linkColor, theme.anchor || '');
};

module.exports = exports.default;
module.exports = exports['default'];