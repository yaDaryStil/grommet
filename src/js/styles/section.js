import csjs from 'csjs';

export default (theme = {}) => {
  return csjs`
    .common {
      align-items: flex-start;
      flex-direction: column;
      padding: 24px;
      display: flex;
      box-sizing: inherit;
    }

    ${theme.section || ''}
  `;
};

module.exports = exports.default;
