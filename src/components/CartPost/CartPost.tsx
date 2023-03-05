import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
	CardActionArea,
	CardActions,
	CardContent,
	Card,
	Typography,
	Grid,
	IconButton,
} from '@mui/material';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import { deletePost } from '../../app/store/PostsSlice';

const CartPost: React.FC = () => {
	const dispatch = useAppDispatch();
	const { posts } = useAppSelector((state) => state.posts);

	const handleDelete = (id: number) => () => {
		dispatch(deletePost(id));
	};
	return (
		<Grid
			container
			spacing={{ xs: 2, md: 3 }}
			columns={12}>
			{posts &&
				posts.map(({ id, title, body }) => (
					<Grid
						item
						xs={12}
						sm={6}
						md={4}
						key={id}>
						<Card sx={{ backgroundColor: '#fff9d1c9' }}>
							<CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
								<IconButton
									color='error'
									aria-label='upload picture'
									component='label'
									onClick={handleDelete(id)}>
									<ClearRoundedIcon />
								</IconButton>
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
										color='text.secondary'
										paragraph>
										{body}
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Grid>
				))}
		</Grid>
	);
};

export default CartPost;
