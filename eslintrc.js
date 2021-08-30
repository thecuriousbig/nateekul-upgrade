module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    extraFileExtensions: ['.svelte']
  },
  plugins: ['svelte3'],
  extends: ['eslint:recommended'],
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3'
    }
  ],
  rules: {},
  settings: {
    // ignore style tags in Svelte because of Tailwind CSS
    // See https://github.com/sveltejs/eslint-plugin-svelte3/issues/70
    'svelte3/ignore-styles': () => true
  },
  ignorePatterns: ['node_modules', 'public/build']
}
