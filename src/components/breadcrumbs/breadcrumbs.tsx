import React, { useEffect, useState } from 'react';
import { Anchor, Text, Breadcrumbs as MantineBreadcrumbs } from '@mantine/core';
import { BreadcrumbProps, BreadcrumpsType } from '@/types';
import { BREADCRUMBS } from '@/constants';
import { createBreadcrumbs } from '@/components/utils';
import s from './styles.module.scss';

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
      <Anchor className={s.breadcrums} href={crumb.href} key={index}>
        {crumb.title}
      </Anchor>
    ) : (
      <Text className={s.breadcrums} key={index}>
        {crumb.title}
      </Text>
    )
  );
  return <MantineBreadcrumbs className={s.container}>{breadcrumbs}</MantineBreadcrumbs>;
};

export default React.memo(Breadcrumbs);
