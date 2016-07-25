import csjs from 'csjs';

import font from './base/font';

export default (theme = {}) => {
  const styles = font(theme);

  return csjs`
    ${styles.fontFace || ''}

    .default {
      font-family: ${styles.font};
    }

    .default h1,
    .default h2,
    .default h3,
    .default h4,
    .default h5,
    .default h6 {
      font-weight: 100;
      max-width: 100%;
      box-sizing: inherit;
      margin: 0;
      padding: 0;
      margin-bottom: 1.5rem;
    }

    .default h1 > strong,
    .default h2 > strong,
    .default h3 > strong,
    .default h4 > strong,
    .default h5 > strong,
    .default h6 > strong {
      font-weight: 600;
    }

    .default h1 {
      font-size: ${styles.h1FontSize};
      line-height: ${styles.h1LineHeight};
    }

    .default h2 {
      font-size: ${styles.h2FontSize};
      line-height: ${styles.h2LineHeight};
    }

    .default h3 {
      font-size: ${styles.h3FontSize};
      line-height: ${styles.h3LineHeight};
    }

    .default h4 {
      font-size: ${styles.h4FontSize};
      line-height: ${styles.h4LineHeight};
    }

    .default h5 {
      font-size: ${styles.h5FontSize};
      line-height: ${styles.h5LineHeight};
    }

    .default h6 {
      font-size: ${styles.h6FontSize};
      line-height: ${styles.h6LineHeight};
    }

    ${theme.grommet || ''}
  `;
};

module.exports = exports.default;
