import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlise';
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import { filtersReducer } from './filterSlise';


export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filters: filtersReducer,
    },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        });
    },
});

export const persistor = persistStore(store);