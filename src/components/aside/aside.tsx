import React from 'react';
import { Group, Stack, Title } from '@mantine/core';
import { Navigation } from '@/components/navigation';
import Logo from '@/assets/icons/logo';
import s from './styles.module.scss';
import { AsideProps } from '@/types';

const Aside = ({ withoutNavigate }: AsideProps) => (
  <Stack className={s.aside}>
    <Group className={s.logo}>
      <Logo />
      <Title order={1} className={s.title}>
        ArrowFlicks
      </Title>
    </Group>
    {!withoutNavigate && <Navigation />}
  </Stack>
);

export default Aside;
