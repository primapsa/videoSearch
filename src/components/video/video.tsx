import React from 'react';
import { AspectRatio, Stack, Title } from '@mantine/core';
import { VideoProps } from '@/types/movie';
import { VIDEO_URL } from '@/constants';
import s from './styles.module.scss';

const Video = ({ source }: VideoProps) => (
  <>
    {source && (
      <Stack className={s.stack}>
        <Title order={4} className={s.text}>
          Trailer
        </Title>
        <AspectRatio ratio={16 / 9} className={s.video}>
          <iframe
            src={`${VIDEO_URL}${source}`}
            className={s.iframe}
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
