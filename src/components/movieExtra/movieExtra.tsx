import React from 'react';
import { Paper, Stack } from '@mantine/core';
import { Video } from '@/components/video';
import { Overview } from '@/components/overview';
import Companies from '@/components/companies/companies';
import { MovieExtraProps } from '@/types/movie';
import s from './styles.module.scss';

const MovieExtra = ({ source, text, compaines }: MovieExtraProps) => (
  <Paper className={s.extra}>
    <Video source={source} />
    <Overview text={text} />
    <Companies list={compaines} />
  </Paper>
);

export default React.memo(MovieExtra);
