'use client';
import { getCategoriesQuery } from '@/fetchQuery/queryOptions';
import { useSuspenseQuery } from '@tanstack/react-query';
import Link from 'next/link';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const AppSideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: categories } = useSuspenseQuery(getCategoriesQuery);

  return (
    <>
      {/* Mobile toggle button */}
      <Button
        variant="ghost"
        className="fixed top-4 right-4 lg:hidden z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <Menu />}
      </Button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed lg:static
        inset-y-0 left-0
        w-64 z-50
        bg-gray-100
        transform transition-transform duration-300 ease-in-out
        lg:transform-none
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}
      >
        <div className="p-4 pt-16 lg:pt-4">
          <h2 className="text-xl font-bold mb-4">Categories</h2>
          <nav>
            {categories.docs.map((category) => (
              <Link
                key={category.id}
                href={`/#${category.name}`}
                className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {category.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default AppSideBar;
