import cx from 'classnames';
import React from 'react';

import Avatar from 'components/Avatar';
import CardList from 'components/CardList';
import Heading from 'components/Heading';
import Icon from 'components/Icon';
import Text from 'components/Text';
import UnstyledButton from 'components/UnstyledButton';
import { list } from 'constants/common';

import styles from './ElementsList.scss';

export const ElementsList = () => (
  <div className={styles.wrapper}>
    <Heading className={styles.title} level={2}>
      No RWD
    </Heading>
    <CardList>
      {list.map(({ description, id, title }) => (
        <CardList.Item key={id}>
          <CardList.Column hasFixedWidth>
            <Avatar symbols="JS" />
          </CardList.Column>
          <CardList.Column className={styles.columnMain}>
            <Heading level={3}>{title}</Heading>
            <Text className={styles.text}>{description}</Text>
          </CardList.Column>
          <CardList.Column hasFixedWidth>
            <UnstyledButton
              className={styles.button}
              href="/details"
              title={title}
            >
              <Icon name="eye" />
            </UnstyledButton>
            <UnstyledButton
              className={cx(styles.button, styles.buttonMobileHidden)}
              onClick={() => alert('edit')}
            >
              <Icon name="pencil-alt" />
            </UnstyledButton>
            <UnstyledButton
              className={cx(styles.button, styles.buttonMobileHidden)}
              onClick={() => alert('delete')}
            >
              <Icon name="trash" />
            </UnstyledButton>
          </CardList.Column>
        </CardList.Item>
      ))}
    </CardList>
  </div>
);

export default ElementsList;
