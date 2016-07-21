// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';

import styles from '../styles/components/grommet.css';

export default class Grommet extends Component {
  render () {
    return (
      <div className={styles.default}>
        {this.props.children}
      </div>
    );
  }
};
