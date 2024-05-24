import React from 'react';
import { Stack } from '@mantine/core';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import s from './styles.module.scss';

const Navigation = () => (
  <Stack className={s.navigation}>
    <NavLink
      to="/"
      className={({ isActive }) =>
        classNames([s.navigation__item], { [s.navigation__item_active]: isActive })
      }
    >
      Movies
    </NavLink>
    <NavLink
      to="/rated"
      className={({ isActive }) =>
        classNames([s.navigation__item], { [s.navigation__item_active]: isActive })
      }
    >
      Rated movies
    </NavLink>
  </Stack>
);

export default Navigation;
