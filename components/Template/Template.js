import React from 'react';

import Heading from 'components/Heading';
import Wrapper from 'components/Wrapper';

import styles from './Template.scss';

export const Template = ({ children }) => (
  <div className={styles.wrapper}>
    <header className={styles.header}>
      <Wrapper className={styles.container}>
        <Heading level={1}>RWD</Heading>
        <nav>
          <a className={styles.link} href="/no-rwd">
            Page 1
          </a>
          <a className={styles.link} href="/rwd-with-css">
            Page 2
          </a>
          <a className={styles.link} href="/rwd-with-react-responsvie">
            Page 3
          </a>
          <a className={styles.link} href="/rwd-with-ssr-support">
            Page 4
          </a>
        </nav>
      </Wrapper>
    </header>
    {children}
  </div>
);

export default Template;
