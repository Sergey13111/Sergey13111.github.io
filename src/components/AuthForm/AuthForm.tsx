import { TextField, Container, Button, Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { IUser } from '../../models/IUser';
import { authLogin, selectIsAuth } from '../../app/store/AuthSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const AuthForm: React.FC = () => {
	const isAuth = useAppSelector(selectIsAuth);
	const { user } = useAppSelector((state) => state.auth);
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const schema = yup
		.object({
			username: yup.string().required(),
			password: yup.string().required(),
		})
		.required();

	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
		defaultValues: {
			username: '',
			password: '',
		},
	});

	useEffect(() => {
		if (isAuth) {
			return navigate('/profile', { replace: true });
		}
	}, [isAuth, navigate]);

	console.log(user);

	const handleLogin = (values: IUser) => {
		console.log(values);

		const data = dispatch(authLogin(values));
		console.log(data);
		console.log('isAuth', isAuth);
		console.log('user', user);

		// if (!user) {
		// 	return alert('The username or password entered is incorrect!');
		// } else {
		// 	// window.localStorage.setItem('user', data.payload);
		// 	window.localStorage.setItem('user', JSON.stringify(data.payload));
		// }
	};

	return (
		<>
			<Container maxWidth='xs'>
				{/* <Typography variant='h1'>Authorization</Typography> */}

				<form onSubmit={handleSubmit(handleLogin)}>
					<Box p={3}>
						<Box my={2}>
							<Controller
								name='username'
								control={control}
								render={({ field }) => (
									<TextField
										{...field}
										label='username'
										error={Boolean(errors.username)}
										helperText={errors.username?.message}
									/>
								)}
							/>
						</Box>

						<Box my={2}>
							<Controller
								name='password'
								control={control}
								render={({ field }) => (
									<TextField
										{...field}
										label='password'
										error={Boolean(errors.password)}
										helperText={errors.password?.message}
									/>
								)}
							/>
						</Box>

						<Button
							variant='contained'
							type='submit'>
							log In
						</Button>
					</Box>
				</form>
			</Container>
		</>
	);
};

export default AuthForm;
