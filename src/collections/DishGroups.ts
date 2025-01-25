import type { CollectionConfig } from 'payload';

const DishGroups: CollectionConfig = {
  slug: 'dishGroups',
  admin: {
    useAsTitle: 'name',
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
  ],
};

export default DishGroups;
