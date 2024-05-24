import React from 'react';
import { Text, SimpleGrid } from '@mantine/core';
import { MovieExtraInfo } from '@/types';
import s from './styles.module.scss';

const Extra = ({ release, revenue, runtime, budget }: MovieExtraInfo) => (
  <SimpleGrid cols={2} className={s.grid}>
    <Text span className={s.text}>
      Duration
    </Text>
    <Text span className={s.value}>
      {runtime}
    </Text>
    <Text span className={s.text}>
      Premiere
    </Text>
    <Text span className={s.value}>
      {release}
    </Text>
    <Text span className={s.text}>
      Budget
    </Text>
    <Text span className={s.value}>
      {budget}
    </Text>
    <Text span className={s.text}>
      Gross worldwide
    </Text>
    <Text span className={s.value}>
      {revenue}
    </Text>
  </SimpleGrid>
);

export default React.memo(Extra);
