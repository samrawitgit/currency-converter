// eslint-disable-next-line no-undef
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "handlebarlabs",
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/jsx-props-no-spreading": 0,
        "react/jsx-curly-newline": 0,
        "react/prop-types": 0,
        "react/jsx-indent":0,
        "no-use-before-define": 0,
        "spaced-comment": 0,
        "react/jsx-indent-props": 0,
        "react/jsx-curly-spacing": 0,
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "globals": {
        "require": true
    },
};
