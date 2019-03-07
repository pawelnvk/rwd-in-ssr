import cx from 'classnames';
import React from 'react';

import styles from './Wrapper.scss';

const Wrapper = ({ children, className }) => (
  <div className={cx(styles.wrapper, className)}>{children}</div>
);

export default Wrapper;
