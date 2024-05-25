import React from 'react';
import { Stack, Text } from '@mantine/core';
import EmptyMovieIcon from '@/assets/icons/emptyMovieIcon';
import s from './styles.module.scss';

const EmptyContentMovies = () => (
  <Stack className={s.stack}>
    <EmptyMovieIcon />
    <Text className={s.text}>We don't have such movies, look for another one</Text>
  </Stack>
);

export default EmptyContentMovies;
