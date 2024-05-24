import React from 'react';
import { Group, Stack, Title } from '@mantine/core';
import { Navigation } from '@/components/navigation';
import Logo from '@/assets/icons/logo';
import s from './styles.module.scss';

const Aside = () => (
  <Stack className={s.aside}>
    <Group className={s.logo}>
      <Logo />
      <Title order={1} className={s.title}>
        ArrowFlicks
      </Title>
    </Group>
    <Navigation />
  </Stack>
);

export default Aside;
