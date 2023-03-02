import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { existingUser } from '../../fakeBD';
import { IUser } from '../../models/IUser';
import { UserSliceState } from '../../models/UserSliceState';
import { RootState } from './store';

// export interface UserSliceState {
// 	user: IUser | null;
// }

const initialState: UserSliceState = {
	user: null,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		authLogin: (state, action: PayloadAction<IUser>) => {
			// const existingUser: IUser = {
			// 	username: 'admin',
			// 	password: '12345',
			// };

			const isAuth = JSON.stringify(existingUser) === JSON.stringify(action.payload);
			if (!isAuth) {
				return alert('The username or password entered is incorrect!');
			} else {
				// window.localStorage.setItem('user', data.payload);
				isAuth && (state.user = action.payload);

				window.localStorage.setItem('user', JSON.stringify(action.payload));
			}
		},
		authMe: (state) => {
			// console.log(Boolean(state.user));
			// return state.user;
		},
		logout: (state) => {
			state.user = null;
		},
	},
});

export const selectIsAuth = (state: RootState) => Boolean(state.auth.user);

export const { logout, authLogin, authMe } = authSlice.actions;
export const authReducer = authSlice.reducer;
