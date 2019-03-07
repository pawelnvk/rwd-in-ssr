import React from 'react';
import MediaQuery from 'react-responsive';

import Avatar from 'components/Avatar';
import CardList from 'components/CardList';
import Heading from 'components/Heading';
import Icon from 'components/Icon';
import { MAX_MOBILE } from 'components/Responsive/constants';
import Text from 'components/Text';
import UnstyledButton from 'components/UnstyledButton';
import { list } from 'constants/common';

import styles from './ElementsListStyledWithReactResponsive.scss';

export const ElementsListStyledWithReactResponsive = () => (
  <div className={styles.wrapper}>
    <Heading className={styles.title} level={2}>
      RWD with react-responsive
    </Heading>
    <CardList>
      {list.map(({ description, id, title }) => (
        <MediaQuery key={id} query={`(max-width: ${MAX_MOBILE}px)`}>
          {match => (
            <CardList.Item
              component={match ? 'a' : 'div'}
              href={match ? '/details' : undefined}
              title={match ? title : undefined}
            >
              <CardList.Column hasFixedWidth>
                <Avatar symbols="JS" />
              </CardList.Column>
              <CardList.Column>
                <Heading level={3}>{title}</Heading>
                <Text>
                  {match ? `${description.substring(0, 100)}...` : description}
                </Text>
              </CardList.Column>
              {!match && (
                <CardList.Column hasFixedWidth>
                  <UnstyledButton
                    className={styles.button}
                    href="/details"
                    title={title}
                  >
                    <Icon name="eye" />
                  </UnstyledButton>
                  <UnstyledButton
                    className={styles.button}
                    onClick={() => alert('edit')}
                  >
                    <Icon name="pencil-alt" />
                  </UnstyledButton>
                  <UnstyledButton
                    className={styles.button}
                    onClick={() => alert('delete')}
                  >
                    <Icon name="trash" />
                  </UnstyledButton>
                </CardList.Column>
              )}
            </CardList.Item>
          )}
        </MediaQuery>
      ))}
    </CardList>
  </div>
);

export default ElementsListStyledWithReactResponsive;
