export default function (theme = {}) {
  theme.base =  theme.base || {};
  const fontPath = (
    theme.base.fontPath || 'https://fonts.gstatic.com/s/sourcesanspro/v9/'
  );

  return Object.assign({
    fontFace: `
      @font-face {
        font-family: 'Source Sans Pro';
        font-style: normal;
        font-weight: 300;
        src: local('Source Sans Pro Light'),
          local('SourceSansPro-Light'),
          url("${fontPath}toadOcfmlt9b38dHJxOBGPS42wKzre0cxmO5m5GyTsY.ttf") format('truetype');
      }

      @font-face {
        font-family: 'Source Sans Pro';
        font-style: normal;
        font-weight: 400;
        src: local('Source Sans Pro'),
          local('SourceSansPro-Regular'),
          url("${fontPath}ODelI1aHBYDBqgeIAH2zlEY6Fu39Tt9XkmtSosaMoEA.ttf") format('truetype');
      }

      @font-face {
        font-family: 'Source Sans Pro';
        font-style: normal;
        font-weight: 700;
        src: local('Source Sans Pro Bold'),
          local('SourceSansPro-Bold'),
          url("${fontPath}toadOcfmlt9b38dHJxOBGLlcMrNrsnL9dgADnXgYJjs.ttf") format('truetype');
      }

      @font-face {
        font-family: 'Source Sans Pro';
        font-style: italic;
        font-weight: 400;
        src: local('Source Sans Pro Italic'),
          local('SourceSansPro-It'),
          url("${fontPath}M2Jd71oPJhLKp0zdtTvoMzpKUtbt71woJ25xl7KOGD0.ttf") format('truetype');
      }
    `,
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

module.exports = exports.default;
