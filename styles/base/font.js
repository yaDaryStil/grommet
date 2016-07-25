'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

exports.default = function () {
  var theme = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  theme.base = theme.base || {};
  var fontPath = theme.base.fontPath || 'https://fonts.gstatic.com/s/sourcesanspro/v9/';

  return (0, _assign2.default)({
    fontFace: '\n      @font-face {\n        font-family: \'Source Sans Pro\';\n        font-style: normal;\n        font-weight: 300;\n        src: local(\'Source Sans Pro Light\'),\n          local(\'SourceSansPro-Light\'),\n          url("' + fontPath + 'toadOcfmlt9b38dHJxOBGPS42wKzre0cxmO5m5GyTsY.ttf") format(\'truetype\');\n      }\n\n      @font-face {\n        font-family: \'Source Sans Pro\';\n        font-style: normal;\n        font-weight: 400;\n        src: local(\'Source Sans Pro\'),\n          local(\'SourceSansPro-Regular\'),\n          url("' + fontPath + 'ODelI1aHBYDBqgeIAH2zlEY6Fu39Tt9XkmtSosaMoEA.ttf") format(\'truetype\');\n      }\n\n      @font-face {\n        font-family: \'Source Sans Pro\';\n        font-style: normal;\n        font-weight: 700;\n        src: local(\'Source Sans Pro Bold\'),\n          local(\'SourceSansPro-Bold\'),\n          url("' + fontPath + 'toadOcfmlt9b38dHJxOBGLlcMrNrsnL9dgADnXgYJjs.ttf") format(\'truetype\');\n      }\n\n      @font-face {\n        font-family: \'Source Sans Pro\';\n        font-style: italic;\n        font-weight: 400;\n        src: local(\'Source Sans Pro Italic\'),\n          local(\'SourceSansPro-It\'),\n          url("' + fontPath + 'M2Jd71oPJhLKp0zdtTvoMzpKUtbt71woJ25xl7KOGD0.ttf") format(\'truetype\');\n      }\n    ',
    font: "'Source Sans Pro', Arial, sans-serif",
    h1FontSize: '48px',
    h1LineHeight: '1.125',
    h2FontSize: '36px',
    h2LineHeight: '1.23',
    h3FontSize: '24px',
    h3LineHeight: '1.333',
    h4FontSize: '18px',
    h4LineHeight: '1.333',
    h5FontSize: '16px',
    h5LineHeight: '1.375',
    h6FontSize: '16px',
    h6LineHeight: '1.375'
  }, theme.base);
};

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;

module.exports = exports.default;
module.exports = exports['default'];