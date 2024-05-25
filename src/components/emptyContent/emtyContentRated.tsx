import React from 'react';
import { Stack, Title } from '@mantine/core';
import { NavLink } from 'react-router-dom';
import EmptyRatedIcon from '@/assets/icons/emptyRatedIcon';
import s from './styles.module.scss';

const EmtyContentRated = () => (
  <Stack className={s.stack}>
    <EmptyRatedIcon />
    <Title className={s.text}>You haven't rated any films yet</Title>
    <NavLink className={s.link} to="../">
      Find movies
    </NavLink>
  </Stack>
);

export default EmtyContentRated;
