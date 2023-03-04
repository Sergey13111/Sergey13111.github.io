// import { useEffect, useRef } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import {
	AppBar,
	Box,
	CssBaseline,
	Divider,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Toolbar,
	Typography,
	Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { amber } from '@mui/material/colors';
import styles from './Header.module.css';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { logout, selectIsAuth } from '../../app/store/AuthSlice';
import { useTranslation } from 'react-i18next';
import ChangeLngsButton from '../ChangeLngsButton/ChangeLngsButton';

// import {  logout } from '../../store/authSlice';
// import styles from './Header.module.css';

// interface Ilanguage {
// 	nativeName: string;
// }

// interface ILngs {
// 	en: Ilanguage;
// 	ua: Ilanguage;
// }

// const lngs: ILngs = {
// 	en: { nativeName: 'English' },
// 	ua: { nativeName: 'Ukraine' },
// };
const Header = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const isAuth = useAppSelector(selectIsAuth);

	const { t } = useTranslation();
	console.log(isAuth);

	const peach = amber['100'];
	const drawerWidth = 240;

	const navItems = isAuth
		? [
				<NavLink
					to='/'
					className={styles.NavLink}>
					{t('menu.home')}
				</NavLink>,
				<NavLink
					to='news'
					className={styles.NavLink}>
					{t('menu.news')}
				</NavLink>,
				<NavLink
					to='profile'
					className={styles.NavLink}>
					{t('menu.profile')}
				</NavLink>,
		  ]
		: [
				<NavLink
					to='/'
					className={styles.NavLink}>
					Home
				</NavLink>,
				<NavLink
					to='news'
					className={styles.NavLink}>
					{t('menu.news')}
				</NavLink>,
				<NavLink
					to='authorization'
					className={styles.NavLink}>
					{t('menu.authorization')}
				</NavLink>,
		  ];

	const handleLogout = () => {
		if (window.confirm('Do you really want to leave?')) {
			dispatch(logout());
			localStorage.removeItem('user');
		}

		navigate('/');
	};

	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	const drawer = (
		<Box
			onClick={handleDrawerToggle}
			sx={{ textAlign: 'center' }}>
			<Link
				to='/'
				className={styles.NavLink}>
				<Typography
					variant='h6'
					sx={{ my: 2 }}>
					NewsPortal
				</Typography>
			</Link>

			<Divider />
			<List>
				{navItems.map((item, index) => (
					<ListItem
						key={index}
						disablePadding>
						<ListItemButton sx={{ textAlign: 'center' }}>
							<ListItemText primary={item} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar
				// component='nav'
				sx={{ background: peach }}>
				<Toolbar
					sx={{
						justifyContent: 'space-between',
						textDecoration: 'none',
					}}>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						edge='start'
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: 'none' } }}>
						<MenuIcon />
					</IconButton>
					<Link
						to='/'
						className={styles.NavLink}>
						<Typography
							variant='h6'
							component='div'
							sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
							NewsPortal!!
						</Typography>
					</Link>

					<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
						{navItems.map((item, index) => (
							<Button key={index}>{item}</Button>
						))}

						{isAuth && (
							<Button
								onClick={handleLogout}
								sx={{ color: '#fff' }}>
								{t('menu.logout')}
							</Button>
						)}
						<ChangeLngsButton />
					</Box>
				</Toolbar>
			</AppBar>
			<Box component='nav'>
				<Drawer
					variant='temporary'
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true,
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
					}}>
					{drawer}
				</Drawer>
			</Box>
		</Box>
	);
};
export default Header;
