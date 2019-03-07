import cx from 'classnames';
import React from 'react';

import styles from './UnstyledButton.scss';

export const UnstyledButton = ({ children, className, href, onClick }) => {
  const Component = href ? 'a' : 'button';
  const componentProps = href ? { href } : { onClick };

  return (
    <Component className={cx(styles.wrapper, className)} {...componentProps}>
      {children}
    </Component>
  );
};

export default UnstyledButton;
