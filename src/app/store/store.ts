import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { authReducer } from './AuthSlice';
import { postsReducer } from './PostsSlice';

export const store = configureStore({
	reducer: {
		posts: postsReducer,
		auth: authReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
