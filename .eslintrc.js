module.exports = {
  "env": {
    "es6": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "rules": {
    "comma-dangle": [
      "error",
      "always-multiline"
    ],
    "indent": [
      "error",
      2
    ],
    "quote-props": ["error", "consistent-as-needed"],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "never"
    ]
  }
};
