import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

// Utiliser ce dispatch au lieu de useDispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Utiliser ce selector au lieu de useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
