module.exports = {
  client: {
    service: {
      name: "storr-backend",
      url: "https://storr-backend.herokuapp.com/graphql"
    },
    // Files processed by the extension
    includes: ["src/**/*.vue", "src/**/*.js", "src/**/*.ts"]
  }
};
