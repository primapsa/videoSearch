import React from 'react';
import { Stack, Title } from '@mantine/core';
import { CompaniesProps } from '@/types/movie';
import { Company } from '@/components/company';
import s from './styles.module.scss';

const Companies = ({ list }: CompaniesProps) => {
  const companies = list.map(({ name, logo_path }) => (
    <Company key={logo_path} name={name} logo_path={logo_path} />
  ));
  return (
    <>
      {!!list?.length && (
        <Stack className={s.stack}>
          <Title className={s.title} order={4}>
            Production
          </Title>
          <Stack className={s.companies}>{companies}</Stack>
        </Stack>
      )}
    </>
  );
};

export default React.memo(Companies);
