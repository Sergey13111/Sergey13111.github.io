import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { Box, Card, CardContent, Container, Typography } from '@mui/material';

const Profile: React.FC = () => {
	const navigate = useNavigate();
	const { user } = useAppSelector((state) => state.auth);

	useEffect(() => {
		if (!user) {
			return navigate('/', { replace: true });
		}
	}, [navigate, user]);

	return (
		<>
			<Container sx={{ my: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				<Typography
					variant='h3'
					sx={{ mb: 2, color: '#5d4037' }}>
					Profile
				</Typography>
				{user && (
					<Card sx={{ maxWidth: 600 }}>
						<CardContent>
							<Box sx={{ display: 'flex' }}>
								<Typography
									sx={{ fontSize: 24, mr: 0.5, fontWeight: 500 }}
									color='text.secondary'>
									Name:
								</Typography>
								<Typography
									sx={{ fontSize: 24 }}
									color='text.secondary'>
									{user.username}
								</Typography>
							</Box>
						</CardContent>
					</Card>
				)}
			</Container>
		</>
	);
};

export default Profile;
