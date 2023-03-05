import { AppBar, Box, Typography } from '@mui/material';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { amber } from '@mui/material/colors';

const Footer: React.FC = () => {
	const peach = amber['100'];
	return (
		<>
			<AppBar sx={{ top: 'auto', bottom: 0, py: 2, background: peach }}>
				<Box>
					<Typography
						sx={{
							textAlign: 'center',
							display: 'flex',
							justifyContent: 'center',
							color: '#5d4037',
						}}>
						<CopyrightIcon
							fontSize='small'
							sx={{ mr: 0.5 }}
						/>
						2023 News portal
					</Typography>
				</Box>
			</AppBar>
		</>
	);
};

export default Footer;
