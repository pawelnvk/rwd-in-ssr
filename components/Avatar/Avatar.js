import React from 'react';

import styles from './Avatar.scss';

export const Avatar = ({ symbols }) => (
  <div className={styles.wrapper}>{symbols}</div>
);

export default Avatar;
