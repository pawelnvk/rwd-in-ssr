import React from 'react';

import Responsive from 'components/Responsive';
import Wrapper from 'components/Wrapper';
import ElementsListStyledWithReactResponsiveAndSsr from 'components/ElementsListStyledWithReactResponsiveAndSsr';
import { detect } from 'services/detect';

const Page = ({ isDesktop, isMobile, isTablet }) => (
  <Responsive isDesktop={isDesktop} isMobile={isMobile} isTablet={isTablet}>
    <Wrapper>
      <ElementsListStyledWithReactResponsiveAndSsr />
    </Wrapper>
  </Responsive>
);

Page.getInitialProps = ({ req }) => {
  const userAgent = req
    ? req.headers['user-agent']
    : window.navigator.userAgent;
  const { isDesktop, isMobile, isTablet } = detect(userAgent);

  return { isDesktop, isMobile, isTablet };
};

export default Page;
