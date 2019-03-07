import cx from 'classnames';
import React from 'react';

import styles from './Heading.scss';

const Heading = ({ children, className, level }) => {
  const Element = `h${level}`;

  return (
    <Element
      className={cx(styles.wrapper, styles[`wrapper${level}`], className)}
    >
      {children}
    </Element>
  );
};

export default Heading;
