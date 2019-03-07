import React from 'react';

import { MAX_MOBILE } from '../constants';
import { MediaConsumer } from '../context';

const OnSmDown = ({ children }) => (
  <MediaConsumer query={`(max-width: ${MAX_MOBILE}px)`}>
    {children}
  </MediaConsumer>
);

export default OnSmDown;
