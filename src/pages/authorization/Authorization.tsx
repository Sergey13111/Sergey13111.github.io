import { Typography, Container, Box } from '@mui/material';
import { AuthForm } from '../../components/AuthForm';

const Authorization: React.FC = () => {
	return (
		<>
			<Container sx={{ my: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				<Typography
					variant='h3'
					sx={{ mb: 2, color: '#5d4037' }}>
					Authorization
				</Typography>
				<Box>
					<AuthForm />
				</Box>
			</Container>
		</>
	);
};

export default Authorization;
