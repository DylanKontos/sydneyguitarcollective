import React from 'react';

const PageContentWithPadding = ({ children }) => {
  return (
    <div style={{ paddingTop: '15vh' }}> {/* Adjust the padding-top value to match the height of your PageHeader */}
      {children}
    </div>
  );
};

export default PageContentWithPadding;
