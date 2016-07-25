'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    ', '\n\n    .default {\n      font-family: ', ';\n    }\n\n    .default h1,\n    .default h2,\n    .default h3,\n    .default h4,\n    .default h5,\n    .default h6 {\n      font-weight: 100;\n      max-width: 100%;\n      box-sizing: inherit;\n      margin: 0;\n      padding: 0;\n      margin-bottom: 1.5rem;\n    }\n\n    .default h1 > strong,\n    .default h2 > strong,\n    .default h3 > strong,\n    .default h4 > strong,\n    .default h5 > strong,\n    .default h6 > strong {\n      font-weight: 600;\n    }\n\n    .default h1 {\n      font-size: ', ';\n      line-height: ', ';\n    }\n\n    .default h2 {\n      font-size: ', ';\n      line-height: ', ';\n    }\n\n    .default h3 {\n      font-size: ', ';\n      line-height: ', ';\n    }\n\n    .default h4 {\n      font-size: ', ';\n      line-height: ', ';\n    }\n\n    .default h5 {\n      font-size: ', ';\n      line-height: ', ';\n    }\n\n    .default h6 {\n      font-size: ', ';\n      line-height: ', ';\n    }\n\n    ', '\n  '], ['\n    ', '\n\n    .default {\n      font-family: ', ';\n    }\n\n    .default h1,\n    .default h2,\n    .default h3,\n    .default h4,\n    .default h5,\n    .default h6 {\n      font-weight: 100;\n      max-width: 100%;\n      box-sizing: inherit;\n      margin: 0;\n      padding: 0;\n      margin-bottom: 1.5rem;\n    }\n\n    .default h1 > strong,\n    .default h2 > strong,\n    .default h3 > strong,\n    .default h4 > strong,\n    .default h5 > strong,\n    .default h6 > strong {\n      font-weight: 600;\n    }\n\n    .default h1 {\n      font-size: ', ';\n      line-height: ', ';\n    }\n\n    .default h2 {\n      font-size: ', ';\n      line-height: ', ';\n    }\n\n    .default h3 {\n      font-size: ', ';\n      line-height: ', ';\n    }\n\n    .default h4 {\n      font-size: ', ';\n      line-height: ', ';\n    }\n\n    .default h5 {\n      font-size: ', ';\n      line-height: ', ';\n    }\n\n    .default h6 {\n      font-size: ', ';\n      line-height: ', ';\n    }\n\n    ', '\n  ']);

var _csjs = require('csjs');

var _csjs2 = _interopRequireDefault(_csjs);

var _font = require('./base/font');

var _font2 = _interopRequireDefault(_font);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var theme = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var styles = (0, _font2.default)(theme);

  return (0, _csjs2.default)(_templateObject, styles.fontFace || '', styles.font, styles.h1FontSize, styles.h1LineHeight, styles.h2FontSize, styles.h2LineHeight, styles.h3FontSize, styles.h3LineHeight, styles.h4FontSize, styles.h4LineHeight, styles.h5FontSize, styles.h5LineHeight, styles.h6FontSize, styles.h6LineHeight, theme.grommet || '');
};

module.exports = exports.default;
module.exports = exports['default'];