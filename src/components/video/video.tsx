import React from 'react';
import { AspectRatio, Stack, Title } from '@mantine/core';
import { VideoProps } from '@/types/movie';

const Video = ({ source }: VideoProps) => (
  <Stack>
    <Title order={4}>Trailer</Title>
    <AspectRatio ratio={16 / 9}>
      <iframe
        src={source}
        title="YouTube video player"
        style={{ border: 0 }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </AspectRatio>
  </Stack>
);

export default React.memo(Video);
