import cx from 'classnames';
import React from 'react';

import styles from './Text.scss';

const Text = ({ children, className }) => (
  <p className={cx(styles.wrapper, className)}>{children}</p>
);

export default Text;
