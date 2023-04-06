import {rest} from 'msw';
import fixtures from '../../fixtures';

const BASE_URL = 'http://localhost:3000';

const handlers = [
	rest.get(`${BASE_URL}/products`, async (req, res, ctx) => {
		const {products} = fixtures;
		// Const products = [
		// 	{
		// 		category: 'Fruits', price: '$1', stocked: true, name: 'Apple',
		// 	},
		// ];

		return res(
			ctx.status(200),
			ctx.json({products}),
		);
	}),
];

export default handlers;
