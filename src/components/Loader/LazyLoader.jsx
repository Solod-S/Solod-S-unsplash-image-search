import React from 'react';

import { ThreeCircles } from 'react-loader-spinner';

export const LazyLoader = () => {
  return (
    <ThreeCircles
      height="200"
      width="200"
      color="#444444"
      //   wrapperStyle={{ justifyContent: 'center' }}
      wrapperStyle={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
      wrapperClass=""
      visible={true}
      ariaLabel="three-circles-rotating"
      outerCircleColor=""
      innerCircleColor=""
      middleCircleColor=""
    />
  );
};
