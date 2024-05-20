import React from 'react';
import { Group, Rating as RatingMantine, Text } from '@mantine/core';
import { MovieCardProps } from '@/types';

const Vote = ({ vote = 0, onVote, id }: Pick<MovieCardProps, 'vote' | 'onVote' | 'id'>) => {
  const ratingClickHandler = () => {
    onVote && onVote(id);
  };
  return (
    <Group>
      <RatingMantine count={1} readOnly onClick={ratingClickHandler} />
      {Boolean(vote) && <Text span>{vote}</Text>}
    </Group>
  );
};

export default Vote;
