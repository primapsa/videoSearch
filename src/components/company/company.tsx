import React from 'react';
import { Group, Image, Text } from '@mantine/core';
import { CompanyProps } from '@/types/movie';

const Company = ({ logo_path, name }: CompanyProps) => (
  <Group>
    <Image src={logo_path} />
    <Text>{name}</Text>
  </Group>
);

export default React.memo(Company);
