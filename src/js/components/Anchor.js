// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Children, Component, PropTypes } from 'react';
import classnames from 'classnames';
import LinkNextIcon from './icons/base/LinkNext';

import styles from '../styles/components/anchor.css';
import colors from '../styles/base/colors.css';

export default class Anchor extends Component {
  render () {
    const {
      a11yTitle, children, className, disabled, href, icon, id,
      label, onClick, primary, reverse, tag, target
    } = this.props;

    let hasIcon = icon !== undefined || primary;
    let childrenNode = Children.map(children, child => {
      if (child && child.type && child.type.icon) {
        hasIcon = true;
        child = <span className={styles.icon}>{child}</span>;
      }
      return child;
    });

    let iconChild;
    let defaultIcon;
    if (icon) {
      iconChild = icon;
    } else if (primary) {
      defaultIcon = true;
      iconChild = (
        <LinkNextIcon a11yTitle={`${id || ''}anchor-next-title`}
          a11yTitleId={`${id || ''}anchor-next-title-id`} />
      );
    }

    const iconClasses = classnames(
      styles.icon,
      {
        [styles.iconDisabled]: disabled,
        [styles.iconReverse]: reverse,
        [styles.iconAnimate]: defaultIcon && !disabled
      }
    );

    let iconNode;
    if (iconChild) {
      iconNode = <span className={iconClasses}>{iconChild}</span>;
    }

    const classes = classnames(
      className,
      styles.common,
      colors.invertWhenDark,
      {
        [styles.disabled]: disabled,
        [styles.hasIcon]: hasIcon,
        [styles.iconLabel]: hasIcon && label,
        [styles.primary]: primary
      }
    );

    if (!children) {
      childrenNode = <span className={styles.label}>{label}</span>;
    }

    const first = reverse ? childrenNode : iconNode;
    const second = reverse ? iconNode : childrenNode;

    const Component = tag;
    return (
      <Component id={id} className={classes} href={href} target={target}
        onClick={onClick} aria-label={a11yTitle}>
        {first}
        {second}
      </Component>
    );
  }
};

Anchor.propTypes = {
  a11yTitle: PropTypes.string,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  icon: PropTypes.element,
  id: PropTypes.string,
  label: PropTypes.node,
  onClick: PropTypes.func,
  primary: PropTypes.bool,
  tag: PropTypes.string,
  target: PropTypes.string,
  reverse: PropTypes.bool
};

Anchor.defaultProps = {
  tag: 'a'
};
