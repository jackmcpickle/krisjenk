import { createEventHandler } from '@remix-run/cloudflare-workers';
import * as build from '@remix-run/dev/server-build';

addEventListener(
    'fetch',
    createEventHandler({ build, mode: process.env.NODE_ENV }),
);
// export default {
//     async fetch(
//         request: Request,
//         env: Env,
//         executionContext: ExecutionContext,
//     ): Promise<Response> {
//         const requestHandler = createRequestHandler({
//             build,
//             mode: env.NODE_ENV,
//         });
//         const waitUntil = (p: Promise<Response>) =>
//             executionContext.waitUntil(p);
//         const passThroughOnException = () =>
//             executionContext.passThroughOnException();

//         return requestHandler({
//             request,
//             respondWith: p => p,
//             waitUntil,
//             passThroughOnException,
//         });
//     },
// };
