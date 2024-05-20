import { configureStore } from '@reduxjs/toolkit';
import coaches from './Coaches/index.ts';
import sports from './Sports/index.ts';

export const store = configureStore({
    reducer: {
        coaches,
        sports,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
