import React from 'react';
import { Stack, Title } from '@mantine/core';
import { CompaniesProps } from '@/types/movie';
import { Company } from '@/components/company';

const Companies = ({ list }: CompaniesProps) => {
  const companies = list.map(({ name, logo_path }) => (
    <Company name={name} logo_path={logo_path} />
  ));
  return (
    <Stack>
      <Title order={4}>Production</Title>
      <Stack>{companies}</Stack>
    </Stack>
  );
};

export default React.memo(Companies);
