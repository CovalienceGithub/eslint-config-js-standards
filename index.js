module.exports = {
  extends: ["./lib/shared.js"].map(require.resolve),
  settings: {
    "import/resolver": {
      node: {
        extensions: [".mjs", ".js", ".cjs", ".jsx"],
      },
    },
  },
};
