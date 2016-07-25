// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import csjs from 'csjs';
import insertCss from 'insert-css';
import colorIndex from '../styles/colorIndex';
import grommet from '../styles/grommet';
import anchor from '../styles/anchor';
import section from '../styles/section';

export default class Grommet extends Component {
  getChildContext() {
    return {
      theme: this.props.theme
    };
  }

  componentDidMount () {
    insertCss(csjs.getCss(grommet(this.props.theme)));
    insertCss(csjs.getCss(colorIndex(this.props.theme)));

    insertCss(csjs.getCss(anchor(this.props.theme)));
    insertCss(csjs.getCss(section(this.props.theme)));
  }

  render () {
    const styles = grommet(this.props.theme);

    return (
      <div className={styles.default}>
        {this.props.children}
      </div>
    );
  }
};

Grommet.childContextTypes = {
  theme: PropTypes.object,
  colorIndex: PropTypes.object
};
