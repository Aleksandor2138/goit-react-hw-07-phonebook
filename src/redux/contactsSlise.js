import { createSlice } from '@reduxjs/toolkit';
import { fetchAll, addContact, deleteContact } from './searchAPI';

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

export const contactsReducer = contactsSlise.reducer;
export const selectItem = state => state.contacts.item;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;