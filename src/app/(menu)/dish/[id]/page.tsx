import Link from 'next/link';
import React from 'react';

const Page = async ({ params }: { params: any }) => {
  return (
    <div className="p-4">
      <Link href="/">Back to Home</Link>
      {JSON.stringify(params)}
    </div>
  );
};

export default Page;
