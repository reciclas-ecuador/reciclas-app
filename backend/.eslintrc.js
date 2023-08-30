module.exports = {
    "env": {
        "es2021": true,
        "node": true
    },
    "extends": "standard-with-typescript",
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "./tsconfig.json",
        "tsconfigRootDir": __dirname,
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "ignorePatterns": [
      "node_modules/",
      "dist/",
      ".eslintrc.js"
    ],
    "rules": {
        // "no-tabs": ["error", { "allowIndentationTabs": true }],
        "@typescript-eslint/space-before-function-paren": "off",
        "@typescript-eslint/no-misused-promises": "off"
    }
}
