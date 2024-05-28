import { useSelector } from 'react-redux';
import { getMovieStatus } from '@/store/selectors';
import { APP_STATUSES } from '@/constants';

const useStatus = () => {
  const status = useSelector(getMovieStatus);
  const isLoading = status === APP_STATUSES.LOADING;
  const isError = status === APP_STATUSES.ERROR;
  return {
    status,
    isLoading,
    isError,
  };
};

export default useStatus;
