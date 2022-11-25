import { createSlice } from '@reduxjs/toolkit';
import { fetchAll, addContact, deleteContact } from './searchAPI';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const L_KEY = 'contacts-list';
// const contactsList= [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];
const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const contactsSlise = createSlice({
    name: "contacts",
    initialState: {
        item: [],
        isLoading: false,
        error: null,
    },
    extraReducers: {
        [fetchAll.pending]: handlePending,
        [fetchAll.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.item = action.payload;
        },
        [fetchAll.rejected]: handleRejected,

        [addContact.pending]: handlePending,
        [addContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.item.push(action.payload);
        },
        [addContact.rejected]: handleRejected,

        [deleteContact.pending]: handlePending,
        [deleteContact.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.item.findIndex(
            item => item.id === action.payload.id
        );
        state.item.splice(index, 1);
        },
        [deleteContact.rejected]: handleRejected,
    }
    
})

// const persistConfig = {
//     key: 'contacts-list',
//     storage,
//     whitelist: ['item'],
// };

// export const contactsReducer = persistReducer(persistConfig, contactsSlise.reducer);
export const contactsReducer = contactsSlise.reducer;
// export const { newContacts, deleteContacts } = contactsSlise.actions;
export const getItem = state => state.contacts.item;
// export const getFilter = state => state.contacts.filter;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;