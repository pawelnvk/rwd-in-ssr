import cx from 'classnames';
import React from 'react';

import styles from './Column.scss';

const Item = ({ children, className, hasFixedWidth }) => (
  <div
    className={cx(
      styles.wrapper,
      {
        [styles.wrapperHasFixedWidth]: hasFixedWidth,
      },
      className,
    )}
  >
    {children}
  </div>
);

export default Item;
