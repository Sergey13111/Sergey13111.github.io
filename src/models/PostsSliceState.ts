import { IPost } from "./IPost";

export interface PostsSliceState {
	posts: IPost[] | [];
	status: 'loading' | 'loaded' | 'error';
}