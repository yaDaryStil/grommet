'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _grommet = require('../styles/components/grommet.css');

var _grommet2 = _interopRequireDefault(_grommet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

var Grommet = function (_Component) {
  (0, _inherits3.default)(Grommet, _Component);

  function Grommet() {
    (0, _classCallCheck3.default)(this, Grommet);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Grommet).apply(this, arguments));
  }

  (0, _createClass3.default)(Grommet, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _grommet2.default.default },
        this.props.children
      );
    }
  }]);
  return Grommet;
}(_react.Component);

Grommet.displayName = 'Grommet';
exports.default = Grommet;
;
module.exports = exports['default'];