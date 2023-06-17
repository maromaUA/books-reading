import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import authReducer from './auth/authSlice';
import trainingReducer from './training/trainingSlice';
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
//import transactionReducer from './transaction/transactionSlice';
//import reportsReducer from './reports/reportsSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['sid', 'refreshToken', 'accessToken'],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    training: trainingReducer,
    // transaction: transactionReducer,
    // reports: reportsReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
});

export const persistor = persistStore(store);
