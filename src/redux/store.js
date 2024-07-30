import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './contactsSlice';
import filtersReducer from './filtersSlice';

const rootReducer = combineReducers({
    contacts: contactsReducer,
    filters: filtersReducer
});

const persistConfig = {
    key: 'contacts',
    storage,
    whitelist: ['items']
};

const persistedReducer = persistReducer(persistConfig, contactsReducer);

const store = configureStore({
    reducer: {
        contacts: persistedReducer,
        filters: filtersReducer
    }
});

const persistor = persistStore(store);

export { store, persistor };
