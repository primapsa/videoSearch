import { useState } from 'react';
import { PAGE } from '@/constants';
import { getApiPage } from '@/components/utils';

const usePage = (nextPage: number): number => {
  const [page, setPage] = useState<number>(PAGE.INIT);
  const apiPage = getApiPage(nextPage);
  if (apiPage !== page) {
    setPage(apiPage);
  }
  return page;
};

export default usePage;
