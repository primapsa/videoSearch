import React from 'react';
import { Group, Image, Text } from '@mantine/core';
import { CompanyProps } from '@/types/movie';
import { IMAGE_HOST_SVG } from '@/constants';
import CompanyIcon from '@/assets/icons/company';
import s from './styles.module.scss';

const Company = ({ logo_path, name }: CompanyProps) => (
  <Group className={s.companies}>
    {logo_path ? <Image className={s.logo} src={IMAGE_HOST_SVG + logo_path} /> : <CompanyIcon />}
    <Text className={s.text}>{name}</Text>
  </Group>
);

export default React.memo(Company);
