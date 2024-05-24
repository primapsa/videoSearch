import React from 'react';
import { Loader as MantineLoader, Stack } from '@mantine/core';
import { LoaderProps } from '@/types';

const Loader = ({ isLoading, children }: LoaderProps) => (
  <>
    {isLoading ? (
      <Stack>
        <MantineLoader color="violet" />
      </Stack>
    ) : (
      children
    )}
  </>
);

export default Loader;
