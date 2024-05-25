import React, { useEffect, useState } from 'react';
import { SimpleGrid, Stack } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { SearchBar } from '@/components/searchBar';
import { getGenresRaw, getRated, getRatedFetched, getRatedFilter } from '@/store/selectors';
import { ITEM_PER_PAGE, PAGE, PATH, TYPE } from '@/constants';
import { createMovieProps, getGenresName, getSimpleGenreName } from '@/components/utils';
import { transformRatedQuery } from '@/components/utils/adapters';
import { fetchRated } from '@/store/slices/ratedSlice';
import { AppDispatchType } from '@/store';
import { MovieCard } from '@/components/movieCard';
import { MovieType } from '@/types/movie';
import { Pagination } from '@/components/pagination';
import s from './styles.module.scss';
import useRatedModal from '@/hooks/useRatedModal';
import { Modal } from '@/components/modal';
import movie from '@/components/movie/movie';

const Rated = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState<number>(0);
  const rated = useSelector(getRated);
  const fetched = useSelector(getRatedFetched);
  const votes = useSelector(getRated);
  const filter = useSelector(getRatedFilter);
  const ratedId = Object.keys(rated).map((id) => Number(id));

  const { modal, setModal, onModalClose, onModalSave } = useRatedModal();
  const [movies, setMovies] = useState<MovieType[]>([]);
  const getPagedMovies = (allRated: MovieType[] | null) => {
    if (!allRated) return null;
    const position = page * ITEM_PER_PAGE;
    return allRated.slice(position, Math.min(allRated.length, position + ITEM_PER_PAGE));
  };
  const total = Math.ceil(movies.length / ITEM_PER_PAGE);
  useEffect(() => {
    if (!filter) return;
    const filtered = movies.filter((ratedItem) =>
      ratedItem.original_title.toLowerCase().startsWith(filter.toLowerCase())
    );
    setMovies(filtered);
  }, [filter]);
  const onPageChange = (currentPage: number) => {
    setPage(currentPage);
  };
  useEffect(() => {
    fetched && setMovies(fetched);
  }, [fetched]);

  useEffect(() => {
    dispatch<AppDispatchType>(fetchRated({ ids: ratedId, query: '' }));
  }, []);

  const ratedMovies = getPagedMovies(movies)?.map((movieItem) => {
    const vote = votes[movieItem.id] || 0;
    const genresNames = getSimpleGenreName(movieItem);
    const onVoteHandler = (idv: number) => {
      setModal({ id: idv, name: movieItem.original_title, rating: vote });
    };
    return (
      <Link className={s.link} to={`../${PATH.MOVIE}${movieItem.id}`} key={movieItem.id}>
        <MovieCard
          {...createMovieProps(movieItem, TYPE.MOVIES)}
          onVote={onVoteHandler}
          vote={vote}
          genres={genresNames}
        />
      </Link>
    );
  });
  return (
    <>
      <Stack className={s.rated}>
        <SearchBar />
        {ratedMovies && (
          <SimpleGrid className={s.grid} cols={2}>
            {ratedMovies}
          </SimpleGrid>
        )}
        <Pagination total={total} onChange={onPageChange} page={page} />
      </Stack>
      {modal && <Modal {...modal} onClose={onModalClose} onSave={onModalSave} />}
    </>
  );
};

export default Rated;
