import React from 'react';
import { Text, Group } from '@mantine/core';
import classNames from 'classnames';
import { MovieCardProps } from '@/types';
import s from './styles.module.scss';
import { limitArray } from '@/components/utils';
import { TYPE } from '@/constants';

const Genres = ({
  genres,
  limit = 0,
  type = TYPE.MOVIES,
}: Pick<MovieCardProps, 'genres' | 'type'> & { limit?: number }) => {
  const isMovie = type === TYPE.MOVIE;
  return (
    Boolean(genres?.length) && (
      <Group className={classNames([s.genres], { [s.genres_movie]: isMovie })}>
        <Text className={classNames([s.genres__title], { [s.genres__title_movie]: isMovie })}>
          Genres
        </Text>
        <Text className={s.genres__items}>{limitArray(genres, limit).join(', ')}</Text>
      </Group>
    )
  );
};

export default Genres;
