import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './app/store/store';
import App from './App';
import './i18n';
import { Suspense } from 'react';
import { Loader } from './components/Loader';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
	<Provider store={store}>
		<Suspense fallback={<Loader />}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Suspense>
	</Provider>
);
