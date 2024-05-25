import React from 'react';
import { Text, SimpleGrid, NumberFormatter } from '@mantine/core';
import { MovieExtraInfo } from '@/types';
import s from './styles.module.scss';
import { dateFormatt, formattMinutes } from '@/components/utils';

const Extra = ({ release, revenue, runtime, budget }: MovieExtraInfo) => (
  <SimpleGrid cols={2} className={s.grid}>
    <Text span className={s.text}>
      Duration
    </Text>
    <Text span className={s.value}>
      {formattMinutes(runtime)}
    </Text>
    <Text span className={s.text}>
      Premiere
    </Text>
    <Text span className={s.value}>
      {dateFormatt(release)}
    </Text>
    <Text span className={s.text}>
      Budget
    </Text>
    <Text span className={s.value}>
      <NumberFormatter prefix="$" thousandSeparator value={budget} />
    </Text>

    <Text span className={s.text}>
      Gross worldwide
    </Text>
    <Text span className={s.value}>
      <NumberFormatter prefix="$" thousandSeparator value={revenue} />
    </Text>
  </SimpleGrid>
);

export default React.memo(Extra);
