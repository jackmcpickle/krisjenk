/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/cloudflare" />
/// <reference types="@cloudflare/workers-types" />

declare global {
    interface Env {
        NODE_ENV: 'development' | 'production';
    }
}

// Needed to make this file a module.
export {};
