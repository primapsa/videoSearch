import React from 'react';
import { Group, Rating as RatingMantine, Text } from '@mantine/core';
import { RatingProps } from '@/types';
import { formattViews } from '@/components/utils';
import s from './styles.module.scss';

const Rating = ({ rate }: RatingProps) => (
  <Group className={s.rating}>
    <RatingMantine count={1} readOnly value={1} size="30px" />
    <Text className={s.rating_balck}>{rate.average.toFixed(1)}</Text>
    <Text className={s.rating_grey}>{formattViews(rate.count)}</Text>
  </Group>
);
export default Rating;
