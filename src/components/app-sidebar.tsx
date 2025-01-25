import { getPayloadFromConfig } from '@/lib/getPayloadFromConfig';
import Link from 'next/link';
import React from 'react';

interface Props {
  className?: string;
}

const AppSideBar: React.FC<Props> = async (props) => {
  const payload = await getPayloadFromConfig();
  const categories = await payload.find({
    collection: 'categories',
    depth: 0,
  });

  return (
    <div className={`bg-gray-100 transition-all duration-300 ease-in-out w-64`}>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Categories</h2>
        <nav>
          {categories.docs.map((category) => (
            <Link
              key={category.id}
              href={`/#${category.name}`}
              className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded transition-colors duration-200"
            >
              {category.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default AppSideBar;
