import React, { ChangeEvent, useEffect, useState } from 'react';
import { TextInput, Button, Group, Title } from '@mantine/core';
import { useDispatch } from 'react-redux';
import { clearSearchFilter, setSearchFilter } from '@/store/slices/ratedSlice';
import { AppDispatchType } from '@/store';
import s from './styles.module.scss';
import SearchIcon from '@/assets/icons/searchIcon';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState<string>('');
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
      <Title order={2}>Rated movies</Title>
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
        rightSectionWidth="90px"
      />
    </Group>
  );
};

export default SearchBar;
