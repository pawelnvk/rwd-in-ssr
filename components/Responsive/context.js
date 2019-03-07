import React from 'react';
import MediaQuery from 'react-responsive';

const { Consumer, Provider } = React.createContext({});

const MediaConsumer = ({ children, query }) => (
  <Consumer>
    {values => (
      <MediaQuery query={query} values={values}>
        {children}
      </MediaQuery>
    )}
  </Consumer>
);

export { MediaConsumer, Provider };
