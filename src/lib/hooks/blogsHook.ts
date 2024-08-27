import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';

export const useBlogDispatch = () => useDispatch<AppDispatch>();
export const useBlogSelector: TypedUseSelectorHook<RootState> = useSelector;
