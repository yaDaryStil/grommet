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

var _classnames3 = require('classnames');

var _classnames4 = _interopRequireDefault(_classnames3);

var _LinkNext = require('./icons/base/LinkNext');

var _LinkNext2 = _interopRequireDefault(_LinkNext);

var _anchor = require('../styles/components/anchor.css');

var _anchor2 = _interopRequireDefault(_anchor);

var _colors = require('../styles/base/colors.css');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Anchor = function (_Component) {
  (0, _inherits3.default)(Anchor, _Component);

  function Anchor() {
    (0, _classCallCheck3.default)(this, Anchor);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Anchor).apply(this, arguments));
  }

  (0, _createClass3.default)(Anchor, [{
    key: 'render',
    value: function render() {
      var _classnames, _classnames2;

      var _props = this.props;
      var a11yTitle = _props.a11yTitle;
      var children = _props.children;
      var className = _props.className;
      var disabled = _props.disabled;
      var href = _props.href;
      var icon = _props.icon;
      var id = _props.id;
      var label = _props.label;
      var onClick = _props.onClick;
      var primary = _props.primary;
      var reverse = _props.reverse;
      var tag = _props.tag;
      var target = _props.target;


      var hasIcon = icon !== undefined || primary;
      var childrenNode = _react.Children.map(children, function (child) {
        if (child && child.type && child.type.icon) {
          hasIcon = true;
          child = _react2.default.createElement(
            'span',
            { className: _anchor2.default.icon },
            child
          );
        }
        return child;
      });

      var iconChild = void 0;
      var defaultIcon = void 0;
      if (icon) {
        iconChild = icon;
      } else if (primary) {
        defaultIcon = true;
        iconChild = _react2.default.createElement(_LinkNext2.default, { a11yTitle: (id || '') + 'anchor-next-title',
          a11yTitleId: (id || '') + 'anchor-next-title-id' });
      }

      var iconClasses = (0, _classnames4.default)(_anchor2.default.icon, (_classnames = {}, (0, _defineProperty3.default)(_classnames, _anchor2.default.iconDisabled, disabled), (0, _defineProperty3.default)(_classnames, _anchor2.default.iconReverse, reverse), (0, _defineProperty3.default)(_classnames, _anchor2.default.iconAnimate, defaultIcon && !disabled), _classnames));

      var iconNode = void 0;
      if (iconChild) {
        iconNode = _react2.default.createElement(
          'span',
          { className: iconClasses },
          iconChild
        );
      }

      var classes = (0, _classnames4.default)(className, _anchor2.default.common, _colors2.default.invertWhenDark, (_classnames2 = {}, (0, _defineProperty3.default)(_classnames2, _anchor2.default.disabled, disabled), (0, _defineProperty3.default)(_classnames2, _anchor2.default.hasIcon, hasIcon), (0, _defineProperty3.default)(_classnames2, _anchor2.default.iconLabel, hasIcon && label), (0, _defineProperty3.default)(_classnames2, _anchor2.default.primary, primary), _classnames2));

      if (!children) {
        childrenNode = _react2.default.createElement(
          'span',
          { className: _anchor2.default.label },
          label
        );
      }

      var first = reverse ? childrenNode : iconNode;
      var second = reverse ? iconNode : childrenNode;

      var Component = tag;
      return _react2.default.createElement(
        Component,
        { id: id, className: classes, href: href, target: target,
          onClick: onClick, 'aria-label': a11yTitle },
        first,
        second
      );
    }
  }]);
  return Anchor;
}(_react.Component); // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

Anchor.displayName = 'Anchor';
exports.default = Anchor;
;

Anchor.propTypes = {
  a11yTitle: _react.PropTypes.string,
  disabled: _react.PropTypes.bool,
  href: _react.PropTypes.string,
  icon: _react.PropTypes.element,
  id: _react.PropTypes.string,
  label: _react.PropTypes.node,
  onClick: _react.PropTypes.func,
  primary: _react.PropTypes.bool,
  tag: _react.PropTypes.string,
  target: _react.PropTypes.string,
  reverse: _react.PropTypes.bool
};

Anchor.defaultProps = {
  tag: 'a'
};
module.exports = exports['default'];