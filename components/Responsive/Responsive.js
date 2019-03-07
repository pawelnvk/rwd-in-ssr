import React from 'react';

import { MediaConsumer, Provider } from './context';
import OnSmDown from './OnSmDown';

const getIntialWidth = ({ isDesktop, isMobile, isTablet }) => {
  if (isDesktop) return { width: 1360 };
  if (isTablet) return { width: 1000 };
  if (isMobile) return { width: 500 };
};

const Responsive = ({ children, isDesktop, isMobile, isTablet }) => (
  <Provider value={getIntialWidth({ isDesktop, isMobile, isTablet })}>
    {children}
  </Provider>
);

Responsive.MediaQuery = MediaConsumer;
Responsive.OnSmDown = OnSmDown;

export default Responsive;
