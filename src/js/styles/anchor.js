import csjs from 'csjs';

import colors from './base/colors';
import defaults from './base/defaults';
import { controlIcon } from './base/icons';

export default (theme = {}) => {
  const styles = Object.assign(
    {...colors, ...defaults},
    theme.base
  );

  return csjs`
    .common {
      color: inherit;
      text-decoration: ${styles.linkTextDecoration};
      cursor: pointer;
    }

    .common:hover {
      color: ${styles.linkHoverColor};
      text-decoration: underline;
    }

    .iconPrimary path {
      stroke: ${styles.linkColor};
    }

    .icon {
      ${controlIcon}
    }

    .icon:not(.iconPrimary) path {
      stroke: ${styles.iconColor};
    }

    .label {
      vertical-align: middle;
    }

    .iconReverse {
      margin-right: 0;
      margin-left: 12px;
    }

    .primary,
    .iconLabel {
      font-size: 19px;
      font-weight: 600;

      html.rtl & {
        margin-right: 0;
        margin-left: 12px;
      }
    }

    .common:hover:not(.primary) .icon path {
      stroke: ${styles.iconHoverColor};
    }

    .primary.iconLabel:hover .iconAnimate {
      transform: translateX(3px);
    }

    .hasIcon {
      display: inline-block;
    }

    .disabled {
      opacity: 0.3;
      cursor: default;
    }

    .disabled:hover {
      color: inherit;
      text-decoration: none;
    }

    .disabled:hover:not(.primary) {
      color: ${styles.linkColor};
    }

    ${theme.anchor || ''}
  `;
};

module.exports = exports.default;
