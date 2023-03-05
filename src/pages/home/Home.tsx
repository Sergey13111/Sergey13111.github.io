import { Box, Container, Typography } from '@mui/material';

const Home: React.FC = () => {
	return (
		<Container sx={{ my: 12 }}>
			<Box
				sx={{
					textAlign: 'center',
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
				}}>
				<Typography
					variant='h1'
					sx={{ color: '#5d4037', fontSize: { xs: 36, sm: 56, md: 84 } }}>
					Welcome to the news portal
				</Typography>
			</Box>
		</Container>
	);
};

export default Home;
