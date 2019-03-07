import bowser from 'bowser';

export const detect = userAgent => {
  const detection = bowser.getParser(userAgent);

  return {
    isDesktop: detection.isPlatform('desktop'),
    isMobile: detection.isPlatform('mobile'),
    isTablet: detection.isPlatform('tablet'),
  };
};
