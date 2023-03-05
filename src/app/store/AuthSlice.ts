import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { existingUser } from '../../fakeBD';
import { IUser } from '../../models/IUser';
import { UserSliceState } from '../../models/UserSliceState';
import { RootState } from './store';

const initialState: UserSliceState = {
	user: null,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		authLogin: (state, action: PayloadAction<IUser>) => {
			const isAuth = JSON.stringify(existingUser) === JSON.stringify(action.payload);
			isAuth && (state.user = action.payload);
			window.localStorage.setItem('user', JSON.stringify(action.payload));
		},
		authMe: (state) => {},
		logout: (state) => {
			state.user = null;
		},
	},
});

export const selectIsAuth = (state: RootState) => Boolean(state.auth.user);

export const { logout, authLogin, authMe } = authSlice.actions;
export const authReducer = authSlice.reducer;
