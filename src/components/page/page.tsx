import React from 'react';
import { Grid } from '@mantine/core';
import { PageProps } from '@/types';
import s from './styles.module.scss';
import Aside from '../aside/aside';

const Page = ({ children }: PageProps) => (
  <Grid columns={100}>
    <Grid.Col span={20} className={s.col}>
      <Aside />
    </Grid.Col>
    <Grid.Col className={s.content} span={80}>
      {children}
    </Grid.Col>
  </Grid>
);

export default Page;
