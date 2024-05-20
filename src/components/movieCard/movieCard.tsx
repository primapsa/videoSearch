import React from 'react';
import { Text, Paper, Image, Box, Group, Stack, Title } from '@mantine/core';
import { MovieCardProps } from '@/types';
import { Rating } from '@/components/rating';
import { Genres } from '@/components/genres';
import { Vote } from '@/components/vote';
import { Extra } from '@/components/extra';
import { TYPE } from '@/constants';
import s from './styles.module.scss';

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
}: MovieCardProps) => (
  <Paper p={24} className={s.card}>
    <div></div>
    <Group>
      <Box>
        <Image src={source} />
      </Box>
      <Stack>
        <Box>
          <Title>{movie.title}</Title>
          <Vote id={id} vote={vote} onVote={onVote} />
        </Box>
        <Text>{movie.year}</Text>
        <Rating rate={rate} />
        {type === TYPE.MOVIE && extra && <Extra {...extra} />}
        <Genres genres={genres} />
      </Stack>
    </Group>
  </Paper>
);

export default MovieCard;
