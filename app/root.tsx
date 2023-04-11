import type { V2_MetaFunction } from '@remix-run/react';
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from '@remix-run/react';

import styles from './app.css';

export const meta: V2_MetaFunction = () => [
    { title: 'Kris Jenkinson - Cinematographer' },
    { charSet: 'utf-8' },
    { name: 'viewport', content: 'width=device-width,initial-scale=1' },
];

export function links() {
    return [{ rel: 'stylesheet', href: styles }];
}

export default function App() {
    return (
        <html
            lang="en"
            className="bg-stone-900"
        >
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                <Outlet />
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}
