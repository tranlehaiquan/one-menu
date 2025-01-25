import { slugField } from '@/fields/slug';
import type { CollectionConfig } from 'payload';

const Dishes: CollectionConfig = {
  slug: 'dishes',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'name',
  },
  defaultPopulate: {
    name: true,
    slug: true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'price',
      type: 'number',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      // required: true,
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      required: true,
      hasMany: true,
    },
    ...slugField(),
  ],
};

export default Dishes;
