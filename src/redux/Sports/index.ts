import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ISport, SportState } from './types.ts';
import axios from 'axios';

const initialState: SportState = {
    sports: [],
    status: 'loading',
    error: null,
};

export const sportSlice = createSlice({
    name: 'Sport',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getSportList.fulfilled, (state, action) => {
            state.sports = action.payload;
            state.status = 'succeeded';
        });
    },
});

// Action creators are generated for each case reducer function

export default sportSlice.reducer;

export const getSportList = createAsyncThunk('users/getSportList', async () => {
    const sports = (await axios.get('http://localhost:3001/sports')).data;
    return sports;
});
