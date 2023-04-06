import {setupServer} from 'msw/node';

// Import {handlers} from './handlers';

const handlers = [];

// This configures a request mocking server with the given request handlers.
const server = setupServer(...handlers);

export default server;
