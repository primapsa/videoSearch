import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import persistConfig from '../../persistConfig';
import { moviesSlice } from '@/store/slices/moviesSlice';

const rootReducer = combineReducers({
  movies: moviesSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
//@ts-ignore
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunk),
});

const persistor = persistStore(store);

export { store, persistor };
export const useAppDispatch: () => DispatchType = useDispatch;
export type RootStateType = ReturnType<typeof rootReducer>;
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;
export type AppDispatchType = any | typeof store.dispatch;
export type DispatchType = typeof store.dispatch;
