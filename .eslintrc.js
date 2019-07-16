module.exports = {
    parser: 'babel-eslint', //eslint 会对 类的静态属性报错
    env: {
        es6: true,
        node: true,
        browser: true //有服务端渲染的页面写的时候需注意
    },
    globals: {
    },
    extends: 'eslint:recommended',
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true
        },
        ecmaVersion: 10, //为了使用  async、await
        sourceType: 'module'
    },
    plugins: ['react'],
    rules: {
        //禁止在正则表达式中使用控制字符
        'no-control-regex': 'off',
         //禁止使用debugger
        'no-debugger': 'error', 
        //有声明后未被使用的变量或参数
        'no-unused-vars': [
            'warn',
            { vars: 'all', args: 'after-used', ignoreRestSiblings: false }
        ],
        //禁用var
        "no-var": 2,
        'no-console': 0,
        'react/jsx-uses-vars': ['error'],
        'no-case-declarations': 'off',
        //转义字符串，模版中的非特殊字符串不会产生影响
        'no-useless-escape': 'off',
        eqeqeq: ['warn', 'allow-null'],
    }
}
