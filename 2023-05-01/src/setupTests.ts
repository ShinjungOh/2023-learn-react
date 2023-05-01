import server from './mocks/server.ts';

// Establish API mocking before all tests.
beforeAll(() => {
	server.listen({onUnhandledRequest: 'error'});
});

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => {
	server.resetHandlers();
});

// Clean up after the tests are finished.
afterAll(() => {
	server.close();
});

Object.defineProperty(window, 'matchMedia', {
	writable: true,
	value: jest.fn().mockImplementation(query => ({
		matches: false,
		media: query,
		onchange: null,
		addListener: jest.fn(), // Deprecated
		removeListener: jest.fn(), // Deprecated
		addEventListener: jest.fn(),
		removeEventListener: jest.fn(),
		dispatchEvent: jest.fn(),
	})),
});
