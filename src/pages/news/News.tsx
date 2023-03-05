import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchPosts, resetPosts } from '../../app/store/PostsSlice';
import { Button, Typography, Container } from '@mui/material';
import { Loader } from '../../components/Loader';
import { CartPost } from '../../components/CartPost';

const News: React.FC = () => {
	const dispatch = useAppDispatch();
	const { status } = useAppSelector((state) => state.posts);
	const [page, setPage] = useState(1);
	const isLoading = status === 'loading';

	useEffect(() => {
		dispatch(resetPosts());
	}, [dispatch]);

	useEffect(() => {
		dispatch(fetchPosts(page));
	}, [dispatch, page]);

	const handleShowMore = () => {
		setPage((page) => (page += 1));
	};

	if (isLoading) {
		return <Loader />;
	}

	return (
		<>
			<Container sx={{ my: 12, textAlign: 'center' }}>
				<Typography
					sx={{ mb: 2, color: '#5d4037' }}
					variant='h3'>
					News
				</Typography>
				<CartPost />
				<Button
					size='small'
					color='primary'
					fullWidth={false}
					sx={{ mb: 5, mt: 3, fontSize: 18, color: '#5d4037' }}
					onClick={handleShowMore}>
					Show more...
				</Button>
			</Container>
		</>
	);
};

export default News;
