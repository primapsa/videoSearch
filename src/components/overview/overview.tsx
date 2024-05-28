import React from 'react';
import { Stack, Title, Text } from '@mantine/core';
import { OverviewProps } from '@/types/movie';
import s from './styles.module.scss';

const Overview = ({ text }: OverviewProps) => (
  <>
    {text && (
      <Stack className={s.overview}>
        <Title order={4} className={s.title}>
          Description
        </Title>
        <Text className={s.text}>{text}</Text>
      </Stack>
    )}
  </>
);

export default React.memo(Overview);
