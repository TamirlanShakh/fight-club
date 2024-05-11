import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CoachState, ICoach } from './types.ts';
import axios from 'axios';

const initialState: CoachState = {
    coaches: [],
    status: 'idle',
    error: null,
};

export const coachSlice = createSlice({
    name: 'Coach',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getCoachlist.fulfilled, (state, action) => {
            state.coaches = action.payload;
            state.status = 'succeeded';
        });
    },
});

// Action creators are generated for each case reducer function

export default coachSlice.reducer;

export const getCoachlist = createAsyncThunk('users/getCoachList', async () => {
    const coaches = (await axios.get('http://localhost:3001/coaches')).data;
    return coaches;
});
