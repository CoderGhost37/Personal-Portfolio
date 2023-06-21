import React from 'react';

const Layout = ({
  children,
  classStyles,
}: {
  children: any;
  classStyles?: string;
}) => {
  return (
    <div
      className={`${classStyles} w-full h-full inline-block z-0 bg-light dark:bg-dark xl:p-24 lg:p-16 md:p-12 sm:p-8 p-32`}
    >
      {children}
    </div>
  );
};

export default Layout;
