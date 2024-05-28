import React from 'react';

import ReactPaginate from 'react-paginate';
import { Box } from '@mantine/core';
import classNames from 'classnames';
import { PaginationOnPageType, PaginationProps } from '@/types';
import { PAGINATE } from '@/constants';
import s from './styles.module.scss';
import Arrow from '@/assets/icons/chevron';

const Pagination = ({ total, page, onChange, className = '' }: PaginationProps) => {
  const handlePageClick = (current: PaginationOnPageType) => onChange(current.selected);
  return (
    <>
      {total > 1 && (
        <Box className={classNames([s.container], className)}>
          <ReactPaginate
            breakLabel={PAGINATE.LABEL}
            pageRangeDisplayed={PAGINATE.RANGE}
            marginPagesDisplayed={PAGINATE.MARGIN}
            forcePage={page}
            onPageChange={handlePageClick}
            pageCount={total}
            renderOnZeroPageCount={null}
            previousLabel={<Arrow direction="left" />}
            nextLabel={<Arrow direction="right" />}
            containerClassName={s.pagination}
            activeLinkClassName={s.pagination__active}
            disabledClassName={s.pagination__disabled}
            pageLinkClassName={s.pagination__item}
            previousClassName={s.pagination__item}
            nextLinkClassName={s.pagination__item}
          />
        </Box>
      )}
    </>
  );
};

export default React.memo(Pagination);
