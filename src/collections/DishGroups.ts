import { slugField } from '@/fields/slug';
import type { CollectionConfig } from 'payload';

const DishGroups: CollectionConfig = {
  slug: 'dishGroups',
  admin: {
    useAsTitle: 'name',
  },
  defaultPopulate: {
    name: true,
    slug: true,
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'dishes',
      type: 'relationship',
      relationTo: 'dishes',
      hasMany: true,
    },
    ...slugField(),
  ],
};

export default DishGroups;
