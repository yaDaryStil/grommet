import csjs from 'csjs';

import colors from './base/colors';

export default (theme = {}) => {
  const styles = Object.assign(
    {...colors},
    theme.base
  );

  return csjs`
    .dark {
      color: ${styles.darkColor};
    }

    .dark .invertWhenDark path {
      stroke: ${styles.darkStroke};
    }

    .dark .invertWhenDark:hover {
      color: ${styles.darkHoverColor};
    }

    .dark .invertWhenDark:hover path {
      stroke: ${styles.darkHoverStroke};
    }

    .backgroundColorIndex-brand extends .dark {
      background-color: ${styles.brandColor};
    }
  `;
};

module.exports = exports.default;
