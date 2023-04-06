import 'whatwg-fetch';

import server from './mocks/server.ts';

beforeAll(() => {
	server.listen({onUnhandledRequest: 'error'});
});

afterEach(() => {
	server.resetHandlers();
});

afterAll(() => {
	server.close();
});
