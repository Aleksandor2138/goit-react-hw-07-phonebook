import { createSlice } from '@reduxjs/toolkit';

const filterSlise = createSlice({
    name: "filters",
    initialState: {
        filter:'',
    },
    reducers: {
        filterValue(state, action) {
            state.filter = action.payload;
        },
    }
});
export const { filterValue } = filterSlise.actions;
export const selectFilter = state => state.filters.filter;
export const filtersReducer = filterSlise.reducer;