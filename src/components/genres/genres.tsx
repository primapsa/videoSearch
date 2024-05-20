import React from 'react';
import { Text } from '@mantine/core';
import { MovieCardProps } from '@/types';

const Genres = ({ genres }: Pick<MovieCardProps, 'genres'>) =>
  Boolean(genres?.length) && (
    <Text>
      Genres<Text span>{genres.join(', ')}</Text>
    </Text>
  );

export default Genres;
