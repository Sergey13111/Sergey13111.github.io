import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/home';
import { News } from '../pages/news';
import { NotFound } from '../pages/notFound';
import { Authorization } from '../pages/authorization';
import { Profile } from '../pages/profile';

const Routers = () => {
	return (
		<Routes>
			<Route
				path='/'
				element={<Home />}
			/>
			<Route
				path='authorization'
				element={<Authorization />}
			/>
			<Route
				path='news'
				element={<News />}
			/>
			<Route
				path='profile'
				element={<Profile />}
			/>
			<Route
				path='*'
				element={<NotFound />}
			/>
		</Routes>
	);
};

export default Routers;
