import { TextField, Container, Button, Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { IUser } from '../../models/IUser';
import { authLogin, selectIsAuth } from '../../app/store/AuthSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { existingUser } from '../../fakeBD';

const AuthForm: React.FC = () => {
	const isAuth = useAppSelector(selectIsAuth);
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

	const handleLogin = (values: IUser) => {
		const isUser = JSON.stringify(existingUser) === JSON.stringify(values);
		if (!isUser) {
			return alert('The username or password entered is incorrect!');
		} else {
			dispatch(authLogin(values));
		}
	};

	return (
		<>
			<Container maxWidth='xs'>
				<form onSubmit={handleSubmit(handleLogin)}>
					<Box
						p={3}
						sx={{ textAlign: 'center' }}>
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
							sx={{ mt: 2 }}
							variant='contained'
							color='inherit'
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
