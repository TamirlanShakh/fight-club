import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { SendFormState, ISendForm } from './types.ts';
import axios from 'axios';

const initialState: SendFormState = {
    sendforms: [],
    status: 'idle',
    error: null,
};

export const coachSlice = createSlice({
    name: 'Sendform',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(postSendForms.fulfilled, (state, action) => {
            state.sendforms = action.payload;
            state.status = 'succeeded';
        });
    },
});

// Action creators are generated for each case reducer function

export default coachSlice.reducer;

export const postSendForms = createAsyncThunk('users/postSendForms', async formValues => {
    const sendforms = (await axios.post('http://localhost:3001/sendforms', formValues)).data;
    return sendforms;
});
