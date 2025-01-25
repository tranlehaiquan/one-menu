'use client';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Category, Dish } from '@/payload-types';
import Link from 'next/link';
import { useSuspenseQuery } from '@tanstack/react-query';
import { getCategoriesQuery, getDishesQuery } from '@/fetchQuery/queryOptions';
import AppSideBar from './app-sidebar';

const groupDishesByCategory = (dishes: Dish[], categories: Category[]) => {
  return categories.map((category) => {
    const items = dishes.filter((dish) => (dish.category as string[]).includes(category.id));
    return { ...category, items };
  });
};

const RestaurantMenu = () => {
  const { data: categories } = useSuspenseQuery(getCategoriesQuery);
  const { data: dishes } = useSuspenseQuery(getDishesQuery);

  const groupedDishes = groupDishesByCategory(dishes.docs, categories.docs);

  return (
    <div className="flex w-full mx-auto bg-white rounded-lg shadow-lg overflow-hidden h-screen">
      <AppSideBar />

      <div className="flex-grow">
        <div className="flex w-full flex-col">
          <ScrollArea className="h-screen px-4">
            <div className="py-4">
              {groupedDishes.map((category, index) => (
                <div key={category.id} className="mb-8" id={category.name}>
                  <h2 className="text-2xl font-semibold mb-4">{category.name}</h2>
                  {category.items.map((item, itemIndex) => (
                    <div key={item.name} className="mb-4">
                      <div className="flex justify-between items-baseline">
                        <Link href={`/dish/${item.slug}`} className="text-lg font-medium">
                          {item.name}
                        </Link>
                        <span className="text-sm font-bold">${item.price.toFixed(2)}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                      {itemIndex < category.items.length - 1 && <Separator className="my-2" />}
                    </div>
                  ))}
                  {index < groupedDishes.length - 1 && <Separator className="my-6" />}
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
