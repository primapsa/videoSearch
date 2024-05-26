import React, { ChangeEvent, useEffect, useState } from 'react';
import { TextInput, Button, Group, Title } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { clearSearchFilter, setSearchFilter } from '@/store/slices/ratedSlice';
import { AppDispatchType } from '@/store';
import s from './styles.module.scss';
import SearchIcon from '@/assets/icons/searchIcon';
import { getRatedFilter } from '@/store/selectors';

const SearchBar = () => {
  const filter = useSelector(getRatedFilter) || '';
  const dispatch = useDispatch();
  const [text, setText] = useState<string>(filter);
  const onChangeHandler = (letter: ChangeEvent<HTMLInputElement>) => {
    const { value } = letter.target;
    setText(value);
  };
  const onButtonHandler = () => {
    dispatch<AppDispatchType>(setSearchFilter(text));
  };
  useEffect(
    () => () => {
      dispatch(clearSearchFilter());
    },
    []
  );

  return (
    <Group className={s.search}>
      <Title className={s.title} order={2}>
        Rated movies
      </Title>
      <TextInput
        classNames={{ input: s.input }}
        placeholder="Search movie title"
        value={text}
        onChange={onChangeHandler}
        rightSection={
          <Button
            className={s.button}
            variant="filled"
            color="violet"
            radius="md"
            onClick={onButtonHandler}
          >
            Search
          </Button>
        }
        leftSection={<SearchIcon />}
        rightSectionWidth="100px"
      />
    </Group>
  );
};

export default SearchBar;
