import { Box, CircularProgress } from '@mui/material';

const Loader: React.FC = () => {
	return (
		<Box sx={{ display: 'flex', justifyContent: 'center', my: 20 }}>
			<CircularProgress color='inherit' />
		</Box>
	);
};

export default Loader;
