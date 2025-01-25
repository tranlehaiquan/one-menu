'use server';

import { getPayloadFromConfig } from '@/lib/getPayloadFromConfig';

export const getCategories = async () => {
  const payload = await getPayloadFromConfig();
  return payload.find({
    collection: 'categories',
    depth: 0,
    limit: 100,
  });
};

export const getDished = async () => {
  const payload = await getPayloadFromConfig();
  return payload.find({
    collection: 'dishes',
    depth: 0,
    limit: 100,
  });
};
