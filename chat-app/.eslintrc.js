module.exports = {
  plugins: ["react-hooks"],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "@salesforce/eslint-config-lwc/recommended", //this fixes the "Parsing error: The keyword 'import' is reserved"
    "plugin:react/recommended",
    "standard",
    "plugin:react/jsx-runtime",
    "plugin:testing-library/react",
    "plugin:jest/all",
  ],
};
