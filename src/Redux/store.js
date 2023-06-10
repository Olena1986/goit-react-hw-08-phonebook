import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './Contacts/contactsSlice';
import { authReducer } from './Auth/authSlice';
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const authConfig = {
	key: 'token',
	version: 1,
	whitelist: ['token'],
	storage,
}


export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: persistReducer(authConfig, authReducer),
  },

	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
	devTools: process.env.NODE_ENV !== 'production',
})
export const persistor = persistStore(store)


