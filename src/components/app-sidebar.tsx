'use client';
import { getCategoriesQuery } from '@/fetchQuery/queryOptions';
import { useSuspenseQuery } from '@tanstack/react-query';
import Link from 'next/link';
import React from 'react';

const AppSideBar = () => {
  const { data: categories } = useSuspenseQuery(getCategoriesQuery);

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
