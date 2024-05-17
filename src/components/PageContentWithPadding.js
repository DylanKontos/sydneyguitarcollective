import React from 'react';

const PageContentWithPadding = ({ children, headerHeight }) => {
  let paddingValue;

  // Check if headerHeight contains 'vh' to determine the unit
  if (headerHeight.includes('vh')) {
    paddingValue = '15vh';
  } else {
    paddingValue = '120px';
  }

  return (
    <div style={{ paddingTop: paddingValue }}>
      {children}
    </div>
  );
};

export default PageContentWithPadding;
