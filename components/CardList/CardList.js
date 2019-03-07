import React from 'react';

import Column from './Column';
import Item from './Item';

import styles from './CardList.scss';

const CardList = ({ children }) => (
  <div className={styles.wrapper}>{children}</div>
);

CardList.Column = Column;

CardList.Item = Item;

export default CardList;
