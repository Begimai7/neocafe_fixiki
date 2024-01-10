module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:import/recommended',
    ],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', 'import'],
    rules: {
        'prettier:check': 'npx prettier --check .',
        'prettier:fix': 'npx prettier --write .',
        'lint:check': 'npx eslint . --ext .js,.jsx',
        'lint:fix': 'npx eslint . --ext .js,.jsx --fix',
    },
}
