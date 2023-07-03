/** @type {import('@remix-run/dev').AppConfig} */
const config = {
  ignoredRouteFiles: ["**/.*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",
  serverModuleFormat: "esm",
  tailwind: true,
  future: {
    // v2_errorBoundary: true,
    v2_meta: true,
    // v2_normalizeFormMethod: true,
    // v2_routeConvention: true,
  },
};

export default config;