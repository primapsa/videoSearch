import React from 'react';
import { Text, SimpleGrid } from '@mantine/core';
import { MovieExtraInfo } from '@/types';

const Extra = ({ release, revenue, runtime, budget }: MovieExtraInfo) => (
  <SimpleGrid cols={2}>
    <Text span>Duration</Text>
    <Text span>{runtime}</Text>
    <Text span>Premiere</Text>
    <Text span>{release}</Text>
    <Text span>Budget</Text>
    <Text span>{budget}</Text>
    <Text span>Gross worldwide</Text>
    <Text span>{revenue}</Text>
  </SimpleGrid>
);

export default Extra;
