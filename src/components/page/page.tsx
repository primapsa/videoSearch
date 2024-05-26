import React from 'react';
import { Flex, Grid } from '@mantine/core';
import { PageProps } from '@/types';
import s from './styles.module.scss';
import Aside from '../aside/aside';

const Page = ({ children, withoutNavigate = false }: PageProps) => (
  <Flex className={s.centerPage}>
    <Grid columns={1440} className={s.mainPage} classNames={{ inner: s.innerPage }}>
      <Grid.Col span={280} className={s.colPage}>
        <Aside withoutNavigate={withoutNavigate} />
      </Grid.Col>
      <Grid.Col className={s.contentPage} span={1160}>
        {children}
      </Grid.Col>
    </Grid>
  </Flex>
);

export default Page;
