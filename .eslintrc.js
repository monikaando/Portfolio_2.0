module.exports = {
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [".ts", ".tsx"],
      },
    },
  },
  parserOptions: {
    sourceType: "module",
  },
};
