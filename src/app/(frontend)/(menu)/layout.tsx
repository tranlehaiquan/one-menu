import { getQueryClient } from '@/components/QueryProvider/makeQueryClient';
import { getCategoriesQuery, getDishesQuery } from '@/fetchQuery/queryOptions';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import React from 'react';

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(getCategoriesQuery);
  void queryClient.prefetchQuery(getDishesQuery);

  return <HydrationBoundary state={dehydrate(queryClient)}>{children}</HydrationBoundary>;
};

export default Layout;
