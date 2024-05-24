import React, { useEffect, useState } from 'react';
import { Anchor, Text, Breadcrumbs as MantineBreadcrumbs } from '@mantine/core';
import { BreadcrumbProps, BreadcrumpsType } from '@/types';
import { BREADCRUMBS } from '@/constants';
import { createBreadcrumbs } from '@/components/utils';

const Breadcrumbs = ({ nextCrumb }: BreadcrumbProps) => {
  const [crumbs, setCrumbs] = useState<BreadcrumpsType[]>(BREADCRUMBS);
  useEffect(() => {
    if (nextCrumb) {
      const breadcrumbs = createBreadcrumbs(nextCrumb);
      setCrumbs(breadcrumbs);
    }
  }, [nextCrumb]);
  const breadcrumbs = crumbs.map((crumb, index) =>
    crumb.href ? (
      <Anchor href={crumb.href} key={index}>
        {crumb.title}
      </Anchor>
    ) : (
      <Text>{crumb.title}</Text>
    )
  );
  return <MantineBreadcrumbs>{breadcrumbs}</MantineBreadcrumbs>;
};

export default React.memo(Breadcrumbs);