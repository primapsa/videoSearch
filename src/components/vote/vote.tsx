import React, { MouseEvent } from 'react';
import { Group, Rating as RatingMantine, Text } from '@mantine/core';
import { MovieCardProps } from '@/types';
import s from './styles.module.scss';

const Vote = ({ vote = 0, onVote, id }: Pick<MovieCardProps, 'vote' | 'onVote' | 'id'>) => {
  const ratingClickHandler = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    onVote && onVote(id);
  };
  return (
    <Group className={s.container}>
      <RatingMantine
        count={1}
        onClick={ratingClickHandler}
        defaultValue={vote}
        color="violet"
        size="30px"
      />
      {Boolean(vote) && <Text className={s.text}>{vote}</Text>}
    </Group>
  );
};

export default Vote;
