import React from 'react';

const PageContentWithPadding = ({ children }) => {
  return (
    <div style={{ paddingTop: '10vh' }}> {/* Adjust the padding-top value to match the height of your PageHeader */}
      {children}
    </div>
  );
};

export default PageContentWithPadding;
