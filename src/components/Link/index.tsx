import { Button, type ButtonProps } from '@/components/ui/button';
import { cn } from '@/utilities/ui';
import Link from 'next/link';
import React from 'react';

import type { Category, DishGroup } from '@/payload-types';

type CMSLinkType = {
  appearance?: 'inline' | ButtonProps['variant'];
  children?: React.ReactNode;
  className?: string;
  label?: string | null;
  newTab?: boolean | null;
  reference?: {
    relationTo: 'categories' | 'dishGroups' | string | number;
    value: Category | DishGroup | string | number;
  } | null;
  size?: ButtonProps['size'] | null;
  type?: 'custom' | 'reference' | null;
  url?: string | null;
};

const generateHref = (
  reference: CMSLinkType['reference'],
  url: CMSLinkType['url'],
  type: 'custom' | 'reference' | null | undefined,
) => {
  if (type === 'reference' && typeof reference?.value === 'object' && reference.value.id) {
    const isCategoryAndGroups =
      reference?.relationTo === 'categories' || reference?.relationTo === 'dishGroups';

    return `/${isCategoryAndGroups ? reference?.relationTo : ''}#${reference.value.name}`;
  }

  return url;
};

export const CMSLink: React.FC<CMSLinkType> = (props) => {
  const {
    type,
    appearance = 'inline',
    children,
    className,
    label,
    newTab,
    reference,
    size: sizeFromProps,
    url,
  } = props;

  const href = generateHref(reference, url, type);
  if (!href) return null;

  const size = appearance === 'link' ? 'clear' : sizeFromProps;
  const newTabProps = newTab ? { rel: 'noopener noreferrer', target: '_blank' } : {};

  /* Ensure we don't break any styles set by richText */
  if (appearance === 'inline') {
    return (
      <Link className={cn(className)} href={href || url || ''} {...newTabProps}>
        {label && label}
        {children && children}
      </Link>
    );
  }

  return (
    <Button asChild className={className} size={size as any} variant={appearance}>
      <Link className={cn(className)} href={href || url || ''} {...newTabProps}>
        {label && label}
        {children && children}
      </Link>
    </Button>
  );
};
