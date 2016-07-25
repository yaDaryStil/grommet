// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import section from '../styles/section';
import colorIndexStyle from '../styles/colorIndex';

export default class Section extends Component {
  render () {
    const styles = section(this.context.theme);
    const colors = colorIndexStyle(this.context.theme);

    const { className, colorIndex } = this.props;
    const classes = classnames(
      className,
      styles.common.className,
      {
        [colors[`backgroundColorIndex-${colorIndex}`]]: colorIndex
      }
    );
    return (
      <section className={classes}>
        {this.props.children}
      </section>
    );
  }
};

Section.contextTypes = {
  theme: PropTypes.object
};
