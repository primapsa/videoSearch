import React from 'react';
import { Stack, Text } from '@mantine/core';
import { NavLink } from 'react-router-dom';
import Icon404 from '@/assets/icons/icon404';
import s from './styles.module.scss';

const NotFound = () => (
  <Stack className={s.stack}>
    <Icon404 />
    <Text className={s.text}>We can’t find the page you are looking for</Text>
    <NavLink className={s.link} to="../">
      Go Home
    </NavLink>
  </Stack>
);

export default NotFound;
