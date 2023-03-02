import { useAppDispatch } from '../src/app/hooks';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Routers from './components/Routers';
import { authLogin, authMe } from './app/store/AuthSlice';
import { useEffect } from 'react';

const App: React.FC = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		const userData = JSON.parse(localStorage.getItem('user')!);
		console.log(userData);
		dispatch(authLogin(userData));
		dispatch(authMe());
	}, [dispatch]);

	return (
		<>
			<Header />
			<Routers />
			<Footer />
		</>
	);
};

export default App;
