import React, { useEffect, useState } from 'react';
import { Anchor, Text } from '@mantine/core';
import { BreadcrumpsType } from '@/types';
import { BREADCRUMBS } from '@/constants';
import { createBreadcrumbs } from '@/components/utils';

const useBreadcrumbs = (nextCrumb: string | undefined) => {
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
  return <>{breadcrumbs}</>;
};

export default useBreadcrumbs;
