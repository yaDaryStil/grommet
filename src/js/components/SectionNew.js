// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import classnames from 'classnames';

import styles from '../styles/components/section.css';
import colors from '../styles/base/colors.css';

export default class Section extends Component {
  render () {
    const { className, colorIndex } = this.props;
    const classes = classnames(
      className,
      styles.common,
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
