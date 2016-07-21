'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _section = require('../styles/components/section.css');

var _section2 = _interopRequireDefault(_section);

var _colors = require('../styles/base/colors.css');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

var Section = function (_Component) {
  (0, _inherits3.default)(Section, _Component);

  function Section() {
    (0, _classCallCheck3.default)(this, Section);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Section).apply(this, arguments));
  }

  (0, _createClass3.default)(Section, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var colorIndex = _props.colorIndex;

      var classes = (0, _classnames3.default)(className, _section2.default.common, (0, _defineProperty3.default)({}, _colors2.default['backgroundColorIndex-' + colorIndex], colorIndex));
      return _react2.default.createElement(
        'section',
        { className: classes },
        this.props.children
      );
    }
  }]);
  return Section;
}(_react.Component);

Section.displayName = 'Section';
exports.default = Section;
;
module.exports = exports['default'];