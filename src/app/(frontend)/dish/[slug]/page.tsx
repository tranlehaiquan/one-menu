import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';
import { ArrowLeft } from 'lucide-react';

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  return (
    <div className="p-4">
      <Button variant={'link'}>
        <ArrowLeft />
        <Link href="/">Back to Home</Link>
      </Button>

      <div>{slug}</div>
    </div>
  );
};

export default Page;
