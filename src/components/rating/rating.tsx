import React from 'react';
import { Group, Rating as RatingMantine, Text } from '@mantine/core';
import { RatingProps } from '@/types';
import { formattViews } from '@/components/utils';

const Rating = ({ rate }: RatingProps) => (
  <Group>
    <RatingMantine count={1} />
    <Text ml={4} mr={8}>
      {rate.average.toFixed(1)}
    </Text>
    <Text>{formattViews(rate.count)}</Text>
  </Group>
);
export default Rating;
