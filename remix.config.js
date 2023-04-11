/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
    future: {
        v2_errorBoundary: true,
        v2_meta: true,
        v2_normalizeFormMethod: true,
        v2_routeConvention: true,
        unstable_tailwind: true,
    },
    publicPath: '/build/',
    serverBuildPath: 'build/index.js',
    server: './server.ts',
    devServerBroadcastDelay: 1000,
    ignoredRouteFiles: ['**/.*'],
    serverConditions: ['worker'],
    serverMainFields: ['browser', 'module', 'main'],
    serverModuleFormat: 'esm',
    serverPlatform: 'neutral',
    serverDependenciesToBundle: 'all',
    serverMinify: true,
};
