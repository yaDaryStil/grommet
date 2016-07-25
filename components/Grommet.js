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

var _csjs = require('csjs');

var _csjs2 = _interopRequireDefault(_csjs);

var _insertCss = require('insert-css');

var _insertCss2 = _interopRequireDefault(_insertCss);

var _colorIndex = require('../styles/colorIndex');

var _colorIndex2 = _interopRequireDefault(_colorIndex);

var _grommet = require('../styles/grommet');

var _grommet2 = _interopRequireDefault(_grommet);

var _anchor = require('../styles/anchor');

var _anchor2 = _interopRequireDefault(_anchor);

var _section = require('../styles/section');

var _section2 = _interopRequireDefault(_section);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Grommet = function (_Component) {
  (0, _inherits3.default)(Grommet, _Component);

  function Grommet() {
    (0, _classCallCheck3.default)(this, Grommet);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Grommet).apply(this, arguments));
  }

  (0, _createClass3.default)(Grommet, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        theme: this.props.theme
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      (0, _insertCss2.default)(_csjs2.default.getCss((0, _grommet2.default)(this.props.theme)));
      (0, _insertCss2.default)(_csjs2.default.getCss((0, _colorIndex2.default)(this.props.theme)));

      (0, _insertCss2.default)(_csjs2.default.getCss((0, _anchor2.default)(this.props.theme)));
      (0, _insertCss2.default)(_csjs2.default.getCss((0, _section2.default)(this.props.theme)));
    }
  }, {
    key: 'render',
    value: function render() {
      var styles = (0, _grommet2.default)(this.props.theme);

      return _react2.default.createElement(
        'div',
        { className: styles.default },
        this.props.children
      );
    }
  }]);
  return Grommet;
}(_react.Component); // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

Grommet.displayName = 'Grommet';
exports.default = Grommet;
;

Grommet.childContextTypes = {
  theme: _react.PropTypes.object,
  colorIndex: _react.PropTypes.object
};
module.exports = exports['default'];