import { customFetch } from '@/utilities/customFetch';
import { getClientSideURL } from '@/utilities/getURL';
import { ResultQuery } from './rest-types';
import { Category, Dish } from '@/payload-types';

const BASE_URL = getClientSideURL();

export const getCategories = async () => {
  const res = await customFetch(`${BASE_URL}/api/categories?limit=100&depth=0`);
  const data = await res.json();
  return data as ResultQuery<Category>;
};

export const getDished = async () => {
  const res = await customFetch(`${BASE_URL}/api/dishes?limit=100&depth=0`);
  const data = await res.json();

  return data as ResultQuery<Dish>;
};
