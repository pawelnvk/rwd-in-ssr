import cx from 'classnames';
import React from 'react';

import styles from './Icon.scss';

export const Icon = ({ name }) => (
  <i className={cx(styles.wrapper, `fas fa-${name}`)} />
);

export default Icon;
