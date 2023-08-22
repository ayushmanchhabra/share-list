module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended'
    ],
    parserOptions: {
        ecmaVersion: 2023,
        sourceType: "module",
    },
    rules: {
        // https://github.com/nightwatchjs/nightwatch/issues/792
        "no-unused-vars": "off"
    }
}