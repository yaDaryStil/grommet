'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    .common {\n      align-items: flex-start;\n      flex-direction: column;\n      padding: 24px;\n      display: flex;\n      box-sizing: inherit;\n    }\n\n    ', '\n  '], ['\n    .common {\n      align-items: flex-start;\n      flex-direction: column;\n      padding: 24px;\n      display: flex;\n      box-sizing: inherit;\n    }\n\n    ', '\n  ']);

var _csjs = require('csjs');

var _csjs2 = _interopRequireDefault(_csjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var theme = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  return (0, _csjs2.default)(_templateObject, theme.section || '');
};

module.exports = exports.default;
module.exports = exports['default'];