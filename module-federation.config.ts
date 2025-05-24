export const mfConfig = {
  name: "host_test",
  exposes: {},
  remotes: {
    "test_remote": "test_remote@http://localhost:8081/remoteEntry.js"
  },
  shared: ["react", "react-dom"],
};
