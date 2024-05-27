import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Page from '@/components/page/page';
import Rated from '@/components/rated/rated';
import { APP_STATUSES } from '@/constants';
import { setRatedStatus } from '@/store/slices/ratedSlice';

const RatedPage = () => {
  const dispatch = useDispatch();

  useEffect(
    () => () => {
      dispatch(setRatedStatus(APP_STATUSES.IDLE));
    },
    []
  );
  return (
    <Page>
      <Rated />
    </Page>
  );
};
export default RatedPage;
