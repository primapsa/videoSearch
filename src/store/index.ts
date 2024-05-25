import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import persistConfig from '../../persistConfig';
import { moviesSlice } from '@/store/slices/moviesSlice';
import { filterSlice } from '@/store/slices/filterSlice';
import { genresSlice } from '@/store/slices/genresSlice';
import { movieSlice } from '@/store/slices/movieSlice';
import { ratedSlice } from '@/store/slices/ratedSlice';

const persistedReducer = persistReducer(persistConfig, ratedSlice.reducer);
const rootReducer = combineReducers({
  movies: moviesSlice.reducer,
  filter: filterSlice.reducer,
  genres: genresSlice.reducer,
  movie: movieSlice.reducer,
  rated: persistedReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
        ignoredActionPaths: ['register', 'rehydrate'],
        ignoredPaths: ['register'],
      },
    }).prepend(thunk),
});

const persistor = persistStore(store);

export const useAppDispatch: () => DispatchType = useDispatch;
export type RootStateType = ReturnType<typeof rootReducer>;
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;
export type AppDispatchType = any | typeof store.dispatch;
export type DispatchType = typeof store.dispatch;
export { store, persistor };
