import React from 'react';
import { Text, Paper, Image, Box, Group, Stack, Title } from '@mantine/core';
import classNames from 'classnames';
import { MovieCardProps } from '@/types';
import { Rating } from '@/components/rating';
import { Genres } from '@/components/genres';
import { Vote } from '@/components/vote';
import { Extra } from '@/components/extra';
import { GENRES_LIMIT, IMAGE_HOST, TYPE } from '@/constants';
import s from './styles.module.scss';
import { getYear } from '@/components/utils';
import noPoster from '@/assets/noPoster.png';

const MovieCard = ({
  id,
  type,
  movie,
  genres,
  rate,
  onVote,
  vote,
  extra,
  source,
}: MovieCardProps) => {
  const isMovie = type === TYPE.MOVIE;
  const checkSource = () => (source ? `${IMAGE_HOST}${source}` : noPoster);
  return (
    <Paper className={classNames([s.card], { [s.card_movie]: isMovie })}>
      <Box className={classNames([s.wrapper], { [s.wrapper_movie]: isMovie })}>
        <Image src={checkSource()} className={s.image} />
      </Box>
      <Stack className={s.stack}>
        <Group className={s.title}>
          <Title className={s.title__text}>{movie.title}</Title>
          <Vote id={id} vote={vote} onVote={onVote} />
        </Group>
        <Text className={s.year}>{getYear(movie.year)}</Text>
        <Rating rate={rate} />
        {isMovie && extra && <Extra {...extra} />}
        <Genres genres={genres} limit={GENRES_LIMIT} type={type} />
      </Stack>
    </Paper>
  );
};

export default React.memo(MovieCard);
