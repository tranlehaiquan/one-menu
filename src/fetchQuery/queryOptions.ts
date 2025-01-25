import { queryOptions } from '@tanstack/react-query';
import { getCategories, getDished } from '@/services';

export const getCategoriesQuery = queryOptions({
  queryKey: ['categories'],
  queryFn: getCategories,
});

export const getDishesQuery = queryOptions({
  queryKey: ['dishes'],
  queryFn: getDished,
});
