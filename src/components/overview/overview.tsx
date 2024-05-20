import React from 'react';
import { Stack, Title, Text } from '@mantine/core';
import { OverviewProps } from '@/types/movie';

const Overview = ({ text }: OverviewProps) => (
  <Stack>
    <Title order={4}>Description</Title>
    <Text>{text}</Text>
  </Stack>
);

export default React.memo(Overview);
