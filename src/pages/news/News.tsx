import { useEffect, useState } from 'react';
// import { Loader } from '../../components/Loader';

import { fetchPosts, deletePost, resetPosts } from '../../app/store/PostsSlice';
// import styles from './Posts.module.css';
import {
	Button,
	CardActionArea,
	CardActions,
	CardContent,
	Card,
	Typography,
	Container,
	Grid,
} from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../app/hooks';

const News: React.FC = () => {
	const dispatch = useAppDispatch();
	const { posts, status } = useAppSelector((state) => state.posts);
	const [page, setPage] = useState(1);
	const isLoading = status === 'loading';

	useEffect(() => {
		dispatch(resetPosts());
	}, [dispatch]);

	useEffect(() => {
		dispatch(fetchPosts(page));
	}, [dispatch, page]);

	console.log(posts);

	const handleShowMore = () => {
		setPage((page) => (page += 1));
	};

	const handleDelete = (id: number) => () => {
		dispatch(deletePost(id));
		console.log(id);
	};

	if (isLoading) {
		return <Container>{/* <Loader /> */}</Container>;
	}

	return (
		<>
			<Container sx={{ mt: 10 }}>
				<Typography variant='h1'>News</Typography>;
				<Grid
					container
					spacing={{ xs: 2, md: 3 }}
					columns={{ xs: 4, sm: 8, md: 12 }}>
					{posts &&
						posts.map(({ id, title, body }) => (
							<Grid
								item
								xs={2}
								sm={4}
								md={4}
								key={id}>
								<Card sx={{ maxWidth: 345 }}>
									<CardActions>
										<Button
											size='small'
											color='primary'
											onClick={handleDelete(id)}>
											Dellete
										</Button>
									</CardActions>

									<CardActionArea>
										<CardContent>
											<Typography
												gutterBottom
												variant='h5'
												component='div'>
												{title}
											</Typography>
											<Typography
												variant='body2'
												color='text.secondary'>
												{body}
											</Typography>
										</CardContent>
									</CardActionArea>
								</Card>
							</Grid>
						))}
				</Grid>
				<Button
					size='small'
					color='primary'
					onClick={handleShowMore}>
					Show more
				</Button>
			</Container>
		</>
	);
};
export default News;
