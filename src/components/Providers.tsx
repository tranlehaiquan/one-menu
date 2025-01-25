import React from 'react';
import QueryProvider from './QueryProvider/QueryProvider';

const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <QueryProvider>{children}</QueryProvider>;
};

export default Providers;
