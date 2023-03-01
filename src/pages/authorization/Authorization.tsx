import { Typography, Container, Box } from '@mui/material';
import { AuthForm } from '../../components/AuthForm';

const Authorization: React.FC = () => {
	return (
		<>
			<Container>
				<Typography variant='h1'>Authorization</Typography>
				<Box>
					<AuthForm />
				</Box>
			</Container>
		</>
	);
};

export default Authorization;
