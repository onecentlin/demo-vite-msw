// Mocking responses
// https://mswjs.io/docs/basics/mocking-responses

import { HttpResponse, http } from 'msw';

export const handlers = [

    http.get('/api/hello', () => {
        return new Response('Hello, World!');
    }),

    http.get('/api/user', () => {
        return HttpResponse.json({
                username: 'admin',
                email: 'admin@test.com'
            });
    }),
]
