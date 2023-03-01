import { useAppDispatch } from '../src/app/hooks';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Routers from './components/Routers';
import { authMe } from './app/store/AuthSlice';
import { useEffect } from 'react';

const App: React.FC = () => {
	const dispatch = useAppDispatch();
	// const { user } = useAppSelector((state) => state.auth);

	useEffect(() => {
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
