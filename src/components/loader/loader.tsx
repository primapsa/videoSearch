import React from 'react';
import { Loader as MantineLoader, Stack } from '@mantine/core';
import { LoaderProps } from '@/types';
import s from './styles.module.scss';

const Loader = () => (
  <Stack className={s.stack}>
    <MantineLoader color="violet" />
  </Stack>
);

export default Loader;
