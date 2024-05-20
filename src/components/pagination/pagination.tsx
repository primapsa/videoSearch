import React from 'react';

import ReactPaginate from 'react-paginate';
import { Box } from '@mantine/core';
import { PaginationOnPageType, PaginationProps } from '@/types';
import { PAGINATE } from '@/constants';

const Pagination = ({ total, page, onChange }: PaginationProps) => {
  const handlePageClick = (current: PaginationOnPageType) => onChange(current.selected);
  return (
    <Box>
      <ReactPaginate
        breakLabel={PAGINATE.LABEL}
        pageRangeDisplayed={PAGINATE.RANGE}
        marginPagesDisplayed={PAGINATE.MARGIN}
        nextLabel=">"
        forcePage={page}
        onPageChange={handlePageClick}
        pageCount={total}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </Box>
  );
};

export default Pagination;
