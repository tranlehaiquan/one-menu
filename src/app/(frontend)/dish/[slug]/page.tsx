import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';

const mockDish = {
  name: 'Spicy Tuna Roll',
  price: 15.99,
  description:
    'Fresh tuna, spicy mayo, cucumber, and avocado rolled in sushi rice and nori. Topped with tempura flakes and green onions.',
  image: '/huh-cat.png', // You'll need to add a placeholder image
  allergens: ['Fish', 'Eggs', 'Soy'],
  spicyLevel: 'Medium',
};

const Page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  return (
    <div className="p-4 sm:p-6">
      <Button variant="ghost" className="mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        <Link href="/">Back to Menu</Link>
      </Button>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
          <Image src={mockDish.image} alt={mockDish.name} fill className="object-cover" priority />
        </div>

        <div className="space-y-4">
          <div>
            <h1 className="text-3xl font-bold">{mockDish.name}</h1>
            <p className="text-2xl font-semibold mt-2">${mockDish.price.toFixed(2)}</p>
          </div>

          <div>
            <h2 className="font-semibold mb-2">Description</h2>
            <p className="text-gray-600">{mockDish.description}</p>
          </div>

          <div>
            <h2 className="font-semibold mb-2">Allergens</h2>
            <div className="flex gap-2 flex-wrap">
              {mockDish.allergens.map((allergen) => (
                <span key={allergen} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                  {allergen}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-semibold mb-2">Spicy Level</h2>
            <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full">
              {mockDish.spicyLevel}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
