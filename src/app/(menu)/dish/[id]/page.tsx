import Link from 'next/link';
import React from 'react';

const Page = async () => {
  return (
    <div className="p-4">
      <Link href="/">Back to Home</Link>
    </div>
  );
};

export default Page;
