import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

import Layout from './components/Layout';

const routes = [
	{
		element: <Layout/>,
		children: [
			{path: '/', element: <HomePage/>},
			{path: '/about', element: <AboutPage/>},
		],
	},
];

export default routes;
