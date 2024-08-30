import { configureStore } from '@reduxjs/toolkit';
import contentReducer from './slices/contentSlice';
import loadingReducer from './slices/loadingSlice'; // Import du loadingSlice

const store = configureStore({
  reducer: {
    content: contentReducer,    // Réducteur pour le contenu
    loading: loadingReducer,    // Réducteur pour l'état de chargement
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
