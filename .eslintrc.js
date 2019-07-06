module.exports = {
    parser: "babel-eslint",
    env: {
        browser: true,
        es6: true,
        node: true
    },
    extends: [
        'standard',
        'eslint:recommended',
        //'plugin:react/recommended',
        "plugin:prettier/recommended"
    ],
    parserOptions: {
        sourceType: 'module',
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true,
            "arrowFunctions": true,
            "classes": true,
            "modules": true,
            "defaultParams": true
        },
        "ecmaVersion": 8,
    },
    plugins: [
        'react',
     ],
    rules: {
        "prettier/prettier": "error",
        // allow async-await
        'generator-star-spacing': 'off',
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        //强制使用单引号
        quotes: ['error', 'single'],
        //强制不使用分号结尾
        semi: ['error', 'never'],
        // 不允许使用var变量
        'no-var': 2,
        // 禁止直接修改 this.state
        'react/no-direct-mutation-state': 'error',
        "no-unused-vars": 'error',
        'indent': 'off',
        'react/jsx-indent': [
            'error',
            2
        ],
    },

}