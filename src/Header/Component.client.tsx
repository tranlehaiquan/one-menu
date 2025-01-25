'use client';
import React from 'react';
import type { Header } from '@/payload-types';
import { HeaderNav } from './Nav';

interface HeaderClientProps {
  data: Header;
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  return (
    <header className="relative z-20">
      <div className="py-4">
        <HeaderNav data={data} />
      </div>
    </header>
  );
};
