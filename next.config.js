// next.config.js
const { withFederatedSidecar } = require("@module-federation/nextjs-mf");

module.exports = withFederatedSidecar({
  name: "wmProvider",
  filename: "static/chunks/remoteEntry.js",
  exposes: {
    "./FedComp": "./components/FedComp.tsx",
  },
  shared: {
    react: {
      // Notice shared are NOT eager here.
      requiredVersion: false,
      singleton: true,
    },
  },
})({
  // your original next.config.js export
});

// module.exports = {
//   reactStrictMode: true,
// }
