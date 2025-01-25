import { Button } from '@/components/ui/button';
import React from 'react';

interface Props {
  className?: string;
}

const Page: React.FC<Props> = (props) => {
  return (
    <div>
      <Button>click me</Button>
    </div>
  );
};

export default Page;
