import React from 'react';
import { Stack } from '@mantine/core';
import { Video } from '@/components/video';
import { Overview } from '@/components/overview';
import Companies from '@/components/companies/companies';
import { MovieExtraProps } from '@/types/movie';

const MovieExtra = ({ source, text, compaines }: MovieExtraProps) => (
  <Stack>
    <Video source={source} />
    <Overview text={text} />
    <Companies list={compaines} />
  </Stack>
);

export default React.memo(MovieExtra);
