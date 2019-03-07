import React from 'react';

import Heading from 'components/Heading';
import Text from 'components/Text';

import styles from './Item.scss';

const Item = ({ children, component: Component, ...props }) => (
  <Component {...props} className={styles.wrapper}>
    {children}
  </Component>
);

Item.defaultProps = {
  component: 'div',
};

export default Item;
