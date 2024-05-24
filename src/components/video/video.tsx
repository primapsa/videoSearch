import React from 'react';
import { AspectRatio, Stack, Title } from '@mantine/core';
import { VideoProps } from '@/types/movie';
import { VIDEO_URL } from '@/constants';

const Video = ({ source }: VideoProps) => (
  <>
    {source && (
      <Stack>
        <Title order={4}>Trailer</Title>
        <AspectRatio ratio={16 / 9}>
          <iframe
            src={`${VIDEO_URL}${source}`}
            title="YouTube video player"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </AspectRatio>
      </Stack>
    )}
  </>
);

export default React.memo(Video);
