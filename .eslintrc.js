module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/vue3-essential", "@vue/standard"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    semi: "off",
    quotes: "off",
    "space-before-function-paren": "off",
    "comma-dangle": "off",
    "eol-last": "off",
    "no-trailing-spaces": "off",
    "padded-blocks": "off",
    "no-multiple-empty-lines": "off"
  }
};
