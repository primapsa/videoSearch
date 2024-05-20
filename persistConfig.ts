// @ts-ignore
import storage from 'redux-persist/lib/storage';
import { setGenres } from '@/store/slices/filterSlice';

const persistConfig = {
  key: 'root',
  storage,
};

export default persistConfig;
