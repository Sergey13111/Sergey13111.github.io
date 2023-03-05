import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../helpers/axios';
import { IPost } from '../../models/IPost';
import { PostsSliceState } from '../../models/PostsSliceState';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (page: number, thunkAPI) => {
	const params = {
		_page: page,
		_limit: 9,
	};
	try {
		const data: IPost[] = await axios.get('/posts', { params });
		return data;
	} catch (error: any) {
		return alert(error.message);
	}
});

export const deletePost = createAsyncThunk('posts/deletePost', async (id: number, { dispatch }) => {
	try {
		const data: IPost[] = await axios.delete(`/posts/${id}`);
		dispatch(removePost(id));
		return data;
	} catch (error: any) {
		return alert(error.message);
	}
});

const initialState: PostsSliceState = {
	posts: [],
	status: 'loading',
};

const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		removePost(state, action) {
			state.posts = state.posts!.filter((post) => post.id !== action.payload);
		},
		resetPosts(state): void {
			state.posts = [];
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchPosts.pending, (state) => {
			state.status = 'loading';
		});
		builder.addCase(fetchPosts.fulfilled, (state, action) => {
			state.posts = [...state.posts, ...action.payload!];
			state.status = 'loaded';
		});
		builder.addCase(fetchPosts.rejected, (state) => {
			state.posts = [];
			state.status = 'error';
		});
	},
});

export const { removePost, resetPosts } = postsSlice.actions;
export const postsReducer = postsSlice.reducer;
